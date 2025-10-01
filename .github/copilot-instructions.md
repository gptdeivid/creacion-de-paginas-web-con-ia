# Copilot Instructions for AI Agents

## Project Overview
This is a single-page personal landing site built with vanilla HTML, CSS, and JavaScript. It is designed for learning and practicing modern web development concepts, with a focus on clean structure and interactive UI elements.

## Key Components & Structure
- `index.html`: Main entry point. Contains all sections: header, hero (with typing animation), about, portfolio (with modals), contact form, and footer.
- `styles.css`: Handles all layout and responsive design using CSS Grid and Flexbox. Mobile-first approach.
- `script.js`: Adds interactivity:
  - Typing animation in the hero section
  - Modal logic for portfolio projects
  - Simulated contact form submission (shows success message, no backend)

## Patterns & Conventions
- All UI logic is in `script.js`. No frameworks or build tools are used.
- Modals are implemented by toggling CSS classes and listening for click events on overlays and close buttons.
- The contact form uses `preventDefault()` and displays a message in the DOM instead of sending data.
- Responsive design is achieved with media queries and flexible layouts.
- No external dependencies or package managers are used.


## Developer Workflow
- Open `index.html` directly in a browser to view and test changes.
- No build, test, or deployment scripts are present or required.
- For debugging, use browser dev tools (console, inspector).
- **Al finalizar cualquier cambio, realiza commit y push de todos los archivos modificados.**
  - Usa un mensaje de commit descriptivo que explique claramente los cambios realizados.
  - Ejemplo de comandos:
    ```sh
    git add .
    git commit -m "Descripción clara de los cambios"
    git push
    ```

## Project-Specific Guidance
- Keep all logic in the three main files; do not introduce new dependencies or split code unless refactoring for clarity.
- When adding new sections or features, follow the semantic HTML structure and match the CSS/JS patterns already present.
- Use clear, descriptive class and ID names consistent with the existing codebase.
- For new interactivity, prefer unobtrusive JS (add event listeners after DOMContentLoaded).

## Example: Adding a New Portfolio Project
1. Add a new project card in the portfolio section of `index.html`.
2. Update `script.js` to handle modal logic for the new project.
3. Style the new card and modal in `styles.css`.

## References
- See `README.md` for a summary of features and usage.
- All code is in the project root: `index.html`, `styles.css`, `script.js`.

---
For any AI agent: maintain the simple, dependency-free structure and follow the patterns in the existing files for all enhancements.
