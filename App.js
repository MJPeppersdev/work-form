
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  
  var el = this;
  var elh = $(this).outerHeight(); 
  
  setTimeout(function(){
    el.style.cssText = 'height:auto;';
    // for box-sizing other than "content-box" use:
   //el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px;' + 'min-height:' + elh + 'px;';
  },0);
}



function simpleSelect() {
  "use strict";
  var selectHolder,
      selectClass;
  //Setup
  $('select').each(function() {
        if( ! $(this).attr('multiple') ){
    selectClass = $(this).attr('class');
    selectHolder = '<dl class="simpleSelect '+selectClass+'">';
    selectHolder += '<dt>'+$('option', this).first().text()+'</dt><dd><ul>';
    $('option', this).each(function() {
      selectHolder += '<li data="'+$(this).val()+'">'+$(this).text()+'</li>';
    });
    selectHolder += '</ul></dd></dl>';
    $(this).after(selectHolder);
    $('.'+selectClass).wrapAll('<div class="selectContainer"></div>');
    }else{
        $(this).show();
    }
  });
  $('.simpleSelect dd ul li').on("click",function(){
    $(this).parents().eq(3).find('select').val($(this).attr('data'));
  });

  $('.simpleSelect dt').on("click",function() {
    if($(this).next('dd').hasClass("open")){
      $(this).removeClass("open").next('dd').removeClass("open");
    }
    else {
      $(this).addClass("open").next('dd').addClass("open");
    }
  });

  $('.simpleSelect dd ul li').on("click",function() {
    $(this).parents().eq(1).removeClass("open");
    $(this).parents().eq(2).find('dt').removeClass("open");
    $(this).parents().eq(4).find('dt').text($(this).text());
  });
}
 $( document ).ready( simpleSelect ); 
