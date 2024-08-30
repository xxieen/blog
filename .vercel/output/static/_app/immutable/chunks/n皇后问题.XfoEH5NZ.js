import{s as q,n as _}from"./scheduler.DKuV8lkR.js";import{S as z,i as R,e as u,s as r,H as P,c as i,g as j,a as m,b as E,d as H,f as a,h as x,j as t}from"./index.BWbrWu7K.js";function B(Q){let p,L='<a href="https://leetcode.cn/problems/n-queens-ii/" rel="nofollow">52. N 皇后 II</a>',d,o,w,S=`<code class="language-cpp"><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">&#123;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 计算n皇后问题的解的总数</span>
    <span class="token keyword">int</span> <span class="token function">totalNQueens</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">path</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储每一行皇后的位置，path[i] 表示第i行皇后放置在第path[i]列</span>
        <span class="token keyword">return</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从第0行开始回溯</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 回溯函数，i表示当前要处理的行</span>
    <span class="token keyword">int</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span><span class="token operator">&amp;</span> path<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 如果所有行都处理完了，说明找到一个有效方案</span>
        <span class="token punctuation">&#125;</span>

        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录当前情况下的有效解的数量</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token comment">// 遍历第i行的每一列</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span> <span class="token comment">// 判断在第i行第j列放置皇后是否有效</span>
                path<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> j<span class="token punctuation">;</span> <span class="token comment">// 将皇后放在第i行第j列</span>
                ans <span class="token operator">+=</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归处理下一行</span>
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token keyword">return</span> ans<span class="token punctuation">;</span> <span class="token comment">// 返回当前行的有效解的数量</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 检查在第i行第j列放置皇后是否与之前放置的皇后冲突</span>
    <span class="token keyword">bool</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">,</span> <span class="token keyword">const</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span><span class="token operator">&amp;</span> path<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// 遍历之前所有的行，检查冲突</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> <span class="token operator">++</span>k<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            <span class="token comment">// 检查是否与第k行的皇后在同一列或对角线</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> path<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token function">abs</span><span class="token punctuation">(</span>i <span class="token operator">-</span> k<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">abs</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">-</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 没有冲突，可以安全放置</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,b,e,T="<strong><em>位运算版本</em></strong> 重要‼️",y,c,f,A=`<code class="language-cpp"><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">&#123;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 主函数：计算 n 皇后问题的总解数</span>
    <span class="token keyword">int</span> <span class="token function">totalNQueens</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">int</span> limit <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> n<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 生成位掩码的限制，例如 n=4 时 limit = 01111</span>
        <span class="token keyword">return</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>limit<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用回溯函数</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 回溯函数：计算当前状态下的可行解数</span>
    <span class="token comment">// col,left,right 中为1的位表示该列不能放置皇后</span>
    <span class="token keyword">int</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">int</span> limit<span class="token punctuation">,</span> <span class="token keyword">int</span> col<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// 如果所有列都已经被占用，说明找到了一种解法</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>col <span class="token operator">==</span> limit<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>                      <span class="token comment">// 初始化解数</span>
        <span class="token keyword">int</span> blocked <span class="token operator">=</span> col <span class="token operator">|</span> left <span class="token operator">|</span> right<span class="token punctuation">;</span> <span class="token comment">// 计算当前被阻塞的位置</span>
        <span class="token comment">// ~blocked：取反，得到可以放置皇后的位置，然后与 limit</span>
        <span class="token comment">// 进行与操作，保证不会超出 n 列的范围</span>
        <span class="token keyword">int</span> availablePositions <span class="token operator">=</span> <span class="token operator">~</span>blocked <span class="token operator">&amp;</span> limit<span class="token punctuation">;</span>
        <span class="token keyword">int</span> position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">// 遍历所有可以放置皇后的位置</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>availablePositions<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            position <span class="token operator">=</span> availablePositions <span class="token operator">&amp;</span> <span class="token operator">-</span>availablePositions<span class="token punctuation">;</span> <span class="token comment">// 获取最低位的 1，例如 0010</span>
            availablePositions <span class="token operator">^=</span> position<span class="token punctuation">;</span> <span class="token comment">// 清除已经处理过的位置，例如 1110 ^= 0010 -> 1100</span>

            <span class="token comment">// 递归调用：等于进入下一行</span>
            <span class="token comment">// col | position：更新当前列的状态</span>
            <span class="token comment">// (left | position) &lt;&lt; 1：更新左对角线的状态，左移一位</span>
            <span class="token comment">// (right | position) >> 1：更新右对角线的状态，右移一位</span>
            ans <span class="token operator">+=</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>limit<span class="token punctuation">,</span> col <span class="token operator">|</span> position<span class="token punctuation">,</span> <span class="token punctuation">(</span>left <span class="token operator">|</span> position<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
                                <span class="token punctuation">(</span>right <span class="token operator">|</span> position<span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>

        <span class="token keyword">return</span> ans<span class="token punctuation">;</span> <span class="token comment">// 返回总解数</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,h,l,I='<a href="https://leetcode.cn/problems/n-queens/" rel="nofollow">51. N 皇后</a>',g,k,v,C=`<code class="language-cpp"><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">&#123;</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span>string<span class="token operator">>></span> <span class="token function">solveNQueens</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span>string<span class="token operator">>></span> results<span class="token punctuation">;</span>          <span class="token comment">// 用于存储所有解法</span>
        vector<span class="token operator">&lt;</span>string<span class="token operator">></span> <span class="token function">board</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token char">'.'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化棋盘，全部置为 '.'</span>
        <span class="token keyword">int</span> limit <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> n<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 生成位掩码的限制，例如 n=4 时 limit = 01111</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>limit<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> board<span class="token punctuation">,</span> results<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> results<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// 回溯函数：计算当前状态下的可行解数</span>
    <span class="token comment">// col,left,right 中为1的位表示该列不能放置皇后</span>
    <span class="token comment">// row 记录递归的层数，即当前第几行</span>
    <span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token keyword">int</span> limit<span class="token punctuation">,</span> <span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">int</span> col<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">,</span>
                      vector<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token operator">&amp;</span> board<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span>string<span class="token operator">>></span><span class="token operator">&amp;</span> results<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// 如果所有列都已经被占用，说明找到了一种解法</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>col <span class="token operator">==</span> limit<span class="token punctuation">)</span> results<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> blocked <span class="token operator">=</span> col <span class="token operator">|</span> left <span class="token operator">|</span> right<span class="token punctuation">;</span> <span class="token comment">// 计算当前被阻塞的位置</span>
        <span class="token comment">// ~blocked：取反，得到可以放置皇后的位置，然后与 limit</span>
        <span class="token comment">// 进行与操作，保证不会超出 n 列的范围</span>
        <span class="token keyword">int</span> availablePositions <span class="token operator">=</span> <span class="token operator">~</span>blocked <span class="token operator">&amp;</span> limit<span class="token punctuation">;</span>
        <span class="token keyword">int</span> position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">// 遍历所有可以放置皇后的位置</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>availablePositions<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
            position <span class="token operator">=</span> availablePositions <span class="token operator">&amp;</span> <span class="token operator">-</span>availablePositions<span class="token punctuation">;</span> <span class="token comment">// 获取最低位的 1，例如 0010</span>
            availablePositions <span class="token operator">^=</span> position<span class="token punctuation">;</span> <span class="token comment">// 清除已经处理过的位置，例如 1110 ^= 0010 -> 1100</span>

            <span class="token comment">// 计算当前列的位置</span>
            <span class="token comment">// 获取最右侧有几个0 用于计算尾部0的个数，即最低位的1的位置。</span>
            <span class="token comment">// int colIndex = __builtin_ctz(position);</span>
            <span class="token keyword">int</span> colIndex <span class="token operator">=</span> <span class="token function">findLowestBitPosition</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
            board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>colIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'Q'</span><span class="token punctuation">;</span> <span class="token comment">// 放置皇后</span>
            <span class="token comment">// 递归调用：等于进入下一行 row + 1</span>
            <span class="token comment">// col | position：更新当前列的状态</span>
            <span class="token comment">// (left | position) &lt;&lt; 1：更新左对角线的状态，左移一位</span>
            <span class="token comment">// (right | position) >> 1：更新右对角线的状态，右移一位</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>limit<span class="token punctuation">,</span> row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> col <span class="token operator">|</span> position<span class="token punctuation">,</span> <span class="token punctuation">(</span>left <span class="token operator">|</span> position<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
                         <span class="token punctuation">(</span>right <span class="token operator">|</span> position<span class="token punctuation">)</span> <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">,</span> board<span class="token punctuation">,</span> results<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 回溯 撤销放置皇后</span>
            board<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>colIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'.'</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token keyword">int</span> <span class="token function">findLowestBitPosition</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">int</span> position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">>>=</span> <span class="token number">1</span><span class="token punctuation">)</span> position<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> position<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`;return{c(){p=u("h3"),p.innerHTML=L,d=r(),o=u("pre"),w=new P(!1),b=r(),e=u("p"),e.innerHTML=T,y=r(),c=u("pre"),f=new P(!1),h=r(),l=u("h3"),l.innerHTML=I,g=r(),k=u("pre"),v=new P(!1),this.h()},l(n){p=i(n,"H3",{"data-svelte-h":!0}),j(p)!=="svelte-1vjz5ha"&&(p.innerHTML=L),d=m(n),o=i(n,"PRE",{class:!0});var s=E(o);w=H(s,!1),s.forEach(a),b=m(n),e=i(n,"P",{"data-svelte-h":!0}),j(e)!=="svelte-gk9bzf"&&(e.innerHTML=T),y=m(n),c=i(n,"PRE",{class:!0});var M=E(c);f=H(M,!1),M.forEach(a),h=m(n),l=i(n,"H3",{"data-svelte-h":!0}),j(l)!=="svelte-p6d2vo"&&(l.innerHTML=I),g=m(n),k=i(n,"PRE",{class:!0});var N=E(k);v=H(N,!1),N.forEach(a),this.h()},h(){w.a=null,x(o,"class","language-cpp"),f.a=null,x(c,"class","language-cpp"),v.a=null,x(k,"class","language-cpp")},m(n,s){t(n,p,s),t(n,d,s),t(n,o,s),w.m(S,o),t(n,b,s),t(n,e,s),t(n,y,s),t(n,c,s),f.m(A,c),t(n,h,s),t(n,l,s),t(n,g,s),t(n,k,s),v.m(C,k)},p:_,i:_,o:_,d(n){n&&(a(p),a(d),a(o),a(b),a(e),a(y),a(c),a(h),a(l),a(g),a(k))}}}const F={title:"n皇后问题的解法",imgUrl:"/post-images/nQueue.webp",publishedAt:"2024-8-31",summary:"n皇后问题的位运算解决方法"};class G extends z{constructor(p){super(),R(this,p,null,B,q,{})}}export{G as default,F as metadata};
