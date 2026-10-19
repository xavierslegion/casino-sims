# Casino Sims

Two practice table games that run in the browser and install on an iPhone Home Screen:

- **Double Zero Roulette** (`roulette/`): American wheel with 0 and 00.
- **Hard Eight Craps** (`craps/`): standard US layout.

Everything is static HTML, so GitHub Pages can host it for free. Your bankroll and history are saved on each device in that browser's storage and never leave it.

## Folder layout

```
index.html               Lobby page that links to both games
manifest.webmanifest     App settings for the lobby (name, icon, full screen)
sw.js                    Offline support
roulette/index.html      The roulette game
roulette/manifest.webmanifest
craps/index.html         The craps game
craps/manifest.webmanifest
icons/                   App icons (180, 192 and 512 px)
.nojekyll                Tells GitHub Pages to serve the files as they are
```

## Publish with GitHub Pages

### 1. Create the repository on GitHub

1. Go to https://github.com/new.
2. Name it `casino-sims`.
3. Choose **Public**. GitHub Pages is free for public repositories; private ones need a paid plan.
4. Leave "Add a README" unchecked, then click **Create repository**.

### 2. Push this folder (one time)

Open Git Bash in this folder and run these, using your own name, email and GitHub username.

Tell Git who you are (only needed once per computer):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Create the repository locally and push it:

```bash
git init -b main
git add .
git commit -m "Add roulette and craps simulators"
git remote add origin https://github.com/YOUR-USERNAME/casino-sims.git
git push -u origin main
```

The first push opens a browser window to sign in to GitHub.

### 3. Turn on Pages

1. In the repository on GitHub, open **Settings**, then **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/casino-sims/`.

## Install on your iPhone

1. Open `https://YOUR-USERNAME.github.io/casino-sims/` in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
   - Add the lobby page for one icon that opens both games.
   - Or open a game first and add it, to give that game its own icon.
3. Open it from the Home Screen. It runs full screen and works offline after the first visit.

Data you build up in the Home Screen app is separate from Safari tabs and from the claude.ai artifacts, so use one place consistently.

## Publishing an update

1. Replace the changed files (for example `craps/index.html`).
2. In `sw.js`, change `VERSION` (for example `casino-sims-v1` to `casino-sims-v2`) so phones drop the old copy.
3. Commit and push:

```bash
git add .
git commit -m "Describe the change"
git push
```

Phones load the cached copy first and fetch the new one in the background, so an update appears the second time you open the app.
