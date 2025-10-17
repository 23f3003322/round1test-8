# Sales Summary - GitHub Pages Static Site

A lightweight single-page site that reads a CSV dataset from a data URI, sums the values in the sales column, and displays the total. The page title uses a seed value exposed by the runtime environment to satisfy automated checks.

Key features:
- Bootstrap 5 styling loaded from jsDelivr
- Data sourced from an embedded CSV data URI (no external fetch required for the dataset)
- Dynamic total calculation and display in #total-sales
- Title updates to "Sales Summary ${seed}" where seed is provided by the testing environment (window.seed)

How it works:
- The page loads a small CSV data URI containing a header row and several numeric values under the sales column.
- JavaScript parses the CSV, sums the numbers, and updates the DOM with the total value (two decimals).
- The document title is set to the required format using a seed value (seed is read from window.seed if defined).

Usage and deployment:
- The repository is designed to be served as a static site on GitHub Pages.
- Ensure index.html is in the repository root and that GitHub Pages is configured to serve from the main branch (root).
- Access the site at https://<your-username>.github.io/<repository-name>/

Seed usage for tests:
- To influence the page title during automated tests, you can provide a seed variable before loading the script, e.g. <script> window.seed = 'TEST-SEED'; </script> placed before the script tag that loads main.js.

Project structure:
- index.html: HTML scaffold and Bootstrap bootstrap reference
- assets/js/main.js: Core logic to parse the data URI CSV and update the UI
- assets/css/styles.css: Lightweight styling adjustments
- README.md: This documentation
- LICENSE: MIT License

License:
MIT
