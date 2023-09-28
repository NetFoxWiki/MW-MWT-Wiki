import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o,c as t,d as n,a as d,b as s,e as i}from"./app-5641f6f8.js";const r={},v=i(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // 此处为图表配置
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也支持 <code>js</code> 和 <code>javascript</code> 的代码块，你应当将导出对象赋值给 <code>module.exports</code>。</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><h3 id="块状图" tabindex="-1"><a class="header-anchor" href="#块状图" aria-hidden="true">#</a> 块状图</h3>`,5),c=i(`<details class="hint-container details"><summary>对应代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个块状图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;bar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;红色&quot;, &quot;蓝色&quot;, &quot;黄色&quot;, &quot;绿色&quot;, &quot;紫色&quot;, &quot;橙色&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;投票数&quot;,
        &quot;data&quot;: [12, 19, 3, 5, 2, 3],
        &quot;backgroundColor&quot;: [
          &quot;rgba(255, 99, 132, 0.2)&quot;,
          &quot;rgba(54, 162, 235, 0.2)&quot;,
          &quot;rgba(255, 206, 86, 0.2)&quot;,
          &quot;rgba(75, 192, 192, 0.2)&quot;,
          &quot;rgba(153, 102, 255, 0.2)&quot;,
          &quot;rgba(255, 159, 64, 0.2)&quot;
        ],
        &quot;borderColor&quot;: [
          &quot;rgba(255, 99, 132, 1)&quot;,
          &quot;rgba(54, 162, 235, 1)&quot;,
          &quot;rgba(255, 206, 86, 1)&quot;,
          &quot;rgba(75, 192, 192, 1)&quot;,
          &quot;rgba(153, 102, 255, 1)&quot;,
          &quot;rgba(255, 159, 64, 1)&quot;
        ],
        &quot;borderWidth&quot;: 1
      }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;y&quot;: {
        &quot;beginAtZero&quot;: true
      }
    }
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="气泡图" tabindex="-1"><a class="header-anchor" href="#气泡图" aria-hidden="true">#</a> 气泡图</h3>`,2),q=i(`<details class="hint-container details"><summary>对应代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个气泡图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;bubble&quot;,
  &quot;data&quot;: {
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;第一个数据集&quot;,
        &quot;data&quot;: [
          { &quot;x&quot;: 20, &quot;y&quot;: 30, &quot;r&quot;: 15 },
          { &quot;x&quot;: 40, &quot;y&quot;: 10, &quot;r&quot;: 10 }
        ],
        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;
      }
    ]
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="线状图" tabindex="-1"><a class="header-anchor" href="#线状图" aria-hidden="true">#</a> 线状图</h3>`,2),b=i(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个线状图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;line&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;一月&quot;, &quot;二月&quot;, &quot;三月&quot;, &quot;四月&quot;, &quot;五月&quot;, &quot;六月&quot;, &quot;七月&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;我的第一个数据集&quot;,
        &quot;data&quot;: [65, 59, 80, 81, 56, 55, 40],
        &quot;fill&quot;: false,
        &quot;borderColor&quot;: &quot;rgb(75, 192, 192)&quot;,
        &quot;tension&quot;: 0.1
      }
    ]
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="玫瑰图" tabindex="-1"><a class="header-anchor" href="#玫瑰图" aria-hidden="true">#</a> 玫瑰图</h3>`,2),m=i(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个玫瑰图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;polarArea&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;红色&quot;, &quot;绿色&quot;, &quot;黄色&quot;, &quot;灰色&quot;, &quot;蓝色&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;我的第一个数据集&quot;,
        &quot;data&quot;: [11, 16, 7, 3, 14],
        &quot;backgroundColor&quot;: [
          &quot;rgb(255, 99, 132)&quot;,
          &quot;rgb(75, 192, 192)&quot;,
          &quot;rgb(255, 205, 86)&quot;,
          &quot;rgb(201, 203, 207)&quot;,
          &quot;rgb(54, 162, 235)&quot;
        ]
      }
    ]
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="雷达图" tabindex="-1"><a class="header-anchor" href="#雷达图" aria-hidden="true">#</a> 雷达图</h3>`,2),p=i(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个雷达图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;radar&quot;,
  &quot;data&quot;: {
    &quot;labels&quot;: [&quot;吃饭&quot;, &quot;喝水&quot;, &quot;睡觉&quot;, &quot;设计&quot;, &quot;编程&quot;, &quot;骑车&quot;, &quot;跑步&quot;],
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;我的第一个数据集&quot;,
        &quot;data&quot;: [65, 59, 90, 81, 56, 55, 40],
        &quot;fill&quot;: true,
        &quot;backgroundColor&quot;: &quot;rgba(255, 99, 132, 0.2)&quot;,
        &quot;borderColor&quot;: &quot;rgb(255, 99, 132)&quot;,
        &quot;pointBackgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;,
        &quot;pointBorderColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBackgroundColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBorderColor&quot;: &quot;rgb(255, 99, 132)&quot;
      },
      {
        &quot;label&quot;: &quot;我的第二个数据集&quot;,
        &quot;data&quot;: [28, 48, 40, 19, 96, 27, 100],
        &quot;fill&quot;: true,
        &quot;backgroundColor&quot;: &quot;rgba(54, 162, 235, 0.2)&quot;,
        &quot;borderColor&quot;: &quot;rgb(54, 162, 235)&quot;,
        &quot;pointBackgroundColor&quot;: &quot;rgb(54, 162, 235)&quot;,
        &quot;pointBorderColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBackgroundColor&quot;: &quot;#fff&quot;,
        &quot;pointHoverBorderColor&quot;: &quot;rgb(54, 162, 235)&quot;
      }
    ]
  },
  &quot;options&quot;: {
    &quot;elements&quot;: {
      &quot;line&quot;: {
        &quot;borderWidth&quot;: 3
      }
    }
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="散点图" tabindex="-1"><a class="header-anchor" href="#散点图" aria-hidden="true">#</a> 散点图</h3>`,2),g=i(`<details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: chart 一个散点图案例

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  &quot;type&quot;: &quot;scatter&quot;,
  &quot;data&quot;: {
    &quot;datasets&quot;: [
      {
        &quot;label&quot;: &quot;散点数据集&quot;,
        &quot;data&quot;: [
          { &quot;x&quot;: -10, &quot;y&quot;: 0 },
          { &quot;x&quot;: 0, &quot;y&quot;: 10 },
          { &quot;x&quot;: 10, &quot;y&quot;: 5 },
          { &quot;x&quot;: 0.5, &quot;y&quot;: 5.5 }
        ],
        &quot;backgroundColor&quot;: &quot;rgb(255, 99, 132)&quot;
      }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;x&quot;: {
        &quot;type&quot;: &quot;linear&quot;,
        &quot;position&quot;: &quot;bottom&quot;
      }
    }
  }
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>`,2),h={href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"};function k(E,B){const e=a("ChartJS"),u=a("ExternalLinkIcon");return o(),t("div",null,[v,n(e,{id:"chart-13",config:"eJyNUrtOwzAU3fsVlieQLBQnJBA2xEcgUXVwGitERHHluEOFsrHAijowsCAhgVgQYqIDf5OUv+DactsEJaVDnPs4Puce614PEMJqNuH4BOGISUx0IWaKQUE3IctYxLMC8iGuv56Wtx+YILy8f7TRz+LGRvXiexV9vtmoen3Q0UjzWuaCK8NmKsiqbJT0JNXdvH5+qebvZh7btVMNqUsQDQnyCPIJgsSz7AYVsfFVIsU0j89EJmRDyLRlErE914eLIVBQD647B+5+Q2cF8g+hH0Df9QDdAzJMrhMQdAxfD+gIMDQ0U/fLUR/8UEfrac5tetSH0QMYz4DWmNYrCBlzuesL0P/9d0La7jshbe+dkD/O+5XWvgGyxfV5GqtLcE1tozT/EZyl2W4xUanI9QraBS/GLOObHCqzRqJ5eZLmp+qCSwENJae8Ra3PclAOfgFjv8GB",title:"%E4%B8%80%E4%B8%AA%E5%9D%97%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),c,n(e,{id:"chart-22",config:"eJyr5lJQUCqpLEhVslJQSipNSspJVdIBiaUkliQCxUDyUF5xakkxUCQaLKIAlQHL5iQmpeaADHi+Zs2THQ1Pdqx6NnXDs951L2e3gQ2DKoMaCTMAbIiCUgVQyMhAR0GpEsgwBjGKgAxDU4VahFa4QhOYQkO4QgOFWri6WCTbkhKTs9OL8kvzUpzzc/JBSpWK0pM0jExNdRQsLXUUDI2NNJWgyiEmxALJWq5aLgCVmkPj",title:"%E4%B8%80%E4%B8%AA%E6%B0%94%E6%B3%A1%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),q,n(e,{id:"chart-31",config:"eJyr5lJQUCqpLEhVslJQysnMS1XSAYmkJJYkAkVAskBeTmJSak4xkB+t9GRHw7M5HUo6CkpPdvXAWDs6oayns2fDZafAxFrXwtU1g1ixIBugdhSnloDNBYsoQO1D2Aly1LOOic9ntTxfswZo9ZMdq55N3fCsd93L2W1gh0IVQ50bbWaqo2BqqaNgYQDEhkC2GRADxUwMoJaCVadl5oBMTkvMKU5FEk7KL0pJLXLOz8kvAtlblJ6kYQ7Ua2hpBCY0kS0sSc0rzszPA6oz0DOECteC6VggWctVywUAjFhqNw==",title:"%E4%B8%80%E4%B8%AA%E7%BA%BF%E7%8A%B6%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),b,n(e,{id:"chart-40",config:"eJyr5lJQUCqpLEhVslJQKsjPSSxyLEpNVNIBCackliQChUFKgLycxKTUnGIgP1rp+a5FLzo3KekoKD3fvR/Kerm7BSbWuAHKejF5LogVCzINal5xagnYDLCIAtRshPkgVzzrmPh8VsvzNWue7Gh4smPVs6kbnvWuezm7DewoqGKo06INDXUUDM10FMx1FIyBLBOoVWA1SYnJ2elF+aV5Kc75OflFSLaCpYvSkzSMTE11FCwtgTqNjTSRzIdKmwNlDS2NwAQWabBuIwMgYWGGTdoA6DgjA6C7jAzMscibmoDcDjTdyNhUUwkuGwtl1YJpEK+Wq5YLALKFcXk=",title:"%E4%B8%80%E4%B8%AA%E7%8E%AB%E7%91%B0%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),m,n(e,{id:"chart-49",config:"eJy9k81Kw0AQx+99imW9KARJ0w9bj3rxDTyUHhKzqcGYLdtUECkIiigq2IM9KD30UJXSlh4Ei6hP0ybpWzi7pphgaQpCD7s7Ozsz/2F/zEkCIewclwneRJipusqwxF266qjg4s9ws1SNWBW4F/D47mzS7mEJ4XGj6Q5eueU1W/7zFbf8/pffbwnfR8N7uebWpFP3P5/E61vd7bVxkSsEGhXiiLrCgwK9X03elXtZ9x7OvW53NDwdDTvu/cC97U8eL0SjQXDQbiGbkVAmL6G8LKFcEuwsLPCl5UBURBumxSs7rEpCXk3dOygxWrX1bWpRJj6kpKmrCi+Qh6LJlCIheV1ZCytrlOmEhTMiCZHYMjVtZ2umTFxSVGXFMIw/MTv0iLAZ1ecEx/UeJNWm2fPxvN/E4VFygIIvwJPkmACPsgG2/A8+mTQUyAIaJQW9L8AnnLAwn5ikZfGJtjHlI84i7IIUpmXHpDafq2B+iUUOiS0mbYoQW6bNhz6E9Oerdk3d2YeHVKQ432uJWuIbidwvfg==",title:"%E4%B8%80%E4%B8%AA%E9%9B%B7%E8%BE%BE%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),p,n(e,{id:"chart-58",config:"eJxtULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),g,d("p",null,[s("相关详情，详见 "),d("a",h,[s("Chart.js 文档"),n(u)]),s(".")])])}const x=l(r,[["render",k],["__file","chart.html.vue"]]);export{x as default};
