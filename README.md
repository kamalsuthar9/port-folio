# Kamal Suthar — Personal Portfolio

A responsive, dark futuristic personal portfolio made with plain HTML, CSS and JavaScript. No build step or framework is required.

## Run locally

1. Extract the folder if you downloaded the ZIP.
2. Open `index.html` in your browser, or use VS Code's Live Server extension.

## Personalize before publishing

- **Photo:** Replace the `.portrait` placeholder in `index.html` with your image, for example `<img src="assets/kamal.jpg" alt="Kamal Suthar">`, and style it in `style.css`.
- **Resume:** Add your final PDF to this folder as `resume.pdf`.
- **Certificates:** Add certificate verification URLs or PDF files to the certification cards.
- **Personal links:** Confirm the education details and project descriptions. Add your verified LinkedIn profile URL when ready.
- **Finance dashboard:** Replace the illustrative dashboard mockup with a real screenshot and add a live demo/repository link if publicly available.
- **Daily Spend:** The current demo and repository links are included; check that the GitHub Pages deployment is live before sharing the portfolio.

The contact form uses `mailto:` to open the visitor's email app. It does not send messages through a server. To receive messages without the visitor's email app, connect a form service or add a backend.

## Deploy with GitHub Pages

1. Create a GitHub repository named `kamalsuthar9.github.io` for a user site, or create any repository for a project site.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and any assets (plus `resume.pdf` if ready) to the repository root.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the deployment to complete and open the URL displayed on the Pages settings screen.

For a project repository, the public address usually follows `https://YOUR-USERNAME.github.io/REPOSITORY/`. For a user-site repository named `YOUR-USERNAME.github.io`, it is `https://YOUR-USERNAME.github.io/`.

## Deploy with Netlify

1. Sign in to Netlify and choose **Add new site → Deploy manually**.
2. Drag the extracted folder (containing `index.html`) into the deploy area.
3. Netlify will provide a public URL. You can customize the domain from site settings.

## Accessibility and functionality

- Semantic page sections, keyboard focus styles, skip link, labels and live form status.
- Mobile navigation, light/dark theme toggle (saved in local storage), skill filters, scroll reveals and active navigation state.
- Reduced-motion preference is respected.
- External links use `rel="noreferrer"` when opened in a new tab.
