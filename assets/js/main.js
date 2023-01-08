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

    $(".faq-question").each(function () {
      const header = $(".faq-question-title", this);
      const body = $(".faq-question-body", this);
      header.on("click", function () {
        body.slideToggle();
      });
    });
    $("[popup-switch]").click(function () {
      $(`#${$(this).attr("popup-switch")}`).show();
    });
    $(".popup-backdrop, .popup-close").click(function () {
      $(this).closest(".popup").hide();
    });
  });
