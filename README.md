# Bookmarklet

Bookmarkletとして使うjsのコード置き場

## amazon-book-scanner-for-scrapbox
Amazonの書籍ページで実行する。
書籍情報を反映した読書メモページがscrapbox上に作成される。

## copy-page-link-for-scrapbox
実行したページからscrapbox用の外部リンクテキスト(`[title url]`)を取得してクリップボードに残す。

## 開発用メモ

### 開発環境準備
```shell
npm install terser
```

### jsファイルを圧縮してBookmarklet用のコードを作成
```shell
./bookmarklet.sh 対象ディレクトリ名
```

### Bookmarklet登録方法
`bookmarklet`の中身をブックマークのURL欄に貼り付けてブックマークを登録する
