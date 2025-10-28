# Kong-Htop Example Site

## Overview

The `exampleSite` demonstrates the Kong-Htop theme with clean English content, showcasing all the key features of this modern Hugo theme.

---

## 📁 Directory Structure

```
exampleSite/
├── hugo.toml                    # Site configuration
├── content/
│   ├── about/
│   │   └── _index.md           # About page
│   ├── posts/
│   │   └── welcome.md          # Welcome post
│   └── search/
│       └── _index.md           # Search page
└── static/
    └── images/
        └── logo.png
```

---

## 🌐 Site URLs

### Main Pages
- **Home**: `http://localhost:1313/`
- **Posts**: `http://localhost:1313/posts/`
- **About**: `http://localhost:1313/about/`
- **Categories**: `http://localhost:1313/categories/`
- **Tags**: `http://localhost:1313/tags/`
- **Search**: `http://localhost:1313/search/`

---

## ⚙️ Configuration (hugo.toml)

The configuration file has been optimized for single-language (English) usage:

```toml
baseURL = 'https://example.com/'
languageCode = 'en-us'
title = "Kong-Htop Example"
theme = "../.."
paginate = 10
```

### Key Configuration Options

- **Dark Mode**: Enabled by default (`dark_mode = true`)
- **Main Sections**: Posts (`mainSections = ["posts"]`)
- **RSS**: Enabled for posts section
- **Search**: JSON output enabled for local search

---

## 🚀 Running the Example Site

### Start Development Server

```bash
cd exampleSite
hugo server
```

Open in your browser: http://localhost:1313/

### Generate Static Site

```bash
hugo
```

This generates the site in the `public/` directory.

---

## 💡 Key Features Demonstrated

### 1. Glassmorphism Design
Modern UI with frosted glass effects and smooth animations

### 2. Dark Mode
- Automatic system theme detection
- Manual toggle in sidebar
- Customizable colors for both modes

### 3. Responsive Design
Perfect layout on:
- Desktop
- Tablet
- Mobile devices

### 4. Local Search
- Fast full-text search
- No external dependencies
- JSON-based indexing

### 5. Content Organization
- Posts with categories and tags
- Article timeline
- Tag cloud with dynamic sizing

---

## 📝 Adding New Content

### Create a New Post

```bash
hugo new posts/my-post.md
```

### Post Front Matter Example

```yaml
---
title: "My New Post"
date: 2024-01-15
description: "Post description"
tags: ["tag1", "tag2"]
categories: ["category"]
image: "cover.jpg"
---
```

---

## 🎨 Customization Tips

### Change Colors

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

### Customize Menu

```toml
[params]
    menu = [
        {Name = "About", URL = "/about/", HasChildren = false},
        {Name = "Posts", URL = "/posts/", Pre = "Recent", HasChildren = true, Limit = 5},
        {Name = "Custom", URL = "/custom/", HasChildren = false},
    ]
```

### Add Social Links

```toml
[params]
    github_url = "https://github.com/your-username"
    twitter_url = "https://twitter.com/your-handle"
```

---

## 📊 Content Statistics

### Current Content
- **Posts**: 1 (Welcome post)
- **Pages**: 2 (About, Search)
- **Theme Features**: All enabled

### Generated URLs
```
/                       # Home page
/about/                 # About page
/posts/                 # Posts list
/posts/welcome/         # Welcome post
/categories/            # Categories list
/tags/                  # Tags list
/search/                # Search page
```

---

## ✅ Testing Checklist

- [x] Home page loads correctly
- [x] Posts list displays properly
- [x] Individual post pages work
- [x] Dark mode toggle functions
- [x] Search functionality works
- [x] Responsive design on mobile
- [x] Categories and tags display
- [x] About page renders correctly

---

## 🔗 Useful Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Kong-Htop Theme README](./README.md)
- [Kong-Htop GitHub](https://github.com/yezihack/kong-htop)

---

## 📞 Support

For issues or questions:

1. Check [Hugo Documentation](https://gohugo.io/)
2. Review theme examples
3. Submit [GitHub Issues](https://github.com/yezihack/kong-htop/issues)

---

**Example Site Version**: 2.0.0  
**Last Updated**: 2025-10-28  
**Theme**: Kong-Htop  
**Language**: English only

