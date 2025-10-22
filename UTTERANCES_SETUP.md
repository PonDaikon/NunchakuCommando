# Utterances コメント機能の設定ガイド

Utterancesは、GitHub Issuesを利用した軽量なコメントシステムです。

## セットアップ手順

### 1. Utterances Appをインストール

1. [Utterances GitHub App](https://github.com/apps/utterances)にアクセス
2. 「Install」をクリック
3. コメント機能を使用するリポジトリを選択してインストール

### 2. ブログ記事にスクリプトを追加

各ブログ記事の`article-comments`セクション内のコメントを解除し、以下の値を置き換えてください:

```html
<script src="https://utteranc.es/client.js"
        repo="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

**置き換える値:**
- `YOUR_GITHUB_USERNAME`: あなたのGitHubユーザー名
- `YOUR_REPO_NAME`: このサイトのリポジトリ名

**例:**
```html
<script src="https://utteranc.es/client.js"
        repo="pondaikon/nunchaku-commando"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

### 3. テーマのカスタマイズ（オプション）

デフォルトでは`github-light`テーマを使用していますが、以下のテーマも利用可能です:

- `github-light` - ライトテーマ（デフォルト）
- `github-dark` - ダークテーマ
- `preferred-color-scheme` - ユーザーの設定に応じて自動切り替え
- `github-dark-orange`
- `icy-dark`
- `dark-blue`
- `photon-dark`

テーマを変更する場合は、`theme="github-light"`の部分を変更してください。

### 4. 動作確認

1. ブログ記事をGitHub Pagesにデプロイ
2. 記事ページにアクセス
3. コメントセクションが表示されることを確認
4. GitHubアカウントでログインしてコメントをテスト

## トラブルシューティング

### コメントが表示されない場合

1. **Utterances Appがインストールされているか確認**
   - GitHubの Settings > Applications > Installed GitHub Apps で確認

2. **リポジトリ名が正しいか確認**
   - `repo`属性の値が正しいか確認

3. **リポジトリがパブリックか確認**
   - Utterancesはパブリックリポジトリでのみ動作します

4. **Issuesが有効か確認**
   - リポジトリの Settings > Features で Issues が有効になっているか確認

### コメントが投稿できない場合

- GitHubにログインしているか確認
- リポジトリへのアクセス権限があるか確認

## 参考リンク

- [Utterances公式サイト](https://utteranc.es/)
- [Utterances GitHub](https://github.com/utterance/utterances)

