---
title: "关于"
description: "关于这个站点和 Kong-Htop 主题的信息"
---

## 关于本站

欢迎访问本站！这是一个基于 **Kong-Htop** 主题的 Hugo 站点示例。

## Kong-Htop 主题

Kong-Htop 是一个现代、优雅的 Hugo 主题，特色包括：

### 🎨 设计特色

- **毛玻璃效果** - 采用现代的 Glassmorphism UI 设计
- **深色模式** - 完整的深色/浅色模式支持，自动检测系统偏好
- **响应式设计** - 完美适配桌面、平板和移动设备
- **流畅动画** - 所有交互都有精心设计的动画效果

### ✨ 功能特性

- 📝 **现代博客** - 完整的博客功能和文章管理
- 🏷️ **标签系统** - 标签云、分类和文章系列支持
- 🔍 **搜索功能** - 本地全文搜索（无需外部服务）
- 📚 **目录导航** - 自动生成文章目录侧栏
- 📊 **统计信息** - 阅读次数、访问量等统计
- 🎯 **SEO 优化** - 完整的 SEO 支持
- 📱 **移动友好** - 完全响应式，移动体验优秀
- ⚡ **高性能** - 优化的 CSS 和 JavaScript

### 🛠️ 技术栈

- **Hugo** - 静态网站生成器
- **HTML5/CSS3** - 现代 Web 标准
- **JavaScript** - 增强交互体验
- **KaTeX** - 数学公式支持

## 主题组成

### 结构

```
kong-htop/
├── layouts/       # 主题模板
├── assets/        # CSS 和 JavaScript
├── static/        # 静态文件（字体、图标等）
├── archetypes/    # 文章模板
└── exampleSite/   # 示例站点
```

### CSS 优化

- **2800+ 行**的自定义 CSS
- 毛玻璃效果、动画和响应式设计
- 完整的深色模式支持
- 高性能优化

### JavaScript 功能

- 深浅模式切换
- 返回顶部按钮
- 本地搜索
- 其他交互增强

## 配置灵活性

Kong-Htop 主题完全可配置：

- **颜色自定义** - 通过 `hugo.toml` 设置所有颜色
- **菜单配置** - 灵活的导航菜单设置
- **社交媒体** - 支持多种社交平台链接
- **分类系统** - 自定义分类、标签和系列

## 快速开始

### 安装

```bash
git submodule add https://github.com/yezihack/kong-htop.git themes/kong-htop
```

### 配置

复制示例配置并修改：

```bash
cp themes/kong-htop/exampleSite/hugo.toml ./
```

### 创建内容

```bash
hugo new posts/my-post.md
```

### 本地预览

```bash
hugo server
```

## 部署

编译站点：

```bash
hugo --minify
```

然后将 `public/` 目录部署到：

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **自有服务器**

## 了解更多

- 📖 [完整文档](../../README.md)
- 🚀 [快速入门指南](../../GETTING_STARTED.md)
- 💻 [GitHub 仓库](https://github.com/yezihack/kong-htop)
- 🎨 [Hugo 主题展示](https://themes.gohugo.io/)

## 许可证

Kong-Htop 采用 **GPL-3.0** 许可证。

基于 [Poison](https://github.com/lukeorth/poison) 主题，灵感来自 [Hyde](https://github.com/mdo/hyde) 设计。

## 联系方式

- 📧 GitHub Issues
- 🐦 社交媒体

---

感谢使用 Kong-Htop 主题！如有任何问题或建议，欢迎提交 Issue 或 Pull Request。
