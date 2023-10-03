import{_ as v}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as r,c as u,a as e,d,w as n,e as t,b as s}from"./app-c6f8831d.js";const m={},b=t(`<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>你需要将选项卡包装在 <code>tabs</code> 容器中。</p><p>你可以在 <code>tabs</code> 容器中添加一个 id 后缀，该后缀将用作选项卡 id。 所有具有相同 id 的选项卡将共享相同的切换事件。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

<span class="token comment">&lt;!-- 这里，fruit 将用作 id，它是可选的 --&gt;</span>

<span class="token comment">&lt;!-- 选项卡内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个容器内，你应该使用 <code>@tab</code> 标记来标记和分隔选项卡内容。</p><p>在 <code>@tab</code> 标记后，你可以添加文本 <code>:active</code> 默认激活选项卡，之后的文本将被解析为选项卡标题。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题 1

<span class="token comment">&lt;!-- tab 1 内容 --&gt;</span>

@tab 标题 2

<span class="token comment">&lt;!-- tab 2 内容 --&gt;</span>

@tab:active 标题 3

<span class="token comment">&lt;!-- tab 3 将会被默认激活 --&gt;</span>

<span class="token comment">&lt;!-- tab 3 内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下，标题将用作选项卡的值，但你可以使用 id 后缀覆盖它。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题 1

<span class="token comment">&lt;!-- 此处，选项卡 1 的标题“标题 1”将用作值。 --&gt;</span>

<span class="token comment">&lt;!-- tab 1 内容 --&gt;</span>

@tab 标题 2#值 2

<span class="token comment">&lt;!-- 这里，tab 2 的标题将是 “标题 2”，但它会使用 “值 2” 作为选项卡的值--&gt;</span>

<span class="token comment">&lt;!-- tab 2 内容 --&gt;</span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在每个选项卡中使用 Vue 语法和组件，并且你可以访问 <code>value</code> 和 <code>isActive</code>，表示选项卡的绑定值和选项卡是否处于激活状态。</p>`,10),o={class:"hint-container info"},p=e("p",{class:"hint-container-title"},"一起切换并保持选择",-1),_=e("p",null,"如果你想让一些选项卡组一起切换，你可以使用相同的选项卡 ID 来绑定它们。",-1),h=e("p",null,"针对每个选项卡 ID 的选择会被存储并进行持久化。",-1),g=e("p",null,"下方是一个案例。",-1),k=e("p",null,"选择包管理器:",-1),A=e("p",null,"npm 应该与 Node.js 被一同安装。",-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[s("corepack prepare pnpm@latest "),e("span",{class:"token parameter variable"},"--activated"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),x=e("p",null,[s("安装 "),e("code",null,"vuepress-plugin-md-enhance"),s(":")],-1),w=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),s(" i "),e("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),s(),e("span",{class:"token function"},"add"),s(),e("span",{class:"token parameter variable"},"-D"),s(` vuepress-plugin-md-enhance
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),N=e("h2",{id:"案例",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),s(" 案例")],-1),V=e("p",null,"一个水果选项卡列表:",-1),D=e("p",null,"Apple",-1),O=e("p",null,"Banana",-1),T=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple#apple

Apple

@tab banana#banana

Banana

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个水果选项卡列表:</p>`,2),C=e("p",null,"Apple",-1),I=e("p",null,"Banana",-1),j=e("p",null,"Orange",-1),E=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个没有绑定 id 的水果选项卡列表:</p>`,2),S=e("p",null,"Apple",-1),q=e("p",null,"Banana",-1),y=e("p",null,"Orange",-1),z=t(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function F(G,H){const l=c("Tabs");return r(),u("div",null,[b,e("div",o,[p,_,h,g,k,d(l,{id:"37",data:[{id:"npm"},{id:"pnpm"}],"tab-id":"shell"},{title0:n(({value:i,isActive:a})=>[s("npm")]),title1:n(({value:i,isActive:a})=>[s("pnpm")]),tab0:n(({value:i,isActive:a})=>[A]),tab1:n(({value:i,isActive:a})=>[f]),_:1}),x,d(l,{id:"50",data:[{id:"npm"},{id:"pnpm"}],"tab-id":"shell"},{title0:n(({value:i,isActive:a})=>[s("使用 npm")]),title1:n(({value:i,isActive:a})=>[s("使用 pnpm")]),tab0:n(({value:i,isActive:a})=>[w]),tab1:n(({value:i,isActive:a})=>[B]),_:1})]),N,V,d(l,{id:"65",data:[{id:"apple"},{id:"banana"}],"tab-id":"fruit"},{title0:n(({value:i,isActive:a})=>[s("apple")]),title1:n(({value:i,isActive:a})=>[s("banana")]),tab0:n(({value:i,isActive:a})=>[D]),tab1:n(({value:i,isActive:a})=>[O]),_:1}),T,d(l,{id:"81",data:[{id:"apple"},{id:"banana"},{id:"orange"}],"tab-id":"fruit"},{title0:n(({value:i,isActive:a})=>[s("apple")]),title1:n(({value:i,isActive:a})=>[s("banana")]),title2:n(({value:i,isActive:a})=>[s("orange")]),tab0:n(({value:i,isActive:a})=>[C]),tab1:n(({value:i,isActive:a})=>[I]),tab2:n(({value:i,isActive:a})=>[j]),_:1}),E,d(l,{id:"102",data:[{id:"apple"},{id:"banana"},{id:"orange"}]},{title0:n(({value:i,isActive:a})=>[s("apple")]),title1:n(({value:i,isActive:a})=>[s("banana")]),title2:n(({value:i,isActive:a})=>[s("orange")]),tab0:n(({value:i,isActive:a})=>[S]),tab1:n(({value:i,isActive:a})=>[q]),tab2:n(({value:i,isActive:a})=>[y]),_:1}),z])}const L=v(m,[["render",F],["__file","tabs.html.vue"]]);export{L as default};
