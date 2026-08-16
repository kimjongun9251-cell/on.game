/**
 * ON.GAME — slider navigation only
 */
(function () {
  'use strict';

  document.querySelectorAll('[data-slider]').forEach(function (slider) {
    var track = slider.querySelector('.jp-slider-track');
    var prev = slider.querySelector('.jp-slider-prev');
    var next = slider.querySelector('.jp-slider-next');
    var viewport = slider.querySelector('.jp-slider-viewport');
    if (!track || !prev || !next || !viewport) return;

    var scrollAmount = 220;

    prev.addEventListener('click', function () {
      viewport.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    next.addEventListener('click', function () {
      viewport.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
})();
