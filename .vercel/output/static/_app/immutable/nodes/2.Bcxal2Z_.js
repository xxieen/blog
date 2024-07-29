import {
  s as Y,
  n as j,
  d as ce
} from "../chunks/scheduler.DYjdgHML.js";
import {
  S as Z,
  i as ee,
  e as h,
  c as m,
  g as te,
  h as f,
  j as D,
  f as u,
  s as I,
  t as L,
  b as _,
  a as w,
  k as O,
  l as i,
  m as Q,
  w as pe,
  x as ge,
  y as ve,
  q as V,
  p as be,
  o as W,
  z as _e,
  A as ye,
  u as $e
} from "../chunks/index.CmMY3o3i.js";
import { f as fe } from "../chunks/dates.D2szYS5F.js";
function ue(a) {
  return (a == null ? void 0 : a.length) !== void 0
    ? a
    : Array.from(a);
}
const Ee = async ({ fetch: a }) => ({
    posts: await (await a("/api/posts")).json()
  }),
  Se = Object.freeze(
    Object.defineProperty(
      { __proto__: null, load: Ee },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function xe(a) {
  let e,
    o =
      '<div class="w-40 h-40 rounded-full overflow-hidden"><img src="/profile-image.jpg" alt="Profile" class="object-cover"/></div> <div class="py-4 space-y-2"><h2 class="text-4xl font-bold">Hey! I&#39;m Xieen.</h2> <p class="text-2xl font-light">我是一个兴趣广泛，什么都想学一点，什么都学不好的程序员🧑‍💻</p> <p class="text-2xl font-thin">这里记录着我的blog，记录生活、学习、所想所感。</p> <p class="text-1xl font-thin">#cpp #svelte #algorithm #neovim</p></div>';
  return {
    c() {
      (e = h("section")), (e.innerHTML = o), this.h();
    },
    l(t) {
      (e = m(t, "SECTION", {
        class: !0,
        "data-svelte-h": !0
      })),
        te(e) !== "svelte-1fyxj6o" && (e.innerHTML = o),
        this.h();
    },
    h() {
      f(e, "class", "py-6 px-4");
    },
    m(t, l) {
      D(t, e, l);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && u(e);
    }
  };
}
class Ae extends Z {
  constructor(e) {
    super(), ee(this, e, null, xe, Y, {});
  }
}
function de(a) {
  let e, o;
  return {
    c() {
      (e = h("a")), (o = L("Watch Video")), this.h();
    },
    l(t) {
      e = m(t, "A", { href: !0 });
      var l = _(e);
      (o = O(l, "Watch Video")), l.forEach(u), this.h();
    },
    h() {
      f(e, "href", a[2]);
    },
    m(t, l) {
      D(t, e, l), i(e, o);
    },
    p: j,
    d(t) {
      t && u(e);
    }
  };
}
function Ie(a) {
  let e,
    o,
    t,
    l,
    $,
    E,
    x,
    b,
    d,
    r,
    C = a[0].metadata.title + "",
    s,
    c,
    n,
    y,
    ae = "Published:",
    G,
    H,
    S = fe(a[0].metadata.publishedAt) + "",
    N,
    R,
    X,
    P,
    k = a[0].metadata.summary + "",
    q,
    F,
    A,
    T,
    J,
    K,
    p = a[0].metadata.youtubeId && de(a);
  return {
    c() {
      (e = h("article")),
        (o = h("a")),
        (t = h("div")),
        (l = h("img")),
        (x = I()),
        (b = h("div")),
        (d = h("a")),
        (r = h("h3")),
        (s = L(C)),
        (c = I()),
        (n = h("p")),
        (y = h("span")),
        (y.textContent = ae),
        (G = I()),
        (H = h("time")),
        (N = L(S)),
        (X = I()),
        (P = h("p")),
        (q = L(k)),
        (F = I()),
        (A = h("div")),
        (T = h("a")),
        (J = L("Read More")),
        (K = I()),
        p && p.c(),
        this.h();
    },
    l(g) {
      e = m(g, "ARTICLE", { class: !0 });
      var v = _(e);
      o = m(v, "A", { href: !0, class: !0 });
      var se = _(o);
      t = m(se, "DIV", { class: !0 });
      var le = _(t);
      (l = m(le, "IMG", { src: !0, alt: !0, class: !0 })),
        le.forEach(u),
        se.forEach(u),
        (x = w(v)),
        (b = m(v, "DIV", { class: !0 }));
      var z = _(b);
      d = m(z, "A", { href: !0 });
      var M = _(d);
      r = m(M, "H3", { class: !0 });
      var ne = _(r);
      (s = O(ne, C)),
        ne.forEach(u),
        (c = w(M)),
        (n = m(M, "P", { class: !0 }));
      var B = _(n);
      (y = m(B, "SPAN", { "data-svelte-h": !0 })),
        te(y) !== "svelte-1e205ie" && (y.textContent = ae),
        (G = w(B)),
        (H = m(B, "TIME", { datetime: !0 }));
      var oe = _(H);
      (N = O(oe, S)),
        oe.forEach(u),
        B.forEach(u),
        (X = w(M)),
        (P = m(M, "P", { class: !0 }));
      var re = _(P);
      (q = O(re, k)),
        re.forEach(u),
        M.forEach(u),
        (F = w(z)),
        (A = m(z, "DIV", { class: !0 }));
      var U = _(A);
      T = m(U, "A", { href: !0 });
      var ie = _(T);
      (J = O(ie, "Read More")),
        ie.forEach(u),
        (K = w(U)),
        p && p.l(U),
        U.forEach(u),
        z.forEach(u),
        v.forEach(u),
        this.h();
    },
    h() {
      ce(l.src, ($ = a[0].metadata.imgUrl)) ||
        f(l, "src", $),
        f(l, "alt", (E = a[0].metadata.title)),
        f(l, "class", "object-cover"),
        f(
          t,
          "class",
          "aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
        ),
        f(o, "href", a[1]),
        f(o, "class", "block sm:w-80"),
        f(r, "class", "text-xl font-medium mb-1"),
        f(H, "datetime", (R = a[0].metadata.publishedAt)),
        f(
          n,
          "class",
          "font-light text-gray-60 dark:text-gray-300"
        ),
        f(P, "class", "py-2 font-light"),
        f(d, "href", a[1]),
        f(T, "href", a[1]),
        f(
          A,
          "class",
          "flex space-x-4 text-gray-600 dark:text-gray-300 font-light underline"
        ),
        f(b, "class", "flex-1 py-2 sm:py-0"),
        f(e, "class", "p-4 sm:flex sm:space-x-4");
    },
    m(g, v) {
      D(g, e, v),
        i(e, o),
        i(o, t),
        i(t, l),
        i(e, x),
        i(e, b),
        i(b, d),
        i(d, r),
        i(r, s),
        i(d, c),
        i(d, n),
        i(n, y),
        i(n, G),
        i(n, H),
        i(H, N),
        i(d, X),
        i(d, P),
        i(P, q),
        i(b, F),
        i(b, A),
        i(A, T),
        i(T, J),
        i(A, K),
        p && p.m(A, null);
    },
    p(g, [v]) {
      v & 1 &&
        !ce(l.src, ($ = g[0].metadata.imgUrl)) &&
        f(l, "src", $),
        v & 1 &&
          E !== (E = g[0].metadata.title) &&
          f(l, "alt", E),
        v & 1 &&
          C !== (C = g[0].metadata.title + "") &&
          Q(s, C),
        v & 1 &&
          S !== (S = fe(g[0].metadata.publishedAt) + "") &&
          Q(N, S),
        v & 1 &&
          R !== (R = g[0].metadata.publishedAt) &&
          f(H, "datetime", R),
        v & 1 &&
          k !== (k = g[0].metadata.summary + "") &&
          Q(q, k),
        g[0].metadata.youtubeId
          ? p
            ? p.p(g, v)
            : ((p = de(g)), p.c(), p.m(A, null))
          : p && (p.d(1), (p = null));
    },
    i: j,
    o: j,
    d(g) {
      g && u(e), p && p.d();
    }
  };
}
function we(a, e, o) {
  let { post: t } = e,
    l = `/blog/posts/${t.slug}`,
    $ = t.metadata.youtubeId
      ? `https://youtu.be/${t.metadata.youtubeId}`
      : "";
  return (
    (a.$$set = (E) => {
      "post" in E && o(0, (t = E.post));
    }),
    [t, l, $]
  );
}
class Ce extends Z {
  constructor(e) {
    super(), ee(this, e, we, Ie, Y, { post: 0 });
  }
}
function he(a, e, o) {
  const t = a.slice();
  return (t[1] = e[o]), t;
}
function me(a) {
  let e, o;
  return (
    (e = new Ce({ props: { post: a[1] } })),
    {
      c() {
        pe(e.$$.fragment);
      },
      l(t) {
        ge(e.$$.fragment, t);
      },
      m(t, l) {
        ve(e, t, l), (o = !0);
      },
      p(t, l) {
        const $ = {};
        l & 1 && ($.post = t[1]), e.$set($);
      },
      i(t) {
        o || (V(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        W(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        _e(e, t);
      }
    }
  );
}
function He(a) {
  let e,
    o,
    t,
    l,
    $ =
      '<h2 class="text-3xl font-semibold">Blog Posts</h2>',
    E,
    x,
    b;
  e = new Ae({});
  let d = ue(a[0].posts),
    r = [];
  for (let s = 0; s < d.length; s += 1)
    r[s] = me(he(a, d, s));
  const C = (s) =>
    W(r[s], 1, 1, () => {
      r[s] = null;
    });
  return {
    c() {
      pe(e.$$.fragment),
        (o = I()),
        (t = h("section")),
        (l = h("header")),
        (l.innerHTML = $),
        (E = I()),
        (x = h("section"));
      for (let s = 0; s < r.length; s += 1) r[s].c();
      this.h();
    },
    l(s) {
      ge(e.$$.fragment, s),
        (o = w(s)),
        (t = m(s, "SECTION", { class: !0 }));
      var c = _(t);
      (l = m(c, "HEADER", {
        class: !0,
        "data-svelte-h": !0
      })),
        te(l) !== "svelte-lc0iyc" && (l.innerHTML = $),
        (E = w(c)),
        (x = m(c, "SECTION", { class: !0 }));
      var n = _(x);
      for (let y = 0; y < r.length; y += 1) r[y].l(n);
      n.forEach(u), c.forEach(u), this.h();
    },
    h() {
      f(
        l,
        "class",
        "inline-block border-b dark:border-gray-700 py-2 mx-4 mb-4"
      ),
        f(x, "class", "divide-y dark:divide-gray-700"),
        f(t, "class", "pb-6");
    },
    m(s, c) {
      ve(e, s, c),
        D(s, o, c),
        D(s, t, c),
        i(t, l),
        i(t, E),
        i(t, x);
      for (let n = 0; n < r.length; n += 1)
        r[n] && r[n].m(x, null);
      b = !0;
    },
    p(s, [c]) {
      if (c & 1) {
        d = ue(s[0].posts);
        let n;
        for (n = 0; n < d.length; n += 1) {
          const y = he(s, d, n);
          r[n]
            ? (r[n].p(y, c), V(r[n], 1))
            : ((r[n] = me(y)),
              r[n].c(),
              V(r[n], 1),
              r[n].m(x, null));
        }
        for ($e(), n = d.length; n < r.length; n += 1) C(n);
        be();
      }
    },
    i(s) {
      if (!b) {
        V(e.$$.fragment, s);
        for (let c = 0; c < d.length; c += 1) V(r[c]);
        b = !0;
      }
    },
    o(s) {
      W(e.$$.fragment, s), (r = r.filter(Boolean));
      for (let c = 0; c < r.length; c += 1) W(r[c]);
      b = !1;
    },
    d(s) {
      s && (u(o), u(t)), _e(e, s), ye(r, s);
    }
  };
}
function Pe(a, e, o) {
  let { data: t } = e;
  return (
    (a.$$set = (l) => {
      "data" in l && o(0, (t = l.data));
    }),
    [t]
  );
}
class ke extends Z {
  constructor(e) {
    super(), ee(this, e, Pe, He, Y, { data: 0 });
  }
}
export { ke as component, Se as universal };
