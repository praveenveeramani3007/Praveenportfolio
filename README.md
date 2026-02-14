# Portfolio Project

This is a modern React portfolio built with Vite.

## 🚀 How to Run Locally

This project uses **Vite** and **React**, which means it **cannot** be run by simply opening `index.html` or using the "Live Server" extension in VS Code.

Instead, follow these steps:

1.  **Open Terminal**: View -> Terminal in VS Code.
2.  **Install Dependencies** (if not done):
    ```bash
    npm install
    ```
3.  **Start Development Server**:
    ```bash
    npm run dev
    ```
4.  **Open in Browser**:
    -   Click the link shown in the terminal (usually `http://localhost:5173/`).

## 🛠️ Why is "Live Server" Blank?
Standard "Live Server" only serves static HTML/CSS/JS files. Since this project uses React (JSX) and modern imports, the browser cannot understand the code until Vite processes it. `npm run dev` starts the Vite server which handles this processing for you.

## 📦 Deployment
To deploy to GitHub Pages:
1.  Run `npm run build`
2.  Deploy the `dist` folder.
