#!/usr/bin/env python3
"""Build one or many stable campaign URLs without dependencies."""

import argparse
import csv
import json
import re
import sys
from pathlib import Path
from urllib.parse import parse_qsl, urlencode, urlparse, urlunparse


def clean(value):
    value = re.sub(r"\s+", "_", value.strip().lower())
    return re.sub(r"[^a-z0-9_.-]", "", value)


def build(row):
    base_url = row.get("base_url", "").strip()
    parsed = urlparse(base_url)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise ValueError(f"invalid base_url: {base_url}")
    params = dict(parse_qsl(parsed.query, keep_blank_values=True))
    for key in ["source", "medium", "campaign", "content", "term"]:
        value = clean(row.get(key, ""))
        if value:
            params[f"utm_{key}"] = value
    if not all(params.get(key) for key in ["utm_source", "utm_medium", "utm_campaign"]):
        raise ValueError("source, medium, and campaign are required")
    return urlunparse(parsed._replace(query=urlencode(params)))


def main():
    parser = argparse.ArgumentParser(description="Generate campaign UTMs")
    parser.add_argument("--base-url")
    parser.add_argument("--source")
    parser.add_argument("--medium")
    parser.add_argument("--campaign")
    parser.add_argument("--content", default="")
    parser.add_argument("--term", default="")
    parser.add_argument("--csv", type=Path)
    args = parser.parse_args()

    if args.csv:
        with args.csv.open(newline="", encoding="utf-8") as handle:
            rows = list(csv.DictReader(handle))
        output = [{**row, "tagged_url": build(row)} for row in rows]
    else:
        if not all([args.base_url, args.source, args.medium, args.campaign]):
            parser.error("single mode requires base-url, source, medium, and campaign")
        row = vars(args)
        output = {**{key: value for key, value in row.items() if key != "csv"}, "tagged_url": build(row)}

    json.dump(output, sys.stdout, indent=2)
    print()


if __name__ == "__main__":
    main()
