import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as p,a as e,b as n,d as s,w as l,e as o}from"./app-00001524.js";const u={},v={href:"https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/new?assignees=Mister-Hope&labels=enhancement&template=feature_request.md&title=%5BFeature+Request%5D",target:"_blank",rel:"noopener noreferrer"},k=o(`<p>你可以在客户端配置文件中导入并使用 <code>defineRevealConfig</code> 来自定义 reveal.js 的配置:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/client.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineRevealConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-md-enhance/client&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineRevealConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 在此设置 reveal.js 选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><ul><li>使用 <code>---</code> 分割幻灯片</li><li>使用 <code>--</code> 对幻灯片进行二次分割(垂直显示)</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart [theme]

<span class="token comment">&lt;!-- slide1 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide2 --&gt;</span>

<span class="token hr punctuation">---</span>

<span class="token comment">&lt;!-- slide3 --&gt;</span>

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前可用的主题(请使用它们直接替换 <code>[theme]</code>):</p><ul><li><code>auto</code> (默认)</li><li><code>black</code></li><li><code>white</code></li><li><code>league</code></li><li><code>beige</code></li><li><code>sky</code></li><li><code>night</code></li><li><code>serif</code></li><li><code>simple</code></li><li><code>solarized</code></li><li><code>blood</code></li><li><code>moon</code></li></ul>`,7),b=e("h2",{id:"演示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),n(" 演示")],-1),h=o(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>@slidestart

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 1</span>

一个有文字和 <span class="token url">[<span class="token content">链接</span>](<span class="token url">https://mister-hope.com</span>)</span> 的段落

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 2</span>

<span class="token list punctuation">-</span> 项目 1
<span class="token list punctuation">-</span> 项目 2

<span class="token hr punctuation">---</span>

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 3.1</span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

--

<span class="token title important"><span class="token punctuation">##</span> 幻灯片 3.2</span>

$$
J(\\theta_0,\\theta_1) = \\sum_{i=0}
$$

@slideend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_={class:"hint-container tip"},g=e("p",{class:"hint-container-title"},"提示",-1),f=e("h2",{id:"选项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#选项","aria-hidden":"true"},"#"),n(" 选项")],-1),w=e("p",null,[n("你可以在 Frontmatter 设置 "),e("code",null,"reveal"),n(" 以设置特定页面的 reveal.js 选项，也可以在插件选项中设置 "),e("code",null,"presentation"),n(" 以全局设置 reveal.js。")],-1),x={href:"https://revealjs.com/config/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://revealjs.com/",target:"_blank",rel:"noopener noreferrer"};function j(q,C){const a=i("ExternalLinkIcon"),t=i("ProjectLink"),c=i("Presentation");return r(),p("div",null,[e("p",null,[n("Reveal.js 还提供了"),e("a",v,[n("更多的插件"),s(a)]),n("。如果你需要某个特定的插件，请在 GitHub 上提出 "),e("a",m,[n("Feature Request"),s(a)])]),k,e("p",null,[n("主题演示，请详见 "),s(t,{name:"md-enhance",path:"/zh/guide/presentation/themes.html"},{default:l(()=>[n("幻灯片主题")]),_:1}),n("。")]),b,s(c,{id:"presentation-94",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr5+bWVySWqSbkV+Qqpecn6up8HxWy7N1W19M2MvFpaury4VqqBFQUOHlwp3PZ68DWgBngoQx1BrrAZ2QkJCQVcyVnJ9XXKKQqGCrYGgNEgIpx1ANNERFhctLI6YkI7UkMd5AB8ow1ATqiykuzY2vzrQ1qAUpAgAALl2Z",theme:"auto"}),h,e("div",_,[g,e("p",null,[n("详细与完整的演示详见 "),s(t,{name:"md-enhance",path:"/zh/guide/presentation/demo.html"},{default:l(()=>[n("幻灯片演示")]),_:1}),n("。")])]),f,w,e("p",null,[n("更多选项，请参见"),e("a",x,[n("reveal.js config"),s(a)]),n("，更多用法，请参阅 "),e("a",y,[n("reveal.js 文档"),s(a)]),n("。")])])}const z=d(u,[["render",j],["__file","presentation.html.vue"]]);export{z as default};
