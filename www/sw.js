// Guarda la app en el móvil para que funcione sin conexión.
const CACHE = "stop-v3";
const FILES = [
  "./", "./index.html", "./manifest.webmanifest",
  "./fonts/fonts.css", "./fonts/BodoniModa-600.woff2", "./fonts/BodoniModa-800.woff2",
  "./fonts/Jost-400.woff2", "./fonts/Jost-500.woff2", "./fonts/Jost-600.woff2",
  "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Primero la red (para recibir actualizaciones); si no hay conexión, la copia guardada.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
