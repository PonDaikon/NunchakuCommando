# ヌンチャクコマンドー公式サイト - v8 更新内容

## 更新日
2025年10月24日

## 主な変更点

### 画像最適化
- **Manecomoロゴ画像をWebP形式に変換**
  - 元のファイル: マネコモ_ロゴ.png (39KB)
  - 新しいファイル: manecomo_logo.webp / manekomo_logo.webp (26KB)
  - **ファイルサイズ削減: 約33%**

### 更新箇所
以下の5箇所でManecomoロゴ画像を更新:

1. **ブログ記事データ** (`js/blog-data.json`)
   - Manecomo紹介記事のサムネイル画像
   - パス: `assets/manekomo_logo.webp`

2. **Works & Products データ** (`js/works-data.json`)
   - Manecomoプロダクトカードの画像
   - パス: `assets/manekomo_logo.webp`

3. **販売情報セクション** (`index.html`)
   - Manecomo販売カードの画像
   - パス: `assets/manekomo_logo.webp`

4. **ブログ記事本文** (`blog/manecomo-introduction.html`)
   - 記事ヘッダーのフィーチャー画像
   - パス: `../assets/manekomo_logo.webp`

5. **アセットフォルダ** (`assets/`)
   - 新規追加: `manecomo_logo.webp` (正式な綴り)
   - 更新: `manekomo_logo.webp` (既存の参照用)

## パフォーマンス改善
- WebP形式への変換により、ページ読み込み速度が向上
- モバイル環境でのデータ使用量が削減

## 技術仕様
- WebP品質設定: 90%
- 画像サイズ: 647 x 212 px
- 透過背景対応

## 次のステップ
- ローカル環境でVSCode Live Serverを使用してテスト
- 問題がなければGitHub Pagesにデプロイ

---

**バージョン履歴**
- v7: MV背景画像とABOUT USサービス画像のWebP化、MVデザイン更新
- v8: Manecomoロゴ画像のWebP化 (現在のバージョン)

