const sliderContainer = document.querySelector('.slider-container');
const leftSlider = document.querySelector('.left-slide');
const rightSlider = document.querySelector('.right-slide');
const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
//we need the number of slides to scroll through
const slidesLength = rightSlider.querySelectorAll('div').length;
console.log(slidesLength);

//to figure out which index is in view
let activeSlideIndex = 0;

//correcting the default position of the left slide
leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`;

//on either buttons click, "changeSlide()" function will be called with corresponding parameters
downButton.addEventListener('click', () => changeSlide('down'));
upButton.addEventListener('click', () => changeSlide('up'));

function changeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight;
    console.log(sliderHeight);
    if(direction == 'up'){//if up button is pressed, the slider will move up
        activeSlideIndex++;//increment activeSlideIndex
        if(activeSlideIndex > slidesLength - 1){//if the last index is reached,
            activeSlideIndex = 0;//go back to the starting index
        }
    } else if(direction == 'down'){//if down button is pressed, the slider will move down
        activeSlideIndex--;//decrement activeSlideIndex
        if(activeSlideIndex < 0){//if the last index is reached
            activeSlideIndex = slidesLength - 1;//go back to the starting index
        }
    }
    //tranforming animation for the right and left sliders respectivly
    rightSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    leftSlider.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}


