# JCM Travels Flight Booking Project

This is the standalone frontend-only flight booking project.

It includes:

- login and signup
- domestic India flight search
- filters and flight selection
- passenger details
- seat selection
- payment and booking confirmation
- booking management and cancellation
- admin login and dashboard

All data is stored in the browser using `localStorage` and `sessionStorage`. This makes the project easy to run on GitHub Pages, but it is a demo/testing app, not a secure production backend.

## Run Locally

Open `index.html` or `project-login.html` directly in a browser, or use any simple static server.

Default demo credentials:

- User: `JERISH` / `Jerish@123`
- Admin: `JERISH` / `Orange@123`

## Check Before Push

```powershell
npm run check
```

## Deploy On GitHub Pages

Push this folder to GitHub, then enable GitHub Pages:

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Go to `Pages`.
4. Choose branch `main`.
5. Choose folder `/root`.
6. Save.

GitHub will give you a public URL. No backend or localhost is required.
