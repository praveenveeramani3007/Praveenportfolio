# Portfolio - React Migration

This project has been migrated from a static HTML/CSS/JS site to a modern **React** application using **Vite**.

## Project Structure

- `src/`: contains the React source code.
  - `components/`: Reusable components like `Layout.jsx` (Navbar, Footer, Background).
  - `pages/`: Page components corresponding to the original HTML files (`Home`, `About`, `Skills`, `Projects`, `Education`, `Resume`, `Contact`).
  - `index.css`: Global styles ported from `styles.css`.
  - `App.jsx`: Routing configuration.
  - `main.jsx`: Application entry point.
- `public/`: Static assets (images, PDFs).
- `legacy_backup/`: Contains the original static files for reference.

## Getting Started

1.  **Install Dependencies**:
    Open the terminal in this directory and run:
    ```bash
    npm install
    ```

    *If you encounter permission errors, try deleting `node_modules` and running `npm install` again, or run the command prompt as Administrator.*

2.  **Run Development Server**:
    Start the local development server:
    ```bash
    npm run dev
    ```
    Open your browser to the URL shown (usually `http://localhost:5173`).

3.  **Build for Production**:
    To create a production build:
    ```bash
    npm run build
    ```
    The output will be in the `dist/` folder.

## Troubleshooting

- **Vite not found**: Run `npm install` again to ensure all dependencies are installed.
- **File permission errors**: Ensure no other process is using the files (e.g., close other terminals or editors) and try running commands with administrative privileges.
