self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("toolox-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icons/icon-192.png",
        "./icons/icon-512.png",
        "./Tools/Age calculator.html",
        "./Tools/Height converter.html",
        "./Tools/speech to text.html",
        "./Tools/Text editor.html",
        "./Tools/Weight converter.html",
        "./Tools/World clock.html"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
