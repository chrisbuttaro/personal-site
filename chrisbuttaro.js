
 //var buttonGroup=$('<div>');
 // buttonGroup.addClass('btn-group');
 // buttonGroup.attr('role', 'group');

var cButton=$('<button>');
 cButton.addClass('cButton animated fadeInLeftBig');

 cButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
   cButton.removeClass('animated fadeInUpBig');
   cButton.addClass('hvr-float-shadow');
 });
 cButton.click(function(e){

      var vuButton=$('<button>');
      vuButton.addClass('hvr-hang');
      vuButton.addClass('vuButton animated flipInX');
      vuButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        vuButton.removeClass('animated flipInX');
      });
      var presButton=$('<button>');
      presButton.addClass('presButton animated flipInX');

      var shruButton=$('<button>');
      shruButton.addClass('shruButton animated flipInX');

      var marioButton=$('<button>');
      marioButton.addClass('marioButton animated flipInX');
      $('div').empty();
      $('div').append(marioButton);
      $('div').append(vuButton);
     $('div').append(presButton);
     $('div').append(shruButton);
    })

    var hButton=$('<button>');
    hButton.click(function(e){
          $('div').empty();

    })

      hButton.addClass('hvr-float-shadow');
     hButton.addClass('hButton animated fadeInUpBig');
     hButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
       hButton.removeClass('animated fadeInUpBig');
     });



     var rButton=$('<button>');
     rButton.addClass('hvr-float-shadow');
      rButton.addClass('rButton animated fadeInDownBig ');
      rButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        rButton.removeClass('animated fadeInUpBig');
      });
      rButton.click(function(e){
            $('div').empty();

      })

      var iButton=$('<button>');
      iButton.addClass('hvr-float-shadow');
       iButton.addClass('iButton animated fadeInUpBig');
       iButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         iButton.removeClass('animated fadeInUpBig');
       });
       iButton.click(function(e){
             $('div').empty();

       })

       var sButton=$('<button>');
       sButton.addClass('hvr-float-shadow');
        sButton.addClass('sButton animated fadeInRightBig');
        sButton.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          sButton.removeClass('animated fadeInUpBig');
        });
        sButton.click(function(e){
              $('div').empty();

        })




$('body').append(cButton);
$('body').append(hButton);
$('body').append(rButton);
$('body').append(iButton);
$('body').append(sButton);
