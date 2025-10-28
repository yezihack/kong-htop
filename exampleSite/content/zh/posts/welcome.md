---
title: "欢迎使用 Kong-Htop 主题"
date: 2024-01-15
description: "这是一篇欢迎文章，展示 Kong-Htop 主题的基本功能"
tags: ["hugo", "主题", "示例"]
categories: ["教程"]
image: "https://via.placeholder.com/800x600"
---

## 👋 欢迎

欢迎使用 **Kong-Htop** 主题！这是一个现代、优雅的 Hugo 主题，采用毛玻璃设计风格。

## ✨ 主题特性

这个主题提供了许多强大的功能：

- 🎨 **现代毛玻璃设计** - 采用 Glassmorphism UI 设计风格
- 🌓 **完全深色模式支持** - 自动检测系统主题偏好
- 📱 **响应式设计** - 完美支持桌面、平板和移动设备
- 🏷️ **现代标签云** - 动态字体大小和悬停动画
- 📝 **文章时间线** - 按年份分组的紧凑列表视图
- 🔍 **本地搜索功能** - 基于 JSON 的全文本地搜索
- 📚 **文章目录导航** - 自动生成侧栏目录
- ⚡ **高性能** - GPU 加速动画和优化的 CSS

## 🚀 快速开始

### 1. 安装主题

```bash
git submodule add https://github.com/yezihack/kong-htop.git themes/kong-htop
```

### 2. 配置站点

复制示例配置：

```bash
cp themes/kong-htop/exampleSite/hugo.toml ./
```

### 3. 创建文章

```bash
hugo new posts/my-post.md
```

### 4. 本地预览

```bash
hugo server
```

访问 `http://localhost:1313` 查看效果。

<!-- more -->

## 💡 文章写作提示

### 使用 Front Matter

```yaml
---
title: "文章标题"
date: 2024-01-15
description: "文章描述"
tags: ["标签1", "标签2"]
categories: ["分类"]
image: "cover.jpg"
---
```

### 支持的 Markdown 功能

#### 列表

- 项目 1
- 项目 2
- 项目 3

#### 代码块

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Kong-Htop!")
}
```

#### 表格

| 功能 | 说明 | 状态 |
|------|------|------|
| 深色模式 | 自动切换 | ✅ |
| 搜索功能 | 本地搜索 | ✅ |
| 响应式 | 移动适配 | ✅ |

#### 引用块

> 这是一个引用块。您可以在文章中使用它来强调重要信息。

#### 数学公式（KaTeX）

支持 LaTeX 数学公式：

$$E = mc^2$$

## 🎨 自定义主题

### 修改颜色

在 `hugo.toml` 中修改色彩配置：

```toml
[params]
    link_color = "#268bd2"  # 链接颜色
    text_color = "#222"     # 文本颜色
```

### 添加社交媒体

```toml
[params]
    github_url = "https://github.com/your-username"
    twitter_url = "https://twitter.com/your-handle"
```

## 📊 性能优化

这个主题已经过以下优化：

- ✅ CSS 选择器优化
- ✅ GPU 加速动画
- ✅ 按需加载脚本
- ✅ 图片懒加载支持

## 🔗 有用的链接

- [完整文档](../../README.md)
- [快速入门](../../GETTING_STARTED.md)
- [Kong-Htop GitHub](https://github.com/yezihack/kong-htop)
- [Hugo 官方网站](https://gohugo.io/)

## 📝 后续步骤

1. **编辑配置** - 修改 `hugo.toml` 配置您的站点
2. **创建内容** - 使用 `hugo new posts/your-post.md` 创建新文章
3. **自定义样式** - 在 `assets/css/` 中添加自定义样式
4. **部署站点** - 将您的站点部署到 GitHub Pages、Netlify 等

## 🎉 享受写作

现在您已经准备好开始写作了！祝您使用 Kong-Htop 主题愉快。

---

**需要帮助？** 查看 [GitHub Issues](https://github.com/yezihack/kong-htop/issues) 或 [Hugo 文档](https://gohugo.io/documentation/)。
