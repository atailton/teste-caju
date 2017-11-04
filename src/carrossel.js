$(function (){

    

        var width = (parseInt($('.carrossel .item').outerWidth() + parseInt($('.carrossel .news').css('margin-right')))) * $('.carrossel .item').length;
        $('.carrossel').css('width', width);

        var numImages = 3;
        var marginPadding = 15;

        var ident = 0;
        var count = ($('.carrossel .item').length / numImages) - 1;
        var slide = (numImages * marginPadding) + ($('.carrossel .news').outerWidth() * numImages);

        $('.next').css('color', '#6fa5f7');
        $('.circulo1').css('color', '#6fa5f7');
        $('.circulo2').css('color', '#7e7e7e');
        $('.circulo3').css('color', '#7e7e7e');

        $('.next').click(function(){
          if(ident < count){
              $('.back').css('color', '#6fa5f7');
            ident ++;
            $('.carrossel').animate({'margin-left': '-=' +slide+ 'px'}, '500');
          }

          if(ident == 0 || ident == 1){
            $('.next').css('color', '#6fa5f7');
          } else {
            $('.next').css('color', '#7e7e7e');
          }

          if(ident == 0){
            $('.circulo1').css('color', '#6fa5f7');
            $('.circulo2').css('color', '#7e7e7e');
            $('.circulo3').css('color', '#7e7e7e');
          }

          if (ident == 1) {
              $('.circulo1').css('color', '#7e7e7e');
              $('.circulo2').css('color', '#6fa5f7');
              $('.circulo3').css('color', '#7e7e7e');
          }

          if(ident == 2){
            $('.circulo1').css('color', '#7e7e7e');
            $('.circulo2').css('color', '#7e7e7e');
            $('.circulo3').css('color', '#6fa5f7');
          }


        });

        $('.back').click(function(){
          if(ident >= 1){

            ident --;
            $('.carrossel').animate({'margin-left': '+=' +slide+ 'px'}, '300');
          }

          if(ident == 0){
            $('.back').css('color', '#7e7e7e');
            $('.next').css('color', '#6fa5f7');

            $('.circulo1').css('color', '#6fa5f7');
            $('.circulo2').css('color', '#7e7e7e');
            $('.circulo3').css('color', '#7e7e7e');
          } else {
            $('.back').css('color', '#6fa5f7');
          }

          if (ident == 1) {
              $('.next').css('color', '#6fa5f7');
              $('.circulo1').css('color', '#7e7e7e');
              $('.circulo2').css('color', '#6fa5f7');
              $('.circulo3').css('color', '#7e7e7e');
          }
          if(ident == 2){
            $('.circulo1').css('color', '#7e7e7e');
            $('.circulo2').css('color', '#7e7e7e');
            $('.circulo3').css('color', '#6fa5f7');
          }

        });



});
