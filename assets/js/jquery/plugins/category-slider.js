(function ($) {
  $.fn.slider = function (options) {
    var settings = $.extend(
      {
        selectors: {
          viewport: ".slider-viewport",
          controller: {
            next: ".slider-controller.type--next",
            previous: ".slider-controller.type--previous",
          },
        },
        classes: {
          status: {
            active: "status--active",
          },
        },
      },
      options
    );
    this.each(function () {
      const viewport = $(settings.selectors.viewport, this);
      const container = $("> *", viewport);
      const slides = $("> *", container);
      const nextController = $(settings.selectors.controller.next, this);
      const previousController = $(
        settings.selectors.controller.previous,
        this
      );
      let slideWidth = slides.length ? slides.eq(0).width() : 0;
      let slidesInContainer = Math.floor(container.width() / slideWidth);
      let gapWidth = slides.length
        ? (container.width() % slideWidth) / (slidesInContainer - 1)
        : 0;
      let activeSlideIndex = 0;
      function draw() {
        if (activeSlideIndex === slides.length - slidesInContainer) {
          nextController.removeClass(settings.classes.status.active);
        } else {
          nextController.addClass(settings.classes.status.active);
        }
        if (activeSlideIndex === 0) {
          previousController.removeClass(settings.classes.status.active);
        } else {
          previousController.addClass(settings.classes.status.active);
        }
        let containerX = activeSlideIndex * (slideWidth + gapWidth);
        container.css("transform", `translateX(${containerX * -1}px)`);
      }
      draw();
      $(window).resize(function () {
        slideWidth = slides.length ? slides.eq(0).width() : 0;
        slidesInContainer = Math.floor(container.width() / slideWidth);
        gapWidth = slides.length
          ? (container.width() % slideWidth) / (slidesInContainer - 1)
          : 0;
        activeSlideIndex = Math.min(
          activeSlideIndex,
          slides.length - slidesInContainer
        );
        draw();
      });
      nextController.click("click", function () {
        if (activeSlideIndex < slides.length - slidesInContainer) {
          activeSlideIndex++;
          draw();
        }
      });
      previousController.click("click", function () {
        if (activeSlideIndex > 0) {
          activeSlideIndex--;
          draw();
        }
      });
    });
    return this;
  };
})(jQuery);
