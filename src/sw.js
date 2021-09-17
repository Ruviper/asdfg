// const STATIC_CACHE = 'static-v1';


// self.addEventListener('install', event => {
//   console.log(' [SW] - Installed!!');
//   self.skipWaiting();
//   const preCache = caches.open(STATIC_CACHE)
//     .then(cache => {
//       cache.addAll([
//         '/',
//         '/public/index.html',
//         '/src/index.css',
//       ])
//     });
//   event.waitUntil(preCache);
// });

// self.addEventListener('activate', event => {
//   console.log(' [SW] - Activated!!');
// });

// self.addEventListener('activate', event => {
//   console.log(' [SW] - Feching!!', event.request.url);

//   event.respondWith(fetch(event.request))
// });
