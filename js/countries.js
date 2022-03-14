const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data));

}
const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountryHtml(country));
    //console.log(countriesHTML[0]);
    const container = document.getElementById("countries");
    container.innerHTML = countriesHTML.join(" ");
}
const getCountryHtml = country => {
    //option-1

    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    `
}

/* const getCountryHtml = country => {
    //option-1
    const { name, flags } = country;
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
    </div>
    `
} */

/* 
Original
const getCountryHtml = country => {
    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    `
}  */
loadCountries();