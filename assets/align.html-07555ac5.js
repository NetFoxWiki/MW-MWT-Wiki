import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as r,a as e,b as n,d as t,e as i}from"./app-e3539b49.js";const c={},v=i(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: left
左对齐的内容
:::

::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>嵌套和转义</summary><ul><li><p>嵌套可以通过增加外层容器的 marker 数量完成:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: center
居中的内容...
::: left
左对齐的内容...
:::
居中的内容...
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会被渲染为</p><div style="text-align:center;"><p>居中的内容...</p><div style="text-align:left;"><p>左对齐的内容...</p></div><p>居中的内容...</p></div></li><li><p>转义可以通过在 marker 前添加 <code>\\</code> 转义来完成:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>\\::: left

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会被渲染为</p><p>::: left</p><p>:::</p></li></ul></details><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2>`,4),u={class:"hint-container danger"},m=e("p",{class:"hint-container-title"},"W.I.P",-1),o=e("p",null,"vuepress-theme-hope v2 仍在制作中，API 可能会有",-1),p=e("div",{style:{"text-align":"center"}},[e("p",null,"重大的变动。")],-1),b=e("p",null,"如果你在使用过程中遇到了 bug，可以",-1),h={style:{"text-align":"right"}},_={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: danger W.I.P
vuepress-theme-hope v2 仍在制作中，API 可能会有

::: center
重大的变动。
:::

如果你在使用过程中遇到了 bug，可以

::: right
<span class="token url">[<span class="token content">提一个 issue</span>](<span class="token url">https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues</span>)</span>。
:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function f(k,x){const s=l("ExternalLinkIcon");return a(),r("div",null,[v,e("div",u,[m,o,p,b,e("div",h,[e("p",null,[e("a",_,[n("提一个 issue"),t(s)]),n("。")])])]),g])}const I=d(c,[["render",f],["__file","align.html.vue"]]);export{I as default};
