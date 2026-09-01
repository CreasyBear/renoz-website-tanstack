#!/usr/bin/env python3
"""Calculate acquisition economics and optional spend pacing."""

import argparse
import json
import sys


def main():
    parser = argparse.ArgumentParser(description="Campaign economics and pacing")
    parser.add_argument("--budget", type=float, required=True)
    parser.add_argument("--days", type=int, required=True)
    parser.add_argument("--target-qualified-leads", type=float)
    parser.add_argument("--contribution-per-sale", type=float)
    parser.add_argument("--qualified-lead-to-sale-rate", type=float)
    parser.add_argument("--acquisition-share", type=float)
    parser.add_argument("--days-elapsed", type=int)
    parser.add_argument("--spend-to-date", type=float)
    args = parser.parse_args()

    if args.budget <= 0 or args.days <= 0:
        parser.error("budget and days must be greater than zero")
    if args.target_qualified_leads is not None and args.target_qualified_leads <= 0:
        parser.error("target-qualified-leads must be greater than zero")

    economics = [args.contribution_per_sale, args.qualified_lead_to_sale_rate, args.acquisition_share]
    if any(value is not None for value in economics) and not all(value is not None for value in economics):
        parser.error("provide contribution-per-sale, qualified-lead-to-sale-rate, and acquisition-share together")
    if args.qualified_lead_to_sale_rate is not None and not 0 < args.qualified_lead_to_sale_rate <= 1:
        parser.error("qualified-lead-to-sale-rate must be in (0, 1]")
    if args.acquisition_share is not None and not 0 < args.acquisition_share <= 1:
        parser.error("acquisition-share must be in (0, 1]")

    pacing = [args.days_elapsed, args.spend_to_date]
    if any(value is not None for value in pacing) and not all(value is not None for value in pacing):
        parser.error("provide days-elapsed and spend-to-date together")
    if args.days_elapsed is not None and not 1 <= args.days_elapsed <= args.days:
        parser.error("days-elapsed must be between 1 and days")
    if args.spend_to_date is not None and args.spend_to_date < 0:
        parser.error("spend-to-date cannot be negative")

    output = {
        "currency": "AUD",
        "budget": round(args.budget, 2),
        "days": args.days,
        "daily_budget": round(args.budget / args.days, 2),
    }

    if args.target_qualified_leads is not None:
        output["target_qualified_leads"] = args.target_qualified_leads
        output["implied_budget_per_qualified_lead"] = round(args.budget / args.target_qualified_leads, 2)

    if all(value is not None for value in economics):
        allowable_cpql = args.contribution_per_sale * args.qualified_lead_to_sale_rate * args.acquisition_share
        output["economics"] = {
            "contribution_per_sale": round(args.contribution_per_sale, 2),
            "qualified_lead_to_sale_rate": args.qualified_lead_to_sale_rate,
            "acquisition_share": args.acquisition_share,
            "allowable_cost_per_qualified_lead": round(allowable_cpql, 2),
            "qualified_leads_affordable_at_budget": round(args.budget / allowable_cpql, 2),
        }
        if args.target_qualified_leads is not None:
            output["economics"]["target_feasible_at_inputs"] = args.budget / args.target_qualified_leads <= allowable_cpql

    if args.days_elapsed is not None:
        expected = args.budget * args.days_elapsed / args.days
        remaining_days = args.days - args.days_elapsed
        daily_average = args.spend_to_date / args.days_elapsed
        output["pacing"] = {
            "days_elapsed": args.days_elapsed,
            "spend_to_date": round(args.spend_to_date, 2),
            "expected_spend_to_date": round(expected, 2),
            "pace_percent": round(args.spend_to_date / expected * 100, 1),
            "remaining_budget": round(args.budget - args.spend_to_date, 2),
            "projected_total_at_current_pace": round(daily_average * args.days, 2),
            "required_daily_spend": round((args.budget - args.spend_to_date) / remaining_days, 2) if remaining_days else 0,
        }

    json.dump(output, sys.stdout, indent=2)
    print()


if __name__ == "__main__":
    main()
