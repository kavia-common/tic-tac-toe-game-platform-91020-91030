Place any static assets that must be referenced by absolute URL paths (e.g., /assets/...) in this folder structure.

For example:
- public/assets/board-52-9.css  -> referenced as /assets/board-52-9.css
- public/assets/board-52-9.js   -> referenced as /assets/board-52-9.js
- public/assets/board-52-9.html -> developer reference only (markup copied into React), not automatically used by CRA
- public/assets/figmaimages/*   -> referenced as /assets/figmaimages/...

Create React App serves files from public/ at the site root. If a file is missing, the dev server may return index.html, which can cause "Unexpected token '<'" when the response is parsed as JS or CSS. Ensure files exist under public/ with the exact path and filename.
