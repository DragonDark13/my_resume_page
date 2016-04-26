jQuery(function(){

    /* classToAdd - Класс добавляемый элементу когда тот появляется в области просмотра. Список классов через пробел, берется в кавычки.
classToRemove - Класс, удаляемый перед применением "classToAdd" к элементу. Список классов через пробел, берется в кавычки.

offset - Задержка появления элементов, относительно просматриваемой области. Указывается числом (значение в пикселях). Можно указывать процентное соотношение (указывать в кавычках, со знаком "%")

invertBottomOffset - Делает значение смещения отрицательным значением. Указывается логическим значением ("true" или "false").

repeat - Удаляет добавляемый класс когда элемент вне области просмотра, делая фукцию повторяемой. Указывается логическим значением ("true" или "false").

callbackFunction - Функция запускаемая после добавления класса. Возвращает "add" или "remove", в зависимости от того был ли класс добавлен или удален

scrollHorizontal - Установить "true" если сайт имеет горизонтальный скролл, вместо вертикального. Указывается логическим значением ("true" или "false").
 */


// jQuery('.my_skills .thumbnail').addClass('invisible');

jQuery('.my_history .fa').viewportChecker({
classToAdd: ' animated bounceInLeft',
      classToRemove: 'invisible',
      offset: 200,
      invertBottomOffset: false,
      repeat: false,
      callbackFunction: function(elem, action){},

});




    jQuery('.my_skills .thumbnail').viewportChecker({
      classToAdd: ' animated zoomIn',
      classToRemove: 'invisible',
      offset: 200,
      invertBottomOffset: false,
      repeat: false,
      callbackFunction: function(elem, action){},
  });


});