$(document).ready(function() {
  $(".gallery").mouseenter(function() {
    $(".desc a").css(
      {"visibility": "visible"}
    );
    $(".gallery img").css(
      {"filter": "blur(1px) brightness(70%)"}
    );
  });
  $(".gallery").mouseleave(function() {
  $(".desc a").css(
    {"visibility": "hidden"}
  );
  $(".gallery img").css(
    {"filter": "blur(0px) brightness(100%)"}
  );
});
});
