// News-Slider 

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li')
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if(active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider()
}

prev.onclick = function() {
    if(active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider()
}

let refreshSlider = setInterval(() => {next.click()}, 5000)

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 5000)
}

dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
    })
})

// Our Climate Impact 

const counts = document.querySelectorAll('.count');
const speed = 110;

function runCounter() {
    counts.forEach((counter) => {
        function upData() {
            const target = Number(counter.getAttribute('data-target'));
            const count = Number(counter.innerText);
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.floor(inc + count);
                setTimeout(upData, 1);
            } else {
                counter.innerText = target;
            }
        }
        upData();
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            runCounter();
            observer.unobserve(entry.target); // Stop observing after running the counter
        }
    });
}, { threshold: 0.5 });

const targetSection = document.querySelector('.our-climate-impact');
observer.observe(targetSection);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));