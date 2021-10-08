  $(function() {

    if ($(window).width()>480){ 
      $(document).ready(function() {
        var pixelToMove = $(window).width()/27;
        $("#background-image").mousemove(function(e) {
          var width = $(this).innerWidth();
          var height = $(this).innerHeight();
          var newValueX = (e.pageX / width) * pixelToMove;
          var newValueY = (e.pageY / height) * pixelToMove;
          $(this).css('background-position', newValueX + '%' + ' ' + newValueY + '%');
        });
      });
     }
  
   else{

   }
  
  });