if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const l =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[l]) return;
    let u = {};
    const t = (e) => i(e, l),
      o = { module: { uri: l }, exports: u, require: t };
    s[l] = Promise.all(n.map((e) => o[e] || t(e))).then((e) => (r(...e), u));
  };
}
define(["./workbox-3e911b1d"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/@intlify-DCihH9S3.js", revision: null },
        { url: "assets/@mdi-DrwBYt5V.js", revision: null },
        { url: "assets/@vue-BTR0I7Fj.js", revision: null },
        { url: "assets/en-B1r9yeOB.js", revision: null },
        { url: "assets/id-BzIwC1kA.js", revision: null },
        { url: "assets/index-BFwhzyN3.css", revision: null },
        { url: "assets/index-CekyL-sU.js", revision: null },
        { url: "assets/ja-C5srHQfG.js", revision: null },
        { url: "assets/mdi-vue-8pJpkj4D.js", revision: null },
        { url: "assets/mdi-vue-B7rj0kwx.css", revision: null },
        { url: "assets/pinia-Yt-tHp7L.js", revision: null },
        { url: "assets/vue-demi-Dq6ymT-8.js", revision: null },
        { url: "assets/vue-i18n-DidUZ75k.js", revision: null },
        { url: "assets/vue-l0sNRNKZ.js", revision: null },
        { url: "assets/vue-router-Bx16IfWh.js", revision: null },
        { url: "assets/zh-DPnKc-SZ.js", revision: null },
        { url: "index.html", revision: "55d22e976fe3b74940241594724bed3c" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        {
          url: "ni-wayan-tagel-miartini/android-chrome-192x192.png",
          revision: "0de5b9128889d36e67c2ec353388ab61",
        },
        {
          url: "ni-wayan-tagel-miartini/android-chrome-512x512.png",
          revision: "2fb1337993b5f5627e7d98520b2f651f",
        },
        {
          url: "ni-wayan-tagel-miartini/apple-touch-icon.png",
          revision: "118e1d5912f80e71aa2175498b6534bd",
        },
        {
          url: "ni-wayan-tagel-miartini/favicon-16x16.png",
          revision: "9d0c782294cdc05ded4402c48661bcb5",
        },
        {
          url: "ni-wayan-tagel-miartini/favicon-32x32.png",
          revision: "86599288953297cd3684a22e1289d990",
        },
        {
          url: "manifest.webmanifest",
          revision: "cccfc475d77e7f506e7509017c933360",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
