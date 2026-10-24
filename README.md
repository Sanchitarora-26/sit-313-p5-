# SIT313 Secure Frontend Applications — C1 New Post Page

This project extends the existing DEV@Deakin/Chitkara React + Vite website with a New Post page.

## Run locally

1. Install Node.js (LTS) if it is not installed.
2. Open this folder in VS Code.
3. In the terminal run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (normally `http://localhost:5173`).
5. Select **New Post** in the navigation or visit `/post`.

## C1 features

- React `useState` manages the selected post type and form values.
- Conditional rendering switches between the Question form and Article form.
- Validation checks title length, question/abstract/article content, tag count, tag length, and duplicate tags.
- Pressing **Post** validates the form and displays a browser popup. This task intentionally does not save a post to a backend.
- Responsive styles are included for desktop and mobile layouts.

## Before submission

- Create a GitLab project named **Task C1** (or the exact project name specified by your tutor) with **Internal** visibility.
- Commit all source files and public resources.
- Do **not** commit `node_modules`, `dist`, `.env`, or secret keys.
- Add screenshots and your Panopto video link to the report template.
