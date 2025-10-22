# ヌンチャクコマンドー公式サイト セットアップガイド

このガイドでは、サイトのセットアップからGitHub Pagesへのデプロイまでを説明します。

## 📦 ファイル構成

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
│   ├── team.js            # Team表示管理
│   ├── topics.js          # Topics表示管理
│   ├── blog-data.json     # ブログデータ
│   ├── works-data.json    # Worksデータ
│   ├── team-data.json     # Teamデータ
│   └── topics-data.json   # Topicsデータ
├── assets/                 # 画像ファイル
├── blog/                   # ブログ記事ディレクトリ
│   └── blog-post-1.html   # サンプル記事
├── works/                  # Works詳細ページディレクトリ
├── README.md              # プロジェクト説明
├── UTTERANCES_SETUP.md    # Utterances設定ガイド
└── SETUP_GUIDE.md         # このファイル
```

## 🚀 GitHub Pagesへのデプロイ

### 1. GitHubリポジトリの作成

1. GitHubにログイン
2. 新しいリポジトリを作成（例: `nunchaku-commando-site`）
3. リポジトリをパブリックに設定

### 2. ファイルのアップロード

#### 方法A: GitHub Web UIを使用

1. リポジトリページで「Add file」→「Upload files」をクリック
2. `nunchaku-redesign`フォルダ内のすべてのファイルをドラッグ&ドロップ
3. 「Commit changes」をクリック

#### 方法B: Git CLIを使用

```bash
# リポジトリをクローン
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# ファイルをコピー
cp -r /path/to/nunchaku-redesign/* .

# コミット＆プッシュ
git add .
git commit -m "Initial commit: ヌンチャクコマンドー公式サイト"
git push origin main
```

### 3. GitHub Pagesの有効化

1. リポジトリの「Settings」タブをクリック
2. 左メニューから「Pages」を選択
3. 「Source」で`main`ブランチを選択
4. 「Save」をクリック
5. 数分後、公開URLが表示されます（例: `https://username.github.io/repo-name/`）

## 🎨 カスタマイズ

### MVの背景画像/動画を変更

`index.html`の以下の部分を編集:

```html
<div class="mv-hero-media">
    <!-- 画像を使用する場合 -->
    <img src="assets/hero-image.jpg" alt="ヒーロー画像">
    
    <!-- 動画を使用する場合 -->
    <!-- <video autoplay loop muted playsinline>
        <source src="assets/hero-video.mp4" type="video/mp4">
    </video> -->
</div>
```

### About Usの画像を変更

`index.html`の各サービスカードの画像部分を編集:

```html
<div class="service-image">
    <img src="assets/your-image.jpg" alt="説明">
</div>
```

### 新しいブログ記事を追加

1. `js/blog-data.json`に新しい記事データを追加:

```json
{
  "id": 4,
  "title": "新しい記事のタイトル",
  "slug": "new-article",
  "date": "2025-10-25",
  "category": "カテゴリー",
  "excerpt": "記事の抜粋",
  "image": "https://example.com/image.jpg",
  "content": "記事本文"
}
```

2. `blog/new-article.html`を作成（`blog-template.html`をコピーして編集）

### 新しいWorksを追加

`js/works-data.json`に新しい作品データを追加:

```json
{
  "id": 4,
  "title": "新しい作品",
  "slug": "new-work",
  "category": "カテゴリー",
  "description": "説明",
  "image": "assets/work-image.jpg",
  "hoverImage": "assets/work-image-hover.jpg",
  "detailPage": "works/new-work.html"
}
```

### Teamメンバーを追加/変更

`js/team-data.json`を編集:

```json
{
  "id": 5,
  "name": "新メンバー",
  "role": "役割",
  "description": "説明",
  "image": "assets/avatar_new.webp"
}
```

### Topicsを追加/変更

`js/topics-data.json`を編集:

```json
{
  "id": 4,
  "date": "2025-10-25",
  "category": "お知らせ",
  "title": "新しいお知らせ"
}
```

## 💬 Utterancesコメント機能の設定

詳細は`UTTERANCES_SETUP.md`を参照してください。

簡単な手順:
1. [Utterances App](https://github.com/apps/utterances)をインストール
2. 各ブログ記事のコメントを解除してリポジトリ情報を設定

## 🎨 デザインのカスタマイズ

### カラースキームの変更

`css/styles.css`の`:root`セクションを編集:

```css
:root {
    /* Accent Colors */
    --color-accent: #2d5016;      /* メインアクセントカラー */
    --color-accent-light: #3d6b1f;
    --color-accent-dark: #1a3009;
    --color-olive: #6b7c3f;       /* サブアクセントカラー */
    --color-sage: #8a9a5b;
    /* ... */
}
```

### フォントの変更

`css/styles.css`のフォント変数を編集:

```css
:root {
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
    --font-serif: 'Times New Roman', 'YuMincho', ...;
}
```

## 📱 レスポンシブデザイン

このサイトは以下のデバイスに対応しています:
- デスクトップ（1200px以上）
- タブレット（768px〜1199px）
- モバイル（767px以下）

## 🔧 トラブルシューティング

### 画像が表示されない

- ファイルパスが正しいか確認
- 画像ファイルがアップロードされているか確認
- ブラウザのキャッシュをクリア

### JSONデータが反映されない

- JSONファイルの構文エラーがないか確認（[JSONLint](https://jsonlint.com/)で検証）
- ブラウザの開発者ツールでコンソールエラーを確認

### GitHub Pagesで表示されない

- リポジトリがパブリックになっているか確認
- GitHub Pagesの設定が正しいか確認
- 数分待ってから再度アクセス

## 📞 サポート

問題が解決しない場合は、以下の方法でサポートを受けられます:
- GitHubリポジトリでIssueを作成
- メール: NunchakuCommando@gmail.com
- X (Twitter): @Nun_C_

## 📄 ライセンス

© 2025 ヌンチャクコマンドー All Rights Reserved.

