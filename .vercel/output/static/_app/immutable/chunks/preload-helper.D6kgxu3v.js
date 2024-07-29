const v = "modulepreload",
  y = function (a, l) {
    return new URL(a, l).href;
  },
  d = {},
  w = function (l, c, u) {
    let f = Promise.resolve();
    if (c && c.length > 0) {
      const r = document.getElementsByTagName("link"),
        e = document.querySelector(
          "meta[property=csp-nonce]"
        ),
        h =
          (e == null ? void 0 : e.nonce) ||
          (e == null ? void 0 : e.getAttribute("nonce"));
      f = Promise.all(
        c.map((t) => {
          if (((t = y(t, u)), t in d)) return;
          d[t] = !0;
          const s = t.endsWith(".css"),
            m = s ? '[rel="stylesheet"]' : "";
          if (!!u)
            for (let o = r.length - 1; o >= 0; o--) {
              const i = r[o];
              if (
                i.href === t &&
                (!s || i.rel === "stylesheet")
              )
                return;
            }
          else if (
            document.querySelector(`link[href="${t}"]${m}`)
          )
            return;
          const n = document.createElement("link");
          if (
            ((n.rel = s ? "stylesheet" : v),
            s || ((n.as = "script"), (n.crossOrigin = "")),
            (n.href = t),
            h && n.setAttribute("nonce", h),
            document.head.appendChild(n),
            s)
          )
            return new Promise((o, i) => {
              n.addEventListener("load", o),
                n.addEventListener("error", () =>
                  i(
                    new Error(
                      `Unable to preload CSS for ${t}`
                    )
                  )
                );
            });
        })
      );
    }
    return f
      .then(() => l())
      .catch((r) => {
        const e = new Event("vite:preloadError", {
          cancelable: !0
        });
        if (
          ((e.payload = r),
          window.dispatchEvent(e),
          !e.defaultPrevented)
        )
          throw r;
      });
  };
export { w as _ };
