/* Animation on page appear */

TweenMax.fromTo('.logo', 1, {xPercent: -100, autoAlpha: 0}, { xPercent: 0, autoAlpha: 1, ease: Power2.easeInOut, delay:0.7}, 1)
TweenMax.fromTo('.link-fixed', 1, {xPercent: 100, autoAlpha: 0}, { xPercent: 0, autoAlpha: 1, ease: Power2.easeInOut, delay:0.7}, 1)
TweenMax.fromTo('.title div', 1, { yPercent: 100 }, {yPercent: 0, ease: Power2.easeInOut})
TweenMax.fromTo('.description', 1, { yPercent: 20, autoAlpha: 0 }, {yPercent: 0, autoAlpha: 1, ease: Power2.easeInOut, delay:0.5})
TweenMax.fromTo('.button', 1, {yPercent: 100, autoAlpha: 0}, { yPercent: 0, autoAlpha: 1, ease: Power2.easeInOut, delay:0.7}, 1)
TweenMax.staggerTo('.round', 1, {autoAlpha:1, delay: 0.3}, 0.2);
TweenMax.fromTo('.key-img', 1, {xPercent: 100, autoAlpha: 0}, { xPercent: 0, autoAlpha: 1, ease: Power2.easeInOut, delay:0.7, }, 1)

/* Cursor */

window.addEventListener('mousemove', (e) => {
    let coord = { x: e.clientX, y: e.clientY }
    TweenMax.to('.cursor', 0.05, {left: coord.x - 5, top: coord.y - 5})
})

const buttonPreOrder = document.querySelector('.link-fixed');

const cursor = document.querySelector('.cursor')

const heightCursorActive = 60;

/* Animate the pre-order link fixed */

buttonPreOrder.addEventListener('mousemove', (e) => {
    let coord = { x: e.offsetX, y: e.offsetY}
    TweenMax.to('.pre-order span', 0.05, {x: coord.x -70, y: coord.y - 18, fontSize:'11px'})
    TweenMax.to('.cursor', 0.05, {left: coord.x - (heightCursorActive/2), top: coord.y - (heightCursorActive/2)})
})

buttonPreOrder.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
})

buttonPreOrder.addEventListener('mouseleave', (e) => {
    cursor.classList.remove('active');
    TweenMax.to('.pre-order span', 0.5, {x: 0, y: 0, fontSize:'16px'})
})

const detailPulse = document.querySelectorAll('.detail-pulse');

/* More detail on technical */

for(let i = 0; i < detailPulse.length; i++) {
    detailPulse[i].addEventListener('mouseenter', () => {
        cursor.classList.add('cursorPulse');
    })
    detailPulse[i].addEventListener('mouseleave', () => {
        cursor.classList.remove('cursorPulse');
    })
} 

/* Nav */


const home = document.querySelector('.home')

const navSection = ["#home", "#key", "#app", "team",]
const anchorNav = document.querySelectorAll('.anchor-nav')
const roundNav = document.querySelectorAll('.round')
roundNav[0].classList.add('active')

for(let i = 0; i < roundNav.length; i++) {
    roundNav[i].addEventListener('click', () => {
        TweenLite.to(window, 1, {scrollTo:{y: "#key", offsetY:70}});
    })
}


const appFirstAnimation = document.querySelector('#anim-right-2')
const divPulse = document.querySelector('.pulse')


const PreOrderText = document.querySelector('.pre-order span');

window.addEventListener('scroll', (e) => {

    /* Blue round on app */

    if(appFirstAnimation.getAttribute('class') == 'anim-right active') {
        divPulse.classList.add('active')
    } else {
        divPulse.classList.remove('active')
    }

    /* Nav set color and select*/ 

    for(let i = 0; i < anchorNav.length; i++) {
        if(pageYOffset >= anchorNav[i].offsetTop ) {
            if(i != 0 && i != 2) {
                for(let i = 0; i < anchorNav.length; i++) {
                    roundNav[i].classList.add('white')
                }
                PreOrderText.classList.add('white');
            } else {
                for(let i = 0; i < anchorNav.length; i++) {
                    roundNav[i].classList.remove('white')
                }
                PreOrderText.classList.remove('white');
            }
            if(i != 0) {
                roundNav[i-1].classList.remove('active');
            }
            roundNav[i].classList.add('active')
        } else {
            roundNav[i].classList.remove('active')
        }
    }
})

/* KEY LOCKY SCENE */

const controller = new ScrollMagic.Controller({
});


const keyScene01 = new ScrollMagic.Scene({
    triggerElement: '.key',
    triggerHook: 0.2,
    duration: 1000
}).setClassToggle('.img-key-feature', 'active')
.setPin('.img-key-feature')
.addIndicators()
.addTo(controller);

const keyScene02 = new ScrollMagic.Scene({
    triggerElement: '.key',
    triggerHook: 0.5,
    duration: 600
}).setClassToggle('#anim-right-1', 'active')
.setTween(TweenMax.to('.pulse'), {className:'red'})
.addIndicators()
.addTo(controller);

const keyScene03 = new ScrollMagic.Scene({
    triggerElement: '#container-anim-1',
    triggerHook: 0.5,
    duration: 600
}).setClassToggle('#anim-right-2', 'active')
.addIndicators()
.addTo(controller);

const keyScene04 = new ScrollMagic.Scene({
    triggerElement: '.detail',
    triggerHook: 0.5,
    duration: 600
}).setClassToggle('.content-center', 'active')
.addIndicators()
.addTo(controller);

/* KEY LOCKY SCENE */
