window.addEventListener("scroll", function () {
  let scroll = this.window.pageYOffset;
  if (scroll > 1350) {
    removeClassElement(); 
    menuContactMe.classList.add('menu-active');
  }else{
    removeClassElement(); 
    menuHome.classList.add('menu-active');
  }

});