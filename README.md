# kentatsu-static

このリポジトリは、「健達ねっと」EC サイトのベースとなる静的な HTML, CSS, JS ファイルです。

製作したのは、下記の 2 ページについてです。

- EC サイトトップページ
- EC サイト個別商品ページ

# 構成について

CSS, JS に分けて構成を記述します。

## CSS の構成

`styles`配下の全ての`scss`ファイルは、最終的に`styles/styles.css`としてコンパイルされます。

Shopify 側では、この出力された`styles.css`をコピペして利用しています。

全体の構成は、`styles.scss`(`.css`ではなく`.scss`)で組み立てられています。

要点のみ、以下に簡潔に記述します。

### CSS の初期化

`Normalize.css`を利用しています。

(`styles.scss`より引用)

```scss
@import './vender/normalize';  // https: //necolas.github.io/normalize.css/
...
```

### CSS の参照順

`styles.scss`が、`styles/components`配下の各パーツを呼び出しています。

(`styles.scss`より引用)

```scss
@import './components/header'; // ヘッダ
...
@import './components/carousel'; //トップページ メインスライダー
...
@import './components/trouble'; // 商品ページ「お悩み」
...
@import './components/footer'; // フッタ
```

### CSS の規約

特になし。

コードが複雑になるため、mixin や extend は極力使用していません。

### CSS の生成

このリポジトリには、`Webpack`や`Gulp`などのビルド環境は組み込んでいません。

`scss`のコンパイルには、特に制約はありません。お使いの環境に合わせてどんなコンパイラでも使用可能です。

私は`vscode`拡張の[live sass compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)を使用しています。

## JS の構成

`JavaScript`は、Shopify のテーマ上で、各コンポーネントに持たせることになります。（例：スライダーを制御する JS コードは、該当する`.liquid`ファイルに記述する、など）

そのため、このリポジトリ上では、細かくファイル分けしてあります。

`JavaScript`のほとんどはスライダー（カルーセル）に関わるもので、[Slick](https://kenwheeler.github.io/slick/)をベースに実装しています。

(`index.html`より引用)

```html
<!-- Slickの起動:トップページメインカルーセル -->
<script src="./js/slick-top-main-carousel.js"></script>
<!-- Slickの起動:トップページサムネイルカルーセル -->
<script src="./js/slick-top-thumb-carousel.js"></script>
<!-- Slickの起動:トップページスマホ用カルーセル -->
<script src="./js/slick-top-sp.js"></script>
<!-- Slickの起動:トップページ商品一覧 -->
<script src="./js/slick-top-all-cards.js"></script>
<!-- SPメニューの開閉 -->
<script src="./js/js-sp-menu.js"></script>
```

### JS の依存

スライダーは`Slick`を必要とし、`Slick`は`jQuery`を必要とします。

(`index.html`より引用)

```html
<head>
  ...
  <!-- SlickのCSS読み込み -->
  <link
    rel="stylesheet"
    type="text/css"
    href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
  />
  ...
</head>
```

(`index.html`より引用)

```html
<body>
  ...
  <!-- Slick起動のためのモジュール読み込み -->
  <script
    src="//code.jquery.com/jquery-3.6.0.slim.min.js"
    integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="
    crossorigin="anonymous"
  ></script>
  <script
    type="text/javascript"
    src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
  ></script>
  ...
</body>
```

### JS の規約

- 原則：`jQuery`を使用せず、`vanilla`で書く。
- 例外：`Slick`の起動は`jQuery`のみで可能。

(例として`slick-product-main.js`より引用：商品の個別ページのメイン画像を担当するスライダー)


```JavaScript
$jsProductMainSlider = $(".js-product-main");

// Slickの起動
$jsProductMainSlider.slick({
  fade: true,
  ...
});

// サムネをクリックしたら、同じ番号の大画像を出す
document.querySelectorAll('.js-product-thumb img').forEach((thumb,i) => {
  ...
})

// 「次へ」ボタン
document.querySelector(".product-slide__next").addEventListener("click", () => {
  ...
});
```

# 与件について

※開発のための備忘録です

(2022/08/01、ランサーズ)

> ◆CSS フレームワークを使用したほうがいいか、使用しないほうがいいか
>
> -使用しない、SCSS は OK
>
> ◆CSS のコード規約はどのようなものがわかりやすいか
>
> -具体的には BEM などの規約を用いて書く
>
> ◆JS のライブラリはどのようなものがわかりやすいか
>
> 使用可能なライブラリ
>
> React
>
> slick
>
> 使用可能なフレームワーク
>
> vue
>
> redux
>
> 使用不可のライブラリ
>
> jQuery

(2022/08/04、XD)

> ここの部分は Slick で済ませようと思っているのですが、Slick は jQuery がないと動きません。
>
> Slick を動かす目的で jQuery を入れておく形の実装は問題ありませんか？
>
> いただいた要件が
>
> [使用可能] React, Slick, Vue, Redux
>
> [使用不可] jQuery
>
> となっていたので、念のための確認です。
