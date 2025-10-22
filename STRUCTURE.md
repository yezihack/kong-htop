# Kong-Htop 主题 - 完整项目结构

## 📦 项目概览

```
kong-htop/                          # 根目录
├── 📁 layouts/                     # Hugo 主题模板（核心）
├── 📁 assets/                      # 样式和脚本文件
├── 📁 static/                      # 静态资源（字体、图标等）
├── 📁 archetypes/                  # 文章模板
├── 📁 exampleSite/                 # 示例网站
├── 📄 theme.toml                   # 主题配置
├── 📄 README.md                    # 完整文档
├── 📄 GETTING_STARTED.md           # 快速入门
├── 📄 CHANGELOG.md                 # 更新日志
├── 📄 PROJECT_SETUP.md             # 项目说明
├── 📄 COMPLETION_SUMMARY.md        # 完成总结
├── 📄 STRUCTURE.md                 # 本文件
├── 📄 LICENSE                      # GPL-3.0
└── 📄 .gitignore                   # Git 配置
```

## 📂 详细目录结构

### 1. layouts/ - 主题模板 (30+ 文件)

```
layouts/
├── _default/
│   ├── _markup/
│   │   └── render-link.html        # 链接渲染模板
│   ├── baseof.html                 # 基础模板
│   ├── list.html                   # 列表页模板
│   ├── single.html                 # 单页面模板
│   └── index.json                  # JSON 输出（搜索用）
├── about/
│   └── about.html                  # 关于页面
├── categories/
│   ├── list.html                   # 分类列表
│   └── terms.html                  # 分类标签云
├── posts/
│   └── list.html                   # 文章列表（按年份分组）
├── projects/
│   └── projects.html               # 项目页面
├── search/
│   └── list.html                   # 搜索结果页
├── tags/
│   ├── list.html                   # 标签列表
│   └── terms.html                  # 标签云
├── 404.html                        # 404 页面
├── index.html                      # 首页
└── partials/
    ├── head/
    │   ├── css.html                # CSS 链接
    │   ├── favicon.html            # 网站图标
    │   ├── head.html               # 头部标签
    │   ├── meta.html               # 元标签
    │   ├── scripts.html            # 脚本链接
    │   └── stylesheets.html        # 样式表
    ├── light_dark.html             # 深浅模式切换
    ├── pagination.html             # 分页
    ├── table_of_contents.html      # 目录导航
    ├── post/
    │   ├── comments.html           # 评论区
    │   ├── info.html               # 文章信息
    │   └── navigation.html         # 上/下一篇
    ├── sidebar/
    │   ├── copyright.html          # 版权信息
    │   ├── menu.html               # 菜单
    │   ├── sidebar.html            # 侧边栏
    │   ├── socials.html            # 社交媒体
    │   └── title.html              # 标题
    └── shortcodes/
        ├── mermaid.html            # Mermaid 图
        ├── plantuml.html           # PlantUML
        ├── tab.html                # 单个标签页
        └── tabs.html               # 标签页组
```

### 2. assets/ - 样式和脚本 (4000+ 行代码)

```
assets/
├── css/
│   ├── poison.css                  # 基础样式 (1500行)
│   ├── custom.css                  # 自定义优化 (2800+行)
│   ├── codeblock.css               # 代码块样式
│   ├── fonts.css                   # 字体定义
│   ├── hyde.css                    # Hyde 设计
│   ├── poole.css                   # Poole 库
│   ├── tabs.css                    # 标签页
│   └── lib/
│       └── katex.css               # KaTeX 数学
└── js/
    ├── light_dark.js               # 深浅模式
    ├── search.js                   # 搜索功能
    ├── back_to_top.js              # 返回顶部
    ├── random-post.js              # 随机文章
    ├── toc.js                      # 目录导航
    ├── global_search_shortcut.js    # 搜索快捷键
    ├── codeblock.js                # 代码块复制
    ├── katex.js                    # KaTeX 渲染
    ├── plantuml-encoder.js         # PlantUML
    ├── tabs.js                     # 标签页切换
    └── lib/
        ├── auto-render.js
        ├── auto-render.min.js
        ├── mermaid.js
        └── ...
```

### 3. static/ - 静态资源 (140+ 文件)

```
static/
├── fonts/                          # Web 字体 (78文件)
│   ├── *.woff                      # 29 个 WOFF 字体
│   ├── *.woff2                     # 29 个 WOFF2 字体
│   └── *.ttf                       # 20 个 TTF 字体
├── icons/
│   ├── copy_content.svg            # 复制图标
│   └── copy_success.svg            # 成功图标
└── katex/                          # KaTeX 库 (60文件)
    ├── katex.css                   # 主样式
    ├── katex.js                    # 主脚本
    ├── katex.min.css
    ├── katex.min.js
    ├── katex.mjs
    ├── contrib/                    # 扩展库
    │   ├── auto-render.js
    │   ├── copy-tex.js
    │   ├── mhchem.js
    │   └── ...
    └── fonts/                      # 数学字体 (20文件)
```

### 4. archetypes/ - 文章模板

```
archetypes/
└── default.md                      # 新文章模板
    # 包含文章的标准前置元数据
    # title, date, tags, categories 等
```

### 5. exampleSite/ - 示例网站

