//Please put your answer here
$('#signup-modal').hide()

$(function() {

    $('.signup-show').click(function(){
      $('#signup-modal').fadeIn();
    });

    $('#close-modal').click(function(){
      $('#signup-modal').fadeOut();
    });

});
