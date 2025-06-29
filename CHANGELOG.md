# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Recent Changes

- **2025-06-25** - Auto-commit: Save local changes
  - Updated font files and image assets
  - Modified file permissions for various AFM font files

- **2017-02-05** - Documentation restructuring
  - Moved demo files to `docs/` directory
  - Added pre-built `bundle.js` for browser usage
  - Generated HTML documentation files (annotations, getting started, images, text, vector)
  - Added JavaScript libraries for syntax highlighting and scrolling
  - Restructured documentation assets to `srcdocs/` directory
  - Added CSS styling for documentation (github.css, index.css)
  - Created documentation images (img/0.png through img/16.png)

### Previous Notable Changes

- **2016-12-10** - Enhanced documentation for standard fonts (PR #579)
  - Improved documentation listing all 14 standard PDF fonts
  - Added details about font availability and licensing

- **Various dates** - Core improvements
  - Moved number formatter to PDFObject class (PR #563)
  - Fixed issues with opacity gradients (PR #590)
  - Updated line wrapping behavior
  - Added widthOfString, heightOfString, and list functionality
  - Fixed whitespace handling and gradient-related issues

## Known Issues

- Variable fonts support is not yet implemented (based on repository name)
- TODO items found in codebase:
  - Break text by grapheme clusters instead of JS string characters (lib/line_wrapper.coffee:68)
  - Save/restore colorspace and styles optimization (lib/mixins/vector.coffee:14)

## Future Plans

As mentioned in README.md:
- Pattern fills
- Outlines
- PDF Security
- Higher level APIs for creating tables and laying out content
- More performance optimizations