---
title: "Welcome to Kong-Htop Theme"
date: 2024-01-15
description: "A welcome post showcasing the basic features of the Kong-Htop theme"
tags: ["hugo", "theme", "example"]
categories: ["Tutorial"]
image: "https://via.placeholder.com/800x600"
---

## 👋 Welcome

Welcome to **Kong-Htop** theme! This is a modern and elegant Hugo theme featuring glassmorphism design style.

## ✨ Theme Features

This theme provides many powerful features:

- 🎨 **Modern Glassmorphism Design** - Glassmorphism UI design style
- 🌓 **Complete Dark Mode Support** - Automatic system theme preference detection
- 📱 **Responsive Design** - Perfect support for desktop, tablet and mobile devices
- 🏷️ **Modern Tag Cloud** - Dynamic font size and hover animations
- 📝 **Article Timeline** - Compact list view grouped by year
- 🔍 **Local Search Function** - Full-text local search based on JSON
- 📚 **Article Table of Contents** - Auto-generated sidebar navigation
- ⚡ **High Performance** - GPU-accelerated animations and optimized CSS

## 🚀 Quick Start

### 1. Install Theme

```bash
git submodule add https://github.com/yezihack/kong-htop.git themes/kong-htop
```

### 2. Configure Site

Copy example configuration:

```bash
cp themes/kong-htop/exampleSite/hugo.toml ./
```

### 3. Create Article

```bash
hugo new posts/my-post.md
```

### 4. Preview Locally

```bash
hugo server
```

Visit `http://localhost:1313` to see the result.

<!-- more -->

## 💡 Article Writing Tips

### Using Front Matter

```yaml
---
title: "Article Title"
date: 2024-01-15
description: "Article description"
tags: ["tag1", "tag2"]
categories: ["category"]
image: "cover.jpg"
---
```

### Supported Markdown Features

#### Lists

- Item 1
- Item 2
- Item 3

#### Code Blocks

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Kong-Htop!")
}
```

#### Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Dark Mode | Auto switch | ✅ |
| Search | Local search | ✅ |
| Responsive | Mobile adaptive | ✅ |

#### Blockquotes

> This is a blockquote. You can use it in articles to emphasize important information.

#### Math Formulas (KaTeX)

Supports LaTeX math formulas:

$$E = mc^2$$

## 🎨 Customize Theme

### Change Colors

Modify color configuration in `hugo.toml`:

```toml
[params]
    link_color = "#268bd2"  # Link color
    text_color = "#222"     # Text color
```

### Add Social Media

```toml
[params]
    github_url = "https://github.com/your-username"
    twitter_url = "https://twitter.com/your-handle"
```

## 📊 Performance Optimization

This theme has been optimized for:

- ✅ CSS selector optimization
- ✅ GPU-accelerated animations
- ✅ On-demand script loading
- ✅ Image lazy loading support

## 🔗 Useful Links

- [Full Documentation](https://github.com/yezihack/kong-htop/)
- [Quick Start Guide](https://github.com/yezihack/kong-htop/blob/main/GETTING_STARTED.md)
- [Kong-Htop GitHub](https://github.com/yezihack/kong-htop)
- [Hugo Official Website](https://gohugo.io/)

## 📝 Next Steps

1. **Edit Configuration** - Modify `hugo.toml` to configure your site
2. **Create Content** - Use `hugo new posts/your-post.md` to create new articles
3. **Customize Styles** - Add custom styles in `assets/css/`
4. **Deploy Site** - Deploy your site to GitHub Pages, Netlify, etc.

## 🎉 Happy Writing

You're now ready to start writing! Enjoy using the Kong-Htop theme.

---

**Need Help?** Check [GitHub Issues](https://github.com/yezihack/kong-htop/issues) or [Hugo Documentation](https://gohugo.io/documentation/).

