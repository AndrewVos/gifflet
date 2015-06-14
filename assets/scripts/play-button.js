$.fn.playButton = function(options) {
  var options = $.extend({
  }, options);

  $(this).each(function() {
    var video = $(this);

    var playButton = video.data("play-button");
    if (playButton == null) {
      playButton = $("<div class='play-button'></div>");
      playButton.css("position", "absolute");
      playButton.css("cursor", "pointer");
      playButton.css("text-align", "center");
      playButton.css("font-size", "7em");
      playButton.css("color", "white");
      playButton.css("opacity", "0.5");
      playButton.html('&#9658;');
      playButton.data("video", video);
      $("body").append(playButton);
      video.data("play-button", playButton);
      playButton.click(function() {
        $(this).data("video")[0].play();
        $(this).hide();
      });
      video.click(function() {
        $(this).data("play-button").show();
        if (this.paused == true) {
          this.play();
        } else {
          this.pause();
        }
        return false;
      });
    }

    playButton.css(video.offset());
    playButton.css("width", video.width() +"px");
    playButton.css("height", video.height() +"px");
    playButton.css("line-height", video.height() +"px");
  });
};
