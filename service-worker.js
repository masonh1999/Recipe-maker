self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('recipe-app').then(cache => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        'https://cdn.jsdelivr.net/npm/tesseract.js@5.0.1/dist/tesseract.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});