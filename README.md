# ヌンチャクコマンドー 公式サイト

白黒・グレースケール基調のシックなデザインで制作したヌンチャクコマンドーの公式ウェブサイトです。

## デザインコンセプト

- **カラースキーム**: 白黒・グレースケール基調
- **スタイル**: ミニマル、シック、モダン
- **画像効果**: デフォルトでグレースケール、ホバーでカラー表示

## 構成

### ページ構成
1. **MV (Main Visual)** - メインビジュアル
2. **About Us** - サービス紹介(4つのカードを横並び)
3. **Works & Products** - 制作実績(JSON管理)
4. **Blog** - ブログ記事(JSON管理)
5. **販売情報** - 現在販売中の製品
6. **Team** - チームメンバー紹介
7. **Topics** - お知らせ・トピックス
8. **Contact** - お問い合わせ

### ファイル構成

```
nunchaku-redesign/
├── index.html              # メインページ
├── blog.html               # ブログ一覧ページ
├── blog-template.html      # ブログ記事テンプレート
├── css/
│   ├── styles.css         # メインスタイルシート
│   └── article.css        # 記事ページ用スタイル
├── js/
│   ├── main.js            # メインJavaScript
│   ├── blog.js            # ブログ表示管理
│   ├── works.js           # Works表示管理
│   ├── blog-data.json     # ブログデータ
│   └── works-data.json    # Worksデータ
├── assets/                 # 画像ファイル
├── blog/                   # ブログ記事ディレクトリ
└── works/                  # Works詳細ページディレクトリ
```

## 機能

### JSON管理システム

#### ブログ記事 (`js/blog-data.json`)
```json
{
  "id": 1,
  "title": "記事タイトル",
  "slug": "article-slug",
  "date": "2025-10-20",
  "category": "カテゴリー",
  "excerpt": "抜粋テキスト",
  "image": "画像パス",
  "content": "本文"
}
```

#### Works (`js/works-data.json`)
```json
{
  "id": 1,
  "title": "作品タイトル",
  "slug": "work-slug",
  "category": "カテゴリー",
  "description": "説明",
  "image": "メイン画像パス",
  "hoverImage": "ホバー時画像パス",
  "detailPage": "詳細ページURL"
}
```

### Utterancesコメント機能

各ブログ記事にGitHub Issuesベースのコメント機能を実装。

**設定方法:**
詳細な設定手順は`UTTERANCES_SETUP.md`を参照してください。

1. GitHubリポジトリに[utterances app](https://github.com/apps/utterances)をインストール
2. 各ブログ記事のスクリプトタグを編集して、リポジトリ情報を設定

**簡易設定:**
```html
<script src="https://utteranc.es/client.js"
        repo="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

## 使い方

### 新しいブログ記事を追加

1. `js/blog-data.json`に新しい記事データを追加
2. `blog/`ディレクトリに`{slug}.html`ファイルを作成
3. `blog-template.html`をベースに記事を作成

### 新しいWorksを追加

1. `js/works-data.json`に新しい作品データを追加
2. `works/`ディレクトリに`{slug}.html`ファイルを作成(必要に応じて)

### About Usの画像を変更

`index.html`の以下の部分を編集:
```html
<div class="service-image">
    <img src="画像パス" alt="説明">
</div>
```

## GitHub Pagesへのデプロイ

1. GitHubリポジトリにプッシュ
2. Settings > Pages > Source で`main`ブランチを選択
3. 公開URLが生成されます

## カスタマイズ

### カラースキームの変更
`css/styles.css`の`:root`セクションでカラー変数を編集できます。

### フォントの変更
`css/styles.css`の`--font-sans`と`--font-serif`変数を編集してください。

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## ライセンス

© 2025 ヌンチャクコマンドー All Rights Reserved.

