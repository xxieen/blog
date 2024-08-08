import{s as Y,n as R}from"./scheduler.DKuV8lkR.js";import{S as Z,i as $,e as p,s as c,H as D,c as o,g as f,a as l,b as G,d as N,f as s,h as z,j as t}from"./index.BWbrWu7K.js";function nn(O){let e,S="求最大公约数GCD（Greatest Common Divisor）",g,k,j="辗转相除法",_,u,h,Q=`<code class="language-cpp"><span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">!</span>b <span class="token operator">?</span> a <span class="token operator">:</span> <span class="token function">gcd</span><span class="token punctuation">(</span>b <span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归</span>

<span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token comment">// 迭代</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>b <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> b<span class="token punctuation">;</span>
        b <span class="token operator">=</span> a <span class="token operator">%</span> b<span class="token punctuation">;</span>
        a <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,v,i,A="求最小公倍数LCM（Least Common Multiple）",x,r,U="两个数的最小公倍数等于这 <strong>两个数的乘积</strong> 除以它们的 <strong>最大公约数</strong>",C,m,H,V=`<code class="language-cpp"><span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">!</span>b <span class="token operator">?</span> a <span class="token operator">:</span> <span class="token function">gcd</span><span class="token punctuation">(</span>b <span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">lcm</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token keyword">return</span> a <span class="token operator">/</span> <span class="token function">gcd</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> b<span class="token punctuation">;</span> <span class="token comment">// 先除再乘，防止溢出</span></code>`,E,d,B='<a href="https://leetcode.cn/problems/find-greatest-common-divisor-of-array/" rel="nofollow">1979. 找出数组的最大公约数</a>',M,w,L,W=`<code class="language-cpp"><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">&#123;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 函数用于查找向量中的元素的最大公约数</span>
    <span class="token keyword">int</span> <span class="token function">findGCD</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span><span class="token operator">&amp;</span> nums<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// 找到向量中的最小和最大元素</span>
        <span class="token keyword">auto</span> <span class="token punctuation">[</span>minElem<span class="token punctuation">,</span> maxElem<span class="token punctuation">]</span> <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">minmax_element</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nums<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 返回最小和最大元素的最大公约数</span>
        <span class="token keyword">return</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token operator">*</span>minElem<span class="token punctuation">,</span> <span class="token operator">*</span>maxElem<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 使用欧几里得算法计算两个数的最大公约数</span>
    <span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// 欧几里得算法的原理是两个数的最大公约数也能整除它们的差</span>
        <span class="token comment">// 因此，GCD(a, b) = GCD(b, a % b)，直到 b 变为 0</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>b <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token comment">// 将当前的 b 值存储在临时变量中</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> b<span class="token punctuation">;</span>
            <span class="token comment">// 更新 b 为 a 除以 b 的余数</span>
            b <span class="token operator">=</span> a <span class="token operator">%</span> b<span class="token punctuation">;</span>
            <span class="token comment">// 更新 a 为之前的 b 的值</span>
            a <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        <span class="token comment">// 当 b 变为 0 时，a 包含了原始 a 和 b 的最大公约数</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,T,b,F='<a href="https://leetcode.cn/problems/nth-magical-number/" rel="nofollow">878. 第 N 个神奇数字</a>',q,y,P,X=`<code class="language-cpp"><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">&#123;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 计算第 n 个魔法数</span>
    <span class="token keyword">int</span> <span class="token function">nthMagicalNumber</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// 计算 a 和 b 的最小公倍数（lcm）</span>
        <span class="token keyword">long</span> <span class="token keyword">long</span> lcmNum <span class="token operator">=</span> <span class="token function">lcm</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 计算初始的二分查找范围</span>
        <span class="token keyword">long</span> <span class="token keyword">long</span> left <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最小的魔法数</span>
        <span class="token keyword">long</span> <span class="token keyword">long</span> right <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span> n <span class="token operator">*</span> <span class="token function">min</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最大的魔法数，确保包含第 n 个魔法数</span>

        <span class="token comment">// 取模数，防止结果过大</span>
        <span class="token keyword">long</span> <span class="token keyword">long</span> mod <span class="token operator">=</span> <span class="token number">1e9</span> <span class="token operator">+</span> <span class="token number">7</span><span class="token punctuation">;</span>

        <span class="token comment">// 使用二分查找找到第 n 个魔法数</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token comment">// 计算中间值</span>
            <span class="token keyword">long</span> <span class="token keyword">long</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>

            <span class="token comment">// 计算 mid 之前有多少个魔法数</span>
            <span class="token comment">// mid / a + mid / b - mid / lcmNum</span>
            <span class="token comment">// 使用容斥原理来计算</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">/</span> a <span class="token operator">+</span> mid <span class="token operator">/</span> b <span class="token operator">-</span> mid <span class="token operator">/</span> lcmNum <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                <span class="token comment">// 如果魔法数的数量少于 n，移动左边界</span>
                left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
                <span class="token comment">// 如果魔法数的数量大于等于 n，移动右边界</span>
                right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token comment">// 返回结果对 1e9 + 7 取模后的值</span>
        <span class="token keyword">return</span> left <span class="token operator">%</span> mod<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 计算最大公约数（gcd）</span>
    <span class="token keyword">int</span> <span class="token function">gcd</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">return</span> <span class="token operator">!</span>b <span class="token operator">?</span> a <span class="token operator">:</span> <span class="token function">gcd</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 计算最小公倍数（lcm）</span>
    <span class="token keyword">long</span> <span class="token keyword">long</span> <span class="token function">lcm</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// 使用公式：lcm(a, b) = (a / gcd(a, b)) * b</span>
        <span class="token comment">// 防止溢出，先计算 a / gcd(a, b)，再乘以 b</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">long</span> <span class="token keyword">long</span><span class="token punctuation">)</span> a <span class="token operator">/</span> <span class="token function">gcd</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">*</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`;return{c(){e=p("h2"),e.textContent=S,g=c(),k=p("p"),k.textContent=j,_=c(),u=p("pre"),h=new D(!1),v=c(),i=p("h2"),i.textContent=A,x=c(),r=p("p"),r.innerHTML=U,C=c(),m=p("pre"),H=new D(!1),E=c(),d=p("h3"),d.innerHTML=B,M=c(),w=p("pre"),L=new D(!1),T=c(),b=p("h3"),b.innerHTML=F,q=c(),y=p("pre"),P=new D(!1),this.h()},l(n){e=o(n,"H2",{"data-svelte-h":!0}),f(e)!=="svelte-1ej4lgq"&&(e.textContent=S),g=l(n),k=o(n,"P",{"data-svelte-h":!0}),f(k)!=="svelte-qvxmda"&&(k.textContent=j),_=l(n),u=o(n,"PRE",{class:!0});var a=G(u);h=N(a,!1),a.forEach(s),v=l(n),i=o(n,"H2",{"data-svelte-h":!0}),f(i)!=="svelte-17pq0wz"&&(i.textContent=A),x=l(n),r=o(n,"P",{"data-svelte-h":!0}),f(r)!=="svelte-lq6qzm"&&(r.innerHTML=U),C=l(n),m=o(n,"PRE",{class:!0});var I=G(m);H=N(I,!1),I.forEach(s),E=l(n),d=o(n,"H3",{"data-svelte-h":!0}),f(d)!=="svelte-1f3e6o4"&&(d.innerHTML=B),M=l(n),w=o(n,"PRE",{class:!0});var J=G(w);L=N(J,!1),J.forEach(s),T=l(n),b=o(n,"H3",{"data-svelte-h":!0}),f(b)!=="svelte-rbxzrz"&&(b.innerHTML=F),q=l(n),y=o(n,"PRE",{class:!0});var K=G(y);P=N(K,!1),K.forEach(s),this.h()},h(){h.a=null,z(u,"class","language-cpp"),H.a=null,z(m,"class","language-cpp"),L.a=null,z(w,"class","language-cpp"),P.a=null,z(y,"class","language-cpp")},m(n,a){t(n,e,a),t(n,g,a),t(n,k,a),t(n,_,a),t(n,u,a),h.m(Q,u),t(n,v,a),t(n,i,a),t(n,x,a),t(n,r,a),t(n,C,a),t(n,m,a),H.m(V,m),t(n,E,a),t(n,d,a),t(n,M,a),t(n,w,a),L.m(W,w),t(n,T,a),t(n,b,a),t(n,q,a),t(n,y,a),P.m(X,y)},p:R,i:R,o:R,d(n){n&&(s(e),s(g),s(k),s(_),s(u),s(v),s(i),s(x),s(r),s(C),s(m),s(E),s(d),s(M),s(w),s(T),s(b),s(q),s(y))}}}const tn={title:"最大公约数以及最小公倍数",imgUrl:"/post-images/gcd.png",publishedAt:"2024-08-08",summary:"解决leetcode问题中最大公约数以及最小公倍数相关问题"};class pn extends Z{constructor(e){super(),$(this,e,null,nn,Y,{})}}export{pn as default,tn as metadata};
