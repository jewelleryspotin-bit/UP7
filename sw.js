const CACHE_NAME = 'up7-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
];

// Install Event - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Caching files...');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing Old Cache...');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache the updated response
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          // Only cache HTTP/HTTPS requests (avoid chrome-extension issues)
          if (event.request.url.startsWith('http')) {
            cache.put(event.request, resClone);
          }
        });
        return response;
      })
      .catch(() => caches.match(event.request).then((res) => res))
  );
});
