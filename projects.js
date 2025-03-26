// let mapClick = document.querySelector('#player');
//     mapClick.currentTime = 0;


document.getElementById('map-igrpl-project-box').style.display = 'none';

document.getElementById('map-bio-epc-button').classList.add('map-active-button');

document.getElementById('map-igrpl-button').addEventListener('click', () => {
    document.getElementById('map-igrpl-button').classList.add('map-active-button');
    document.getElementById('map-bio-epc-button').classList.remove('map-active-button');
    document.getElementById('map-igrpl-project-box').style.display = 'block';
    document.getElementById('map-bio-epc-project-box').style.display = 'none';
    // mapClick.play();
})

document.getElementById('map-bio-epc-button').addEventListener('click', () => {
    console.log('map-bio-epc-button clicked');
    document.getElementById('map-bio-epc-button').classList.add('map-active-button');
    document.getElementById('map-igrpl-button').classList.remove('map-active-button');
    document.getElementById('map-bio-epc-project-box').style.display = 'block';
    document.getElementById('map-igrpl-project-box').style.display = 'none';
    // mapClick.play();
})

document.getElementById('INMP').addEventListener('click', function() {
    document.getElementById('map-default-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-mp').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-up').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-hr').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ap').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ct').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-rj').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-gj').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INMP').addEventListener('click', function() {
    document.getElementById('INMP').style.fill = '#4dff56';
    // document.getElementById('INMP').style.filter = 'drop-shadow(0 0 5px #4dff56) drop-shadow(0 0 5px #4dff56) drop-shadow(0 0 20px #4dff56)';
    document.getElementById('INUP').style.fill = ' var(--stateColor)';
    document.getElementById('INHR').style.fill = ' var(--stateColor)';
    document.getElementById('INAP').style.fill = ' var(--stateColor)';
    document.getElementById('INCT').style.fill = ' var(--stateColor)';
    document.getElementById('INRJ').style.fill = ' var(--stateColor)';
    document.getElementById('INGJ').style.fill = ' var(--stateColor)';
})

document.getElementById('INUP').addEventListener('click', function() {
    document.getElementById('map-default-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-up').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-mp').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-hr').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ap').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ct').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-rj').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-gj').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INUP').addEventListener('click', function() {
    document.getElementById('INUP').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INHR').style.fill = 'var(--stateColor)';
    document.getElementById('INAP').style.fill = 'var(--stateColor)';
    document.getElementById('INCT').style.fill = 'var(--stateColor)';
    document.getElementById('INRJ').style.fill = 'var(--stateColor)';
    document.getElementById('INGJ').style.fill = 'var(--stateColor)';
})

document.getElementById('INHR').addEventListener('click', function() {
    document.getElementById('map-default-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-hr').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-mp').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-up').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ap').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ct').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-rj').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-gj').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INHR').addEventListener('click', function() {
    document.getElementById('INHR').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INUP').style.fill = 'var(--stateColor)';
    document.getElementById('INAP').style.fill = 'var(--stateColor)';
    document.getElementById('INCT').style.fill = 'var(--stateColor)';
    document.getElementById('INRJ').style.fill = 'var(--stateColor)';
    document.getElementById('INGJ').style.fill = 'var(--stateColor)';
})

document.getElementById('INAP').addEventListener('click', function() {
    document.getElementById('map-default-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-ap').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-mp').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-up').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-hr').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ct').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-rj').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-gj').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INAP').addEventListener('click', function() {
    document.getElementById('INAP').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INUP').style.fill = 'var(--stateColor)';
    document.getElementById('INHR').style.fill = 'var(--stateColor)';
    document.getElementById('INCT').style.fill = 'var(--stateColor)';
    document.getElementById('INRJ').style.fill = 'var(--stateColor)';
    document.getElementById('INGJ').style.fill = 'var(--stateColor)';
})

document.getElementById('INCT').addEventListener('click', function() {
    document.getElementById('map-default-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-ct').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-mp').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-up').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-hr').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ap').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-rj').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-gj').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INCT').addEventListener('click', function() {
    document.getElementById('INCT').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INUP').style.fill = 'var(--stateColor)';
    document.getElementById('INAP').style.fill = 'var(--stateColor)';
    document.getElementById('INHR').style.fill = 'var(--stateColor)';
    document.getElementById('INRJ').style.fill = 'var(--stateColor)';
    document.getElementById('INGJ').style.fill = 'var(--stateColor)';
})

document.getElementById('INRJ').addEventListener('click', function() {
    document.getElementById('map-default-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-rj').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-mp').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-up').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-hr').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ap').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ct').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-gj').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INRJ').addEventListener('click', function() {
    document.getElementById('INRJ').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INUP').style.fill = 'var(--stateColor)';
    document.getElementById('INAP').style.fill = 'var(--stateColor)';
    document.getElementById('INCT').style.fill = 'var(--stateColor)';
    document.getElementById('INHR').style.fill = 'var(--stateColor)';
    document.getElementById('INGJ').style.fill = 'var(--stateColor)';
})

