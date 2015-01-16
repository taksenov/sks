/**
 * Created by admin on 07.01.2015.
 */

// -- главный слайдер
$('#carousel-example-generic-main').carousel({
    interval: 5000,
    pause: 'none'
});
// -- главный слайдер


// -- слайдер с отзывами
//$('#carousel-example-generic').carousel({
//    interval: 30000
//    //pause: 'none'
//});
//
//$('.feed-back__fadeInRight').addClass('animated fadeInLeft');
// -- слайдер с отзывами

var win_w = $(window).width();
//console.log(win_w);

function adjustModalMaxHeightAndPosition(){
  $('.modal').each(function(){
    if($(this).hasClass('in') === false){
      $(this).show();
    }
    var contentHeight = $(window).height() - 60;
    var headerHeight = $(this).find('.modal-header').outerHeight() || 2;
    var footerHeight = $(this).find('.modal-footer').outerHeight() || 2;

    $(this).find('.modal-content').css({
      'max-height': function () {
        return contentHeight;
      }
    });

    $(this).find('.modal-body').css({
      'max-height': function () {
        return contentHeight - (headerHeight + footerHeight);
      }
    });

    $(this).find('.modal-dialog').addClass('modal-dialog-center').css({
        'margin-top': function () {
//          var retTopValue,
//              win_w = $(window).width();
//          if ( win_w <= 768 ) {
//                return -($(this).outerHeight() / 2);
//          } else {
//                return -152;
//          }

        return -($(this).outerHeight() / 2);
        },
    'margin-left': function () {
          if ( win_w <= 768 ) {
            qwer = -($(this).outerWidth() / 2) - 18;
            console.log(qwer);
            return qwer;
        //        return -($(this).outerWidth() / 2);
          } else {
              //console.log(win_w);
                return -180;

          }
        //qwer = -($(this).outerWidth() / 2) - 18;
        //console.log(qwer);
        //return qwer;
      }
    });
    if($(this).hasClass('in') === false){
      $(this).hide();
    }
  });
}
if ($(window).height() >= 320){
  $(window).resize(adjustModalMaxHeightAndPosition).trigger("resize");
}




