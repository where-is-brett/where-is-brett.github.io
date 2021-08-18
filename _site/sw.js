const version = '20210818075918';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/neuroscience/computation/2021/08/09/CTCF/","/neuroscience/computation/2021/06/04/segmentation/","/physics/computation/2018/12/14/M31/","/computation/physics/2018/05/15/AC-circuit/","/posts/2018/04/inflation/","/posts/2017/03/realism/","/posts/2016/04/gettier/","/categories/","/contact","/cv/","/academic/","/","/manifest.json","/music/","/offline/","/assets/search.json","/search/","/assets/styles.css","/terms/","/thanks/","/ctcf/","/CTCF/","/cell-fluorescence/","/contact-form","/contact-us","/resume","/CV","/redirects.json","/sitemap.xml","/robots.txt","/academic/page2/","/academic/page3/","/feed.xml","/assets/styles.css.map","/assets/logos/logo.svg", "/assets/default-offline-image.png", "/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
