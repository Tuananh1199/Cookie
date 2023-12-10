$(".container").on("mouseover", function () {
  $("audio").prop("muted", false).play();
  $(".bauble").addClass("light");
  $(".star").addClass("star-light");
});

$(".container").on("mouseout", function () {
  $("audio").prop("muted", false).play();
  $(".bauble").removeClass("light");
});

var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
  $("#iframeAudio").remove();
} else {
  $("#playAudio").remove(); // just to make sure that it will not have 2x audio in the background
}
