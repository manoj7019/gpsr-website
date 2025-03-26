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

// Oldest-News-Section

let oldestNews = document.getElementById('oldest-news-section');
    oldestNews.style.display = 'none';
let viewMoreBtn = document.getElementById('view-more-btn');

viewMoreBtn.addEventListener('click', () => {
    oldestNews.style.display = 'flex';
    viewMoreBtn.style.display = 'none';
})

// Inside GPS Renewables Section 

let interviewBtn = document.getElementById('interview-btn');
let projectBtn = document.getElementById('project-btn');
let eventBtn = document.getElementById('event-btn');

let interviewSection = document.getElementById('interviews-videos');
let projectSection = document.getElementById('projects-videos');
let eventSection = document.getElementById('events-videos');

interviewBtn.addEventListener('click', () => {
    interviewSection.style.display = 'grid';
    projectSection.style.display = 'none';
    eventSection.style.display = 'none';

    interviewBtn.classList.add('active-inside-gpsr-btn');
    projectBtn.classList.remove('active-inside-gpsr-btn');
    eventBtn.classList.remove('active-inside-gpsr-btn');
})

projectBtn.addEventListener('click', () => {
    interviewSection.style.display = 'none';
    projectSection.style.display = 'grid';
    eventSection.style.display = 'none';

    interviewBtn.classList.remove('active-inside-gpsr-btn');
    projectBtn.classList.add('active-inside-gpsr-btn');
    eventBtn.classList.remove('active-inside-gpsr-btn');
})

eventBtn.addEventListener('click', () => {
    interviewSection.style.display = 'none';
    projectSection.style.display = 'none';
    eventSection.style.display = 'grid';

    interviewBtn.classList.remove('active-inside-gpsr-btn');
    projectBtn.classList.remove('active-inside-gpsr-btn');
    eventBtn.classList.add('active-inside-gpsr-btn');
})


let workspaceBtn = document.getElementById('workspace-btn');
let lifeatgpsBtn = document.getElementById('life-at-gps-btn');
let industryeventsBtn = document.getElementById('industry-events-btn');

let workspaceSection = document.getElementById('workspace-section');
let lifeatgpsSection = document.getElementById('life-at-gps-section');
let industryeventsSection = document.getElementById('industry-events-section');

workspaceBtn.addEventListener('click', () => {
    workspaceSection.style.display = 'grid';
    lifeatgpsSection.style.display = 'none';
    industryeventsSection.style.display = 'none';

    workspaceBtn.classList.add('active-photo-gallery-btn');
    lifeatgpsBtn.classList.remove('active-photo-gallery-btn');
    industryeventsBtn.classList.remove('active-photo-gallery-btn');
})

lifeatgpsBtn.addEventListener('click', () => {
    workspaceSection.style.display = 'none';
    lifeatgpsSection.style.display = 'grid';
    industryeventsSection.style.display = 'none';

    workspaceBtn.classList.remove('active-photo-gallery-btn');
    lifeatgpsBtn.classList.add('active-photo-gallery-btn');
    industryeventsBtn.classList.remove('active-photo-gallery-btn');
})  

industryeventsBtn.addEventListener('click', () => {         
    workspaceSection.style.display = 'none';
    lifeatgpsSection.style.display = 'none';
    industryeventsSection.style.display = 'grid';

    workspaceBtn.classList.remove('active-photo-gallery-btn');
    lifeatgpsBtn.classList.remove('active-photo-gallery-btn');
    industryeventsBtn.classList.add('active-photo-gallery-btn');
})


