// Offline support. Pages load from the cache instantly and refresh in the background,
// so an update you push shows up the second time you open the app.
// Change VERSION whenever you publish new files, so old caches are cleared.
const VERSION = "casino-sims-v6";
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./roulette/",
  "./roulette/index.html",
  "./roulette/manifest.webmanifest",
  "./craps/",
  "./craps/index.html",
  "./craps/manifest.webmanifest",
  "./icons/hub-180.png", "./icons/hub-192.png", "./icons/hub-512.png",
  "./icons/roulette-180.png", "./icons/roulette-192.png", "./icons/roulette-512.png",
  "./icons/craps-180.png", "./icons/craps-192.png", "./icons/craps-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.open(VERSION).then(async cache => {
      const cached = await cache.match(event.request, {ignoreSearch: true});
      const network = fetch(event.request)
        .then(response => {
          // Keep our own files and the Google Fonts files the pages use.
          if (response.ok || response.type === "opaque") cache.put(event.request, response.clone());
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
