let region = document.querySelector(".region");
let darkMode = document.querySelector(".dark-mode");
let body = document.querySelector("body");
let list = document.querySelector(".countries-list");
let darkmode = document.querySelector('#darkmode')
let search = document.querySelector('#search')


let fullinfo = [
    {country: "Belgium", url: "../img/1280px-Flag_of_Belgium.svg", native: "Belgiё", population: "11,319,511", region: "Europe", sregion: "Western Europe", capital: "Brassels", domain: ".be", currencies: "Euro", languages: "Dutch, French, German", border: "France, Germany, Netherlands"},
];

let countries = [
    {url: "./img/flag-germany.png", country: "Germany", proporties : {Population: "11,319,511", Region: "Europe", Capital: "Brassels"}},
    {url: "./img/flag-usa.png", country: "United States of America", proporties : { Population: "323,947,000", Region: "Americas", Capital: "Washington, D.C" }},  
    {url: "./img/flag-brasil.png", country: "Brazil", proporties : { Population: "206,135,893", Region: "Americas", Capital: "Brasília" }},
    {url: "./img/flag-iceland.png", country: "Iceland", proporties : { Population: "334,300", Region: "Europe", Capital: "Reykjavik" }},
    {url: "./img/flag-afganistan.png", country: "Afghanistan", proporties : { Population: "27,657,145", Region: "Asia", Capital: "Kabul" }},
    {url: "./img/flag-iland-iceland.png", country: "Åland Islands", proporties : { Population: "28,875", Region: "Europe", Capital: "Mariehamn" }},
    {url: "./img/flag-albania.png", country: "Albania", proporties : { Population: "2,886,026", Region: "Europe", Capital: "Tirana" }},
    {url: "./img/flag-algeria.png", country: "Algeria", proporties : { Population: "40,400,000", Region: "Afrika", Capital: "Algiers" }},
];


function createElements(...arr) {
    return arr.map( (el) => {
        return document.createElement(el)
    })
}

    
function renderer(data) {
    list.innerHTML = null
    for (let el of data) {
        let [li, a, img, div, h2, ul, li1, li2, li3, span1, span2, span3, lispan1, lispan2, lispan3] = createElements(
            'li', 'a', 'img', 'div', 'h2', 'ul', 'li', 'li', 'li','span','span','span','span','span','span') 

        li.className = "countries-item"

        a.setAttribute('href','#')
        a.className = "country-link"
        
        img.setAttribute('src', el.url)
        img.setAttribute('alt', el.country)
        img.className = "country-flag-img"
        div.className = "info"
        
        h2.className = "country-heading"
        h2.textContent = el.country
        
        ul.className = "info-list"
        li1.className = "country-info"
        li2.className = "country-info"
        li3.className = "country-info"
        
        span1.className = "info-text"
        span1.textContent = "Population: "
        span2.className = "info-text"
        span2.textContent = "Region: "
        span3.className = "info-text"
        span3.textContent = "Capital: "
        
        lispan1.textContent = el.proporties.Population
        lispan2.textContent = el.proporties.Region
        lispan3.textContent = el.proporties.Capital
        
        li1.append(span1, lispan1)
        li2.append(span2, lispan2)
        li3.append(span3, lispan3)
        
        ul.append(li1, li2, li3)
        h2.append(ul)
        div.append(h2)
        
        a.append(img, div)
        li.append(a)
        list.appendChild(li)
    }
}
renderer(countries)

region.addEventListener('change', event => {
    list.innerHTML = null
    let arr = []
    countries.forEach( (el) => {
        if(el.proporties.Region == region.value) {
            arr.push(el)
            renderer(arr)
        } else if(region.value == '0'){
            renderer(countries)
        }
    })
})

darkMode.onclick = () => {
    darkmode.classList.toggle('dark')
}

search.onkeyup = () => {
    list.innerHTML = null
    if (region.value == '0') {
        let arr = []
        countries.forEach(el => {
            let a = el.country.toLowerCase()
            if(a.includes(search.value)) {
                arr.push(el)
                renderer(arr)
            }
        })
    } else {
        let arr = []
        countries.forEach( el => {
            if(el.proporties.Region == region.value) {
                arr.push(el)
            }
        })
        let arr1 = []
        arr.forEach(el => {
            let a = el.country.toLowerCase()
            if(a.includes(search.value)) {
                arr1.push(el)
                renderer(arr1)
            }
        })
    }
}