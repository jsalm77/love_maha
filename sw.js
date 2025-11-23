self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('love-app-v1').then((cache) => cache.addAll(['./', './index_merged.html'])));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).catch(() => caches.match('./index_merged.html')))
  );
});