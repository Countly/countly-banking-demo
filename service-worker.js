// Kill-switch for the old CRA PWA service worker. Returning visitors still
// have that worker registered and serving the pre-redesign demo from its
// precache; this replacement wipes the caches, unregisters, and reloads any
// open tabs so they pick up the new build.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })(),
  );
});
