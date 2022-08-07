$jsProductMainSlider = $(".js-product-main");
$jsProductMainSlider.slick({
  fade: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
});

// サムネをクリックしたら、同じ番号の大画像を出す
document.querySelectorAll('.js-product-thumb img').forEach((thumb,i) => {
  thumb.addEventListener("click", () => {
    $jsProductMainSlider.slick("slickGoTo", i, true);
  })
})

// 「次へ」ボタン
document.querySelector(".product-slide__next")
  .addEventListener("click", () => {
    $jsProductMainSlider.slick("slickNext");
  });
