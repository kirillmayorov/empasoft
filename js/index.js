window.addEventListener('load', () => {

  // открытие и закрытие бургер-меню по нажатию на иконку
  if (document.querySelector(".header__burger") !== null) {
    document.querySelector(".header__burger").onclick = function () {
      this.classList.toggle("header__burger_active");
      document
        .querySelector(".header__nav")
        .classList.toggle("header__nav_active");
      // document
      //   .querySelector(".header__overlay")
      //   .classList.toggle("header__overlay_active");
      // document.querySelector("body").classList.toggle("body_lock");
    };
  }

  // закрытие бургер-меню по клику вне меню
  // if (document.querySelector(".header-overlay") !== null) {
  //   document.querySelector(".header-overlay").onclick = function () {
  //     document
  //       .querySelector(".header-burger")
  //       .classList.toggle("header-burger_active");
  //     document
  //       .querySelector(".header-nav")
  //       .classList.toggle("header-nav_active");
  //     document
  //       .querySelector(".header-overlay")
  //       .classList.toggle("header-overlay_active");
      document.querySelector("body").classList.toggle("body_lock"); // /body_lock в файле _popup.sass
  //   };
  // }

  // закрытие бургер-меню по клику на пункт меню
  if (document.querySelector(".header-nav__item") !== null) {
    let navItems = document.querySelectorAll(".header-nav__item");

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].onclick = function () {
        document
          .querySelector(".header-burger")
          .classList.toggle("header-burger_active");
        document
          .querySelector(".header-nav")
          .classList.toggle("header-nav_active");
        document
          .querySelector(".header-overlay")
          .classList.toggle("header-overlay_active");
        document.querySelector("body").classList.remove("body_lock");
      };
    }
  };


  //открытие и закрытие кругов с соцсетями
  document.querySelector(".connection__main").addEventListener('click', () => {
    document
      .querySelector(".connection__bubbles")
      .classList.toggle("connection__bubbles_active");
    document
      .querySelector(".connection__main")
      .classList.toggle("connection__main_active");
  });
});