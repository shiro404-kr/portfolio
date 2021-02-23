
$(function(){
  AOS.init();
});



$(function() {
    let dutation = 0;

    // all
    $('#btn-all').on('click', function(){
      $('#works .list li').show(dutation);
    })

    $('#btn-all').on('click', function() {
        $('#works .list li').show(400);
    })
    
    $('#btn-web').on('click', function() {
        $('#works .list li')
        .hide(500)
        .filter('.web')
        .show(400);
    })

    $('#btn-graphic').on('click', function() {
        $('#works .list li')
        .hide(500)
        .filter('.graphic')
        .show(400);
    })

    $('#btn-home').on('click', function() {
        $('#works .list li')
        .hide(500)
        .filter('.home')
        .show(400);
    })



})










