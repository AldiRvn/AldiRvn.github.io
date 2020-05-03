alert('Hello, Welcome. This Only Mock Up.')

// Random Quote
var request = new XMLHttpRequest(),
    url = 'https://api.quotable.io/random'

request.open('GET', url, true)
request.onload = function() {
    var data = JSON.parse(this.response)
    document.getElementById('quote').innerHTML = '"'+data.content+'"'
    document.getElementById('author').innerHTML = '- '+data.author
}

request.send()