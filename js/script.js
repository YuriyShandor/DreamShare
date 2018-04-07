$(document).ready(function () {
  AOS.init({
    duration: 1500,
    easing: 'ease-in-out-back',
    once: true,
    disable: window.innerWidth < 991
  });

  $('.activity').hoverDirection();
});
