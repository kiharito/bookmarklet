# $1: 対象ディレクトリ名
echo "javascript:`terser $1/script.js -cm`" > $1/bookmarklet;
