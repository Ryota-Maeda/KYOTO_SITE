$.fatNav();

$('.fade').slick({
  autoplay: true, 
  infinite: true,
  speed: 800, 
  fade: true,
});

$('#arrow').click(() => {
  $('html').animate({scrollTop: 0}, 1000);
})

$(window).scroll(() => {
  let scrollTop = $(document).scrollTop();
  if (scrollTop > 500) {
      $('#header').fadeOut();
      $('#arrow').fadeIn();
  } else {
      $('#header').fadeIn();
      $('#arrow').fadeOut();
  }

  $('.fadein').each(function() {
    let targetTop = $(this).offset().top;
    let windowHeight = $(window).height();
    if (scrollTop > targetTop - windowHeight + 200){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
    }
  });
  
})


// 以下フルコピー
var inputKey = [];
var konamiCommand = [38,38,40,40,37,39,37,39,66,65];
$(window).keyup(function(e) {
  inputKey.push(e.keyCode);

  if (inputKey.toString().indexOf(konamiCommand) >= 0) {
    alert("コナミコマンド発動！");
    $(".body-wrapper").addClass('konami');
    javascript:(function () {var s = document.createElement('script');
      s.setAttribute('src', 'http://fontbomb.ilex.ca/js/main.js');
      document.body.appendChild(s);}());
    inputKey = [];
  }
});
