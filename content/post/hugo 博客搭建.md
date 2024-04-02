---
title: hugo 博客搭建
date: 2024-04-02T08:00:00+08:00
tags:
categories:
commets:
share: true
description:
image:
date modified: 2024-04-02T22:59:36+08:00
---

# stack 主题文档

## frontmatter configs

### discription

- type: `string`
- 对文章的描述

### image

### commets

- Type: `bool`

### license

- Type: `string|bool`
- 一般情况下 `False` 隐藏就好

### math

- Type: `bool`
- 使用 KaTeX 进行渲染

### toc

- Type: `bool`
- 确保该页面至少有一个一级标题

### readingtime

- Type: `bool`

## shortcodes

首先, shortcodes 是 hugo 设计的一种文本语法, hugo 会渲染相应内容成网页内容.
而 stack 主题就预先设计了一些语法.

### bilibili video

```markdown
{{< bilibili VIDEO_ID PART_NUMBER >}}
```

### tencent video

```
{{< tencent VIDEO_ID >}}
```

### YouTube video

```
{{< youtube VIDEO_ID >}}
```

### Video file

```
{{< video VIDEO_URL>}}
{{< video src="VIDEO_URL" autoplay="true" poster="./video-poster.png" >}}
```

这里的`VIDEO_ID`可以是相对路径和绝对路径.

### GitLab

```markdown
{{< gitlab SNIPPET_ID >}}
```

### Quote

```
{{< quote author="A famous person" source="The book they wrote" url="https://en.wikipedia.org/wiki/Book">}}
content
{{< /quote >}}
```

## widgets

利用 widgets 可以实现一些特殊的界面.

### archives

- 使用 `layout: archives` 即可创建一个按照年份排列的清单页面.
- 使用参数 `limits` 控制展示年份的数目.

### search

- `layout: search`

### categories

- 展示类别
- `limits` 设置最大展示数目.

### toc

### tag-cloud

- `limits` 设置最大展示数目.

## 文件结构

利用组件则可以自定义界面以及内容管理了.
page 文件夹. 像主页, 关于等组件, [[它们本事就是由]] `.md` 形成的页面, 由于在 yaml 区添加了 `layout` 指令使它们同时能够作为组件存在.
![image.png|300](https://obsidian-1317142608.cos.ap-nanjing.myqcloud.com/obsidian/20240402205534.png?imageSlim)

### 发布设置

待发布的文件放在 `./content/post` 下
官网推荐每个 `.md` 和相关附件绑定在一起发布, 不过我已经准备了 [[obsidian 图床|图床]], 就没有必要了.
直接将所有文件存在该目录下.
现在编辑文件的 `yaml`.

```yaml
title: '001'
description:
date: 2024-04-01T12:52:10+08:00
image:
math: true        # 默认 true
license: false    # 默认 false
categories:
  - category1
  - category2
tags:
  - tag1
  - tag2
comments: true
draft: false       # 默认 false
```

综上, 结合 obsidian 的基本配置, yaml 区基本模板为

```yaml
title:
date:
image:
tags:
categories:
commets:
description:
share:
```
