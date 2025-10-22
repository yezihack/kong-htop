# Kong-Htop 快速入门指南

## 5 分钟快速开始

### 第 1 步：安装主题

#### 选项 A：使用 Git 子模块（推荐）

```bash
# 在您的 Hugo 网站目录中
git submodule add https://github.com/yezihack/kong-htop.git themes/kong-htop
```

#### 选项 B：直接克隆

```bash
git clone https://github.com/yezihack/kong-htop.git themes/kong-htop
```

### 第 2 步：配置站点

从示例配置开始：

```bash
cp themes/kong-htop/exampleSite/hugo.toml ./hugo.toml
```

编辑 `hugo.toml` 文件，至少修改以下内容：

```toml
baseURL = 'https://your-domain.com/'
title = "Your Blog Title"

[Author]
name = "Your Name"

[params]
    brand = "Your Blog"
    description = "Your blog description"
```

### 第 3 步：创建第一篇文章

```bash
hugo new posts/my-first-post.md
```

编辑 `content/posts/my-first-post.md`：

```markdown
---
title: "我的第一篇文章"
date: 2024-01-15
tags: ["标签1", "标签2"]
categories: ["分类"]
---

# 文章内容

这是你的第一篇文章！
```

### 第 4 步：本地预览

```bash
hugo server
```

访问 `http://localhost:1313` 查看效果。

### 第 5 步：自定义颜色

在 `hugo.toml` 中修改：

```toml
[params]
    # 链接颜色
    link_color = "#268bd2"
    
    # 深色模式链接颜色
    link_color_dark = "#268bd2"
```

## 常见配置

### 启用社交媒体链接

在 `hugo.toml` 中添加（可选）：

```toml
[params]
    github_url = "https://github.com/your-username"
    twitter_url = "https://twitter.com/your-handle"
    linkedin_url = "https://linkedin.com/in/your-profile"
    email_url = "mailto:your-email@example.com"
```

### 启用 RSS

```toml
[params]
    rss_icon = true
    rss_section = "posts"
```

### 配置菜单项

```toml
[params]
    menu = [
        {Name = "首页", URL = "/", HasChildren = false},
        {Name = "文章", URL = "/posts/", Pre = "最新", HasChildren = true, Limit = 5},
        {Name = "分类", URL = "/categories/", HasChildren = false},
        {Name = "标签", URL = "/tags/", HasChildren = false},
        {Name = "关于", URL = "/about/", HasChildren = false},
    ]
```

## 文章管理

### 创建新文章

```bash
hugo new posts/article-name.md
```

### 文章前置元数据（Front Matter）

```markdown
---
title: "文章标题"
date: 2024-01-15T10:30:00Z
description: "文章简述"
tags: ["标签1", "标签2"]
categories: ["技术", "生活"]
series: ["系列名"]
image: "cover.jpg"
draft: false
---
```

### 参数说明

| 参数 | 说明 | 示例 |
|------|------|------|
| title | 文章标题 | "我的第一篇文章" |
| date | 发布时间 | 2024-01-15 |
| description | 文章描述 | "这是一篇关于..." |
| tags | 标签列表 | ["golang", "web"] |
| categories | 分类 | ["技术", "编程"] |
| series | 系列名 | ["Go 教程"] |
| image | 封面图 | "images/cover.jpg" |
| draft | 草稿状态 | false（发布）或 true（草稿） |

## 目录结构

创建后的项目结构：

```
my-blog/
├── content/              # 内容文件
│   ├── posts/           # 博客文章
│   └── about/           # 关于页面
├── static/              # 静态文件（图片等）
│   └── images/
├── themes/
│   └── kong-htop/       # 主题
├── hugo.toml            # 配置文件
└── README.md            # 项目说明
```

## 使用技巧

### 草稿模式

在文章中设置 `draft: true` 可以隐藏文章：

```markdown
---
draft: true  # 设置后 hugo server 需要加 -D 参数才能看到
---
```

查看草稿：

```bash
hugo server -D
```

### 精选内容

只在首页显示部分内容：

```markdown
---
---

这部分会显示在首页和文章列表中。

<!-- more -->

这部分只在文章详情页显示。
```

### 创建关于页面

```bash
hugo new about/_index.md
```

编辑 `content/about/_index.md`。

## 部署

### 构建静态网站

```bash
hugo --minify
```

生成的文件在 `public/` 目录。

### 常见部署平台

- **GitHub Pages**: 推送到 `gh-pages` 分支
- **Netlify**: 连接 GitHub 仓库自动部署
- **Vercel**: 类似 Netlify，提供 CI/CD
- **自有服务器**: 上传 `public/` 目录到服务器

## 故障排除

### Q: 样式不显示

**A:** 
1. 清空 Hugo 缓存：`hugo server --cleanDestinationDir`
2. 清除浏览器缓存：Ctrl+Shift+R（Windows）或 Cmd+Shift+R（Mac）

### Q: 中文显示乱码

**A:** 在 `hugo.toml` 中设置：

```toml
languageCode = 'zh-cn'
```

### Q: 文章不显示

**A:** 检查：
1. 文章是否设置 `draft: true`（需要 `hugo server -D`）
2. 文章日期是否在未来（需要 `hugo server --buildFuture`）
3. 文章分类是否在 `mainSections` 中

## 更多资源

- 📚 [Kong-Htop 完整文档](README.md)
- 🎨 [Hugo 主题展示](https://themes.gohugo.io/)
- 📖 [Hugo 官方文档](https://gohugo.io/documentation/)
- 💬 [Hugo 社区论坛](https://discourse.gohugo.io/)

## 获取帮助

遇到问题？

1. 检查 [FAQ](#故障排除)
2. 查看 [GitHub Issues](https://github.com/yezihack/kong-htop/issues)
3. 提交新的 Issue 描述问题

---

**祝您使用愉快！** 🎉
