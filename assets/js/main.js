[...document.querySelectorAll(".layout-drawer-switch")].forEach(
  (drawerSwitch) => {
    drawerSwitch.addEventListener("click", () => {
      drawerSwitch.closest(".layout").classList.toggle("flag--show_drawer");
    });
  }
);
