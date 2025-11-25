# Busuanzi Statistics Configuration Guide

## Overview

Busuanzi (不蒜子) is a simple visitor statistics service that provides:
- **Site-wide page views** - Total views across all pages
- **Site-wide unique visitors** - Total unique visitors
- **Individual page views** - Views per article/page

## 🔧 Configuration

### Enable Busuanzi

In your `hugo.toml`, add:

```toml
[params]
    busuanzi_enable = true  # Enable Busuanzi statistics
```

### Disable Busuanzi (Default)

```toml
[params]
    busuanzi_enable = false  # Disable Busuanzi statistics
```

Or simply omit the parameter (disabled by default).

## 📊 What Gets Displayed

### When Enabled

**Sidebar Statistics (All Pages)**
```
📊 Site Stats
Views:     12,345
Visitors:  1,234
```

**Article Statistics (Post Pages)**
```
Words: 800 · Reading: 4 min · Views: 123
```

### When Disabled

**Sidebar**
- Statistics section hidden

**Article Statistics**
```
Words: 800 · Reading: 4 min
```
- Page views counter removed

## 🎯 Use Cases

### When to Enable

✅ **Enable Busuanzi if:**
- You want to track visitor engagement
- You need simple analytics without complex setup
- You don't mind using a third-party service
- Your site is primarily in Chinese markets

### When to Disable

❌ **Disable Busuanzi if:**
- You prefer privacy-focused approach
- You use other analytics (Google Analytics, Plausible, etc.)
- You want faster page load times
- You're concerned about third-party dependencies
- Your audience blocks third-party scripts

## 🔒 Privacy Considerations

**Data Collection:**
- Busuanzi collects visitor counts via third-party service
- Hosted on `busuanzi.ibruce.info`
- May be blocked by ad blockers or privacy tools

**Alternatives:**
- Google Analytics (`google_analytics` in Hugo)
- Plausible Analytics (`plausible` param)
- Baidu Analytics (`baidu_analytics` param)
- Self-hosted solutions

## ⚡ Performance Impact

### With Busuanzi Enabled
- Additional HTTP request to busuanzi.ibruce.info
- ~5KB script file (minified)
- Async loading (non-blocking)

### With Busuanzi Disabled
- No external requests
- No additional scripts
- Faster initial page load

## 🛠️ Technical Details

### Modified Files

**Template Files:**
1. `layouts/partials/head/scripts.html` - Loads Busuanzi script
2. `layouts/partials/sidebar/stats.html` - Displays site statistics
3. `layouts/partials/post/info.html` - Displays page views

**Configuration:**
- `hugo.toml` - `busuanzi_enable` parameter

### How It Works

When enabled:
```html
<!-- Script loads asynchronously -->
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

<!-- Statistics display -->
<span id="busuanzi_value_site_pv">-</span>  <!-- Site page views -->
<span id="busuanzi_value_site_uv">-</span>  <!-- Site unique visitors -->
<span id="busuanzi_value_page_pv">-</span>  <!-- Page views -->
```

## 🔄 Migration from Always-On

If you were using the theme before this feature:

### Before (Always Enabled)
- Busuanzi was always loaded
- No way to disable it
- Statistics always visible

### After (Optional, Default Off)
- Disabled by default
- Opt-in by setting `busuanzi_enable = true`
- Clean setup for new users

### To Keep Using Busuanzi
Add to your `hugo.toml`:
```toml
[params]
    busuanzi_enable = true
```

## 📝 Example Configurations

### Minimal (No Analytics)
```toml
[params]
    # Busuanzi disabled (default)
```

### With Busuanzi Only
```toml
[params]
    busuanzi_enable = true
```

### With Multiple Analytics
```toml
[params]
    # Enable Busuanzi
    busuanzi_enable = true
    
    # Also enable Baidu Analytics
    baidu_analytics = "your-baidu-id"
```

### Privacy-Focused
```toml
[params]
    # Disable Busuanzi
    busuanzi_enable = false
    
    # Use privacy-focused alternative
    plausible = true
    plausible_domain = "yourdomain.com"
    plausible_script = "https://plausible.io/js/script.js"
```

## 🐛 Troubleshooting

### Statistics Not Showing

**Check:**
1. Is `busuanzi_enable = true` in hugo.toml?
2. Is the script loading? (Check browser console)
3. Is it blocked by ad blocker?
4. Wait a few seconds for the script to load

### Shows "-" Instead of Numbers

**Reasons:**
- Script hasn't loaded yet (async)
- Network issue
- Service temporarily unavailable
- Ad blocker active

**Solution:**
- Wait a few seconds
- Refresh the page
- Disable ad blocker
- Check browser console for errors

### Wrong Statistics

**Note:**
- Busuanzi uses cookies/localStorage
- May be inaccurate due to:
  - Ad blockers
  - Cookie clearing
  - Multiple devices
  - Privacy mode browsing

## 🔗 Resources

- [Busuanzi Official](http://busuanzi.ibruce.info/)
- [Privacy Alternatives](https://plausible.io/)
- [Hugo Analytics](https://gohugo.io/templates/internal/#google-analytics)

---

**Feature Version**: 1.0.1  
**Last Updated**: 2025-10-28  
**Default Setting**: Disabled


