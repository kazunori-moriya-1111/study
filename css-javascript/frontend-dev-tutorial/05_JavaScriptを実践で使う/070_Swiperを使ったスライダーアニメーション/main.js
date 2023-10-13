document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper');
  hero.start({ delay: 2000 });

  setTimeout(() => {
    hero.stop();
  }, 5000);
});
