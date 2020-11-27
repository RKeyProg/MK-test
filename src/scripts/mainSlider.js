const mainSliderBtnLeft = document.querySelectorAll('.hero-slider__arrow-left');

const mainSliderBtnRight = document.querySelectorAll('.hero-slider__arrow-right');

const heroSlider = document.querySelector('#hero-slider');
let heroSliderRight = 0;

mainSliderBtnLeft.forEach(e => {
	e.addEventListener("click", () => {
		if (heroSliderRight >= 100) {
			heroSliderRight-=100;
		}
		heroSlider.style.right = `${heroSliderRight}%`;
	})
})

mainSliderBtnRight.forEach(e => {
	e.addEventListener("click", () => {
		if (heroSliderRight < 400) {
			heroSliderRight+=100;
		}
		heroSlider.style.right = `${heroSliderRight}%`;
	})
})
