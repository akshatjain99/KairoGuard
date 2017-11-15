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


