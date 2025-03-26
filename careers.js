let insuranceBtn = document.getElementById('insurance-button')
let accomodationBtn = document.getElementById('accomodation-button')
let mealBtn = document.getElementById('meal-button')
let loanBtn = document.getElementById('loan-button')

insuranceBtn.addEventListener('click', () => {
    document.getElementById('insurance-info').style.display = 'flex';
    document.getElementById('accomodation-info').style.display = 'none';
    document.getElementById('meal-info').style.display = 'none';
    document.getElementById('loan-info').style.display = 'none';

    insuranceBtn.classList.add('active-employee-benefits-button')
    accomodationBtn.classList.remove('active-employee-benefits-button')
    mealBtn.classList.remove('active-employee-benefits-button')
    loanBtn.classList.remove('active-employee-benefits-button')
})

accomodationBtn.addEventListener('click', () => {
    document.getElementById('insurance-info').style.display = 'none';
    document.getElementById('accomodation-info').style.display = 'flex';
    document.getElementById('meal-info').style.display = 'none';
    document.getElementById('loan-info').style.display = 'none';

    insuranceBtn.classList.remove('active-employee-benefits-button')
    accomodationBtn.classList.add('active-employee-benefits-button')
    mealBtn.classList.remove('active-employee-benefits-button')
    loanBtn.classList.remove('active-employee-benefits-button')
})

mealBtn.addEventListener('click', () => {
    document.getElementById('insurance-info').style.display = 'none';
    document.getElementById('accomodation-info').style.display = 'none';
    document.getElementById('meal-info').style.display = 'flex';
    document.getElementById('loan-info').style.display = 'none';

    insuranceBtn.classList.remove('active-employee-benefits-button')
    accomodationBtn.classList.remove('active-employee-benefits-button')
    mealBtn.classList.add('active-employee-benefits-button')
    loanBtn.classList.remove('active-employee-benefits-button')
})

loanBtn.addEventListener('click', () => {
    document.getElementById('insurance-info').style.display = 'none';
    document.getElementById('accomodation-info').style.display = 'none';
    document.getElementById('meal-info').style.display = 'none';
    document.getElementById('loan-info').style.display = 'flex';

    insuranceBtn.classList.remove('active-employee-benefits-button')
    accomodationBtn.classList.remove('active-employee-benefits-button')
    mealBtn.classList.remove('active-employee-benefits-button')
    loanBtn.classList.add('active-employee-benefits-button')
})