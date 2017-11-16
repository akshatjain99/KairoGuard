$(function() {

    //Changing the active item in the main menu and sidebar
    //var rel = $('body[rel]').attr('rel');
    //$('.main.menu a:eq(' + rel + ') , #side a:eq(' + rel + ')').addClass('active');

    $('.ui.accordion')
       .accordion()
    ;

    // create sidebar and attach to menu open

    $('.sideIcon .sidebar.icon').on('click', function() {
        $('.ui.sidebar').sidebar('toggle');

    });
    $('#SideMenu .item').on('click',function() {
              $('.ui.sidebar').sidebar('hide');
    })
  //nav.js plugin code
  //  var nav = responsiveNav(".nav-collapse", {
  //      animate: true,
  //      transition: 100000000,
  //      });
  //  nav.toggle();

  $("a.menuitem").click(function(){
   $("a.menuitem.active").removeClass("active");
   $(this).addClass("active");
});
});

//Plugin to slide in elements

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */


  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".slide");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animated fadeInUpBig"); 
    } 
  });
  
});


