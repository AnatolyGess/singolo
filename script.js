const MENU = document.querySelector('.nav');

MENU.addEventListener('click', event => {
    event.preventDefault();
    MENU.querySelectorAll('a').forEach(elem => elem.classList.remove('active'));
    event.target.classList.add('active');
});

MENU.querySelectorAll('a').forEach(elem => {
    elem.addEventListener('click', e => {
        const ID = elem.getAttribute('href').substring(1);
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
})

// HEADER

const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const SLIDER_BOTTOM = document.querySelector('.slider-bottom');

document.querySelector('.left').addEventListener('click', event => {
    slider1.classList.toggle('disable');
    slider2.classList.toggle('disable');
    slider1.classList.contains('disable') ? SLIDER_BOTTOM.style.backgroundColor = "#5e85F6" : SLIDER_BOTTOM.style.backgroundColor = "#ea676b";
});

document.querySelector('.right').addEventListener('click', event => {
    slider1.classList.toggle('disable');
    slider2.classList.toggle('disable');
    slider1.classList.contains('disable') ? SLIDER_BOTTOM.style.backgroundColor = "#5e85F6" : SLIDER_BOTTOM.style.backgroundColor = "#ea676b";
});