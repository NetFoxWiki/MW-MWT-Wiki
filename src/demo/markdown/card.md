## 使用

你可以使用卡片代码块来在 Markdown 中添加卡片。

````md
```card
# 卡片数据
```
````

默认情况下，你应该使用 YAML 格式来编写卡片数据，但你也可以通过在代码块后添加 `:json` 后缀来使用 JSON 格式。

````md
```card:json
{
  // 卡片数据
}
```
````

卡片数据支持 `title`、`desc`、`logo`、`link` 和 `color` 属性。

如果你想要将多个卡片放在一起，你可以将它们包裹在 `card` 容器中：

````md
::: card

```card
# 卡片数据
```

```card
# 卡片数据
```

...

:::
````

## 案例

::: card

```card
title: MWdocs
desc: 用于记录现代战舰内容的文档网站 🍂
logo: https://img1.imgtp.com/2023/08/14/Uqoy24sz.png
link: https://mwdocs.info
color: rgba(253, 230, 138, 0.15)
```

:::

````md
```card
title: MWdocs
desc: 用于记录现代战舰内容的文档网站 🍂
logo: https://img1.imgtp.com/2023/08/14/Uqoy24sz.png
link: https://mwdocs.info
color: rgba(253, 230, 138, 0.15)
```
````
