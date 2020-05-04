// alert('Hello, Welcome. This web is on development.')
covidCase()
rollQuote()

function ajax(url, after) {
    var request = new XMLHttpRequest()
    
    request.open('GET', url, true)
    request.onload = function() {
        after(this.response)
    }
    
    request.send()
}


// Random Quote
function rollQuote() {
    document.getElementById('quote').innerHTML = 'Loading...'
    document.getElementById('author').innerHTML = 'Please wait'

    var url = 'https://api.quotable.io/random'
    ajax(url, function(data) {
        data = JSON.parse(data)
        document.getElementById('quote').innerHTML = '"'+data.content+'"'
        document.getElementById('author').innerHTML = '- '+data.author
    })
}

// COVID-19 Case
function covidCase() {
    var url = 'https://www.trackcorona.live/api/countries/id'
    ajax(url, function(data) {
        result = JSON.parse(data),
        updated = new Date(Date.parse(result.data[0].updated))
        
        document.getElementById('covid19_case_updated').innerHTML = updated
        document.querySelector('.case.confirmed').innerHTML = result.data[0].confirmed
        document.querySelector('.case.recovered').innerHTML = result.data[0].recovered
        document.querySelector('.case.deaths').innerHTML = result.data[0].dead
    })
}