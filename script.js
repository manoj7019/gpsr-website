window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Hide the loader
});

const pagesToPreload = [
    './ourBusiness.html',
    './projects.html',
    './esg.html',
    './ourTeam.html',
    './investorRelations.html',
    './media.html',
    './careers.html',
    './contact.html'
];

// Preload pages
function preloadPages() {
    pagesToPreload.forEach(page => {
        fetch(page)
            .then(response => {
                if (response.ok) {
                    console.log(`Preloaded: ${page}`);
                } else {
                    console.error(`Failed to preload: ${page}`);
                }
            })
            .catch(error => console.error(`Error preloading ${page}:`, error));
    });
}

// Call the preload function when the home page loads
window.addEventListener('load', preloadPages);

let Year = new Date().getFullYear();
let thisYear = document.getElementById('thisYear')
thisYear.textContent = Year;