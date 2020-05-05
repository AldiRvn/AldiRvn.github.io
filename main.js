// alert('Hello, Welcome. This web is on development.')
show(html_covid19_case, covidCase, false)
//covidCase()
//exchangeRate()
rollQuote()

// Change the main content from html.js
function show(elems, after, tele) {
    document.getElementById('main').innerHTML = elems
    if (tele) {
        document.getElementById('main').scrollIntoView()
    }
    after()
}

function ajax(url, after) {
    var request = new XMLHttpRequest()

    request.open('GET', url, true)
    request.onload = function () {
        after(this.response)
    }

    request.send()
}


// Random Quote
function rollQuote() {
    document.getElementById('quote').innerHTML = 'Loading...'
    document.getElementById('author').innerHTML = 'Please wait'

    var url = 'https://api.quotable.io/random'
    ajax(url, function (data) {
        data = JSON.parse(data)
        document.getElementById('quote').innerHTML = '"' + data.content + '"'
        document.getElementById('author').innerHTML = '- ' + data.author
    })
}

// COVID-19 Case
function covidCase() {
    var url = 'https://www.trackcorona.live/api/countries/id'
    ajax(url, function (data) {
        result = JSON.parse(data),
            updated = new Date(Date.parse(result.data[0].updated))

        document.getElementById('covid19_case_updated').innerHTML = updated
        document.querySelector('.tLarge.confirmed').innerHTML = result.data[0].confirmed
        document.querySelector('.tLarge.recovered').innerHTML = result.data[0].recovered
        document.querySelector('.tLarge.deaths').innerHTML = result.data[0].dead
    })
}

// Exchange Rate
function exchangeRate() {
    document.getElementById('exchange_rate_updated').innerHTML = 'Loading'
    document.querySelector('.tLarge.exchangeRate').innerHTML = 'Loading'

    var url = 'https://api.exchangeratesapi.io/latest?base=USD'
    ajax(url, function (data) {
        data = JSON.parse(data)

        document.getElementById('exchange_rate_updated').innerHTML = data.date
        document.querySelector('.tLarge.exchangeRate').innerHTML = data.rates.IDR
    })

}

// Today Salah Times
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest()
    if ("withCredentials" in xhr) {
        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHttpRequest2 objects.

        xhr.open(method, url, true)
    } else if (typeof XDomainRequest != "undefined") {
        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.

        xhr.open(method, url)
    } else {
        // Otherwise, CORS is not supported by the browser.

        alert('Your browser is not compatible, update your browser or try in another browser.')
    }
    return xhr
}

var devMode = location.search.split('dm=')[1]
if (devMode == 1) {
    document.querySelectorAll('.onDev').forEach(d => {
        d.classList.remove('onDev')
    })
    
    var url = 'https://api.pray.zone/v2/times/today.json?ip='
    var xhr = createCORSRequest('GET', url)
    if (!xhr) {
        throw new Error('CORS not supported')
    } else {
        var ip = 'https://api.ipify.org/?format=json'
        ajax(ip, function (data) {
            data = JSON.parse(data)

            url += data.ip
            console.log(url);
            
            ajax(url, function (data) {
                data = JSON.parse(data),
                timestamp = data.results.datetime[0].date.timestamp
                timezone = data.results.location.timezone
                times = data.results.datetime[0].times
                
                document.getElementById('salah_times_updated').innerHTML = new Date(Date.parse(timestamp))
                document.getElementById('timezone_salah_times').innerHTML = timezone
                document.querySelectorAll('.tLarge.salahTimes').innerHTML = times
            })
        })

    }
}


// Content Scroll
window.onscroll = function () {
    //console.log(document.body.scrollTop || document.documentElement.scrollTop)

    var px = 350, min = 500;
    if (document.body.scrollTop > px || document.documentElement.scrollTop > px) {
        document.querySelectorAll('section aside').forEach(element => {
            element.classList.add('animated', 'fadeInUp')
        });
    }

    px = document.querySelector('section main blockquote')
        .offsetTop - document.body.scrollTop || document.documentElement.scrollTop
    //console.log('>'+px);

    if (document.body.scrollTop > px - min || document.documentElement.scrollTop > px - min) {
        document.querySelector('section main blockquote').classList.add('animated', 'fadeIn')
    }
}
document.querySelector('body > header:nth-child(1) > main')
    .classList.add('animated', 'fadeIn')