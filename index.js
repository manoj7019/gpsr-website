// const counts = document.querySelectorAll('.count');
// const speed = 100;
// counts.forEach((counter)=> {
//     function upData() {
//         const target = counter.getAttribute('data-target');
//         const count = Number(counter.innerText);
//         const inc = target / speed;
//         if(count < target) {
//             counter.innerText = Math.floor(inc + count)
//             setTimeout(upData, 1);
//         } else {
//             counter.innerText = target
//         }
//     }
//     upData()
// })



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

