var nt = Object.defineProperty;
var it = (t, e, n) =>
  e in t
    ? nt(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
      })
    : (t[e] = n);
var y = (t, e, n) =>
  it(t, typeof e != "symbol" ? e + "" : e, n);
import {
  n as w,
  r as N,
  i as D,
  e as b,
  f as I,
  g as q,
  h as st,
  j as rt,
  k as lt,
  l as at,
  m as z,
  p as ot,
  q as ct,
  u as ft
} from "./scheduler.DYjdgHML.js";
const F = typeof window < "u";
let U = F
    ? () => window.performance.now()
    : () => Date.now(),
  j = F ? (t) => requestAnimationFrame(t) : w;
const x = new Set();
function V(t) {
  x.forEach((e) => {
    e.c(t) || (x.delete(e), e.f());
  }),
    x.size !== 0 && j(V);
}
function W(t) {
  let e;
  return (
    x.size === 0 && j(V),
    {
      promise: new Promise((n) => {
        x.add((e = { c: t, f: n }));
      }),
      abort() {
        x.delete(e);
      }
    }
  );
}
let L = !1;
function ut() {
  L = !0;
}
function _t() {
  L = !1;
}
function dt(t, e, n, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function ht(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const a = [];
    for (let o = 0; o < e.length; o++) {
      const u = e[o];
      u.claim_order !== void 0 && a.push(u);
    }
    e = a;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let a = 0; a < e.length; a++) {
    const o = e[a].claim_order,
      u =
        (s > 0 && e[n[s]].claim_order <= o
          ? s + 1
          : dt(1, s, (_) => e[n[_]].claim_order, o)) - 1;
    i[a] = n[u] + 1;
    const f = u + 1;
    (n[f] = a), (s = Math.max(f, s));
  }
  const r = [],
    l = [];
  let c = e.length - 1;
  for (let a = n[s] + 1; a != 0; a = i[a - 1]) {
    for (r.push(e[a - 1]); c >= a; c--) l.push(e[c]);
    c--;
  }
  for (; c >= 0; c--) l.push(e[c]);
  r.reverse(),
    l.sort((a, o) => a.claim_order - o.claim_order);
  for (let a = 0, o = 0; a < l.length; a++) {
    for (
      ;
      o < r.length && l[a].claim_order >= r[o].claim_order;

    )
      o++;
    const u = o < r.length ? r[o] : null;
    t.insertBefore(l[a], u);
  }
}
function mt(t, e) {
  t.appendChild(e);
}
function J(t) {
  if (!t) return document;
  const e = t.getRootNode
    ? t.getRootNode()
    : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function pt(t) {
  const e = k("style");
  return (
    (e.textContent = "/* empty */"), $t(J(t), e), e.sheet
  );
}
function $t(t, e) {
  return mt(t.head || t, e), e.sheet;
}
function yt(t, e) {
  if (L) {
    for (
      ht(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null &&
      t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else
    (e.parentNode !== t || e.nextSibling !== null) &&
      t.appendChild(e);
}
function gt(t, e, n) {
  t.insertBefore(e, n || null);
}
function xt(t, e, n) {
  L && !n
    ? yt(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Rt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function k(t) {
  return document.createElement(t);
}
function K(t) {
  return document.createElementNS(
    "http://www.w3.org/2000/svg",
    t
  );
}
function B(t) {
  return document.createTextNode(t);
}
function jt() {
  return B(" ");
}
function kt() {
  return B("");
}
function Bt(t, e, n, i) {
  return (
    t.addEventListener(e, n, i),
    () => t.removeEventListener(e, n, i)
  );
}
function Ot(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function qt(t) {
  return t.dataset.svelteH;
}
function wt(t) {
  return Array.from(t.childNodes);
}
function Q(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function X(t, e, n, i, s = !1) {
  Q(t);
  const r = (() => {
    for (
      let l = t.claim_info.last_index;
      l < t.length;
      l++
    ) {
      const c = t[l];
      if (e(c)) {
        const a = n(c);
        return (
          a === void 0 ? t.splice(l, 1) : (t[l] = a),
          s || (t.claim_info.last_index = l),
          c
        );
      }
    }
    for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
      const c = t[l];
      if (e(c)) {
        const a = n(c);
        return (
          a === void 0 ? t.splice(l, 1) : (t[l] = a),
          s
            ? a === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = l),
          c
        );
      }
    }
    return i();
  })();
  return (
    (r.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    r
  );
}
function Y(t, e, n, i) {
  return X(
    t,
    (s) => s.nodeName === e,
    (s) => {
      const r = [];
      for (let l = 0; l < s.attributes.length; l++) {
        const c = s.attributes[l];
        n[c.name] || r.push(c.name);
      }
      r.forEach((l) => s.removeAttribute(l));
    },
    () => i(e)
  );
}
function zt(t, e, n) {
  return Y(t, e, n, k);
}
function Gt(t, e, n) {
  return Y(t, e, n, K);
}
function vt(t, e) {
  return X(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length)
          return n.splitText(i.length);
      } else n.data = i;
    },
    () => B(e),
    !0
  );
}
function It(t) {
  return vt(t, " ");
}
function G(t, e, n) {
  for (let i = n; i < t.length; i += 1) {
    const s = t[i];
    if (s.nodeType === 8 && s.textContent.trim() === e)
      return i;
  }
  return -1;
}
function Ft(t, e) {
  const n = G(t, "HTML_TAG_START", 0),
    i = G(t, "HTML_TAG_END", n + 1);
  if (n === -1 || i === -1) return new P(e);
  Q(t);
  const s = t.splice(n, i - n + 1);
  E(s[0]), E(s[s.length - 1]);
  const r = s.slice(1, s.length - 1);
  if (r.length === 0) return new P(e);
  for (const l of r)
    (l.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1);
  return new P(e, r);
}
function Ut(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function Vt(t, e, n, i) {
  n == null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, "");
}
function Et(
  t,
  e,
  { bubbles: n = !1, cancelable: i = !1 } = {}
) {
  return new CustomEvent(t, {
    detail: e,
    bubbles: n,
    cancelable: i
  });
}
function Wt(t, e) {
  const n = [];
  let i = 0;
  for (const s of e.childNodes)
    if (s.nodeType === 8) {
      const r = s.textContent.trim();
      r === `HEAD_${t}_END`
        ? ((i -= 1), n.push(s))
        : r === `HEAD_${t}_START` && ((i += 1), n.push(s));
    } else i > 0 && n.push(s);
  return n;
}
class Nt {
  constructor(e = !1) {
    y(this, "is_svg", !1);
    y(this, "e");
    y(this, "n");
    y(this, "t");
    y(this, "a");
    (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e ||
      (this.is_svg
        ? (this.e = K(n.nodeName))
        : (this.e = k(
            n.nodeType === 11 ? "TEMPLATE" : n.nodeName
          )),
      (this.t = n.tagName !== "TEMPLATE" ? n : n.content),
      this.c(e)),
      this.i(i);
  }
  h(e) {
    (this.e.innerHTML = e),
      (this.n = Array.from(
        this.e.nodeName === "TEMPLATE"
          ? this.e.content.childNodes
          : this.e.childNodes
      ));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      gt(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(E);
  }
}
class P extends Nt {
  constructor(n = !1, i) {
    super(n);
    y(this, "l");
    (this.e = this.n = null), (this.l = i);
  }
  c(n) {
    this.l ? (this.n = this.l) : super.c(n);
  }
  i(n) {
    for (let i = 0; i < this.n.length; i += 1)
      xt(this.t, this.n[i], n);
  }
}
function Jt(t, e) {
  return new t(e);
}
const S = new Map();
let C = 0;
function Tt(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function At(t, e) {
  const n = { stylesheet: pt(e), rules: {} };
  return S.set(t, n), n;
}
function Z(t, e, n, i, s, r, l, c = 0) {
  const a = 16.666 / i;
  let o = `{
`;
  for (let $ = 0; $ <= 1; $ += a) {
    const p = e + (n - e) * r($);
    o +=
      $ * 100 +
      `%{${l(p, 1 - p)}}
`;
  }
  const u =
      o +
      `100% {${l(n, 1 - n)}}
}`,
    f = `__svelte_${Tt(u)}_${c}`,
    _ = J(t),
    { stylesheet: d, rules: h } = S.get(_) || At(_, t);
  h[f] ||
    ((h[f] = !0),
    d.insertRule(
      `@keyframes ${f} ${u}`,
      d.cssRules.length
    ));
  const m = t.style.animation || "";
  return (
    (t.style.animation = `${m ? `${m}, ` : ""}${f} ${i}ms linear ${s}ms 1 both`),
    (C += 1),
    f
  );
}
function R(t, e) {
  const n = (t.style.animation || "").split(", "),
    i = n.filter(
      e
        ? (r) => r.indexOf(e) < 0
        : (r) => r.indexOf("__svelte") === -1
    ),
    s = n.length - i.length;
  s &&
    ((t.style.animation = i.join(", ")),
    (C -= s),
    C || bt());
}
function bt() {
  j(() => {
    C ||
      (S.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && E(e);
      }),
      S.clear());
  });
}
let v;
function tt() {
  return (
    v ||
      ((v = Promise.resolve()),
      v.then(() => {
        v = null;
      })),
    v
  );
}
function H(t, e, n) {
  t.dispatchEvent(Et(`${e ? "intro" : "outro"}${n}`));
}
const A = new Set();
let g;
function Kt() {
  g = { r: 0, c: [], p: g };
}
function Qt() {
  g.r || N(g.c), (g = g.p);
}
function St(t, e) {
  t && t.i && (A.delete(t), t.i(e));
}
function Xt(t, e, n, i) {
  if (t && t.o) {
    if (A.has(t)) return;
    A.add(t),
      g.c.push(() => {
        A.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
const et = { duration: 0 };
function Yt(t, e, n) {
  const i = { direction: "in" };
  let s = e(t, n, i),
    r = !1,
    l,
    c,
    a = 0;
  function o() {
    l && R(t, l);
  }
  function u() {
    const {
      delay: _ = 0,
      duration: d = 300,
      easing: h = I,
      tick: m = w,
      css: $
    } = s || et;
    $ && (l = Z(t, 0, 1, d, _, h, $, a++)), m(0, 1);
    const p = U() + _,
      T = p + d;
    c && c.abort(),
      (r = !0),
      b(() => H(t, !0, "start")),
      (c = W((M) => {
        if (r) {
          if (M >= T)
            return m(1, 0), H(t, !0, "end"), o(), (r = !1);
          if (M >= p) {
            const O = h((M - p) / d);
            m(O, 1 - O);
          }
        }
        return r;
      }));
  }
  let f = !1;
  return {
    start() {
      f ||
        ((f = !0),
        R(t),
        D(s) ? ((s = s(i)), tt().then(u)) : u());
    },
    invalidate() {
      f = !1;
    },
    end() {
      r && (o(), (r = !1));
    }
  };
}
function Zt(t, e, n) {
  const i = { direction: "out" };
  let s = e(t, n, i),
    r = !0,
    l;
  const c = g;
  c.r += 1;
  let a;
  function o() {
    const {
      delay: u = 0,
      duration: f = 300,
      easing: _ = I,
      tick: d = w,
      css: h
    } = s || et;
    h && (l = Z(t, 1, 0, f, u, _, h));
    const m = U() + u,
      $ = m + f;
    b(() => H(t, !1, "start")),
      "inert" in t && ((a = t.inert), (t.inert = !0)),
      W((p) => {
        if (r) {
          if (p >= $)
            return (
              d(0, 1), H(t, !1, "end"), --c.r || N(c.c), !1
            );
          if (p >= m) {
            const T = _((p - m) / f);
            d(1 - T, T);
          }
        }
        return r;
      });
  }
  return (
    D(s)
      ? tt().then(() => {
          (s = s(i)), o();
        })
      : o(),
    {
      end(u) {
        u && "inert" in t && (t.inert = a),
          u && s.tick && s.tick(1, 0),
          r && (l && R(t, l), (r = !1));
      }
    }
  );
}
function te(t) {
  t && t.c();
}
function ee(t, e) {
  t && t.l(e);
}
function Ct(t, e, n) {
  const { fragment: i, after_update: s } = t.$$;
  i && i.m(e, n),
    b(() => {
      const r = t.$$.on_mount.map(ot).filter(D);
      t.$$.on_destroy ? t.$$.on_destroy.push(...r) : N(r),
        (t.$$.on_mount = []);
    }),
    s.forEach(b);
}
function Ht(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (lt(n.after_update),
    N(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Dt(t, e) {
  t.$$.dirty[0] === -1 &&
    (ct.push(t), ft(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ne(t, e, n, i, s, r, l = null, c = [-1]) {
  const a = at;
  z(t);
  const o = (t.$$ = {
    fragment: null,
    ctx: [],
    props: r,
    update: w,
    not_equal: s,
    bound: q(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    callbacks: q(),
    dirty: c,
    skip_bound: !1,
    root: e.target || a.$$.root
  });
  l && l(o.root);
  let u = !1;
  if (
    ((o.ctx = n
      ? n(t, e.props || {}, (f, _, ...d) => {
          const h = d.length ? d[0] : _;
          return (
            o.ctx &&
              s(o.ctx[f], (o.ctx[f] = h)) &&
              (!o.skip_bound && o.bound[f] && o.bound[f](h),
              u && Dt(t, f)),
            _
          );
        })
      : []),
    o.update(),
    (u = !0),
    N(o.before_update),
    (o.fragment = i ? i(o.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      ut();
      const f = wt(e.target);
      o.fragment && o.fragment.l(f), f.forEach(E);
    } else o.fragment && o.fragment.c();
    e.intro && St(t.$$.fragment),
      Ct(t, e.target, e.anchor),
      _t(),
      st();
  }
  z(a);
}
class ie {
  constructor() {
    y(this, "$$");
    y(this, "$$set");
  }
  $destroy() {
    Ht(this, 1), (this.$destroy = w);
  }
  $on(e, n) {
    if (!D(n)) return w;
    const i =
      this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const s = i.indexOf(n);
        s !== -1 && i.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !rt(e) &&
      ((this.$$.skip_bound = !0),
      this.$$set(e),
      (this.$$.skip_bound = !1));
  }
}
const Lt = "4";
typeof window < "u" &&
  (
    window.__svelte || (window.__svelte = { v: new Set() })
  ).v.add(Lt);
export {
  Rt as A,
  K as B,
  Gt as C,
  Bt as D,
  Yt as E,
  Zt as F,
  Wt as G,
  P as H,
  ie as S,
  It as a,
  wt as b,
  zt as c,
  Ft as d,
  k as e,
  E as f,
  qt as g,
  Ot as h,
  ne as i,
  xt as j,
  vt as k,
  yt as l,
  Ut as m,
  kt as n,
  Xt as o,
  Qt as p,
  St as q,
  Vt as r,
  jt as s,
  B as t,
  Kt as u,
  Jt as v,
  te as w,
  ee as x,
  Ct as y,
  Ht as z
};
