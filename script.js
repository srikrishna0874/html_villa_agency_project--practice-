

let currentCarouselIndex = 0;

const carousel = document.querySelector('.carousel');
const directChildren = carousel.children;
const childrenArray = Array.from(directChildren);


const dotButtons = document.querySelectorAll('.dot-buttons .circle-button');


const accordianContents = document.querySelectorAll('.accordian .accordian-content');
const accordianHeaders = document.querySelectorAll('.accordian .accordian-header');


function updateDots(index) {
    console.log('jjj');
    console.log(dotButtons.length);
    for (let i = 0; i < dotButtons.length; i++) {
        if (i == index) {
            dotButtons[i].classList.add('active-dot');
        }
        else {
            dotButtons[i].classList.remove('active-dot');
        }
    }
}

function showItem(index) {
    //console.log('length='+directChildren.length);
    //console.log('len'+dotButtons.classList);
    for (let i = 0; i < 3; i++) {
        if (i == index) {
            if (directChildren[i].classList.contains('inactive-carousel-item')) {
                directChildren[i].classList.remove('inactive-carousel-item');
            }
            directChildren[i].classList.add('active-carousel-item');
        }
        else {
            if (directChildren[i].classList.contains('active-carousel-item')) {
                directChildren[i].classList.remove('active-carousel-item');
            }
            directChildren[i].classList.add('inactive-carousel-item');
        }

        //console.log(directChildren[i].classList.length);
        console.log(i);
    }
    updateDots(index);
}

function showPreviousCarouselItem() {
    console.log('hi');
    if (currentCarouselIndex == 0) {
        currentCarouselIndex = 2;
    }
    else {
        currentCarouselIndex = currentCarouselIndex - 1;
    }
    showItem(currentCarouselIndex);

}

function showNextCarouselItem() {
    console.log('hello');
    currentCarouselIndex = (currentCarouselIndex + 1) % 3;
    showItem(currentCarouselIndex);
}


function showAccordianContent(index) {
    console.log('acc-' + accordianHeaders.length);
    for (let i = 0; i < accordianContents.length; i++) {
        if (i == index) {
            if (accordianContents[i].classList.contains('active-accordian-content')) {
                accordianContents[i].classList.remove('active-accordian-content');
                var querySelector = accordianHeaders[i].querySelector('p');
                querySelector.style.color = 'black';
            }
            else {
                accordianContents[i].classList.add('active-accordian-content');
                var querySelector = accordianHeaders[i].querySelector('p');
                querySelector.style.color = '#f35525';
            }
        }
        else if (accordianContents[i].classList.contains('active-accordian-content')) {
            accordianContents[i].classList.remove('active-accordian-content');
            var querySelector = accordianHeaders[i].querySelector('p');
            querySelector.style.color = 'black';
        }

    }
}



window.addEventListener('scroll', function () {
    const navBarSelector = document.querySelector('.navbar');
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
        console.log('scrolling');
        navBarSelector.classList.add('fixed-navbar');
    }
    else {
        if (navBarSelector.classList.contains('fixed-navbar')) {
            navBarSelector.classList.remove('fixed-navbar');
        }
    }
});


showItem(0);
showAccordianContent(0);



