# MARKET EXPRESS — Seller Application Website

Suggested GitHub repository: `market-express-seller-apply`

## Deploy
1. Create a separate GitHub repository named `market-express-seller-apply`.
2. Upload every file in this ZIP to the repository root (do not upload the ZIP itself).
3. In Settings → Pages, deploy from `main` and `/ (root)`.
4. Enable Email/Password in Firebase Authentication.
5. Ensure this site's GitHub Pages domain is authorized in Firebase Authentication settings.
6. Publish carefully reviewed Firestore rules from the main multi-vendor setup. Do not make Firestore publicly writable.

The application writes to the shared Firebase project `enitan-collection-7e541`, in `users` and `sellerApplications`. Applicants remain pending until an administrator approves them.

Seller application URL after deployment:
`https://YOUR-GITHUB-USERNAME.github.io/market-express-seller-apply/seller-apply.html`

The root `index.html` redirects to the application page.

## Other MARKET EXPRESS websites
- Main storefront: https://oluwabukunmiabraham7-rgb.github.io/Market-expres/
- Seller applications: https://oluwabukunmiabraham7-rgb.github.io/market-express-seller-apply/seller-apply.html
- Seller upload dashboard: https://oluwabukunmiabraham7-rgb.github.io/market-express-seller-dashboard/seller.html
- Admin website: https://oluwabukunmiabraham7-rgb.github.io/market-express-admin/admin-sellers.html

These are suggested URLs. They become active only after you create the repositories with the exact names above and GitHub Pages finishes deploying. If your GitHub username differs, replace it in the links.
