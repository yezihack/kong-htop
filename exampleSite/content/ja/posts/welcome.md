---
title: "Kong-Htopテーマへようこそ"
date: 2024-01-15
description: "Kong-Htopテーマの基本機能を紹介するウェルカムポスト"
tags: ["hugo", "テーマ", "例"]
categories: ["チュートリアル"]
image: "https://via.placeholder.com/800x600"
---

## 👋 ようこそ

**Kong-Htop** テーマへようこそ！これはモダンでエレガントなHugoテーマで、ガラスモーフィズムデザインを特徴としています。

## ✨ テーマの機能

このテーマは多くの強力な機能を提供します：

- 🎨 **モダンガラスモーフィズムデザイン** - ガラスモーフィズムUIデザインスタイル
- 🌓 **完全なダークモード対応** - システムテーマ環境設定の自動検出
- 📱 **レスポンシブデザイン** - デスクトップ、タブレット、モバイルデバイスに完全対応
- 🏷️ **モダンタグクラウド** - 動的フォントサイズとホバーアニメーション
- 📝 **記事タイムライン** - 年別にグループ化されたコンパクトなリスト表示
- 🔍 **ローカル検索機能** - JSONベースのフルテキストローカル検索
- 📚 **記事の目次ナビゲーション** - 自動生成されるサイドバー目次
- ⚡ **高性能** - GPU加速アニメーションと最適化されたCSS

## 🚀 クイックスタート

### 1. テーマをインストール

```bash
git submodule add https://github.com/yezihack/kong-htop.git themes/kong-htop
```

### 2. サイトを設定

サンプル設定をコピー：

```bash
cp themes/kong-htop/exampleSite/hugo.toml ./
```

### 3. 記事を作成

```bash
hugo new posts/my-post.md
```

### 4. ローカルでプレビュー

```bash
hugo server
```

`http://localhost:1313` にアクセスして結果を確認してください。

<!-- more -->

## 💡 記事作成のヒント

### Front Matterの使用

```yaml
---
title: "記事タイトル"
date: 2024-01-15
description: "記事の説明"
tags: ["タグ1", "タグ2"]
categories: ["カテゴリ"]
image: "cover.jpg"
---
```

### サポートされているMarkdown機能

#### リスト

- 項目1
- 項目2
- 項目3

#### コードブロック

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Kong-Htop!")
}
```

#### テーブル

| 機能 | 説明 | ステータス |
|------|------|-----------|
| ダークモード | 自動切り替え | ✅ |
| 検索 | ローカル検索 | ✅ |
| レスポンシブ | モバイル対応 | ✅ |

#### ブロッククォート

> これはブロッククォートです。記事で重要な情報を強調するために使用できます。

#### 数学公式（KaTeX）

LaTeX数学公式をサポート：

$$E = mc^2$$

## 🎨 テーマをカスタマイズ

### 色を変更

`hugo.toml` の色設定を修正：

```toml
[params]
    link_color = "#268bd2"  # リンク色
    text_color = "#222"     # テキスト色
```

### ソーシャルメディアを追加

```toml
[params]
    github_url = "https://github.com/your-username"
    twitter_url = "https://twitter.com/your-handle"
```

## 📊 パフォーマンス最適化

このテーマは以下の点で最適化されています：

- ✅ CSSセレクター最適化
- ✅ GPU加速アニメーション
- ✅ オンデマンドスクリプト読み込み
- ✅ 画像遅延読み込み対応

## 🔗 役立つリンク

- [完全なドキュメント](../../README.md)
- [クイックスタートガイド](../../GETTING_STARTED.md)
- [Kong-Htop GitHub](https://github.com/yezihack/kong-htop)
- [Hugo公式ウェブサイト](https://gohugo.io/)

## 📝 次のステップ

1. **設定を編集** - `hugo.toml` を修正してサイトを設定
2. **コンテンツを作成** - `hugo new posts/your-post.md` で新しい記事を作成
3. **スタイルをカスタマイズ** - `assets/css/` にカスタムスタイルを追加
4. **サイトをデプロイ** - GitHub Pages、Netlifyなどにサイトをデプロイ

## 🎉 楽しく執筆を

これで執筆を始める準備ができました！Kong-Htopテーマの使用をお楽しみください。

---

**ヘルプが必要？** [GitHubイシュー](https://github.com/yezihack/kong-htop/issues) または [Hugo ドキュメント](https://gohugo.io/documentation/) をご確認ください。