document.getElementById('INGJ').addEventListener('click', function() {
    document.getElementById('map-default-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-gj').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-mp').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-up').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-hr').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ap').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ct').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-rj').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INGJ').addEventListener('click', function() {
    document.getElementById('INGJ').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INUP').style.fill = 'var(--stateColor)';
    document.getElementById('INAP').style.fill = 'var(--stateColor)';
    document.getElementById('INCT').style.fill = 'var(--stateColor)';
    document.getElementById('INRJ').style.fill = 'var(--stateColor)';
    document.getElementById('INHR').style.fill = 'var(--stateColor)';
})



// document.getElementById('INMP').addEventListener('onmouseout', function() {
//     document.getElementById('project-card-container').style.display = 'none';
// })

document.getElementById('INUP2').addEventListener('click', function() {
    document.getElementById('map-igrpl-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-up2').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-hr2').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ap2').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ct2').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INUP2').addEventListener('click', function() {
    document.getElementById('INUP2').style.fill = '#4dff56';
    document.getElementById('INHR2').style.fill = 'var(--stateColor)';
    document.getElementById('INAP2').style.fill = 'var(--stateColor)';
    document.getElementById('INCT2').style.fill = 'var(--stateColor)';
})

document.getElementById('INHR2').addEventListener('click', function() {
    document.getElementById('map-igrpl-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-hr2').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-up2').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ap2').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ct2').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INHR2').addEventListener('click', function() {
    document.getElementById('INHR2').style.fill = '#4dff56';
    document.getElementById('INUP2').style.fill = 'var(--stateColor)';
    document.getElementById('INAP2').style.fill = 'var(--stateColor)';
    document.getElementById('INCT2').style.fill = 'var(--stateColor)';
})

document.getElementById('INAP2').addEventListener('click', function() {
    document.getElementById('map-igrpl-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-ap2').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-up2').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-hr2').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ct2').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INAP2').addEventListener('click', function() {
    document.getElementById('INAP2').style.fill = '#4dff56';
    document.getElementById('INUP2').style.fill = 'var(--stateColor)';
    document.getElementById('INHR2').style.fill = 'var(--stateColor)';
    document.getElementById('INCT2').style.fill = 'var(--stateColor)';
})

document.getElementById('INCT2').addEventListener('click', function() {
    document.getElementById('map-igrpl-projects-info-right').style.display = 'none';
    document.getElementById('map-project-card-container-ct2').classList.add('map-project-card-containers');
    document.getElementById('map-project-card-container-up2').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-hr2').classList.remove('map-project-card-containers');
    document.getElementById('map-project-card-container-ap2').classList.remove('map-project-card-containers');
    // mapClick.play();
})
document.getElementById('INCT2').addEventListener('click', function() {
    document.getElementById('INCT2').style.fill = '#4dff56';
    document.getElementById('INUP2').style.fill = 'var(--stateColor)';
    document.getElementById('INHR2').style.fill = 'var(--stateColor)';
    document.getElementById('INAP2').style.fill = 'var(--stateColor)';
})

// function clickSound() {
//     let spin = document.querySelector('#player');
//     spin.currentTime = 0;
//     spin.play();
// }

// Feedstock Portfolio 

let agriWasteBtn = document.getElementById('agri-waste-button')
let mswWasteBtn = document.getElementById('msw-waste-button')
let preWasteBtn = document.getElementById('pre-waste-button')

agriWasteBtn.addEventListener('click', () => {
    document.getElementById('agri-waste-info').style.display = 'flex';
    document.getElementById('msw-waste-info').style.display = 'none';
    document.getElementById('pre-waste-info').style.display = 'none';

    agriWasteBtn.classList.add('active-waste-button')
    mswWasteBtn.classList.remove('active-waste-button')
    preWasteBtn.classList.remove('active-waste-button')
})
mswWasteBtn.addEventListener('click', () => {
    document.getElementById('agri-waste-info').style.display = 'none';
    document.getElementById('msw-waste-info').style.display = 'flex';
    document.getElementById('pre-waste-info').style.display = 'none';

    agriWasteBtn.classList.remove('active-waste-button')
    mswWasteBtn.classList.add('active-waste-button')
    preWasteBtn.classList.remove('active-waste-button')
})

preWasteBtn.addEventListener('click', () => {
    document.getElementById('agri-waste-info').style.display = 'none';
    document.getElementById('msw-waste-info').style.display = 'none';
    document.getElementById('pre-waste-info').style.display = 'flex';

    agriWasteBtn.classList.remove('active-waste-button')
    mswWasteBtn.classList.remove('active-waste-button')
    preWasteBtn.classList.add('active-waste-button')
})