```
exampleSite/
├── hugo.toml                       # 配置示例
│   # 完整的配置参数演示
│   # 所有可用的自定义选项
├── content/
│   ├── posts/
│   │   └── welcome.md             # 欢迎文章示例
│   └── about/
│       └── _index.md              # 关于页面示例
└── static/                         # 静态文件示例
    └── (可选) 示例图片和资源
```

### 6. 文档文件

```
📄 README.md                        # 完整功能文档 (2500+ 字)
📄 GETTING_STARTED.md               # 5分钟快速入门
📄 CHANGELOG.md                     # 版本更新记录
📄 PROJECT_SETUP.md                # 项目详细说明
📄 COMPLETION_SUMMARY.md           # 项目完成总结
📄 STRUCTURE.md                    # 本结构文档
```

### 7. 配置文件

```
📄 theme.toml                       # 主题配置 (Hugo 识别)
📄 LICENSE                          # GPL-3.0 许可证
📄 .gitignore                       # Git 忽略配置
```

---

## 🎯 核心文件功能

### layouts/ 关键文件说明

| 文件 | 功能 | 行数 |
|------|------|------|
| `_default/baseof.html` | 所有页面基础模板 | ~50 |
| `_default/single.html` | 单页面（文章详情） | ~40 |
| `_default/list.html` | 列表页（通用） | ~30 |
| `posts/list.html` | 文章列表（优化） | ~60 |
| `categories/terms.html` | 分类标签云 | ~80 |
| `tags/terms.html` | 标签云 | ~80 |
| `search/list.html` | 搜索结果页 | ~100 |
| `partials/` | 可复用组件 | ~500 |

### assets/css/ 优化详解

**custom.css** (2800+ 行) 包含：

| 模块 | 行数 | 功能 |
|------|------|------|
| 滚动条 | ~150 | Firefox/Webkit 兼容 |
| 移动端 | ~500 | 响应式优化 |
| 代码块 | ~150 | 高亮和复制 |
| 表格 | ~100 | 响应式表格 |
| 标签云 | ~300 | 毛玻璃效果 |
| 文章列表 | ~350 | 时间线布局 |
| 文章页 | ~500 | 卡片设计 |
| 侧边栏 | ~300 | 菜单和图标 |
| 搜索 | ~400 | 搜索框和结果 |

### assets/js/ 功能列表

| 文件 | 功能 | 代码行 |
|------|------|--------|
| `light_dark.js` | 深浅模式切换 | ~100 |
| `search.js` | 本地全文搜索 | ~200 |
| `back_to_top.js` | 返回顶部 | ~80 |
| `toc.js` | 目录导航 | ~100 |
| `codeblock.js` | 一键复制 | ~80 |
| `random-post.js` | 随机文章 | ~50 |
| 其他脚本 | 支持库 | ~300 |

---

## 💾 文件统计

### 总体规模

| 类别 | 数量 | 备注 |
|------|------|------|
| **总文件数** | ~200+ | 完整主题 |
| **HTML 文件** | ~30 | 模板文件 |
| **CSS 文件** | ~6 | 样式表 |
| **JS 文件** | ~10+ | 功能脚本 |
| **静态资源** | ~140 | 字体、图标等 |
| **Markdown** | ~7 | 文档 |

### 代码量

| 类别 | 行数 | 备注 |
|------|------|------|
| **HTML** | ~2000 | 模板代码 |
| **CSS** | ~4000 | 完整样式 |
| **JavaScript** | ~1000 | 交互脚本 |
| **Markdown** | ~10000 | 文档说明 |
| **总计** | ~17000+ | 完整项目 |

---

## 🔍 特殊文件说明

### theme.toml

Hugo 识别的主题配置文件，包含：
- 主题名称和描述
- 作者信息
- 许可证
- 功能标签
- 主题链接

### exampleSite/hugo.toml

完整的配置示例，包含：
- 所有基础配置
- 全部颜色自定义选项
- 菜单配置
- 社交媒体链接
- 分类配置

---

## 🚀 使用这个项目结构

### 安装主题

```bash
git clone https://github.com/your-username/kong-htop.git themes/kong-htop
```

### 配置站点

```bash
# 复制示例配置
cp themes/kong-htop/exampleSite/hugo.toml ./hugo.toml

# 编辑配置文件
editor hugo.toml
```

### 本地测试

```bash
# 进入示例网站
cd themes/kong-htop/exampleSite

# 启动服务器
hugo server
```

### 自定义主题

```
your-blog/
├── themes/
│   └── kong-htop/              # 主题文件
├── content/                    # 您的文章
├── assets/
│   └── css/
│       └── custom.css          # 自定义样式（覆盖主题）
└── layouts/
    └── posts/
        └── single.html         # 自定义模板（覆盖主题）
```

---

## 📚 文档导航

- **开始使用** → [GETTING_STARTED.md](GETTING_STARTED.md)
- **完整文档** → [README.md](README.md)
- **项目说明** → [PROJECT_SETUP.md](PROJECT_SETUP.md)
- **版本历史** → [CHANGELOG.md](CHANGELOG.md)
- **完成总结** → [COMPLETION_SUMMARY.md](COMPLETION_SUMMARY.md)

---

## ✅ 项目准备

- [x] 所有文件已组织
- [x] 文档已完成
- [x] 示例已创建
- [x] 配置已准备
- [x] Git 已初始化

---

**准备好发布到 GitHub 了！** 🎉
