const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "../chunks/terminal-setup.CTJecB1A.js",
      "../chunks/scheduler.DYjdgHML.js",
      "../chunks/index.CmMY3o3i.js",
      "../chunks/tmux-setup.3Hrky_c4.js",
      "../chunks/vim-essentials-cheatsheet.B-FCPD3D.js"
    ])
) => i.map((i) => d[i]);
import { _ as F } from "../chunks/preload-helper.D6kgxu3v.js";
import {
  s as x,
  n as I,
  b as se,
  v as re,
  w as ae,
  x as ne,
  y as le,
  o as oe,
  d as H
} from "../chunks/scheduler.DYjdgHML.js";
import {
  S as A,
  i as T,
  B as U,
  C as W,
  b as _,
  f as u,
  h as l,
  j as L,
  l as p,
  e as g,
  c as v,
  D as ie,
  u as ce,
  o as k,
  p as ue,
  q as E,
  w as B,
  x as D,
  y as M,
  z as j,
  s as N,
  t as Y,
  a as q,
  k as Z,
  g as fe,
  m as ee
} from "../chunks/index.CmMY3o3i.js";
import { f as te } from "../chunks/dates.D2szYS5F.js";
const me = (a, e, r) => {
    const t = a[e];
    return t
      ? typeof t == "function"
        ? t()
        : Promise.resolve(t)
      : new Promise((s, n) => {
          (typeof queueMicrotask == "function"
            ? queueMicrotask
            : setTimeout)(
            n.bind(
              null,
              new Error(
                "Unknown variable dynamic import: " +
                  e +
                  (e.split("/").length !== r
                    ? ". Note that variables only represent file names one level deep."
                    : "")
              )
            )
          );
        });
  },
  de = async ({ params: a }) => {
    const e = a.slug,
      r = await me(
        Object.assign({
          "../../../../posts/terminal-setup.md": () =>
            F(
              () =>
                import(
                  "../chunks/terminal-setup.CTJecB1A.js"
                ),
              __vite__mapDeps([0, 1, 2]),
              import.meta.url
            ),
          "../../../../posts/tmux-setup.md": () =>
            F(
              () =>
                import("../chunks/tmux-setup.3Hrky_c4.js"),
              __vite__mapDeps([3, 1, 2]),
              import.meta.url
            ),
          "../../../../posts/vim-essentials-cheatsheet.md":
            () =>
              F(
                () =>
                  import(
                    "../chunks/vim-essentials-cheatsheet.B-FCPD3D.js"
                  ),
                __vite__mapDeps([4, 1, 2]),
                import.meta.url
              )
        }),
        `../../../../posts/${e}.md`,
        6
      );
    return { metadata: r.metadata, post: r.default };
  },
  ze = Object.freeze(
    Object.defineProperty(
      { __proto__: null, load: de },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function pe(a) {
  let e, r;
  return {
    c() {
      (e = U("svg")), (r = U("path")), this.h();
    },
    l(t) {
      e = W(t, "svg", {
        class: !0,
        xmlns: !0,
        x: !0,
        y: !0,
        viewBox: !0
      });
      var s = _(e);
      (r = W(s, "path", { d: !0 })),
        _(r).forEach(u),
        s.forEach(u),
        this.h();
    },
    h() {
      l(
        r,
        "d",
        "M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"
      ),
        l(e, "class", a[0]),
        l(e, "xmlns", "http://www.w3.org/2000/svg"),
        l(e, "x", "0px"),
        l(e, "y", "0px"),
        l(e, "viewBox", "0 0 24 24");
    },
    m(t, s) {
      L(t, e, s), p(e, r);
    },
    p(t, [s]) {
      s & 1 && l(e, "class", t[0]);
    },
    i: I,
    o: I,
    d(t) {
      t && u(e);
    }
  };
}
function _e(a, e, r) {
  let { class: t } = e;
  return (
    (a.$$set = (s) => {
      "class" in s && r(0, (t = s.class));
    }),
    [t]
  );
}
class he extends A {
  constructor(e) {
    super(), T(this, e, _e, pe, x, { class: 0 });
  }
}
function ge(a) {
  let e, r;
  return {
    c() {
      (e = U("svg")), (r = U("path")), this.h();
    },
    l(t) {
      e = W(t, "svg", {
        class: !0,
        xmlns: !0,
        x: !0,
        y: !0,
        viewBox: !0
      });
      var s = _(e);
      (r = W(s, "path", { d: !0 })),
        _(r).forEach(u),
        s.forEach(u),
        this.h();
    },
    h() {
      l(
        r,
        "d",
        "M 4 2 C 2.895 2 2 2.895 2 4 L 2 17 C 2 17.552 2.448 18 3 18 C 3.552 18 4 17.552 4 17 L 4 4 L 17 4 C 17.552 4 18 3.552 18 3 C 18 2.448 17.552 2 17 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z"
      ),
        l(e, "class", a[0]),
        l(e, "xmlns", "http://www.w3.org/2000/svg"),
        l(e, "x", "0px"),
        l(e, "y", "0px"),
        l(e, "viewBox", "0 0 24 24");
    },
    m(t, s) {
      L(t, e, s), p(e, r);
    },
    p(t, [s]) {
      s & 1 && l(e, "class", t[0]);
    },
    i: I,
    o: I,
    d(t) {
      t && u(e);
    }
  };
}
function ve(a, e, r) {
  let { class: t } = e;
  return (
    (a.$$set = (s) => {
      "class" in s && r(0, (t = s.class));
    }),
    [t]
  );
}
class $e extends A {
  constructor(e) {
    super(), T(this, e, ve, ge, x, { class: 0 });
  }
}
function be(a) {
  let e, r;
  return (
    (e = new $e({
      props: { class: "w-6 h-6 fill-white" }
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        D(e.$$.fragment, t);
      },
      m(t, s) {
        M(e, t, s), (r = !0);
      },
      i(t) {
        r || (E(e.$$.fragment, t), (r = !0));
      },
      o(t) {
        k(e.$$.fragment, t), (r = !1);
      },
      d(t) {
        j(e, t);
      }
    }
  );
}
function we(a) {
  let e, r;
  return (
    (e = new he({
      props: { class: "w-6 h-6 fill-green-300" }
    })),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        D(e.$$.fragment, t);
      },
      m(t, s) {
        M(e, t, s), (r = !0);
      },
      i(t) {
        r || (E(e.$$.fragment, t), (r = !0));
      },
      o(t) {
        k(e.$$.fragment, t), (r = !1);
      },
      d(t) {
        j(e, t);
      }
    }
  );
}
function ye(a) {
  let e, r, t, s, n, i, o;
  const m = [we, be],
    c = [];
  function d(f, w) {
    return f[1] ? 0 : 1;
  }
  return (
    (r = d(a)),
    (t = c[r] = m[r](a)),
    {
      c() {
        (e = g("button")), t.c(), this.h();
      },
      l(f) {
        e = v(f, "BUTTON", { class: !0 });
        var w = _(e);
        t.l(w), w.forEach(u), this.h();
      },
      h() {
        l(
          e,
          "class",
          (s = `p-1 absolute top-2 right-2 rounded-md
  shadow-md
  ${a[1] ? "bg-green-900" : "bg-gray-700 hover:bg-gray-600"}`)
        );
      },
      m(f, w) {
        L(f, e, w),
          c[r].m(e, null),
          a[3](e),
          (n = !0),
          i || ((o = ie(e, "click", a[2])), (i = !0));
      },
      p(f, [w]) {
        let C = r;
        (r = d(f)),
          r !== C &&
            (ce(),
            k(c[C], 1, 1, () => {
              c[C] = null;
            }),
            ue(),
            (t = c[r]),
            t || ((t = c[r] = m[r](f)), t.c()),
            E(t, 1),
            t.m(e, null)),
          (!n ||
            (w & 2 &&
              s !==
                (s = `p-1 absolute top-2 right-2 rounded-md
  shadow-md
  ${f[1] ? "bg-green-900" : "bg-gray-700 hover:bg-gray-600"}`))) &&
            l(e, "class", s);
      },
      i(f) {
        n || (E(t), (n = !0));
      },
      o(f) {
        k(t), (n = !1);
      },
      d(f) {
        f && u(e), c[r].d(), a[3](null), (i = !1), o();
      }
    }
  );
}
function ke(a, e, r) {
  let t,
    s = !1;
  function n() {
    const o = t.nextElementSibling;
    navigator.clipboard.writeText(o.innerText),
      r(1, (s = !0)),
      setTimeout(() => r(1, (s = !1)), 1e3);
  }
  function i(o) {
    se[o ? "unshift" : "push"](() => {
      (t = o), r(0, t);
    });
  }
  return [t, s, n, i];
}
class Ee extends A {
  constructor(e) {
    super(), T(this, e, ke, ye, x, {});
  }
}
function Ce(a) {
  let e;
  const r = a[1].default,
    t = re(r, a, a[0], null);
  return {
    c() {
      t && t.c();
    },
    l(s) {
      t && t.l(s);
    },
    m(s, n) {
      t && t.m(s, n), (e = !0);
    },
    p(s, [n]) {
      t &&
        t.p &&
        (!e || n & 1) &&
        ae(
          t,
          r,
          s,
          s[0],
          e ? le(r, s[0], n, null) : ne(s[0]),
          null
        );
    },
    i(s) {
      e || (E(t, s), (e = !0));
    },
    o(s) {
      k(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    }
  };
}
function Le(a, e, r) {
  let { $$slots: t = {}, $$scope: s } = e;
  return (
    oe(() => {
      const n = document.getElementsByTagName("pre");
      for (let i of n)
        if (
          Array.from(i.classList).some((c) =>
            c.startsWith("language-")
          )
        ) {
          const c = i.parentNode,
            d = document.createElement("div");
          (d.className = "relative"),
            new Ee({ target: d }),
            c && (c.replaceChild(d, i), d.appendChild(i));
        }
    }),
    (a.$$set = (n) => {
      "$$scope" in n && r(0, (s = n.$$scope));
    }),
    [s, t]
  );
}
class Ie extends A {
  constructor(e) {
    super(), T(this, e, Le, Ce, x, {});
  }
}
function xe(a) {
  let e, r, t;
  return {
    c() {
      (e = g("img")), this.h();
    },
    l(s) {
      (e = v(s, "IMG", { src: !0, alt: !0, class: !0 })),
        this.h();
    },
    h() {
      H(e.src, (r = a[0].imgUrl)) || l(e, "src", r),
        l(e, "alt", (t = a[0].title)),
        l(e, "class", "object-cover");
    },
    m(s, n) {
      L(s, e, n);
    },
    p(s, n) {
      n & 1 &&
        !H(e.src, (r = s[0].imgUrl)) &&
        l(e, "src", r),
        n & 1 && t !== (t = s[0].title) && l(e, "alt", t);
    },
    d(s) {
      s && u(e);
    }
  };
}
function Ae(a) {
  let e, r, t;
  return {
    c() {
      (e = g("iframe")), this.h();
    },
    l(s) {
      (e = v(s, "IFRAME", {
        title: !0,
        src: !0,
        allow: !0
      })),
        _(e).forEach(u),
        this.h();
    },
    h() {
      l(e, "title", (r = a[0].title)),
        H(
          e.src,
          (t = `https://www.youtube.com/embed/${a[0].youtubeId}?origin=http://example.com`)
        ) || l(e, "src", t),
        l(e, "allow", "fullscreen");
    },
    m(s, n) {
      L(s, e, n);
    },
    p(s, n) {
      n & 1 && r !== (r = s[0].title) && l(e, "title", r),
        n & 1 &&
          !H(
            e.src,
            (t = `https://www.youtube.com/embed/${s[0].youtubeId}?origin=http://example.com`)
          ) &&
          l(e, "src", t);
    },
    d(s) {
      s && u(e);
    }
  };
}
function Te(a) {
  let e,
    r,
    t,
    s,
    n,
    i,
    o = a[0].title + "",
    m,
    c,
    d,
    f,
    w = "Published:",
    C,
    y,
    P = te(a[0].publishedAt) + "",
    V,
    O;
  function G(h, $) {
    return h[0].youtubeId ? Ae : xe;
  }
  let R = G(a),
    b = R(a);
  return {
    c() {
      (e = g("header")),
        (r = g("div")),
        (t = g("div")),
        b.c(),
        (s = N()),
        (n = g("div")),
        (i = g("h1")),
        (m = Y(o)),
        (c = N()),
        (d = g("div")),
        (f = g("span")),
        (f.textContent = w),
        (C = N()),
        (y = g("time")),
        (V = Y(P)),
        this.h();
    },
    l(h) {
      e = v(h, "HEADER", { class: !0 });
      var $ = _(e);
      r = v($, "DIV", { class: !0 });
      var J = _(r);
      t = v(J, "DIV", { class: !0 });
      var K = _(t);
      b.l(K),
        K.forEach(u),
        J.forEach(u),
        (s = q($)),
        (n = v($, "DIV", {}));
      var S = _(n);
      i = v(S, "H1", { class: !0 });
      var Q = _(i);
      (m = Z(Q, o)),
        Q.forEach(u),
        (c = q(S)),
        (d = v(S, "DIV", { class: !0 }));
      var z = _(d);
      (f = v(z, "SPAN", { "data-svelte-h": !0 })),
        fe(f) !== "svelte-1e205ie" && (f.textContent = w),
        (C = q(z)),
        (y = v(z, "TIME", { class: !0, datetime: !0 }));
      var X = _(y);
      (V = Z(X, P)),
        X.forEach(u),
        z.forEach(u),
        S.forEach(u),
        $.forEach(u),
        this.h();
    },
    h() {
      l(
        t,
        "class",
        "aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
      ),
        l(r, "class", "w-full sm:w-3/5 mb-6"),
        l(i, "class", "text-4xl font-bold mb-4"),
        l(y, "class", "font-light"),
        l(y, "datetime", (O = a[0].publishedAt)),
        l(
          d,
          "class",
          "py-2 border-t dark:border-gray-700 inline-block"
        ),
        l(e, "class", "p-4");
    },
    m(h, $) {
      L(h, e, $),
        p(e, r),
        p(r, t),
        b.m(t, null),
        p(e, s),
        p(e, n),
        p(n, i),
        p(i, m),
        p(n, c),
        p(n, d),
        p(d, f),
        p(d, C),
        p(d, y),
        p(y, V);
    },
    p(h, [$]) {
      R === (R = G(h)) && b
        ? b.p(h, $)
        : (b.d(1), (b = R(h)), b && (b.c(), b.m(t, null))),
        $ & 1 && o !== (o = h[0].title + "") && ee(m, o),
        $ & 1 &&
          P !== (P = te(h[0].publishedAt) + "") &&
          ee(V, P),
        $ & 1 &&
          O !== (O = h[0].publishedAt) &&
          l(y, "datetime", O);
    },
    i: I,
    o: I,
    d(h) {
      h && u(e), b.d();
    }
  };
}
function Pe(a, e, r) {
  let { metadata: t } = e;
  return (
    (a.$$set = (s) => {
      "metadata" in s && r(0, (t = s.metadata));
    }),
    [t]
  );
}
class Be extends A {
  constructor(e) {
    super(), T(this, e, Pe, Te, x, { metadata: 0 });
  }
}
function De(a) {
  let e, r;
  return (
    (e = new a[1]({})),
    {
      c() {
        B(e.$$.fragment);
      },
      l(t) {
        D(e.$$.fragment, t);
      },
      m(t, s) {
        M(e, t, s), (r = !0);
      },
      i(t) {
        r || (E(e.$$.fragment, t), (r = !0));
      },
      o(t) {
        k(e.$$.fragment, t), (r = !1);
      },
      d(t) {
        j(e, t);
      }
    }
  );
}
function Me(a) {
  let e, r, t, s, n, i;
  return (
    (r = new Be({ props: { metadata: a[0] } })),
    (n = new Ie({
      props: {
        $$slots: { default: [De] },
        $$scope: { ctx: a }
      }
    })),
    {
      c() {
        (e = g("article")),
          B(r.$$.fragment),
          (t = N()),
          (s = g("div")),
          B(n.$$.fragment),
          this.h();
      },
      l(o) {
        e = v(o, "ARTICLE", {});
        var m = _(e);
        D(r.$$.fragment, m),
          (t = q(m)),
          (s = v(m, "DIV", { class: !0 }));
        var c = _(s);
        D(n.$$.fragment, c),
          c.forEach(u),
          m.forEach(u),
          this.h();
      },
      h() {
        l(
          s,
          "class",
          "prose dark:prose-invert py-4 px-4 max-w-none"
        );
      },
      m(o, m) {
        L(o, e, m),
          M(r, e, null),
          p(e, t),
          p(e, s),
          M(n, s, null),
          (i = !0);
      },
      p(o, [m]) {
        const c = {};
        m & 8 && (c.$$scope = { dirty: m, ctx: o }),
          n.$set(c);
      },
      i(o) {
        i ||
          (E(r.$$.fragment, o),
          E(n.$$.fragment, o),
          (i = !0));
      },
      o(o) {
        k(r.$$.fragment, o), k(n.$$.fragment, o), (i = !1);
      },
      d(o) {
        o && u(e), j(r), j(n);
      }
    }
  );
}
function je(a, e, r) {
  let { data: t } = e;
  const { metadata: s, post: n } = t;
  return (
    (a.$$set = (i) => {
      "data" in i && r(2, (t = i.data));
    }),
    [s, n, t]
  );
}
class Ne extends A {
  constructor(e) {
    super(), T(this, e, je, Me, x, { data: 2 });
  }
}
export { Ne as component, ze as universal };
