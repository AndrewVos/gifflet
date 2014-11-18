$(function() {
  loadPage();
});

function togglePlaying(img) {
  var original = img.data("original");
  var firstFrame = img.data("first-frame");
  var loadingGif = "/assets/images/loading.gif";

  if (img.attr("src") == original || img.attr("src") == loadingGif) {
    img.attr("src", firstFrame);
  } else {
    var complete = function() {
      img.attr("src", original);
    };
    var image = new Image();
    image.onabort = complete;
    image.onerror = complete;
    image.onload = complete;
    setTimeout(function() {
      if (img.attr("src") != original) {
        img.parent().height(img.height())
        img.parent().width(img.width())
        img.attr("src", loadingGif);
      }
    }, 100);
    image.src = original;
  }
}

function loadPage() {
  var loadingGif = new Image();
  loadingGif.src = "/assets/images/loading.gif";

  $(".item img").on("error", function() {
    $(this).parent().remove();
  });

  $(".item").click(function() {
    togglePlaying($(this).find("img"));
  });
}
