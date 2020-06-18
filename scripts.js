activateSepia = (id) => { 
    var element =  document.getElementById(id);
    if (!element.classList.contains('bgnd-image-2-sepia')){
      element.classList.add('bgnd-image-2-sepia')
    } else { element.classList.remove('bgnd-image-2-sepia')}
}


window.onscroll = () => {
      var navbar = document.getElementById("navigationBar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "navbar"+ " center" + " navbar-shadow" + " white";
          navbar.className.replace(" hide", "")
      } else {
          navbar.className = navbar.className.replace(" navbar-shadow white", "");
          if(navbar.className.indexOf("hide" == -1)){
            navbar.className += " hide";
          }
      }
  }

$("a[href^='#']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;
  
    $("body, html").animate({
      scrollTop: position
    },
    1000,
    'linear' );
  });