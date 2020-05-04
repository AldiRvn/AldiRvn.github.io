// alert('Hello, Welcome. This web is on development.')
show(html_covid19_case, covidCase, false)
//covidCase()
//exchangeRate()
rollQuote()

// Change the main content from html.js
function show(elems, after, tele) {
    document.getElementById('main').innerHTML = elems
    if(tele){
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

function exchangeRate() {
    document.getElementById('exchange_rate_updated').innerHTML = 'Loading'
    document.querySelector('.tLarge.exchangeRate').innerHTML = 'Loading'

    var url = 'https://api.exchangeratesapi.io/latest?base=USD'
    ajax(url, function(data) {
        data = JSON.parse(data)
        document.getElementById('exchange_rate_updated').innerHTML = data.date
        document.querySelector('.tLarge.exchangeRate').innerHTML = data.rates.IDR
    })

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