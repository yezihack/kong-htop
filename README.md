# Kong-Htop

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Hugo](https://img.shields.io/badge/Hugo-0.101.0+-179BD7?style=flat&logo=hugo)](https://gohugo.io)

**[English](./README.md) | [简体中文](./README.cn.md)**

> An elegant and modern Hugo theme featuring glassmorphism design, deeply customized based on the Poison theme.

![Kong-Htop Theme](https://cdn.jsdelivr.net/gh/yezihack/assets/b/20251022154715.png)

## ✨ Features

- 🎨 **Modern Glassmorphism Design** - glassmorphism UI design style
- 🌓 **Full Dark Mode Support** - automatic switching with deep adaptation
- 📱 **Responsive Design** - perfect support for desktop, tablet, and mobile
- 🏷️ **Tag Cloud** - modern tags and category pages
- 📝 **Article Timeline** - compact list grouped by year
- 🔍 **Search Function** - full-text local search (JSON-based)
- 📚 **Table of Contents** - automatically generated article sidebar navigation
- 🎲 **Random Articles** - randomly display articles
- 🎯 **Series Articles** - support for article series management
- 🔢 **Article Statistics** - view counts, traffic stats, etc.
- ⚡ **High Performance** - GPU-accelerated animations, optimized CSS selectors
- 📖 **KaTeX Support** - mathematical formula rendering
- 💬 **Code Block Enhancements** - one-click copy, line numbers display

## 🚀 Quick Start

### Install Theme

#### Method 1: As a Git Submodule (Recommended)

```bash
git clone https://github.com/your-blog/my-blog.git
cd my-blog
git submodule add https://github.com/yezihack/kong-htop.git themes/kong-htop
```

#### Method 2: Direct Clone

```bash
git clone https://github.com/your-blog/my-blog.git
cd my-blog
git clone https://github.com/yezihack/kong-htop.git themes/kong-htop
```

#### Method 3: Download ZIP

Download the latest version from [Releases](https://github.com/yezihack/kong-htop/releases) and extract it to the `themes/kong-htop` directory.

### Configure Hugo

Update your `hugo.toml` file:

```toml
theme = "kong-htop"
```

### Quick Configuration

Copy the example configuration:

```bash
cp themes/kong-htop/exampleSite/hugo.toml ./
```

Then modify the configuration file according to your needs.

## 📋 Configuration Guide

### Basic Configuration

```toml
baseURL = 'https://your-site.com/'
languageCode = 'en'
title = "Your Blog Title"
theme = "kong-htop"
paginate = 10

[Author]
name = "Your Name"
```

### Site Parameters

```toml
[params]
    # Branding settings
    title = "Your Blog Title"
    brand = "Brand Name"
    brand_image = "/images/logo.png"
    og_image = "/images/og-image.png"
    favicon = "/images/favicon.png"
    
    # Site description
    description = "Your site description"
    
    # Dark mode
    dark_mode = true
    
    # Main content sections
    mainSections = ["posts"]
    
    # Menu configuration
    menu = [
        {Name = "About", URL = "/about/", HasChildren = false},
        {Name = "Posts", URL = "/posts/", Pre = "Recent", HasChildren = true, Limit = 5},
        {Name = "Categories", URL = "/categories/", HasChildren = false},
        {Name = "Tags", URL = "/tags/", HasChildren = false},
    ]
    
    # RSS configuration
    rss_icon = true
    rss_section = "posts"
```

### Color Customization

#### Sidebar Colors

```toml
[params]
    sidebar_bg_color = "#202020"           # Background color
    sidebar_img_border_color = "#515151"   # Avatar border color
    sidebar_p_color = "#909090"            # Description text color
    sidebar_h1_color = "#FFF"              # Title color
    sidebar_a_color = "#FFF"               # Link color
    sidebar_socials_color = "#FFF"         # Social icons color
    moon_sun_color = "#FFF"                # Dark/Light toggle button color
    moon_sun_background_color = "#515151"  # Dark/Light toggle button background
```

#### Light Mode

```toml
[params]
    text_color = "#222"             # Text color
    content_bg_color = "#FAF9F6"    # Content background
    post_title_color = "#303030"    # Title color
    list_color = "#5a5a5a"          # List color
    link_color = "#268bd2"          # Link color
    date_color = "#515151"          # Date color
    table_border_color = "#E5E5E5"  # Table border
    table_stripe_color = "#F9F9F9"  # Table stripe
```

#### Dark Mode

```toml
[params]
    text_color_dark = "#eee"            # Text color
    content_bg_color_dark = "#121212"   # Content background
    post_title_color_dark = "#DBE2E9"   # Title color
    list_color_dark = "#9d9d9d"         # List color
    link_color_dark = "#268bd2"         # Link color
    date_color_dark = "#9a9a9a"         # Date color
    table_border_color_dark = "#515151" # Table border
    table_stripe_color_dark = "#202020" # Table stripe
```

### Taxonomy Configuration

```toml
[taxonomies]
    series = 'series'
    tags = 'tags'
    categories = 'categories'

[outputs]
    home = ["HTML", "RSS", "JSON"]
```

## 📁 Directory Structure

```
kong-htop/
├── layouts/                    # Theme templates
│   ├── _default/              # Default templates
│   │   ├── baseof.html        # Base template
│   │   ├── list.html          # List page template
│   │   ├── single.html        # Single page template
│   │   └── index.json         # JSON output
│   ├── posts/                 # Post related
│   │   └── list.html          # Post list page
│   ├── categories/            # Categories related
│   │   ├── list.html          # Category list
│   │   └── terms.html         # Category tag cloud
│   ├── tags/                  # Tags related
│   │   ├── list.html          # Tag list
│   │   └── terms.html         # Tag cloud
│   ├── search/                # Search page
│   │   └── list.html          # Search results
│   └── partials/              # Reusable components
│       ├── head/              # Header components
│       ├── post/              # Post components
│       └── sidebar/           # Sidebar components
├── assets/                    # Static assets
│   ├── css/                   # Stylesheets
│   │   ├── poison.css         # Main styles
│   │   ├── custom.css         # Custom styles (2800+ lines optimized)
│   │   └── lib/               # Third-party libraries
│   └── js/                    # JavaScript
│       ├── light_dark.js      # Dark/Light mode toggle
│       ├── search.js          # Search functionality
│       ├── back_to_top.js     # Back to top
│       └── lib/               # Third-party libraries
├── static/                    # Static files
│   ├── fonts/                 # Font files
│   ├── icons/                 # Icon resources
│   └── katex/                 # KaTeX math library
├── archetypes/                # Content templates
│   └── default.md             # Default article template
├── exampleSite/               # Example site
│   ├── hugo.toml              # Configuration example
│   ├── content/               # Sample content
│   └── static/                # Sample static files
├── theme.toml                 # Theme configuration
├── LICENSE                    # License
└── README.md                  # This document
```

## 🎨 Design Features

### Glassmorphism Effect

The theme uses modern glassmorphism design elements:

```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.15);
```

### Smooth Animations

All interactions feature carefully designed animations:

- Smooth CSS transitions
- GPU-accelerated transform animations
- Hover effects and press feedback

### Responsive Design

Three responsive breakpoints:

- **Mobile** (< 768px): Single column layout
- **Tablet** (768px - 1024px): Flexible layout
- **Desktop** (> 1024px): Full effect

## 🔧 Advanced Usage

### Custom Styles

Create `assets/css/custom.css` in your website project to override theme styles:

```css
/* Custom link color */
.content a {
    color: #your-color;
}
```

### Custom Templates

Create template files with the same path in your project to override theme templates:

```
content/
├── layouts/
│   └── posts/
│       └── single.html        # Override article detail page template
```

### Article Front Matter

Complete front matter example:

```markdown
---
title: "Article Title"
date: 2024-01-15
description: "Article description"
tags: ["tag1", "tag2"]
categories: ["category1"]
series: ["series-name"]
image: "cover-image.jpg"
---
```

## 📖 CSS Structure

### custom.css Functional Modules

1. **Scrollbar Styling** (≈150 lines)
   - Firefox and Webkit compatible
   - Dark/Light mode adaptive

2. **Mobile Optimization** (≈500 lines)
   - Responsive breakpoints
   - Touch-friendly
   - Compact layout

3. **Code Block Enhancement** (≈150 lines)
   - One-click copy functionality
   - Line numbers display
   - Horizontal scroll indicator

4. **Responsive Tables** (≈100 lines)
   - Mobile adaptation
   - Scrollable tables

5. **Tag Cloud** (≈300 lines)
   - Glassmorphism effect
   - Dynamic font sizes
   - Hover animations

6. **Article List** (≈350 lines)
   - Grouped by year
   - Compact layout
   - Date badges

7. **Article Detail Page** (≈500 lines)
   - Modern card layout
   - Glassmorphism effect
   - Optimized typography

8. **Sidebar** (≈300 lines)
   - Glassmorphism background
   - Menu animations
   - Social icons

9. **Search Page** (≈400 lines)
   - Search box styling
   - Result display
   - Highlight matches

Total: **2800+ lines** of optimized CSS

## 🌓 Dark Mode

The theme provides complete dark mode support:

- ✅ Automatic system theme detection
- ✅ Manual toggle button in sidebar
- ✅ All components perfectly adapted
- ✅ Smooth transition animations

## 🚀 Performance Optimization

- **CSS** Optimized selectors avoiding repaints and reflows
- **GPU Acceleration** Using transform and opacity properties
- **Code Splitting** On-demand loading of KaTeX and other libraries
- **Image Optimization** Automatic lazy loading applied
- **Caching Strategy** Leveraging browser cache

## 📱 Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 12+
- ✅ Android Chrome

## 🤝 Contributing

Issues and pull requests are welcome!

## 📄 License

This theme is licensed under GPL-3.0, based on the [Poison](https://github.com/lukeorth/poison) theme.

For the original Poison theme, please see:
- Original Author: Luke Orth
- Original Design Inspiration: [Hyde](https://github.com/mdo/hyde)

## 🙏 Acknowledgments

Thanks to:
- Excellent foundation of [Poison](https://github.com/lukeorth/poison) theme
- Support from Hugo community
- All contributors and users

## 📞 Support

Encountering issues?

1. Check the [Example Site](exampleSite/)
2. Submit [GitHub Issues](https://github.com/yezihack/kong-htop/issues)
3. Review [Hugo Documentation](https://gohugo.io/)

---

**Created by**: Yezihack  
**Open Source Date**: 2025  
**Version**: 1.0.0
