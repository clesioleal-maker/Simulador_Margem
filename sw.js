const CACHE_NAME = 'simulador-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './IMAGEM_SIMULADOR.png'
];

// Instala o Service Worker e guarda os ficheiros no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde com o cache quando estiver offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});