import { s as Ml, n as be } from "./scheduler.DYjdgHML.js";
import {
  S as Rl,
  i as Sl,
  e as a,
  s as i,
  H as r,
  c as n,
  g as o,
  a as p,
  b as h,
  d as v,
  f as e,
  h as u,
  j as s
} from "./index.CmMY3o3i.js";
function Il(ml) {
  let c,
    we = "啊实打实大大说",
    ut,
    m,
    ke =
      "Open up a terminal window and install homebrew with the following command:",
    rt,
    x,
    ht,
    xl =
      '<code class="language-bash">/bin/bash <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>"</span></code>',
    vt,
    C,
    ge = "Add Homebrew To Path",
    ct,
    _,
    de =
      "After installing, add it to the path (replace ”[username]” with your actual username):",
    ft,
    b,
    mt,
    Cl = `<code class="language-bash"><span class="token builtin class-name">echo</span> <span class="token string">'eval "$(/opt/homebrew/bin/brew shellenv)"'</span> <span class="token operator">>></span> /Users/<span class="token punctuation">[</span>username<span class="token punctuation">]</span>/.zprofile
<span class="token builtin class-name">eval</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>/opt/homebrew/bin/brew shellenv<span class="token variable">)</span></span>"</span></code>`,
    xt,
    w,
    Pe = "Install iTerm2",
    Ct,
    k,
    ye = "To install, run:",
    _t,
    g,
    bt,
    _l =
      '<code class="language-bash">brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> iterm2</code>',
    wt,
    d,
    He =
      "Switch to iTerm2 for the remainder of this walkthrough.",
    kt,
    P,
    Ee = "Install Git",
    gt,
    y,
    Te =
      "If you don’t have it installed, install git as well:",
    dt,
    H,
    Pt,
    bl =
      '<code class="language-bash">brew <span class="token function">install</span> <span class="token function">git</span></code>',
    yt,
    E,
    ze = "Install Oh My Zsh",
    Ht,
    T,
    Le = "Run this to install Oh My Zsh:",
    Et,
    z,
    Tt,
    wl =
      '<code class="language-bash"><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>"</span></code>',
    zt,
    L,
    Me = "Install PowerLevel10K Theme for Oh My Zsh",
    Lt,
    M,
    Re = "Run this to install PowerLevel10K:",
    Mt,
    R,
    Rt,
    kl =
      '<code class="language-bash"><span class="token function">git</span> clone https://github.com/romkatv/powerlevel10k.git <span class="token variable">$ZSH_CUSTOM</span>/themes/powerlevel10k</code>',
    St,
    S,
    Se = `Now that it’s installed, open the ”~/.zshrc” file
with your preferred editor and change the value
of “ZSH_THEME” as shown below:`,
    It,
    I,
    Ot,
    gl =
      '<code class="language-bash"><span class="token assign-left variable">ZSH_THEME</span><span class="token operator">=</span><span class="token string">"powerlevel10k/powerlevel10k"</span></code>',
    jt,
    O,
    Ie =
      "To reflect this change on your terminal, restart it or run this command:",
    Zt,
    j,
    qt,
    dl =
      '<code class="language-bash"><span class="token builtin class-name">source</span> ~/.zshrc</code>',
    Ft,
    Z,
    Oe = "Install Meslo Nerd Font",
    $t,
    q,
    je =
      "Install the font by pressing “y” and then quit iTerm2.",
    Dt,
    F,
    Ze = "Update VSCode Terminal Font (Optional)",
    Ut,
    $,
    qe = "Open settings.json and add this line:",
    At,
    D,
    Kt,
    Pl =
      '<code class="language-json"><span class="token property">"terminal.integrated.fontFamily"</span><span class="token operator">:</span> <span class="token string">"MesloLGS NF"</span></code>',
    Gt,
    U,
    Fe = "Configure PowerLevel10K",
    Nt,
    A,
    $e = `Restart iTerm2. You should now be seeing the PowerLevel10K configuration process. If you don’t,
run the following:`,
    Yt,
    K,
    Vt,
    yl =
      '<code class="language-bash">p10k configure</code>',
    Wt,
    G,
    De = `Follow the instructions for the PowerLevel10K configuration to make your terminal
look as desired.`,
    Bt,
    N,
    Ue = "Increase Terminal Font Size",
    Jt,
    Y,
    Ae =
      "<li>Open iTerm2 preferences</li> <li>Go to Profiles &gt; Text</li> <li>I increase my font size to about 20px</li>",
    Qt,
    V,
    Ke = "Change iTerm2 Colors to My Custom Theme",
    Xt,
    W,
    Ge =
      "<li>Open iTerm2</li> <li>Download my color profile by running the following command (will be added to Downloads folder):</li>",
    te,
    B,
    ee,
    Hl =
      '<code class="language-bash"><span class="token function">curl</span> https://raw.githubusercontent.com/josean-dev/dev-environment-files/main/coolnight.itermcolors <span class="token parameter variable">--output</span> ~/Downloads/coolnight.itermcolors</code>',
    le,
    f,
    Ne =
      "<li>Open iTerm2 preferences</li> <li>Go to Profiles &gt; Colors</li> <li>Import the downloaded color profile (coolnight)</li> <li>Select the color profile (coolnight)</li>",
    se,
    J,
    Ye =
      'You can find other themes here: <a href="https://iterm2colorschemes.com" rel="nofollow">Iterm2 Color Schemes</a>',
    ae,
    Q,
    Ve = "Install ZSH Plugins",
    ne,
    X,
    We = "Install zsh-autosuggestions:",
    ie,
    tt,
    pe,
    El =
      '<code class="language-bash"><span class="token function">git</span> clone https://github.com/zsh-users/zsh-autosuggestions <span class="token variable">$&#123;ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom&#125;</span>/plugins/zsh-autosuggestions</code>',
    oe,
    et,
    Be = "Install zsh-syntax-highlighting:",
    ue,
    lt,
    re,
    Tl =
      '<code class="language-bash"><span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">$&#123;ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom&#125;</span>/plugins/zsh-syntax-highlighting</code>',
    he,
    st,
    Je = `Open the ”~/.zshrc” file in your desired editor and
modify the plugins line to what you see below.`,
    ve,
    at,
    ce,
    zl =
      '<code class="language-bash"><span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>git zsh-autosuggestions zsh-syntax-highlighting web-search<span class="token punctuation">)</span></code>',
    fe,
    nt,
    Qe = "Load these new plugins by running:",
    me,
    it,
    xe,
    Ll =
      '<code class="language-bash"><span class="token builtin class-name">source</span> ~/.zshrc</code>',
    Ce,
    pt,
    Xe = "You’re Done",
    _e,
    ot,
    tl =
      "With that, you’re finished and should have a much better terminal experience!";
  return {
    c() {
      (c = a("h2")),
        (c.textContent = we),
        (ut = i()),
        (m = a("p")),
        (m.textContent = ke),
        (rt = i()),
        (x = a("pre")),
        (ht = new r(!1)),
        (vt = i()),
        (C = a("h2")),
        (C.textContent = ge),
        (ct = i()),
        (_ = a("p")),
        (_.textContent = de),
        (ft = i()),
        (b = a("pre")),
        (mt = new r(!1)),
        (xt = i()),
        (w = a("h2")),
        (w.textContent = Pe),
        (Ct = i()),
        (k = a("p")),
        (k.textContent = ye),
        (_t = i()),
        (g = a("pre")),
        (bt = new r(!1)),
        (wt = i()),
        (d = a("p")),
        (d.textContent = He),
        (kt = i()),
        (P = a("h2")),
        (P.textContent = Ee),
        (gt = i()),
        (y = a("p")),
        (y.textContent = Te),
        (dt = i()),
        (H = a("pre")),
        (Pt = new r(!1)),
        (yt = i()),
        (E = a("h2")),
        (E.textContent = ze),
        (Ht = i()),
        (T = a("p")),
        (T.textContent = Le),
        (Et = i()),
        (z = a("pre")),
        (Tt = new r(!1)),
        (zt = i()),
        (L = a("h2")),
        (L.textContent = Me),
        (Lt = i()),
        (M = a("p")),
        (M.textContent = Re),
        (Mt = i()),
        (R = a("pre")),
        (Rt = new r(!1)),
        (St = i()),
        (S = a("p")),
        (S.textContent = Se),
        (It = i()),
        (I = a("pre")),
        (Ot = new r(!1)),
        (jt = i()),
        (O = a("p")),
        (O.textContent = Ie),
        (Zt = i()),
        (j = a("pre")),
        (qt = new r(!1)),
        (Ft = i()),
        (Z = a("h2")),
        (Z.textContent = Oe),
        ($t = i()),
        (q = a("p")),
        (q.textContent = je),
        (Dt = i()),
        (F = a("h2")),
        (F.textContent = Ze),
        (Ut = i()),
        ($ = a("p")),
        ($.textContent = qe),
        (At = i()),
        (D = a("pre")),
        (Kt = new r(!1)),
        (Gt = i()),
        (U = a("h2")),
        (U.textContent = Fe),
        (Nt = i()),
        (A = a("p")),
        (A.textContent = $e),
        (Yt = i()),
        (K = a("pre")),
        (Vt = new r(!1)),
        (Wt = i()),
        (G = a("p")),
        (G.textContent = De),
        (Bt = i()),
        (N = a("h2")),
        (N.textContent = Ue),
        (Jt = i()),
        (Y = a("ol")),
        (Y.innerHTML = Ae),
        (Qt = i()),
        (V = a("h2")),
        (V.textContent = Ke),
        (Xt = i()),
        (W = a("ol")),
        (W.innerHTML = Ge),
        (te = i()),
        (B = a("pre")),
        (ee = new r(!1)),
        (le = i()),
        (f = a("ol")),
        (f.innerHTML = Ne),
        (se = i()),
        (J = a("p")),
        (J.innerHTML = Ye),
        (ae = i()),
        (Q = a("h2")),
        (Q.textContent = Ve),
        (ne = i()),
        (X = a("p")),
        (X.textContent = We),
        (ie = i()),
        (tt = a("pre")),
        (pe = new r(!1)),
        (oe = i()),
        (et = a("p")),
        (et.textContent = Be),
        (ue = i()),
        (lt = a("pre")),
        (re = new r(!1)),
        (he = i()),
        (st = a("p")),
        (st.textContent = Je),
        (ve = i()),
        (at = a("pre")),
        (ce = new r(!1)),
        (fe = i()),
        (nt = a("p")),
        (nt.textContent = Qe),
        (me = i()),
        (it = a("pre")),
        (xe = new r(!1)),
        (Ce = i()),
        (pt = a("h2")),
        (pt.textContent = Xe),
        (_e = i()),
        (ot = a("p")),
        (ot.textContent = tl),
        this.h();
    },
    l(t) {
      (c = n(t, "H2", { "data-svelte-h": !0 })),
        o(c) !== "svelte-uv5qg1" && (c.textContent = we),
        (ut = p(t)),
        (m = n(t, "P", { "data-svelte-h": !0 })),
        o(m) !== "svelte-lwy1o2" && (m.textContent = ke),
        (rt = p(t)),
        (x = n(t, "PRE", { class: !0 }));
      var l = h(x);
      (ht = v(l, !1)),
        l.forEach(e),
        (vt = p(t)),
        (C = n(t, "H2", { "data-svelte-h": !0 })),
        o(C) !== "svelte-1dpruvc" && (C.textContent = ge),
        (ct = p(t)),
        (_ = n(t, "P", { "data-svelte-h": !0 })),
        o(_) !== "svelte-g9y5cm" && (_.textContent = de),
        (ft = p(t)),
        (b = n(t, "PRE", { class: !0 }));
      var el = h(b);
      (mt = v(el, !1)),
        el.forEach(e),
        (xt = p(t)),
        (w = n(t, "H2", { "data-svelte-h": !0 })),
        o(w) !== "svelte-87nei" && (w.textContent = Pe),
        (Ct = p(t)),
        (k = n(t, "P", { "data-svelte-h": !0 })),
        o(k) !== "svelte-1pk8dcd" && (k.textContent = ye),
        (_t = p(t)),
        (g = n(t, "PRE", { class: !0 }));
      var ll = h(g);
      (bt = v(ll, !1)),
        ll.forEach(e),
        (wt = p(t)),
        (d = n(t, "P", { "data-svelte-h": !0 })),
        o(d) !== "svelte-r24elq" && (d.textContent = He),
        (kt = p(t)),
        (P = n(t, "H2", { "data-svelte-h": !0 })),
        o(P) !== "svelte-2k6gfr" && (P.textContent = Ee),
        (gt = p(t)),
        (y = n(t, "P", { "data-svelte-h": !0 })),
        o(y) !== "svelte-1xaerf6" && (y.textContent = Te),
        (dt = p(t)),
        (H = n(t, "PRE", { class: !0 }));
      var sl = h(H);
      (Pt = v(sl, !1)),
        sl.forEach(e),
        (yt = p(t)),
        (E = n(t, "H2", { "data-svelte-h": !0 })),
        o(E) !== "svelte-1tt9ci9" && (E.textContent = ze),
        (Ht = p(t)),
        (T = n(t, "P", { "data-svelte-h": !0 })),
        o(T) !== "svelte-934s1f" && (T.textContent = Le),
        (Et = p(t)),
        (z = n(t, "PRE", { class: !0 }));
      var al = h(z);
      (Tt = v(al, !1)),
        al.forEach(e),
        (zt = p(t)),
        (L = n(t, "H2", { "data-svelte-h": !0 })),
        o(L) !== "svelte-15b4uk4" && (L.textContent = Me),
        (Lt = p(t)),
        (M = n(t, "P", { "data-svelte-h": !0 })),
        o(M) !== "svelte-17ypk78" && (M.textContent = Re),
        (Mt = p(t)),
        (R = n(t, "PRE", { class: !0 }));
      var nl = h(R);
      (Rt = v(nl, !1)),
        nl.forEach(e),
        (St = p(t)),
        (S = n(t, "P", { "data-svelte-h": !0 })),
        o(S) !== "svelte-jdp76b" && (S.textContent = Se),
        (It = p(t)),
        (I = n(t, "PRE", { class: !0 }));
      var il = h(I);
      (Ot = v(il, !1)),
        il.forEach(e),
        (jt = p(t)),
        (O = n(t, "P", { "data-svelte-h": !0 })),
        o(O) !== "svelte-12mhnr" && (O.textContent = Ie),
        (Zt = p(t)),
        (j = n(t, "PRE", { class: !0 }));
      var pl = h(j);
      (qt = v(pl, !1)),
        pl.forEach(e),
        (Ft = p(t)),
        (Z = n(t, "H2", { "data-svelte-h": !0 })),
        o(Z) !== "svelte-pmrt01" && (Z.textContent = Oe),
        ($t = p(t)),
        (q = n(t, "P", { "data-svelte-h": !0 })),
        o(q) !== "svelte-wsbr7x" && (q.textContent = je),
        (Dt = p(t)),
        (F = n(t, "H2", { "data-svelte-h": !0 })),
        o(F) !== "svelte-sir67x" && (F.textContent = Ze),
        (Ut = p(t)),
        ($ = n(t, "P", { "data-svelte-h": !0 })),
        o($) !== "svelte-uwvwpj" && ($.textContent = qe),
        (At = p(t)),
        (D = n(t, "PRE", { class: !0 }));
      var ol = h(D);
      (Kt = v(ol, !1)),
        ol.forEach(e),
        (Gt = p(t)),
        (U = n(t, "H2", { "data-svelte-h": !0 })),
        o(U) !== "svelte-1sde9o5" && (U.textContent = Fe),
        (Nt = p(t)),
        (A = n(t, "P", { "data-svelte-h": !0 })),
        o(A) !== "svelte-1gxloz2" && (A.textContent = $e),
        (Yt = p(t)),
        (K = n(t, "PRE", { class: !0 }));
      var ul = h(K);
      (Vt = v(ul, !1)),
        ul.forEach(e),
        (Wt = p(t)),
        (G = n(t, "P", { "data-svelte-h": !0 })),
        o(G) !== "svelte-g2x9sn" && (G.textContent = De),
        (Bt = p(t)),
        (N = n(t, "H2", { "data-svelte-h": !0 })),
        o(N) !== "svelte-okl1q4" && (N.textContent = Ue),
        (Jt = p(t)),
        (Y = n(t, "OL", { "data-svelte-h": !0 })),
        o(Y) !== "svelte-xztio1" && (Y.innerHTML = Ae),
        (Qt = p(t)),
        (V = n(t, "H2", { "data-svelte-h": !0 })),
        o(V) !== "svelte-10c8rwm" && (V.textContent = Ke),
        (Xt = p(t)),
        (W = n(t, "OL", { "data-svelte-h": !0 })),
        o(W) !== "svelte-qg4moo" && (W.innerHTML = Ge),
        (te = p(t)),
        (B = n(t, "PRE", { class: !0 }));
      var rl = h(B);
      (ee = v(rl, !1)),
        rl.forEach(e),
        (le = p(t)),
        (f = n(t, "OL", {
          start: !0,
          "data-svelte-h": !0
        })),
        o(f) !== "svelte-6is2tu" && (f.innerHTML = Ne),
        (se = p(t)),
        (J = n(t, "P", { "data-svelte-h": !0 })),
        o(J) !== "svelte-1vxcvvx" && (J.innerHTML = Ye),
        (ae = p(t)),
        (Q = n(t, "H2", { "data-svelte-h": !0 })),
        o(Q) !== "svelte-1x2r9p0" && (Q.textContent = Ve),
        (ne = p(t)),
        (X = n(t, "P", { "data-svelte-h": !0 })),
        o(X) !== "svelte-tjni8p" && (X.textContent = We),
        (ie = p(t)),
        (tt = n(t, "PRE", { class: !0 }));
      var hl = h(tt);
      (pe = v(hl, !1)),
        hl.forEach(e),
        (oe = p(t)),
        (et = n(t, "P", { "data-svelte-h": !0 })),
        o(et) !== "svelte-1evvhiz" && (et.textContent = Be),
        (ue = p(t)),
        (lt = n(t, "PRE", { class: !0 }));
      var vl = h(lt);
      (re = v(vl, !1)),
        vl.forEach(e),
        (he = p(t)),
        (st = n(t, "P", { "data-svelte-h": !0 })),
        o(st) !== "svelte-4fts0h" && (st.textContent = Je),
        (ve = p(t)),
        (at = n(t, "PRE", { class: !0 }));
      var cl = h(at);
      (ce = v(cl, !1)),
        cl.forEach(e),
        (fe = p(t)),
        (nt = n(t, "P", { "data-svelte-h": !0 })),
        o(nt) !== "svelte-1yrp2gr" && (nt.textContent = Qe),
        (me = p(t)),
        (it = n(t, "PRE", { class: !0 }));
      var fl = h(it);
      (xe = v(fl, !1)),
        fl.forEach(e),
        (Ce = p(t)),
        (pt = n(t, "H2", { "data-svelte-h": !0 })),
        o(pt) !== "svelte-1whoeil" && (pt.textContent = Xe),
        (_e = p(t)),
        (ot = n(t, "P", { "data-svelte-h": !0 })),
        o(ot) !== "svelte-qqb6m3" && (ot.textContent = tl),
        this.h();
    },
    h() {
      (ht.a = null),
        u(x, "class", "language-bash"),
        (mt.a = null),
        u(b, "class", "language-bash"),
        (bt.a = null),
        u(g, "class", "language-bash"),
        (Pt.a = null),
        u(H, "class", "language-bash"),
        (Tt.a = null),
        u(z, "class", "language-bash"),
        (Rt.a = null),
        u(R, "class", "language-bash"),
        (Ot.a = null),
        u(I, "class", "language-bash"),
        (qt.a = null),
        u(j, "class", "language-bash"),
        (Kt.a = null),
        u(D, "class", "language-json"),
        (Vt.a = null),
        u(K, "class", "language-bash"),
        (ee.a = null),
        u(B, "class", "language-bash"),
        u(f, "start", "3"),
        (pe.a = null),
        u(tt, "class", "language-bash"),
        (re.a = null),
        u(lt, "class", "language-bash"),
        (ce.a = null),
        u(at, "class", "language-bash"),
        (xe.a = null),
        u(it, "class", "language-bash");
    },
    m(t, l) {
      s(t, c, l),
        s(t, ut, l),
        s(t, m, l),
        s(t, rt, l),
        s(t, x, l),
        ht.m(xl, x),
        s(t, vt, l),
        s(t, C, l),
        s(t, ct, l),
        s(t, _, l),
        s(t, ft, l),
        s(t, b, l),
        mt.m(Cl, b),
        s(t, xt, l),
        s(t, w, l),
        s(t, Ct, l),
        s(t, k, l),
        s(t, _t, l),
        s(t, g, l),
        bt.m(_l, g),
        s(t, wt, l),
        s(t, d, l),
        s(t, kt, l),
        s(t, P, l),
        s(t, gt, l),
        s(t, y, l),
        s(t, dt, l),
        s(t, H, l),
        Pt.m(bl, H),
        s(t, yt, l),
        s(t, E, l),
        s(t, Ht, l),
        s(t, T, l),
        s(t, Et, l),
        s(t, z, l),
        Tt.m(wl, z),
        s(t, zt, l),
        s(t, L, l),
        s(t, Lt, l),
        s(t, M, l),
        s(t, Mt, l),
        s(t, R, l),
        Rt.m(kl, R),
        s(t, St, l),
        s(t, S, l),
        s(t, It, l),
        s(t, I, l),
        Ot.m(gl, I),
        s(t, jt, l),
        s(t, O, l),
        s(t, Zt, l),
        s(t, j, l),
        qt.m(dl, j),
        s(t, Ft, l),
        s(t, Z, l),
        s(t, $t, l),
        s(t, q, l),
        s(t, Dt, l),
        s(t, F, l),
        s(t, Ut, l),
        s(t, $, l),
        s(t, At, l),
        s(t, D, l),
        Kt.m(Pl, D),
        s(t, Gt, l),
        s(t, U, l),
        s(t, Nt, l),
        s(t, A, l),
        s(t, Yt, l),
        s(t, K, l),
        Vt.m(yl, K),
        s(t, Wt, l),
        s(t, G, l),
        s(t, Bt, l),
        s(t, N, l),
        s(t, Jt, l),
        s(t, Y, l),
        s(t, Qt, l),
        s(t, V, l),
        s(t, Xt, l),
        s(t, W, l),
        s(t, te, l),
        s(t, B, l),
        ee.m(Hl, B),
        s(t, le, l),
        s(t, f, l),
        s(t, se, l),
        s(t, J, l),
        s(t, ae, l),
        s(t, Q, l),
        s(t, ne, l),
        s(t, X, l),
        s(t, ie, l),
        s(t, tt, l),
        pe.m(El, tt),
        s(t, oe, l),
        s(t, et, l),
        s(t, ue, l),
        s(t, lt, l),
        re.m(Tl, lt),
        s(t, he, l),
        s(t, st, l),
        s(t, ve, l),
        s(t, at, l),
        ce.m(zl, at),
        s(t, fe, l),
        s(t, nt, l),
        s(t, me, l),
        s(t, it, l),
        xe.m(Ll, it),
        s(t, Ce, l),
        s(t, pt, l),
        s(t, _e, l),
        s(t, ot, l);
    },
    p: be,
    i: be,
    o: be,
    d(t) {
      t &&
        (e(c),
        e(ut),
        e(m),
        e(rt),
        e(x),
        e(vt),
        e(C),
        e(ct),
        e(_),
        e(ft),
        e(b),
        e(xt),
        e(w),
        e(Ct),
        e(k),
        e(_t),
        e(g),
        e(wt),
        e(d),
        e(kt),
        e(P),
        e(gt),
        e(y),
        e(dt),
        e(H),
        e(yt),
        e(E),
        e(Ht),
        e(T),
        e(Et),
        e(z),
        e(zt),
        e(L),
        e(Lt),
        e(M),
        e(Mt),
        e(R),
        e(St),
        e(S),
        e(It),
        e(I),
        e(jt),
        e(O),
        e(Zt),
        e(j),
        e(Ft),
        e(Z),
        e($t),
        e(q),
        e(Dt),
        e(F),
        e(Ut),
        e($),
        e(At),
        e(D),
        e(Gt),
        e(U),
        e(Nt),
        e(A),
        e(Yt),
        e(K),
        e(Wt),
        e(G),
        e(Bt),
        e(N),
        e(Jt),
        e(Y),
        e(Qt),
        e(V),
        e(Xt),
        e(W),
        e(te),
        e(B),
        e(le),
        e(f),
        e(se),
        e(J),
        e(ae),
        e(Q),
        e(ne),
        e(X),
        e(ie),
        e(tt),
        e(oe),
        e(et),
        e(ue),
        e(lt),
        e(he),
        e(st),
        e(ve),
        e(at),
        e(fe),
        e(nt),
        e(me),
        e(it),
        e(Ce),
        e(pt),
        e(_e),
        e(ot));
    }
  };
}
const Zl = {
  title: "就是试试罢了没什么😐",
  imgUrl: "/post-images/terminal-setup.jpg",
  youtubeId: "CF1tMjvHDRA",
  publishedAt: "2024-7-28",
  summary:
    "什么鬼啊写一个长一点的summary，这是什么猫猫，⚠️厉害了，还不错，这下有的玩了哈啊哈"
};
class ql extends Rl {
  constructor(c) {
    super(), Sl(this, c, null, Il, Ml, {});
  }
}
export { ql as default, Zl as metadata };
