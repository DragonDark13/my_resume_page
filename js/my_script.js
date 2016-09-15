jQuery(function(){

var CheckerOffset = 50;

jQuery('.my_skills .thumbnail, .photo').viewportChecker({
  classToAdd: 'animated zoomIn',
  classToRemove: 'invisible',
  offset: CheckerOffset
  });


if (document.body.clientWidth >= '768') {

  jQuery('.track .fa').viewportChecker({
  offset: CheckerOffset,
  callbackFunction: function(elem, action){
  elem.addClass('active ');
  },
  });

  var scroll = jQuery(window).scrollTop();
  jQuery("html, body").animate({scrollTop: "0px"},"800");

}

else{}


});