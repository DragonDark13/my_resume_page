jQuery(function(){

var CheckerOffset = 0;

jQuery('.track .fa').viewportChecker({
      offset: CheckerOffset,
      callbackFunction: function(elem, action){
        elem.addClass('active ');
      },
});

    jQuery('.my_skills .thumbnail').viewportChecker({
      classToAdd: 'animated zoomIn',
      classToRemove: 'invisible',
      offset: CheckerOffset
  });


});