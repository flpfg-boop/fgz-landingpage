const CACHE = "fgz-v1";
const ASSETS = [
  "/fgz-landingpage/",
  "/fgz-landingpage/index.html",
  "/fgz-landingpage/manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
