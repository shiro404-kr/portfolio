
$(function(){
  AOS.init();
});



$(function() {

    // gnb 열기
    $('.gnb_menu').on('click', function(){
      $('#gnb-mob').addClass('show');
      console.log('click');
    });
  
    // gnb 닫기
    $('.gnb_mc').on('click', function(){
      $('#gnb-mob').removeClass('show');
    });

})










