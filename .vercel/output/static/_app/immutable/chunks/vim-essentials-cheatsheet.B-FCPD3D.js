import{s as hn,n as Hd}from"./scheduler.DYjdgHML.js";import{S as mn,i as vn,e as n,s as i,c as r,g as l,a as s,j as d,f as o}from"./index.CmMY3o3i.js";function pn(un){let c,_d=`This is my Vim cheatsheet with all of the most essential commands! You can check out my
youtube video for a complete guide on how almost all of these work and how
I go about remembering them.`,Yt,a,kd="Changing Vim Modes",Vt,u,qd="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>i</code></td> <td>Enter <strong>INSERT</strong> mode</td></tr> <tr><td><code>a</code></td> <td>Enter <strong>INSERT</strong> mode after the cursor (think: <strong>append</strong>)</td></tr> <tr><td><code>A</code></td> <td>Enter <strong>INSERT</strong> mode at the end of the line (think: <strong>Append</strong>)</td></tr> <tr><td><code>o</code></td> <td><strong>Open</strong> new line below the cursor and enter <strong>INSERT</strong> mode</td></tr> <tr><td><code>O</code></td> <td><strong>Open</strong> new line above the cursor and enter <strong>INSERT</strong> mode</td></tr> <tr><td><code>v</code></td> <td>Enter <strong>VISUAL</strong> mode</td></tr> <tr><td><code>Ctrl-v</code></td> <td>Enter <strong>VISUAL-BLOCK</strong> mode</td></tr> <tr><td><code>:</code></td> <td>Enter <strong>COMMAND-LINE</strong> mode</td></tr> <tr><td><code>R</code></td> <td>Enter <strong>REPLACE</strong> mode</td></tr> <tr><td><code>ESC</code></td> <td>Go back to <strong>NORMAL</strong> mode from other modes</td></tr></tbody>",Ft,h,Dd="Exiting",Jt,m,Ad="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>:w</code></td> <td><strong>Write</strong> (save) file without exiting</td></tr> <tr><td><code>:wa</code></td> <td><strong>Write</strong> (save) all open files without exiting</td></tr> <tr><td><code>:q</code></td> <td><strong>Quit</strong> but fail if unsaved changes exist</td></tr> <tr><td><code>:q!</code></td> <td><strong>Quit</strong> and discard unsaved changes</td></tr> <tr><td><code>:wq</code> or <code>:x</code></td> <td><strong>Write</strong> (save) and <strong>quit</strong></td></tr> <tr><td><code>:wqa</code></td> <td><strong>Write</strong> and <strong>quit</strong> on all open files</td></tr></tbody>",Qt,v,Ed="Moving Around Within Vim",Kt,p,Pd="Arrows",$t,f,Rd="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>h</code></td> <td>Move cursor left (left most)</td></tr> <tr><td><code>j</code></td> <td>Move cursor down (looks like down arrow)</td></tr> <tr><td><code>k</code></td> <td>Move cursor up</td></tr> <tr><td><code>l</code></td> <td>Move cursor right (right most)</td></tr></tbody>",Xt,b,jd="Movements Within A Line",Zt,x,Bd="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>$</code></td> <td>Move cursor to the end of the line</td></tr> <tr><td><code>0</code></td> <td>Move cursor to the beginning of the line</td></tr> <tr><td><code>^</code></td> <td>Move cursor to first non-blank character in line</td></tr> <tr><td><code>fx</code></td> <td><strong>Find</strong> next occurrence of character ‘x’</td></tr> <tr><td><code>Fx</code></td> <td><strong>Find</strong> previous occurrence of character ‘x’</td></tr> <tr><td><code>tx</code></td> <td>Go <strong>towards</strong> next occurrence of character ‘x’ (stops right before it)</td></tr> <tr><td><code>Tx</code></td> <td>Go <strong>towards</strong> previous occurence of character ‘x’ (stops right before it)</td></tr> <tr><td><code>;</code></td> <td>Repeat previous <code>f</code>, <code>F</code>, <code>t</code>, or <code>T</code> movement forwards</td></tr> <tr><td><code>,</code></td> <td>Repeat previous <code>f</code>, <code>F</code>, <code>t</code>, or <code>T</code> movement backwards</td></tr></tbody>",te,C,Sd="Word Movements",ee,g,Od="Definitions:",de,T,Nd="<li><strong>word</strong>: Sequence of letters, digits and underscores OR sequence of other symbols, separated by whitespace. Use <code>:h word</code> to learn more.</li> <li><strong>WORD</strong>: Any sequence of non-blank characters (any symbols, letters, digits, etc…), separated by whitespace. Use <code>:h WORD</code> to learn more.</li>",oe,w,Gd="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>w</code></td> <td>Move cursor forwards to start of <strong>word</strong> (sequence of letters, digits, underscores OR sequence of other symbols)</td></tr> <tr><td><code>W</code></td> <td>Move cursor forwards to start of <strong>WORD</strong> (any sequence of non-blank characters)</td></tr> <tr><td><code>b</code></td> <td>Move cursor backwards to start of <strong>word</strong> (sequence of letters, digits, underscores OR sequence of other symbols)</td></tr> <tr><td><code>B</code></td> <td>Move cursor backwards to start of <strong>WORD</strong> (any sequence of non-blank characters)</td></tr> <tr><td><code>e</code></td> <td>Move cursor forwards to end of <strong>word</strong> (sequence of letters, digits, underscores OR sequence of other symbols)</td></tr> <tr><td><code>E</code></td> <td>Move cursor forwards to end of <strong>WORD</strong> (any sequence of non-blank characters)</td></tr> <tr><td><code>ge</code></td> <td>Move cursor backwards to end of <strong>word</strong> (sequence of letters, digits, underscores OR sequence of other symbols)</td></tr> <tr><td><code>gE</code></td> <td>Move cursor backwards to end of <strong>WORD</strong> (any sequence of non-blank characters)</td></tr></tbody>",ne,y,Id="Sentence Movements",re,M,Ud="Definitions",le,L,Wd="<li><strong>sentence</strong>: A <strong>sentence</strong> ends with a ”.”, ”!” or ”?” followed by the end of the line, a space or tab. Use <code>:h sentence</code> to learn more.</li>",ie,H,zd="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>)</code></td> <td>Move cursor to next <strong>sentence</strong></td></tr> <tr><td><code>(</code></td> <td>Move cursor to previous <strong>sentence</strong></td></tr></tbody>",se,_,Yd="Paragraph Movements",ce,k,Vd="Definitions:",ae,q,Fd="<li><strong>paragraph</strong>: Blocks of consecutive non-empty lines. NOTE: Line with white space is not empty. Use <code>:h paragraph</code> to learn more.</li>",ue,D,Jd="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>}</code></td> <td>Move cursor to next <strong>paragraph</strong> (block of consecutive non-empty lines)</td></tr> <tr><td><code>{</code></td> <td>Move cursor to previous <strong>paragraph</strong> (block of consecutive non-empty lines)</td></tr></tbody>",he,A,Qd="Moving To Specific Lines",me,E,Kd="<strong>Note</strong>: Replace <code>{number}</code> with an actual number. You can also use numbers in front of other cursor movements like <code>{number}w</code>, <code>{number}b</code> or <code>{number}</code> and many others.",ve,P,$d="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>gg</code></td> <td>Move cursor to first line of document</td></tr> <tr><td><code>G</code></td> <td>Move cursor to last line of document</td></tr> <tr><td><code>{number}G</code></td> <td>Move cursor to line <code>{number}</code></td></tr> <tr><td><code>{number}j</code></td> <td>Go <code>{number}</code> lines down</td></tr> <tr><td><code>{number}k</code></td> <td>Go <code>{number}</code> lines up</td></tr> <tr><td><code>H</code></td> <td>Move cursor to line at the top of the window</td></tr> <tr><td><code>M</code></td> <td>Move cursor to the line at the middle of the window</td></tr> <tr><td><code>L</code></td> <td>Move cursor to the line at the bottom of the window</td></tr></tbody>",pe,R,Xd="Parenthesis, Bracket, Curly Brace and Method Navigation",fe,j,Zd="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>%</code></td> <td>Find next parenthesis, bracket or curly brace in front of or under the cursor and jump to its match</td></tr> <tr><td><code>[(</code></td> <td>Go to previous unmatched <code>(</code></td></tr> <tr><td><code>[{</code></td> <td>Go to previous unmatched <code>{</code></td></tr> <tr><td><code>])</code></td> <td>Go to next unmatched <code>)</code></td></tr> <tr><td><code>]}</code></td> <td>Go to next unmatched <code>}</code></td></tr> <tr><td><code>]m</code></td> <td>Go to next start of method (Java like languages)</td></tr> <tr><td><code>]M</code></td> <td>Go to next end of method</td></tr> <tr><td><code>[m</code></td> <td>Go to previous start of method</td></tr> <tr><td><code>[M</code></td> <td>Go to previous end of method</td></tr></tbody>",be,B,to="Screen Related Cursor Movements",xe,S,eo="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>Ctrl-F</code></td> <td>Move cursor <strong>forwards</strong> one full screen</td></tr> <tr><td><code>Ctrl-B</code></td> <td>Move cursor <strong>backwards</strong> one full screen</td></tr> <tr><td><code>Ctrl-D</code></td> <td>Move cursor <strong>down</strong> half a screen</td></tr> <tr><td><code>Ctrl-U</code></td> <td>Move cursor <strong>up</strong> half a screen</td></tr></tbody>",Ce,O,oo="Scrolling While Leaving Cursor In Place",ge,N,no="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>zz</code></td> <td>Place current cursor line in the middle of the window</td></tr> <tr><td><code>zt</code></td> <td>Place current cursor line at the top of the window</td></tr> <tr><td><code>zb</code></td> <td>Place current cursor line at the bottom of the window</td></tr> <tr><td><code>Ctrl-E</code></td> <td>Scroll down a single line, leaving cursor in place</td></tr> <tr><td><code>Ctrl-Y</code></td> <td>Scroll up a single line, leaving cursor in place</td></tr></tbody>",Te,G,ro="Search Movements",we,I,lo="<strong>Note</strong>: Use <code>:set ignorecase</code> for case insensitive searching and <code>:set smartcase</code> to override case insensitivity if search pattern has upper case characters.",ye,U,io="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>/pattern</code></td> <td>Search forward for pattern</td></tr> <tr><td><code>?pattern</code></td> <td>Search backward for pattern</td></tr> <tr><td><code>*</code></td> <td>Search forward for the word under or in front of the cursor</td></tr> <tr><td><code>#</code></td> <td>Search backward for the word under or in front of the cursor</td></tr> <tr><td><code>n</code></td> <td>Repeat last search in same direction</td></tr> <tr><td><code>N</code></td> <td>Repeat last search in opposite direction</td></tr></tbody>",Me,W,so="<strong>Tip</strong>: Use <code>:nohl</code> after a search to temporarily turn off search highlights until another search command is used.",Le,z,co="Navigating The Jump List",He,Y,ao="Context",_e,V,uo="Certain vim movements that move the cursor several lines away will add entries to the <strong>jumplist</strong>. You can display the <strong>jumplist</strong> with <code>:jump</code>.",ke,F,ho="Common commands that will add entries to the jumplist: <code>G</code>, <code>gg</code>, <code>[number]G</code>, <code>/</code>,<code>?</code>, <code>n</code>, <code>N</code>, <code>%</code>, <code>(</code>, <code>)</code>, <code>{</code>, <code>}</code>, <code>:s</code>, <code>L</code>, <code>M</code>, <code>H</code>. Navigating to a different file/buffer in the same window also works.",qe,J,mo="<strong>IMPORTANT</strong>: <code>[number]j</code> and <code>[number]k</code> will not add entries to the jumplist.",De,Q,vo="For a complete list of commands that add entries to the jumplist use <code>:h jump-motions</code>.",Ae,K,po="<em>I use this often to navigate from and to different buffers/files in the same window.</em>",Ee,$,fo="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>Ctrl-O</code></td> <td>Go to the previous cursor position in the jump list</td></tr> <tr><td><code>Ctrl-I</code></td> <td>Go to the next cursor position in the jump list</td></tr></tbody>",Pe,X,bo="Editing Text",Re,Z,xo="<em>Now that you know how to move within Vim, editing text will go hand in hand with Vim movements.</em>",je,tt,Co="<strong>Note</strong>: A <code>{motion}</code> is a Vim command that moves the cursor. Like many of the commands described in the previous section.",Be,et,go="Deletion",Se,dt,To="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>d{motion}</code></td> <td>Delete the text that the <code>{motion}</code> command moves over and copy into register.</td></tr> <tr><td><code>dd</code></td> <td>Delete whole current line and copy into register.</td></tr> <tr><td><code>D</code></td> <td>Delete from under the cursor to the end of the line and copy into register.</td></tr></tbody>",Oe,ot,wo="<strong>Tip</strong>: You can also use a <code>{number}</code> before these commands to execute the deletion that <code>{number}</code> of times.",Ne,nt,yo="Some Examples",Ge,rt,Mo="<thead><tr><th>Example</th> <th>Description</th></tr></thead> <tbody><tr><td><code>dw</code></td> <td>Delete from cursors current position to start of next <strong>word</strong></td></tr> <tr><td><code>de</code></td> <td>Delete from cursors current position to end of <strong>word</strong></td></tr> <tr><td><code>dG</code></td> <td>Delete from cursors current position to end of file</td></tr> <tr><td><code>d]}</code></td> <td>Delete from cursors current position to next unmatched <code>}</code></td></tr> <tr><td><code>2dd</code></td> <td>Delete whole line under cursor and line below it.</td></tr></tbody>",Ie,lt,Lo="<em>The possible combinations are endless…</em>",Ue,it,Ho="Undo & Redo",We,st,_o="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>u</code></td> <td>Undo last change</td></tr> <tr><td><code>Ctrl-R</code></td> <td>Redo changes that have been undone with <code>u</code></td></tr></tbody>",ze,ct,ko="<strong>Tip</strong>: You can also use <code>{number}</code> before these undo &amp; redo commands to execute it that <code>{number}</code> of times.",Ye,at,qo="Changing Text",Ve,ut,Do="<strong>Note</strong>: Executing a change command with <code>c</code> is pretty much the same as <code>d</code> except that it takes you into insert mode afterwards.",Fe,ht,Ao="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>c{motion}</code></td> <td>Delete the text that the <code>{motion}</code> command moves over, copy into register and enter insert mode.</td></tr> <tr><td><code>cc</code></td> <td>Delete whole current line, copy into register and enter insert mode.</td></tr> <tr><td><code>C</code></td> <td>Delete from under the cursor to the end of the line, copy into register and enter insert mode.</td></tr></tbody>",Je,mt,Eo="Examples would be the same as with delete but changing <code>c</code> to <code>d</code>.",Qe,vt,Po="Repeating a File Change",Ke,pt,Ro="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>.</code></td> <td>Repeat the last change you made to the file</td></tr></tbody>",$e,ft,jo="<strong>Tip</strong>: You can use <code>{number}</code> before <code>.</code> to repeat the change that <code>{number}</code> of times.",Xe,bt,Bo="<em>This is a really nice one!</em>",Ze,xt,So="Replacing & Deleting Characters",td,Ct,Oo="<strong>Note</strong>: When executing, substitute <code>{character}</code> with an actual character.",ed,gt,No="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>r{character}</code></td> <td>Replace current character under cursor with <code>{character}</code></td></tr> <tr><td><code>R</code></td> <td>Enter replace mode and start replacing characters by typing until <code>ESC</code> is pressed</td></tr> <tr><td><code>x</code></td> <td>Delete current character under the cursor and copy into register</td></tr></tbody>",dd,Tt,Go="<strong>Tip</strong>: You can use <code>{number}</code> before <code>r</code> and <code>x</code> to execute that <code>{number}</code> of times.",od,wt,Io="Yank (Copy) and Paste (Put)",nd,yt,Uo="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>y{motion}</code></td> <td><strong>Yank</strong> or copy text that the motion command moves over into register</td></tr> <tr><td><code>yy</code></td> <td><strong>Yank</strong> or copy whole current line into register</td></tr> <tr><td><code>Y</code></td> <td><strong>Yank</strong> or copy from under the cursor to the end of the line into register</td></tr> <tr><td><code>p</code></td> <td><strong>Put</strong> or <strong>paste</strong> the text found in register (register x) after the cursor</td></tr> <tr><td><code>P</code></td> <td><strong>Put</strong> or <strong>paste</strong> the text found in register (register x) before the cursor</td></tr></tbody>",rd,Mt,Wo="<strong>Tip</strong>: You can use <code>{number}</code> before <code>y</code> or <code>p</code> to repeat the <strong>yank</strong> (copy) or <strong>put</strong> (paste) command that <code>{number}</code> of times.",ld,Lt,zo="<strong>Note</strong>: Commands such as <code>d</code>, <code>c</code> and <code>x</code> mentioned above also copy text into a register. These as well as the <code>y</code> command copy into register x by default.",id,Ht,Yo="Changing Case",sd,_t,Vo="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>~</code></td> <td>Switch case of character under cursor and move cursor to the right</td></tr> <tr><td><code>~{motion}</code></td> <td>Switch the case of the text that the <code>{motion}</code> command moves over</td></tr> <tr><td><code>gu{motion}</code></td> <td>Change the text that the <code>{motion}</code> command moves over to lowercase</td></tr> <tr><td><code>guu</code></td> <td>Make whole current line lower case</td></tr> <tr><td><code>gU{motion}</code></td> <td>Change the text that the <code>{motion}</code> command moves over to uppercase</td></tr> <tr><td><code>gUU</code></td> <td>Make whole current line upper case</td></tr></tbody>",cd,kt,Fo="Search/Replace",ad,qt,Jo="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>:%s/old/new/g</code></td> <td>Replace all occurrences of “old” with “new” in whole file</td></tr> <tr><td><code>:%s/old/new/gc</code></td> <td>Replace all occurrences of “old” with “new” in whole file, asking for confirmation</td></tr> <tr><td><code>:%s/old/new/gi</code></td> <td>Replace all occurrences of “old” with “new” in whole file, ignoring case</td></tr></tbody>",ud,Dt,Qo="Working With Text Objects and Inside/Around 🚀",hd,At,Ko="<em>I personally love using this feature!</em>",md,Et,$o="You can use Vim text objects to execute an operator on that object or select it with Visual mode (Use <code>v</code> to enter visual mode).",vd,Pt,Xo="First, here’s a list of handy text objects to remember.",pd,Rt,Zo="Text Objects To Remember",fd,jt,tn="<thead><tr><th>Object</th> <th>Description</th></tr></thead> <tbody><tr><td><code>a&quot;</code></td> <td>A double quoted string, including the quotes</td></tr> <tr><td><code>i&quot;</code></td> <td>A double quoted string, excluding the quotes</td></tr> <tr><td><code>a&#39;</code></td> <td>A single quoted string, including the quotes</td></tr> <tr><td><code>i&#39;</code></td> <td>A single quoted string, excluding the quotes</td></tr> <tr><td><code>a(</code> or <code>a)</code></td> <td>A block surrounded by parenthesis, including the parenthesis</td></tr> <tr><td><code>i(</code> or <code>i)</code></td> <td>A block surrounded by parenthesis, excluding the parenthesis</td></tr> <tr><td><code>a[</code> or <code>a]</code></td> <td>A block surrounded by brackets, including the brackets</td></tr> <tr><td><code>i[</code> or <code>i]</code></td> <td>A block surrounded by brackets, excluding the brackets</td></tr> <tr><td><code>a{</code> or <code>a}</code></td> <td>A block surrounded by curly braces, including the curly braces</td></tr> <tr><td><code>i{</code> or <code>i}</code></td> <td>A block surrounded by curly braces, excluding the curly braces</td></tr> <tr><td><code>a&lt;</code> or <code>a&gt;</code></td> <td>Text surrounded by <code>&lt;&gt;</code>, including the opening <code>&lt;</code> and the closing <code>&gt;</code></td></tr> <tr><td><code>i&lt;</code> or <code>i&gt;</code></td> <td>Text surrounded by <code>&lt;&gt;</code>, excluding the opening <code>&lt;</code> and the closing <code>&gt;</code></td></tr> <tr><td><code>at</code></td> <td>A block surrounded by xml/html tags, including the tags</td></tr> <tr><td><code>it</code></td> <td>A block surrounded by xml/html tags, excluding the tags</td></tr> <tr><td><code>aw</code></td> <td>A <strong>word</strong> including the surrounding whitespace</td></tr> <tr><td><code>iw</code></td> <td>A <strong>word</strong> excluding the surrounding whitespace</td></tr> <tr><td><code>ap</code></td> <td>A <strong>paragraph</strong> including the surrounding whitespace</td></tr> <tr><td><code>ip</code></td> <td>A <strong>paragraph</strong> including the surrounding whitespace</td></tr></tbody>",bd,Bt,en="How to use text objects",xd,St,dn="To use text objects, place the cursor anywhere inside one and type an <code>{operator}</code> followed by the <code>{text object}</code> to execute the operator on that object.",Cd,Ot,on="<strong>Tip:</strong> Think of ‘a’ as <strong>around</strong> and ‘i’ as <strong>inside</strong>.",gd,Nt,nn="Examples",Td,Gt,rn="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>diw</code></td> <td>Delete word that cursor is in, keeping surrounding whitespace (Think: “delete inside word”)</td></tr> <tr><td><code>daw</code></td> <td>Delete word that cursor is in as well as surrounding whitespace (Think: “delete around word”)</td></tr> <tr><td><code>di(</code></td> <td>Delete everything within parenthesis surrounding cursor, keeping the surrounding parenthesis (Think: “delete inside parenthesis”)</td></tr> <tr><td><code>da(</code></td> <td>Delete everything within parenthesis surrounding cursor as well as the surrounding parenthesis (Think: “delete around parenthesis”)</td></tr> <tr><td><code>di&quot;</code></td> <td>Delete everything within double quotes surrounding cursor, keeping the surrounding double quotes (Think: “delete inside double quotes”)</td></tr> <tr><td><code>da&quot;</code></td> <td>Delete everything within double quotes surrounding cursor as well as the surrounding double quotes (Think: “delete around double quotes”)</td></tr> <tr><td><code>dit&quot;</code></td> <td>Delete everything within tags surrounding cursor, keeping the surrounding tags (Think: “delete inside tags”)</td></tr> <tr><td><code>dat</code></td> <td>Delete everything within tags surrounding cursor as well as the surrounding tags (Think: “delete around tags”)</td></tr></tbody>",wd,It,ln="Of course these examples from above can be applied to other operators like <code>c</code> or <code>y</code> for changing, copying, etc… or using <code>v</code> instead of an operator to select the text object in visual mode.",yd,Ut,sn="Indentation",Md,Wt,cn="<thead><tr><th>Command</th> <th>Description</th></tr></thead> <tbody><tr><td><code>&gt;{motion}</code></td> <td>Indent text that the <code>{motion}</code> command moves over, to the right</td></tr> <tr><td><code>&gt;&gt;</code></td> <td>Indent whole current line to the right</td></tr></tbody>",Ld,zt,an=`<strong>Tip</strong>: You can use <code>{number}</code> before <code>&gt;</code> and <code>&gt;&gt;</code> to execute the indentation that <code>{number}</code> of times. For example, use <code>2&gt;&gt;</code> to indent the current line and the line below it.
<strong>Tip # 2</strong>: You can also use <strong>text objects</strong> with <code>&gt;</code>`;return{c(){c=n("p"),c.textContent=_d,Yt=i(),a=n("h1"),a.textContent=kd,Vt=i(),u=n("table"),u.innerHTML=qd,Ft=i(),h=n("h1"),h.textContent=Dd,Jt=i(),m=n("table"),m.innerHTML=Ad,Qt=i(),v=n("h1"),v.textContent=Ed,Kt=i(),p=n("h2"),p.textContent=Pd,$t=i(),f=n("table"),f.innerHTML=Rd,Xt=i(),b=n("h2"),b.textContent=jd,Zt=i(),x=n("table"),x.innerHTML=Bd,te=i(),C=n("h2"),C.textContent=Sd,ee=i(),g=n("h4"),g.textContent=Od,de=i(),T=n("ul"),T.innerHTML=Nd,oe=i(),w=n("table"),w.innerHTML=Gd,ne=i(),y=n("h2"),y.textContent=Id,re=i(),M=n("h4"),M.textContent=Ud,le=i(),L=n("ul"),L.innerHTML=Wd,ie=i(),H=n("table"),H.innerHTML=zd,se=i(),_=n("h2"),_.textContent=Yd,ce=i(),k=n("h4"),k.textContent=Vd,ae=i(),q=n("ul"),q.innerHTML=Fd,ue=i(),D=n("table"),D.innerHTML=Jd,he=i(),A=n("h2"),A.textContent=Qd,me=i(),E=n("p"),E.innerHTML=Kd,ve=i(),P=n("table"),P.innerHTML=$d,pe=i(),R=n("h2"),R.textContent=Xd,fe=i(),j=n("table"),j.innerHTML=Zd,be=i(),B=n("h2"),B.textContent=to,xe=i(),S=n("table"),S.innerHTML=eo,Ce=i(),O=n("h2"),O.textContent=oo,ge=i(),N=n("table"),N.innerHTML=no,Te=i(),G=n("h2"),G.textContent=ro,we=i(),I=n("p"),I.innerHTML=lo,ye=i(),U=n("table"),U.innerHTML=io,Me=i(),W=n("p"),W.innerHTML=so,Le=i(),z=n("h2"),z.textContent=co,He=i(),Y=n("h3"),Y.textContent=ao,_e=i(),V=n("p"),V.innerHTML=uo,ke=i(),F=n("p"),F.innerHTML=ho,qe=i(),J=n("p"),J.innerHTML=mo,De=i(),Q=n("p"),Q.innerHTML=vo,Ae=i(),K=n("p"),K.innerHTML=po,Ee=i(),$=n("table"),$.innerHTML=fo,Pe=i(),X=n("h1"),X.textContent=bo,Re=i(),Z=n("p"),Z.innerHTML=xo,je=i(),tt=n("p"),tt.innerHTML=Co,Be=i(),et=n("h2"),et.textContent=go,Se=i(),dt=n("table"),dt.innerHTML=To,Oe=i(),ot=n("p"),ot.innerHTML=wo,Ne=i(),nt=n("h3"),nt.textContent=yo,Ge=i(),rt=n("table"),rt.innerHTML=Mo,Ie=i(),lt=n("p"),lt.innerHTML=Lo,Ue=i(),it=n("h2"),it.textContent=Ho,We=i(),st=n("table"),st.innerHTML=_o,ze=i(),ct=n("p"),ct.innerHTML=ko,Ye=i(),at=n("h2"),at.textContent=qo,Ve=i(),ut=n("p"),ut.innerHTML=Do,Fe=i(),ht=n("table"),ht.innerHTML=Ao,Je=i(),mt=n("p"),mt.innerHTML=Eo,Qe=i(),vt=n("h2"),vt.textContent=Po,Ke=i(),pt=n("table"),pt.innerHTML=Ro,$e=i(),ft=n("p"),ft.innerHTML=jo,Xe=i(),bt=n("p"),bt.innerHTML=Bo,Ze=i(),xt=n("h2"),xt.textContent=So,td=i(),Ct=n("p"),Ct.innerHTML=Oo,ed=i(),gt=n("table"),gt.innerHTML=No,dd=i(),Tt=n("p"),Tt.innerHTML=Go,od=i(),wt=n("h2"),wt.textContent=Io,nd=i(),yt=n("table"),yt.innerHTML=Uo,rd=i(),Mt=n("p"),Mt.innerHTML=Wo,ld=i(),Lt=n("p"),Lt.innerHTML=zo,id=i(),Ht=n("h2"),Ht.textContent=Yo,sd=i(),_t=n("table"),_t.innerHTML=Vo,cd=i(),kt=n("h2"),kt.textContent=Fo,ad=i(),qt=n("table"),qt.innerHTML=Jo,ud=i(),Dt=n("h2"),Dt.textContent=Qo,hd=i(),At=n("p"),At.innerHTML=Ko,md=i(),Et=n("p"),Et.innerHTML=$o,vd=i(),Pt=n("p"),Pt.textContent=Xo,pd=i(),Rt=n("h3"),Rt.textContent=Zo,fd=i(),jt=n("table"),jt.innerHTML=tn,bd=i(),Bt=n("h3"),Bt.textContent=en,xd=i(),St=n("p"),St.innerHTML=dn,Cd=i(),Ot=n("p"),Ot.innerHTML=on,gd=i(),Nt=n("h3"),Nt.textContent=nn,Td=i(),Gt=n("table"),Gt.innerHTML=rn,wd=i(),It=n("p"),It.innerHTML=ln,yd=i(),Ut=n("h2"),Ut.textContent=sn,Md=i(),Wt=n("table"),Wt.innerHTML=cn,Ld=i(),zt=n("p"),zt.innerHTML=an},l(t){c=r(t,"P",{"data-svelte-h":!0}),l(c)!=="svelte-1udr898"&&(c.textContent=_d),Yt=s(t),a=r(t,"H1",{"data-svelte-h":!0}),l(a)!=="svelte-p7noab"&&(a.textContent=kd),Vt=s(t),u=r(t,"TABLE",{"data-svelte-h":!0}),l(u)!=="svelte-12keihg"&&(u.innerHTML=qd),Ft=s(t),h=r(t,"H1",{"data-svelte-h":!0}),l(h)!=="svelte-d13izi"&&(h.textContent=Dd),Jt=s(t),m=r(t,"TABLE",{"data-svelte-h":!0}),l(m)!=="svelte-tbpwz8"&&(m.innerHTML=Ad),Qt=s(t),v=r(t,"H1",{"data-svelte-h":!0}),l(v)!=="svelte-bdmu7i"&&(v.textContent=Ed),Kt=s(t),p=r(t,"H2",{"data-svelte-h":!0}),l(p)!=="svelte-33tub0"&&(p.textContent=Pd),$t=s(t),f=r(t,"TABLE",{"data-svelte-h":!0}),l(f)!=="svelte-1ojdqah"&&(f.innerHTML=Rd),Xt=s(t),b=r(t,"H2",{"data-svelte-h":!0}),l(b)!=="svelte-1fegkqi"&&(b.textContent=jd),Zt=s(t),x=r(t,"TABLE",{"data-svelte-h":!0}),l(x)!=="svelte-sbw7it"&&(x.innerHTML=Bd),te=s(t),C=r(t,"H2",{"data-svelte-h":!0}),l(C)!=="svelte-ammywg"&&(C.textContent=Sd),ee=s(t),g=r(t,"H4",{"data-svelte-h":!0}),l(g)!=="svelte-6i0982"&&(g.textContent=Od),de=s(t),T=r(t,"UL",{"data-svelte-h":!0}),l(T)!=="svelte-1r5oaes"&&(T.innerHTML=Nd),oe=s(t),w=r(t,"TABLE",{"data-svelte-h":!0}),l(w)!=="svelte-1uz84hk"&&(w.innerHTML=Gd),ne=s(t),y=r(t,"H2",{"data-svelte-h":!0}),l(y)!=="svelte-11wq9lt"&&(y.textContent=Id),re=s(t),M=r(t,"H4",{"data-svelte-h":!0}),l(M)!=="svelte-1h6h3n8"&&(M.textContent=Ud),le=s(t),L=r(t,"UL",{"data-svelte-h":!0}),l(L)!=="svelte-11yuwx3"&&(L.innerHTML=Wd),ie=s(t),H=r(t,"TABLE",{"data-svelte-h":!0}),l(H)!=="svelte-7nsidh"&&(H.innerHTML=zd),se=s(t),_=r(t,"H2",{"data-svelte-h":!0}),l(_)!=="svelte-r58b7a"&&(_.textContent=Yd),ce=s(t),k=r(t,"H4",{"data-svelte-h":!0}),l(k)!=="svelte-6i0982"&&(k.textContent=Vd),ae=s(t),q=r(t,"UL",{"data-svelte-h":!0}),l(q)!=="svelte-1cwhy3s"&&(q.innerHTML=Fd),ue=s(t),D=r(t,"TABLE",{"data-svelte-h":!0}),l(D)!=="svelte-gqq2vy"&&(D.innerHTML=Jd),he=s(t),A=r(t,"H2",{"data-svelte-h":!0}),l(A)!=="svelte-2xer58"&&(A.textContent=Qd),me=s(t),E=r(t,"P",{"data-svelte-h":!0}),l(E)!=="svelte-5wc5o3"&&(E.innerHTML=Kd),ve=s(t),P=r(t,"TABLE",{"data-svelte-h":!0}),l(P)!=="svelte-1fdikq9"&&(P.innerHTML=$d),pe=s(t),R=r(t,"H2",{"data-svelte-h":!0}),l(R)!=="svelte-ougyv4"&&(R.textContent=Xd),fe=s(t),j=r(t,"TABLE",{"data-svelte-h":!0}),l(j)!=="svelte-9zy8u1"&&(j.innerHTML=Zd),be=s(t),B=r(t,"H2",{"data-svelte-h":!0}),l(B)!=="svelte-1nlixsd"&&(B.textContent=to),xe=s(t),S=r(t,"TABLE",{"data-svelte-h":!0}),l(S)!=="svelte-139hbos"&&(S.innerHTML=eo),Ce=s(t),O=r(t,"H2",{"data-svelte-h":!0}),l(O)!=="svelte-1knydtq"&&(O.textContent=oo),ge=s(t),N=r(t,"TABLE",{"data-svelte-h":!0}),l(N)!=="svelte-xfjn5y"&&(N.innerHTML=no),Te=s(t),G=r(t,"H2",{"data-svelte-h":!0}),l(G)!=="svelte-1jmxt1o"&&(G.textContent=ro),we=s(t),I=r(t,"P",{"data-svelte-h":!0}),l(I)!=="svelte-15hkap4"&&(I.innerHTML=lo),ye=s(t),U=r(t,"TABLE",{"data-svelte-h":!0}),l(U)!=="svelte-mqevm6"&&(U.innerHTML=io),Me=s(t),W=r(t,"P",{"data-svelte-h":!0}),l(W)!=="svelte-1f1c1lb"&&(W.innerHTML=so),Le=s(t),z=r(t,"H2",{"data-svelte-h":!0}),l(z)!=="svelte-14cb1y1"&&(z.textContent=co),He=s(t),Y=r(t,"H3",{"data-svelte-h":!0}),l(Y)!=="svelte-1arvyqv"&&(Y.textContent=ao),_e=s(t),V=r(t,"P",{"data-svelte-h":!0}),l(V)!=="svelte-1svlqxm"&&(V.innerHTML=uo),ke=s(t),F=r(t,"P",{"data-svelte-h":!0}),l(F)!=="svelte-1ipdqhl"&&(F.innerHTML=ho),qe=s(t),J=r(t,"P",{"data-svelte-h":!0}),l(J)!=="svelte-1ii85h"&&(J.innerHTML=mo),De=s(t),Q=r(t,"P",{"data-svelte-h":!0}),l(Q)!=="svelte-1i74kxc"&&(Q.innerHTML=vo),Ae=s(t),K=r(t,"P",{"data-svelte-h":!0}),l(K)!=="svelte-12nskp7"&&(K.innerHTML=po),Ee=s(t),$=r(t,"TABLE",{"data-svelte-h":!0}),l($)!=="svelte-1xup9jq"&&($.innerHTML=fo),Pe=s(t),X=r(t,"H1",{"data-svelte-h":!0}),l(X)!=="svelte-esoaq7"&&(X.textContent=bo),Re=s(t),Z=r(t,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-1xjwrdn"&&(Z.innerHTML=xo),je=s(t),tt=r(t,"P",{"data-svelte-h":!0}),l(tt)!=="svelte-1ge3h0g"&&(tt.innerHTML=Co),Be=s(t),et=r(t,"H2",{"data-svelte-h":!0}),l(et)!=="svelte-s9i69g"&&(et.textContent=go),Se=s(t),dt=r(t,"TABLE",{"data-svelte-h":!0}),l(dt)!=="svelte-u06g7g"&&(dt.innerHTML=To),Oe=s(t),ot=r(t,"P",{"data-svelte-h":!0}),l(ot)!=="svelte-irtdq5"&&(ot.innerHTML=wo),Ne=s(t),nt=r(t,"H3",{"data-svelte-h":!0}),l(nt)!=="svelte-7qfaaz"&&(nt.textContent=yo),Ge=s(t),rt=r(t,"TABLE",{"data-svelte-h":!0}),l(rt)!=="svelte-1adgmn7"&&(rt.innerHTML=Mo),Ie=s(t),lt=r(t,"P",{"data-svelte-h":!0}),l(lt)!=="svelte-1vgbhl1"&&(lt.innerHTML=Lo),Ue=s(t),it=r(t,"H2",{"data-svelte-h":!0}),l(it)!=="svelte-gj9yn6"&&(it.textContent=Ho),We=s(t),st=r(t,"TABLE",{"data-svelte-h":!0}),l(st)!=="svelte-czh90s"&&(st.innerHTML=_o),ze=s(t),ct=r(t,"P",{"data-svelte-h":!0}),l(ct)!=="svelte-1ovhba"&&(ct.innerHTML=ko),Ye=s(t),at=r(t,"H2",{"data-svelte-h":!0}),l(at)!=="svelte-srjzyo"&&(at.textContent=qo),Ve=s(t),ut=r(t,"P",{"data-svelte-h":!0}),l(ut)!=="svelte-13i04tr"&&(ut.innerHTML=Do),Fe=s(t),ht=r(t,"TABLE",{"data-svelte-h":!0}),l(ht)!=="svelte-2v0eme"&&(ht.innerHTML=Ao),Je=s(t),mt=r(t,"P",{"data-svelte-h":!0}),l(mt)!=="svelte-ncy7qt"&&(mt.innerHTML=Eo),Qe=s(t),vt=r(t,"H2",{"data-svelte-h":!0}),l(vt)!=="svelte-1o5a7he"&&(vt.textContent=Po),Ke=s(t),pt=r(t,"TABLE",{"data-svelte-h":!0}),l(pt)!=="svelte-t2l6wq"&&(pt.innerHTML=Ro),$e=s(t),ft=r(t,"P",{"data-svelte-h":!0}),l(ft)!=="svelte-1gmg8oh"&&(ft.innerHTML=jo),Xe=s(t),bt=r(t,"P",{"data-svelte-h":!0}),l(bt)!=="svelte-17kmszh"&&(bt.innerHTML=Bo),Ze=s(t),xt=r(t,"H2",{"data-svelte-h":!0}),l(xt)!=="svelte-yag9mt"&&(xt.textContent=So),td=s(t),Ct=r(t,"P",{"data-svelte-h":!0}),l(Ct)!=="svelte-dabf8t"&&(Ct.innerHTML=Oo),ed=s(t),gt=r(t,"TABLE",{"data-svelte-h":!0}),l(gt)!=="svelte-ouzmtv"&&(gt.innerHTML=No),dd=s(t),Tt=r(t,"P",{"data-svelte-h":!0}),l(Tt)!=="svelte-1ysfig0"&&(Tt.innerHTML=Go),od=s(t),wt=r(t,"H2",{"data-svelte-h":!0}),l(wt)!=="svelte-1o886dp"&&(wt.textContent=Io),nd=s(t),yt=r(t,"TABLE",{"data-svelte-h":!0}),l(yt)!=="svelte-dhu0oq"&&(yt.innerHTML=Uo),rd=s(t),Mt=r(t,"P",{"data-svelte-h":!0}),l(Mt)!=="svelte-1hbjeho"&&(Mt.innerHTML=Wo),ld=s(t),Lt=r(t,"P",{"data-svelte-h":!0}),l(Lt)!=="svelte-1wyhh93"&&(Lt.innerHTML=zo),id=s(t),Ht=r(t,"H2",{"data-svelte-h":!0}),l(Ht)!=="svelte-zadzx"&&(Ht.textContent=Yo),sd=s(t),_t=r(t,"TABLE",{"data-svelte-h":!0}),l(_t)!=="svelte-1q4t0q0"&&(_t.innerHTML=Vo),cd=s(t),kt=r(t,"H2",{"data-svelte-h":!0}),l(kt)!=="svelte-1ynw0rl"&&(kt.textContent=Fo),ad=s(t),qt=r(t,"TABLE",{"data-svelte-h":!0}),l(qt)!=="svelte-14qfr0m"&&(qt.innerHTML=Jo),ud=s(t),Dt=r(t,"H2",{"data-svelte-h":!0}),l(Dt)!=="svelte-47p0kk"&&(Dt.textContent=Qo),hd=s(t),At=r(t,"P",{"data-svelte-h":!0}),l(At)!=="svelte-1du0r0q"&&(At.innerHTML=Ko),md=s(t),Et=r(t,"P",{"data-svelte-h":!0}),l(Et)!=="svelte-7ru6wx"&&(Et.innerHTML=$o),vd=s(t),Pt=r(t,"P",{"data-svelte-h":!0}),l(Pt)!=="svelte-19wwon5"&&(Pt.textContent=Xo),pd=s(t),Rt=r(t,"H3",{"data-svelte-h":!0}),l(Rt)!=="svelte-da2i47"&&(Rt.textContent=Zo),fd=s(t),jt=r(t,"TABLE",{"data-svelte-h":!0}),l(jt)!=="svelte-1w47c6"&&(jt.innerHTML=tn),bd=s(t),Bt=r(t,"H3",{"data-svelte-h":!0}),l(Bt)!=="svelte-1xyikgj"&&(Bt.textContent=en),xd=s(t),St=r(t,"P",{"data-svelte-h":!0}),l(St)!=="svelte-1oub6h8"&&(St.innerHTML=dn),Cd=s(t),Ot=r(t,"P",{"data-svelte-h":!0}),l(Ot)!=="svelte-1rwtefn"&&(Ot.innerHTML=on),gd=s(t),Nt=r(t,"H3",{"data-svelte-h":!0}),l(Nt)!=="svelte-183jr9r"&&(Nt.textContent=nn),Td=s(t),Gt=r(t,"TABLE",{"data-svelte-h":!0}),l(Gt)!=="svelte-1dxz0za"&&(Gt.innerHTML=rn),wd=s(t),It=r(t,"P",{"data-svelte-h":!0}),l(It)!=="svelte-b0e0so"&&(It.innerHTML=ln),yd=s(t),Ut=r(t,"H2",{"data-svelte-h":!0}),l(Ut)!=="svelte-1cu5wtr"&&(Ut.textContent=sn),Md=s(t),Wt=r(t,"TABLE",{"data-svelte-h":!0}),l(Wt)!=="svelte-180p321"&&(Wt.innerHTML=cn),Ld=s(t),zt=r(t,"P",{"data-svelte-h":!0}),l(zt)!=="svelte-1n4wtlv"&&(zt.innerHTML=an)},m(t,e){d(t,c,e),d(t,Yt,e),d(t,a,e),d(t,Vt,e),d(t,u,e),d(t,Ft,e),d(t,h,e),d(t,Jt,e),d(t,m,e),d(t,Qt,e),d(t,v,e),d(t,Kt,e),d(t,p,e),d(t,$t,e),d(t,f,e),d(t,Xt,e),d(t,b,e),d(t,Zt,e),d(t,x,e),d(t,te,e),d(t,C,e),d(t,ee,e),d(t,g,e),d(t,de,e),d(t,T,e),d(t,oe,e),d(t,w,e),d(t,ne,e),d(t,y,e),d(t,re,e),d(t,M,e),d(t,le,e),d(t,L,e),d(t,ie,e),d(t,H,e),d(t,se,e),d(t,_,e),d(t,ce,e),d(t,k,e),d(t,ae,e),d(t,q,e),d(t,ue,e),d(t,D,e),d(t,he,e),d(t,A,e),d(t,me,e),d(t,E,e),d(t,ve,e),d(t,P,e),d(t,pe,e),d(t,R,e),d(t,fe,e),d(t,j,e),d(t,be,e),d(t,B,e),d(t,xe,e),d(t,S,e),d(t,Ce,e),d(t,O,e),d(t,ge,e),d(t,N,e),d(t,Te,e),d(t,G,e),d(t,we,e),d(t,I,e),d(t,ye,e),d(t,U,e),d(t,Me,e),d(t,W,e),d(t,Le,e),d(t,z,e),d(t,He,e),d(t,Y,e),d(t,_e,e),d(t,V,e),d(t,ke,e),d(t,F,e),d(t,qe,e),d(t,J,e),d(t,De,e),d(t,Q,e),d(t,Ae,e),d(t,K,e),d(t,Ee,e),d(t,$,e),d(t,Pe,e),d(t,X,e),d(t,Re,e),d(t,Z,e),d(t,je,e),d(t,tt,e),d(t,Be,e),d(t,et,e),d(t,Se,e),d(t,dt,e),d(t,Oe,e),d(t,ot,e),d(t,Ne,e),d(t,nt,e),d(t,Ge,e),d(t,rt,e),d(t,Ie,e),d(t,lt,e),d(t,Ue,e),d(t,it,e),d(t,We,e),d(t,st,e),d(t,ze,e),d(t,ct,e),d(t,Ye,e),d(t,at,e),d(t,Ve,e),d(t,ut,e),d(t,Fe,e),d(t,ht,e),d(t,Je,e),d(t,mt,e),d(t,Qe,e),d(t,vt,e),d(t,Ke,e),d(t,pt,e),d(t,$e,e),d(t,ft,e),d(t,Xe,e),d(t,bt,e),d(t,Ze,e),d(t,xt,e),d(t,td,e),d(t,Ct,e),d(t,ed,e),d(t,gt,e),d(t,dd,e),d(t,Tt,e),d(t,od,e),d(t,wt,e),d(t,nd,e),d(t,yt,e),d(t,rd,e),d(t,Mt,e),d(t,ld,e),d(t,Lt,e),d(t,id,e),d(t,Ht,e),d(t,sd,e),d(t,_t,e),d(t,cd,e),d(t,kt,e),d(t,ad,e),d(t,qt,e),d(t,ud,e),d(t,Dt,e),d(t,hd,e),d(t,At,e),d(t,md,e),d(t,Et,e),d(t,vd,e),d(t,Pt,e),d(t,pd,e),d(t,Rt,e),d(t,fd,e),d(t,jt,e),d(t,bd,e),d(t,Bt,e),d(t,xd,e),d(t,St,e),d(t,Cd,e),d(t,Ot,e),d(t,gd,e),d(t,Nt,e),d(t,Td,e),d(t,Gt,e),d(t,wd,e),d(t,It,e),d(t,yd,e),d(t,Ut,e),d(t,Md,e),d(t,Wt,e),d(t,Ld,e),d(t,zt,e)},p:Hd,i:Hd,o:Hd,d(t){t&&(o(c),o(Yt),o(a),o(Vt),o(u),o(Ft),o(h),o(Jt),o(m),o(Qt),o(v),o(Kt),o(p),o($t),o(f),o(Xt),o(b),o(Zt),o(x),o(te),o(C),o(ee),o(g),o(de),o(T),o(oe),o(w),o(ne),o(y),o(re),o(M),o(le),o(L),o(ie),o(H),o(se),o(_),o(ce),o(k),o(ae),o(q),o(ue),o(D),o(he),o(A),o(me),o(E),o(ve),o(P),o(pe),o(R),o(fe),o(j),o(be),o(B),o(xe),o(S),o(Ce),o(O),o(ge),o(N),o(Te),o(G),o(we),o(I),o(ye),o(U),o(Me),o(W),o(Le),o(z),o(He),o(Y),o(_e),o(V),o(ke),o(F),o(qe),o(J),o(De),o(Q),o(Ae),o(K),o(Ee),o($),o(Pe),o(X),o(Re),o(Z),o(je),o(tt),o(Be),o(et),o(Se),o(dt),o(Oe),o(ot),o(Ne),o(nt),o(Ge),o(rt),o(Ie),o(lt),o(Ue),o(it),o(We),o(st),o(ze),o(ct),o(Ye),o(at),o(Ve),o(ut),o(Fe),o(ht),o(Je),o(mt),o(Qe),o(vt),o(Ke),o(pt),o($e),o(ft),o(Xe),o(bt),o(Ze),o(xt),o(td),o(Ct),o(ed),o(gt),o(dd),o(Tt),o(od),o(wt),o(nd),o(yt),o(rd),o(Mt),o(ld),o(Lt),o(id),o(Ht),o(sd),o(_t),o(cd),o(kt),o(ad),o(qt),o(ud),o(Dt),o(hd),o(At),o(md),o(Et),o(vd),o(Pt),o(pd),o(Rt),o(fd),o(jt),o(bd),o(Bt),o(xd),o(St),o(Cd),o(Ot),o(gd),o(Nt),o(Td),o(Gt),o(wd),o(It),o(yd),o(Ut),o(Md),o(Wt),o(Ld),o(zt))}}}const xn={title:"Vim Essentials Cheatsheet & Guide",imgUrl:"/post-images/vim-essentials-cheatsheet.jpg",youtubeId:"80mWp6H4zEw",publishedAt:"2023-08-05",summary:"This is my Vim cheatsheet with all of the most essential commands! You can check out my youtube video for a complete guide on how almost all of these work and how I go about remembering them."};class Cn extends mn{constructor(c){super(),vn(this,c,null,pn,hn,{})}}export{Cn as default,xn as metadata};
