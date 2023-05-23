
const my_form = document.getElementById("search-form");
const buttons = document.getElementsByClassName("pag");

function filters(page) {
    const inputSearch = document.getElementById("search-input");
    const checkFull = document.getElementById("full");
    const inputLocation = document.getElementById("inloc");
    const cities = document.getElementsByName("cities");

    const keyword = inputSearch.value;
    const time = checkFull.checked;
    const location = inputLocation.value;
    let city;
    for (var i = 0; i < cities.length; i++) {
        if (cities[i].checked) {
            city = cities[i].value;
        }
    }
    let params = "";
    params += (keyword != '') ? `keyword=${keyword}&` : '';
    params += (location != '') ? `location=${location}&` : '';
    params += (city && city != '') ? `city=${city}&` : '';
    params += (time != '') ? `fulltime=yes&` : '';
    window.location.href = `/${page}/?${params}`;
}

function handleSubmit(e) {
    e.preventDefault();
    filters(1);
}

for (let i = 0; i < buttons.length; i++) {
    const page = buttons[i].dataset.pag;
    buttons[i].addEventListener('click', () => { filters(page) });
}

my_form.addEventListener('submit', handleSubmit);

