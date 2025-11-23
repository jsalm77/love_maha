self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('love-app-v2').then((cache) => cache.addAll(['./', './index.html', './manifest.webmanifest'])));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match('./index.html')))
  );
});