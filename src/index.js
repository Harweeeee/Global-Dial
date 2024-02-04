let cityList = document.querySelector('#cities')

function displayInfo(cities) {
    let html = ``
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i]
        html += construct(city)
    }
    let display = document.querySelector('.display-info')
    display.innerHTML = `${html}`
}

function construct(city) {
    let date = moment().tz(city).format('MMMM Do YYYY')
    let time = moment().tz(city).format('LTS')
    return `                    <div class="city-info">
                        <h3 class="city-name">${city.split('/')[1]}</h3>
                        <span class="city-date"
                            >${date}</span
                        >
                        <span class="time" 
                            >${time}</span
                        >
                    </div>`
}

displayInfo(['Europe/Amsterdam', 'Australia/Sydney'])

function updateCity() {
    let newCity = document.querySelector('.display-info')
    let citySelected = cities.options[cities.selectedIndex].value
    newCity.innerHTML = construct(`${citySelected}`)
}

cityList.addEventListener('change', updateCity)
