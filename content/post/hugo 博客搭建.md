---
title: hugo 博客搭建
date: 2024-04-02T08:00:00+08:00
<<<<<<< HEAD
tags:
categories:
commets:
share: true
description:
image:
=======
tags: 
categories: 
commets: 
share: true
description: 
image: 
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
date modified: 2024-04-02T22:59:36+08:00
---

# stack 主题文档
<<<<<<< HEAD

## frontmatter configs

### discription

=======
## frontmatter configs
### discription
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
- type: `string`
- 对文章的描述

### image

### commets
<<<<<<< HEAD

- Type: `bool`

### license

- Type: `string|bool`
- 一般情况下 `False` 隐藏就好

### math

=======
- Type: `bool`

### license
- Type: `string|bool`
- 一般情况下 `False` 隐藏就好
###  math
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
- Type: `bool`
- 使用 KaTeX 进行渲染

### toc
<<<<<<< HEAD

=======
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
- Type: `bool`
- 确保该页面至少有一个一级标题

### readingtime
<<<<<<< HEAD

- Type: `bool`

## shortcodes

首先, shortcodes 是 hugo 设计的一种文本语法, hugo 会渲染相应内容成网页内容.
而 stack 主题就预先设计了一些语法.

### bilibili video

```markdown
=======
- Type: `bool`



## shortcodes
首先, shortcodes 是 hugo 设计的一种文本语法, hugo 会渲染相应内容成网页内容.
而 stack 主题就预先设计了一些语法.
### bilibili video
```md
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
{{< bilibili VIDEO_ID PART_NUMBER >}}
```

### tencent video
<<<<<<< HEAD

=======
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
```
{{< tencent VIDEO_ID >}}
```

### YouTube video
<<<<<<< HEAD

=======
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
```
{{< youtube VIDEO_ID >}}
```

### Video file
<<<<<<< HEAD

=======
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
```
{{< video VIDEO_URL>}}
{{< video src="VIDEO_URL" autoplay="true" poster="./video-poster.png" >}}
```
<<<<<<< HEAD

=======
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
这里的`VIDEO_ID`可以是相对路径和绝对路径.

### GitLab

<<<<<<< HEAD
```markdown
{{< gitlab SNIPPET_ID >}}
```

### Quote

=======
```c
{{< github SNIPPET_ID >}}
```

### Quote
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
```
{{< quote author="A famous person" source="The book they wrote" url="https://en.wikipedia.org/wiki/Book">}}
content
{{< /quote >}}
```

## widgets
<<<<<<< HEAD

利用 widgets 可以实现一些特殊的界面.

### archives

=======
利用 widgets 可以实现一些特殊的界面.
### archives
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
- 使用 `layout: archives` 即可创建一个按照年份排列的清单页面.
- 使用参数 `limits` 控制展示年份的数目.

### search
<<<<<<< HEAD

- `layout: search`

### categories

=======
- `layout: search`

### categories
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
- 展示类别
- `limits` 设置最大展示数目.

### toc
<<<<<<< HEAD

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
=======
### tag-cloud
- `limits` 设置最大展示数目.

## 文件结构
利用组件则可以自定义界面以及内容管理了.
page 文件夹. 像主页, 关于等组件, [它们本事就是由](%E5%AE%83%E4%BB%AC%E6%9C%AC%E4%BA%8B%E5%B0%B1%E6%98%AF%E7%94%B1.md) `.md` 形成的页面, 由于在 yaml 区添加了 `layout` 指令使它们同时能够作为组件存在.
![image.png|300](https://obsidian-1317142608.cos.ap-nanjing.myqcloud.com/obsidian/20240402205534.png?imageSlim)

### 发布设置
待发布的文件放在 `./content/post` 下
官网推荐每个 `.md` 和相关附件绑定在一起发布, 不过我已经准备了 [图床](obsidian%20%E5%9B%BE%E5%BA%8A.md), 就没有必要了.
直接将所有文件存在该目录下.
现在编辑文件的 `yaml`.
```yaml
title: '001'
description:
date: 2024-04-01T12:52:10+08:00  
image:            
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
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
<<<<<<< HEAD

综上, 结合 obsidian 的基本配置, yaml 区基本模板为

```yaml
title:
=======
综上, 结合 obsidian 的基本配置, yaml 区基本模板为
```yaml
title: 
>>>>>>> 8f3a943de0c88d1c670c3e6c5c72d14c021cdcf8
date:
image:
tags:
categories:
commets:
description:
share:
```
