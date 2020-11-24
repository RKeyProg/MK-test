const reviewsSlider = $('#reviews-slider');
const reviewsSliderArrowRight = $('#reviews-slider__arrow-left');
const reviewsSliderArrowLeft = $('#reviews-slider__arrow-right');
const reviewsSliderCircle = $('#reviews-slider__controls-circle').children();

let reviewsSliderLength = reviewsSlider.children().length;

let reviewsSliderRight = 0;
let reviewsSliderClickCount = 0;

function nextReviewsSlide() {
	if (reviewsSliderRight >= 100) {
		reviewsSliderRight -= 102;
		reviewsSliderClickCount--;
	}
	reviewsSlider.css('right', `${reviewsSliderRight}%`);
}

function prevReviewsSlide() {
	if (screen.width > '480') {
		if (reviewsSliderRight < (reviewsSliderLength - 1) * 50 + 2) {
			reviewsSliderRight += 102;
			reviewsSliderClickCount++;
		}
	} else {
		if (reviewsSliderRight < (reviewsSliderLength - 1) * 100 + 2) {
			reviewsSliderRight += 102;
			reviewsSliderClickCount++;
		}
	}
	reviewsSlider.css('right', `${reviewsSliderRight}%`);
}

function changeCircles() {
	reviewsSliderCircle.removeClass("active");
	$(reviewsSliderCircle[reviewsSliderClickCount]).addClass('active');
}

reviewsSliderArrowRight.on('click', e => {
	e.preventDefault();
	nextReviewsSlide();
	changeCircles();
})

reviewsSliderArrowLeft.on('click', e => {
	e.preventDefault();
	prevReviewsSlide();
	changeCircles();
})