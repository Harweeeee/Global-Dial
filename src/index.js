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
let interval = setInterval(
    () => displayInfo(['Europe/Amsterdam', 'Europe/Budapest']),
    1000
)

function listener() {
    clearInterval(interval)
    interval = setInterval(updateCity, 1000)
}

function updateCity() {
    let newCity = document.querySelector('.display-info')
    let citySelected = cities.options[cities.selectedIndex].value
    if (citySelected === 'current') {
        newCity.innerHTML = guessLocal()
    } else if (citySelected === 'Select a city...') {
        return
    } else {
        newCity.innerHTML = construct(`${citySelected}`)
    }
}

function guessLocal() {
    let localZone = moment.tz.guess()
    let localDate = moment.tz(localZone).format('MMMM Do YYYY')
    let localTime = moment.tz(localZone).format('LTS')
    return `                    <div class="city-info">
                        <h3 class="city-name">${localZone.split('/')[1]}</h3>
                        <span class="city-date"
                            >${localDate}</span
                        >
                        <span class="time" 
                            >${localTime}</span
                        >
                    </div>`
}
cityList.addEventListener('change', listener)
