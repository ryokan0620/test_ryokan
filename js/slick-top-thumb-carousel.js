$thumbnailSlider = $(".js-slick-thumb-carousel");
$thumbnailSlider.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  arrows: false,
  asNavFor: ".js-slick-main-carousel",
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnFocus: false,
});

let tmpCenterThumbnail;

// ③
const LeftThumbnailClicked = () => $thumbnailSlider.slick("slickNext");
const CenterThumbnailClicked = () =>
  $thumbnailSlider.slick(
    "slickGoTo",
    $thumbnailSlider.slick("slickCurrentSlide") + 2
  );
const RightThumbnailClicked = () => $thumbnailSlider.slick("slickPrev");

// ②
const addClickEventToSlick = () => {
  tmpCenterThumbnail = document.querySelector(
    ".js-slick-thumb-carousel .slick-current"
  );
  tmpCenterThumbnail.previousElementSibling.addEventListener(
    "click",
    LeftThumbnailClicked
  );
  tmpCenterThumbnail.addEventListener("click", CenterThumbnailClicked);
  tmpCenterThumbnail.nextElementSibling.addEventListener(
    "click",
    RightThumbnailClicked
  );
};

// ①スライダー起動時に、クリックされた際の処理を仕込んでおく　①→②→③
addClickEventToSlick();

// 進むボタン、戻るボタンも手作りが必要
document
  .querySelector(".carousel-sub__prev")
  .addEventListener("click", LeftThumbnailClicked);
document
  .querySelector(".carousel-sub__next")
  .addEventListener("click", RightThumbnailClicked);

// ④スライダーがスライドするたびに、クリックイベントをずらす
$thumbnailSlider.on("beforeChange", () => {
  tmpCenterThumbnail = document.querySelector(
    ".js-slick-thumb-carousel .slick-current"
  );
  // ④-1 スライドが開始する瞬間の３つのサムネから、イベントを剥奪
  tmpCenterThumbnail.previousElementSibling.removeEventListener(
    "click",
    LeftThumbnailClicked
  );
  tmpCenterThumbnail.removeEventListener("click", CenterThumbnailClicked);
  tmpCenterThumbnail.nextElementSibling.removeEventListener(
    "click",
    RightThumbnailClicked
  );
});
$thumbnailSlider.on("afterChange", () => {
  // ④-2 スライドが終了した瞬間の３つのサムネに、改めてイベントを付与
  addClickEventToSlick();
});
