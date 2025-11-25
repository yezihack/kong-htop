# Kong-Htop

[![Hugo](https://img.shields.io/badge/Hugo-0.101.0+-179BD7?style=flat&logo=hugo)](https://gohugo.io)

**[English](./README.md) | [简体中文](./README.cn.md)**

> An elegant and modern Hugo theme featuring glassmorphism design, based on Poison theme.

![screenshot.png](https://raw.githubusercontent.com/yezihack/kong-htop/main/images/screenshot.png)

## ✨ Features

- 🎨 **Glassmorphism Design** - Modern frosted glass UI style
- 🌓 **Dark Mode** - Automatic theme switching with deep adaptation
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- 🔍 **Local Search** - Fast full-text search powered by JSON
- 🏷️ **Tag Cloud** - Dynamic tag visualization with hover effects
- 📝 **Timeline View** - Posts organized by year
- 🎲 **Random Posts** - Discover content randomly
- ⚡ **High Performance** - GPU-accelerated animations, optimized CSS
- 📖 **KaTeX Support** - Beautiful math formulas
- 💬 **Code Enhancements** - One-click copy, line numbers

## 🚀 Quick Start

### 1. Install Theme

```bash
# Add as Git submodule (recommended)
git submodule add https://github.com/yezihack/kong-htop.git themes/kong-htop

# Or clone directly
git clone https://github.com/yezihack/kong-htop.git themes/kong-htop
```

### 2. Configure

Copy the example configuration:

```bash
cp themes/kong-htop/exampleSite/hugo.toml ./
```

Edit `hugo.toml` with your site information:

```toml
baseURL = 'https://your-domain.com/'
title = "Your Blog"
theme = "kong-htop"

[Author]
name = "Your Name"

[params]
    brand = "Your Blog"
    description = "Your blog description"
```

### 3. Create Content

```bash
# Create your first post
hugo new posts/hello-world.md

# Create about page
hugo new about/_index.md
```

### 4. Preview

```bash
hugo server
```

Visit `http://localhost:1313` 🎉

## 📝 Writing Posts

Create posts with:

```bash
hugo new posts/my-post.md
```

Front matter example:

```yaml
---
title: "Post Title"
date: 2024-01-15
description: "Brief description"
tags: ["tag1", "tag2"]
categories: ["category"]
---

Your content here...
```

## 🎨 Customization

### Colors

Edit `hugo.toml`:

```toml
[params]
    # Light mode
    link_color = "#268bd2"
    text_color = "#222"
    
    # Dark mode
    link_color_dark = "#268bd2"
    text_color_dark = "#eee"
```

### Menu

```toml
[params]
    menu = [
        {Name = "Home", URL = "/", HasChildren = false},
        {Name = "Posts", URL = "/posts/", Pre = "Recent", HasChildren = true, Limit = 5},
        {Name = "About", URL = "/about/", HasChildren = false},
    ]
```

### Social Links

```toml
[params]
    github_url = "https://github.com/username"
    twitter_url = "https://twitter.com/handle"
```

### Visitor Statistics (Optional)

Enable Busuanzi visitor counting (disabled by default):

```toml
[params]
    busuanzi_enable = true  # Enable page views and visitor statistics
```

## 📁 Project Structure

```
your-site/
├── content/
│   ├── posts/          # Blog posts
│   └── about/          # About page
├── static/
│   └── images/         # Images
├── themes/
│   └── kong-htop/      # This theme
└── hugo.toml           # Configuration
```

## 🌍 Multilingual Support

The example site includes posts in 7 languages:

- 🇬🇧 English, 🇨🇳 Chinese, 🇯🇵 Japanese, 🇰🇷 Korean
- 🇩🇪 German, 🇫🇷 French, 🇪🇸 Spanish

See `exampleSite/content/posts/` for examples.

## 🔧 Advanced Features

### Search Function

Search is automatically enabled. Just create:

```markdown
---
title: "Search"
slug: "search"
outputs: ["html", "json"]
---
```

Save as `content/search/_index.md`.

### Math Formulas

Use KaTeX for math:

```markdown
Inline: $E = mc^2$

Block:
$$
\int_{a}^{b} f(x) dx
$$
```

### Code Blocks

Syntax highlighting with copy button:

````markdown
```go
package main

func main() {
    println("Hello!")
}
```
````

## 🚢 Deployment

Build your site:

```bash
hugo --minify
```

Deploy the `public/` folder to:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Your own server**

## 📖 Documentation

- 📚 [Example Site](exampleSite/) - Live demo configuration
- 🌐 [Multilingual Posts](exampleSite/content/posts/) - 7 language examples
- ⚙️ [Full Configuration](exampleSite/hugo.toml) - All available options

## 🤝 Contributing

Issues and pull requests are welcome!

## 📄 License

MIT License. Based on [Poison](https://github.com/lukeorth/poison) theme.

## 🙏 Credits

- [Poison Theme](https://github.com/lukeorth/poison) by Luke Orth
- [Hyde](https://github.com/mdo/hyde) design inspiration
- Hugo community

## 💬 Support

- 📖 [Hugo Documentation](https://gohugo.io/documentation/)
- 🐛 [GitHub Issues](https://github.com/yezihack/kong-htop/issues)
- 💡 [Discussions](https://github.com/yezihack/kong-htop/discussions)

---

**Created by**: [Yezihack](https://github.com/yezihack)  
**Version**: 1.0.0
