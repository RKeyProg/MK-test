const directionSlider = $('#directions-slider');
const directionSliderArrowRight = $('#direction-slider__arrow-right');
const directionSliderArrowLeft = $('#direction-slider__arrow-left');

let directionSlideNow = 1;
let directionSliderLength = directionSlider.children().length;

let directionSliderRight = 0;

function nextSlide() {
	if (directionSlideNow == directionSliderLength || directionSlideNow <= 0 || directionSlideNow >= directionSliderLength) {
		directionSliderRight = 0;
		directionSlider.css('right', `${directionSliderRight}%`);
		directionSlideNow = 1;
	} else {
		directionSliderRight += 100;
		directionSlider.css('right', `${directionSliderRight}%`);
		directionSlideNow++;
	}
}

function prevSlide() {
	if (directionSlideNow <= 1 || directionSlideNow > directionSliderLength) {
		directionSliderRight = directionSliderLength*100 - 100;
		directionSlider.css('right', `${directionSliderRight}%`);
		directionSlideNow = directionSliderLength;
	} else {
		directionSliderRight -= 100;
		directionSlider.css('right', `${directionSliderRight}%`);
		directionSlideNow--;
	}
}

directionSliderArrowRight.on('click', e => {
	e.preventDefault();
	nextSlide();
})

directionSliderArrowLeft.on('click', e => {
	e.preventDefault();
	prevSlide();
})
