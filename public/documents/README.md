# RENOZ Document Storage

This directory contains all downloadable documents for the RENOZ Energy website.

## Directory Structure

```
documents/
├── technical/       # Technical specifications and detailed product documentation
├── warranty/        # Warranty information and registration forms
├── installation/    # Installation guides and checklists for installers
├── guides/          # User guides and manuals for end-users
└── datasheets/      # Product datasheets and quick reference materials
```

## Document Guidelines

### Naming Convention

Use the following naming format for documents:

- `renoz-[product]-[document-type].pdf`
- Example: `renoz-home-battery-installation-guide.pdf`

### Document Format

- Preferred format: PDF
- Resolution: 300 DPI minimum
- File size: Optimize for web (ideally under 5MB)
- Fonts: Embed all fonts
- Accessibility: Ensure PDFs are screen-reader friendly with proper tags

### PDF Metadata Requirements

All PDFs must include the following metadata:

- **Title**: Same as the document title in the store
- **Author**: "RENOZ Energy"
- **Subject**: Brief description of document purpose
- **Keywords**: 5-7 relevant keywords (include "RENOZ", product name, document type)
- **Language**: "en-AU"
- **PDF/A Compliance**: When possible, save as PDF/A-1b for archiving
- **Security Settings**: No password protection, allow printing and text extraction

You can set this metadata in Adobe Acrobat (File > Properties) or other PDF creation tools.

### Adding New Documents

1. Place the document in the appropriate directory
2. Update the document metadata in `src/content/store/documents.ts`
3. Follow the existing pattern, including:
   - Unique ID
   - Descriptive title
   - Brief description
   - File size
   - File type
   - Download URL (path relative to public directory)
   - Category (use the DocumentCategory enum)
   - Creation date
   - Update date
   - Version number

### SEO Considerations

- **Filenames**: Use descriptive, keyword-rich filenames with hyphens
- **Document Titles**: Front-load with important keywords
- **Descriptions**: Include primary and secondary keywords naturally
- **Link Text**: When linking to documents, use descriptive anchor text
- **Schema.org**: Schema markup is automatically added via `getTechArticleSchema()`
- **Canonical URLs**: Documents have canonical URLs through the resources page
- **PDF Optimization**: Run PDFs through an optimizer before uploading

### Security Considerations

- Do not include sensitive internal information in public documents
- All documents should be approved by the marketing and legal departments before publishing
- Consider adding document tracking and analytics where appropriate
- Scrub metadata of personal information before publishing

## Document Updates

When updating a document:

1. Keep the same filename to preserve existing links
2. Update the metadata in `src/content/store/documents.ts` with the new:
   - File size
   - Update date
   - Version number
   - Description (if needed)
3. Update the PDF's internal metadata to match

## Contact

For questions about document management, contact the web development team.
