# Kong-Htop Example Site - Multilingual Setup / 多言語設定

**English** | [简体中文](#kong-htop-example-site---多言語設定) | [日本語](#kong-htopexampleサイト---多言語設定)

## Overview

The `exampleSite` now demonstrates complete multilingual support for Kong-Htop theme with three languages:

- 🇬🇧 English (default)
- 🇨🇳 Simplified Chinese
- 🇯🇵 Japanese

---

## 📁 Directory Structure

```
exampleSite/
├── hugo.toml                    # Multilingual configuration
├── content/
│   ├── en/                      # English content
│   │   ├── about/
│   │   │   └── _index.md       # About page (English)
│   │   ├── posts/
│   │   │   └── welcome.md      # Welcome post (English)
│   │   └── search/
│   │       └── _index.md       # Search page
│   ├── zh/                      # Chinese content
│   │   ├── posts/
│   │   │   └── welcome.md      # Welcome post (Chinese)
│   │   └── about/
│   │       └── _index.md       # About page (Chinese)
│   ├── ja/                      # Japanese content
│   │   ├── about/
│   │   │   └── _index.md       # About page (Japanese)
│   │   ├── posts/
│   │   │   └── welcome.md      # Welcome post (Japanese)
│   │   └── search/
│   │       └── _index.md       # Search page (Japanese)
│   └── search/
│       └── _index.md           # Default search page
└── static/
    └── images/
        └── logo.png
```

---

## 🌐 Language URLs

### Home Pages
- **English**: `http://localhost:1313/` (default)
- **Chinese**: `http://localhost:1313/zh/`
- **Japanese**: `http://localhost:1313/ja/`

### Posts
- **English**: `http://localhost:1313/posts/`
- **Chinese**: `http://localhost:1313/zh/posts/`
- **Japanese**: `http://localhost:1313/ja/posts/`

### About Pages
- **English**: `http://localhost:1313/about/`
- **Chinese**: `http://localhost:1313/zh/about/`
- **Japanese**: `http://localhost:1313/ja/about/`

### Search
- **English**: `http://localhost:1313/search/`
- **Chinese**: `http://localhost:1313/zh/search/`
- **Japanese**: `http://localhost:1313/ja/search/`

---

## ⚙️ Configuration (hugo.toml)

```toml
# Default language
defaultContentLanguage = "en"
defaultContentLanguageInSubdir = false

[languages]
    # English
    [languages.en]
        languageName = "English"
        languageCode = "en"
        weight = 1
        contentDir = "content/en"

    # Chinese Simplified
    [languages.zh]
        languageName = "简体中文"
        languageCode = "zh-cn"
        weight = 2
        contentDir = "content/zh"

    # Japanese
    [languages.ja]
        languageName = "日本語"
        languageCode = "ja"
        weight = 3
        contentDir = "content/ja"
```

---

## 📄 Content Files

### Welcome Post (Posts Section)

| Language | File | Title |
|----------|------|-------|
| English | `content/en/posts/welcome.md` | Welcome to Kong-Htop Theme |
| Chinese | `content/zh/posts/welcome.md` | 欢迎使用 Kong-Htop 主题 |
| Japanese | `content/ja/posts/welcome.md` | Kong-Htopテーマへようこそ |

### About Page

| Language | File | Title |
|----------|------|-------|
| English | `content/en/about/_index.md` | About This Site |
| Chinese | `content/zh/about/_index.md` | 关于本站 |
| Japanese | `content/ja/about/_index.md` | このサイトについて |

### Search Page

| Language | File | Title |
|----------|------|-------|
| English | `content/en/search/_index.md` | Search |
| Chinese | `content/zh/search/_index.md` | 搜索 |
| Japanese | `content/ja/search/_index.md` | 検索 |

---

## 🚀 Running the Example Site

### Start Development Server

```bash
cd exampleSite
hugo server
```

### Access Different Languages

Open in your browser:
- http://localhost:1313/ (English)
- http://localhost:1313/zh/ (Chinese)
- http://localhost:1313/ja/ (Japanese)

### Generate Static Site

```bash
hugo
```

This generates the complete multilingual site in the `public/` directory.

---

## 💡 Key Features Demonstrated

### 1. Language Switcher
The theme automatically displays language options in the sidebar. Users can switch between:
- English
- 简体中文 (Simplified Chinese)
- 日本語 (Japanese)

### 2. Language-Specific Content
Each language has its own:
- Content sections (posts, pages)
- Menus with translated labels
- Separate URL paths

### 3. Localized Menus

**English Menu:**
```
About | Posts (Recent) | Categories | Tags
```

**Chinese Menu:**
```
关于 | 文章 (最新) | 分类 | 标签
```

**Japanese Menu:**
```
について | 記事 (最新) | カテゴリ | タグ
```

---

## 📝 Adding New Content

### Create a New English Post

```bash
hugo new en/posts/my-post.md
```

### Create a New Chinese Post

```bash
hugo new zh/posts/my-post.md
```

### Create a New Japanese Post

```bash
hugo new ja/posts/my-post.md
```

---

## 🔍 Search Functionality

The search feature works across all languages:

- English posts are searchable at `/search/`
- Chinese posts are searchable at `/zh/search/`
- Japanese posts are searchable at `/ja/search/`

Search indexes are generated separately for each language from `layouts/_default/index.json`.

---

## 🎨 Customization Tips

### Change Default Language

Edit `hugo.toml`:

```toml
defaultContentLanguage = "zh"  # Set to Chinese
# or
defaultContentLanguage = "ja"  # Set to Japanese
```

### Add Another Language

Add to `hugo.toml`:

```toml
[languages.es]
    languageName = "Español"
    languageCode = "es"
    weight = 4
    contentDir = "content/es"
```

Then create content in `content/es/posts/`, etc.

### Customize Language-Specific Menus

In `hugo.toml`:

```toml
[languages.en.params]
    menu = [
        {Name = "About", URL = "/about/", HasChildren = false},
        {Name = "Custom Item", URL = "/custom/", HasChildren = false},
    ]
```

---

## 📊 Multilingual Blog Statistics

### Current Content
- **Languages**: 3 (English, Chinese, Japanese)
- **Posts**: 3 (1 per language in welcome post)
- **Pages**: 3 (About pages, 1 per language)
- **Search Pages**: 3 (1 per language)

### Expected URLs Generated
```
/                       # English home
/about/                 # English about
/posts/                 # English posts
/search/                # English search

/zh/                    # Chinese home
/zh/about/              # Chinese about
/zh/posts/              # Chinese posts
/zh/search/             # Chinese search

/ja/                    # Japanese home
/ja/about/              # Japanese about
/ja/posts/              # Japanese posts
/ja/search/             # Japanese search
```

---

## ✅ Testing Checklist

- [ ] English home page loads at `/`
- [ ] Chinese home page loads at `/zh/`
- [ ] Japanese home page loads at `/ja/`
- [ ] Language switcher visible in sidebar
- [ ] English posts list shows at `/posts/`
- [ ] Chinese posts list shows at `/zh/posts/`
- [ ] Japanese posts list shows at `/ja/posts/`
- [ ] Search works at `/search/`
- [ ] Search works at `/zh/search/`
- [ ] Search works at `/ja/search/`
- [ ] Menus are translated for each language
- [ ] About pages are translated

---

## 🔗 Useful Resources

- [Hugo Multilingual Documentation](https://gohugo.io/content-management/multilingual/)
- [Kong-Htop Theme README](../README.md)
- [Kong-Htop GitHub](https://github.com/yezihack/kong-htop)

---

## 📞 Support

For issues or questions:

1. Check [Hugo Documentation](https://gohugo.io/)
2. Review theme examples
3. Submit [GitHub Issues](https://github.com/yezihack/kong-htop/issues)

---

**Example Site Version**: 1.0.0  
**Last Updated**: 2025-10-22  
**Theme**: Kong-Htop


