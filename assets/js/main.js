[...document.querySelectorAll(".layout-drawer-switch")].forEach(
  (drawerSwitch) => {
    drawerSwitch.addEventListener("click", () => {
      drawerSwitch.closest(".layout").classList.toggle("flag--show_drawer");
    });
  }
);

[...document.querySelectorAll(".escape_header_trigger")].forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    console.dir(document.querySelector(".layout-box-header").clientHeight);
    window.scrollTo({
      top: document.querySelector(".layout-box-header").clientHeight,
      behavior: "smooth",
    });
  });
});

typeof $ === "function" &&
  $(function () {
    $(".slider").slider({});
  });
