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
    var url = 'https://api.kawalcorona.com/indonesia/'
    ajax(url, function(data) {
        data = JSON.parse(data)
        document.querySelector('.case.confirmed').innerHTML = data[0].positif
        document.querySelector('.case.recovered').innerHTML = data[0].sembuh
        document.querySelector('.case.deaths').innerHTML = data[0].meninggal
    })
}