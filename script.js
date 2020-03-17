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
});

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

// SLIDER`S CAROUSEL

const SLIDE_VERTICAL = document.querySelector('.slide-vertical');
const SLIDE_HORIZONTAL = document.querySelector('.slide-horizontal');

document.querySelector('.phone-vertical').addEventListener('click', e => {
    if (e.pageX < 492 && e.pageY < 606) {
        SLIDE_VERTICAL.classList.toggle('disable');
    }
});
document.querySelector('.phone-horizontal').addEventListener('click', e => {
    if (e.pageX < 1048 && e.pageY < 484) {
        SLIDE_HORIZONTAL.classList.toggle('disable');
    }
});

SLIDE_VERTICAL.addEventListener('click', e => {
    SLIDE_VERTICAL.classList.toggle('disable');
});
SLIDE_HORIZONTAL.addEventListener('click', e => {
    SLIDE_HORIZONTAL.classList.toggle('disable');
});

// ACTIVATE DISPLAY PHONE

const TAGS_MENU = document.querySelector('.tags-portfolio');
const PICTURES = document.querySelector('.pictures-portfolio');

let randomInt = () => {
    return Math.floor(Math.random() * 20);
};

TAGS_MENU.addEventListener('click', e => {
    e.preventDefault();
    TAGS_MENU.querySelectorAll('a').forEach(elem => elem.classList.remove('active__tags'));
    e.target.classList.add('active__tags');
});

TAGS_MENU.querySelectorAll('a').forEach(e => {
    e.addEventListener('click', el => {
        switch (el.target.text) {
            case 'All':
                let num = 1;
                PICTURES.querySelectorAll('img').forEach(element => {
                    element.style.order = num++;
                });
                break;
            default:
                PICTURES.querySelectorAll('img').forEach(element => {
                    element.style.order = randomInt();
                });
                break;
        }
    })
});

// PORTFOLIO`S TAB

PICTURES.querySelectorAll('img').forEach(e => {
    e.addEventListener('click', event => {
        PICTURES.querySelectorAll('img').forEach(elem => {
            elem.style.width = '220px';
            elem.style.height = '187px';
            elem.style.border = "none";
        });
        e.style.width = '210px';
        e.style.height = '177px';
        e.style.border = "5px solid #F06C64";
    });
});

// IMAGE INTERACTION

const SUBJECT = document.getElementById('subject');
const TEXTAREA = document.getElementById('textarea');
const OVERLAY = document.querySelector('.overlay');
const MODAL = document.querySelector('.modal');

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('.theme').innerHTML = SUBJECT.value === '' ? 'Without subject' : SUBJECT.value.toString();
    document.querySelector('.describe').innerHTML = TEXTAREA.value === '' ? 'Without subject' : TEXTAREA.value.toString();
    OVERLAY.classList.add('active__modal');
    MODAL.classList.add('active__modal');
});

document.querySelector('.close').addEventListener('click', e => {
    document.querySelector('form').reset();
    OVERLAY.classList.remove('active__modal');
    MODAL.classList.remove('active__modal');
});

//  MODAL-WINDOW