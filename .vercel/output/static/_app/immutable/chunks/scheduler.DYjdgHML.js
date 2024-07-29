function k() {}
const M = (t) => t;
function w(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function j(t) {
  return t();
}
function A() {
  return Object.create(null);
}
function E(t) {
  t.forEach(j);
}
function P(t) {
  return typeof t == "function";
}
function S(t, n) {
  return t != t
    ? n == n
    : t !== n ||
        (t && typeof t == "object") ||
        typeof t == "function";
}
let l;
function U(t, n) {
  return t === n
    ? !0
    : (l || (l = document.createElement("a")),
      (l.href = n),
      t === l.href);
}
function B(t) {
  return Object.keys(t).length === 0;
}
function q(t, ...n) {
  if (t == null) {
    for (const r of n) r(void 0);
    return k;
  }
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function C(t, n, e) {
  t.$$.on_destroy.push(q(n, e));
}
function D(t, n, e, r) {
  if (t) {
    const o = y(t, n, e, r);
    return t[0](o);
  }
}
function y(t, n, e, r) {
  return t[1] && r ? w(e.ctx.slice(), t[1](r(n))) : e.ctx;
}
function G(t, n, e, r) {
  if (t[2] && r) {
    const o = t[2](r(e));
    if (n.dirty === void 0) return o;
    if (typeof o == "object") {
      const i = [],
        _ = Math.max(n.dirty.length, o.length);
      for (let u = 0; u < _; u += 1)
        i[u] = n.dirty[u] | o[u];
      return i;
    }
    return n.dirty | o;
  }
  return n.dirty;
}
function H(t, n, e, r, o, i) {
  if (o) {
    const _ = y(n, e, r, i);
    t.p(_, o);
  }
}
function I(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let r = 0; r < e; r++) n[r] = -1;
    return n;
  }
  return -1;
}
function J(t, n, e) {
  return t.set(e), n;
}
function K(t) {
  const n =
    typeof t == "string" &&
    t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return n ? [parseFloat(n[1]), n[2] || "px"] : [t, "px"];
}
let f;
function d(t) {
  f = t;
}
function m() {
  if (!f)
    throw new Error(
      "Function called outside component initialization"
    );
  return f;
}
function L(t) {
  m().$$.on_mount.push(t);
}
function N(t) {
  m().$$.after_update.push(t);
}
const a = [],
  g = [];
let c = [];
const b = [],
  x = Promise.resolve();
let p = !1;
function v() {
  p || ((p = !0), x.then(z));
}
function Q() {
  return v(), x;
}
function O(t) {
  c.push(t);
}
const h = new Set();
let s = 0;
function z() {
  if (s !== 0) return;
  const t = f;
  do {
    try {
      for (; s < a.length; ) {
        const n = a[s];
        s++, d(n), F(n.$$);
      }
    } catch (n) {
      throw ((a.length = 0), (s = 0), n);
    }
    for (d(null), a.length = 0, s = 0; g.length; )
      g.pop()();
    for (let n = 0; n < c.length; n += 1) {
      const e = c[n];
      h.has(e) || (h.add(e), e());
    }
    c.length = 0;
  } while (a.length);
  for (; b.length; ) b.pop()();
  (p = !1), h.clear(), d(t);
}
function F(t) {
  if (t.fragment !== null) {
    t.update(), E(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, n),
      t.after_update.forEach(O);
  }
}
function R(t) {
  const n = [],
    e = [];
  c.forEach((r) =>
    t.indexOf(r) === -1 ? n.push(r) : e.push(r)
  ),
    e.forEach((r) => r()),
    (c = n);
}
export {
  J as A,
  N as a,
  g as b,
  C as c,
  U as d,
  O as e,
  M as f,
  A as g,
  z as h,
  P as i,
  B as j,
  R as k,
  f as l,
  d as m,
  k as n,
  L as o,
  j as p,
  a as q,
  E as r,
  S as s,
  Q as t,
  v as u,
  D as v,
  H as w,
  I as x,
  G as y,
  K as z
};
