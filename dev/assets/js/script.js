(function () {
  "use strict";

  var $menuIcon = document.querySelector('[data-js="mobileMenuButton"]');
  var $menu = document.querySelector('[data-js="mobileMenu"]');
  var $menuClose = document.querySelector('[data-js="mobileMenuClose"]');
  var $menuOverlay = document.querySelector('[data-js="mobileOverlay"]');

  addEventListeners();

  function addEventListeners() {
    // document.addEventListener("transitionend", transitionEnd);
    $menuOverlay.addEventListener("touchstart", touchStart, false);
    $menuOverlay.addEventListener("touchmove", touchMove, false);
    $menuOverlay.addEventListener("touchend", touchEnd, false);
    $menuIcon.addEventListener("click", toggleMenu, false);
    $menuClose.addEventListener("click", toggleMenu, false);
    $menuOverlay.addEventListener("click", toggleMenu, false);
  }

  function toggleMenu() {
    if (!isMenuOpen()) {
      showMenu();
    }
    else {
      hideMenu();
    }
  }

  function isMenuOpen() {
    return $menu.classList.contains("mobileMenu--show");
  }

  function hideMenu() {
    $menu.style.transform = "";
    $menu.classList.remove("mobileMenu--show");
    $menuOverlay.classList.remove("mobileOverlay--show");
  }

  function showMenu() {
    $menu.classList.add("mobileMenu--show");
    $menuOverlay.classList.add("mobileOverlay--show");
  }

  var startDistance, movedDistance = 0;
  var distance = 0;

  function transitionEnd() {
    if (!isMenuOpen()) {
      hideMenu();
    }
  }

  function touchStart(event) {
    if (!isMenuOpen()) {
      return;
    }
    startDistance = event.touches[0].pageX;
    distance = startDistance;
  }

  function touchMove(event) {
    if (!isMenuOpen()) {
      return;
    }
    movedDistance = event.touches[0].pageX;
    var translate = Math.min(0, movedDistance - startDistance);
    if (translate < 0) {
      event.preventDefault();
    }
    $menu.style.transform = "translateX("+ translate +"px)";
  }

  function touchEnd(event) {
    var endDistance = Math.min(0, movedDistance - startDistance);
    $menu.style.transform = "";
    if (endDistance < 0) {
      hideMenu();
    }
  }
})();
