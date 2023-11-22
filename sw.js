self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static')
            .then(cache => {
                return cache.addAll([
                    "./",
                    "style.css",
                    "script.js",
                ])
            })
            .catch(err => console.log(err))
    )

    console.log('install')
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(response => {
                return response || fetch(e.request)
            })
    )
});



















