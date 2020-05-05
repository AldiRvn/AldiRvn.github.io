// # List :
// COVID-19 Updated Case in Indonesia
// Exchange Rate USD to Indonesia

var html_covid19_case = '\
    <header>\
        <h2>COVID-19 Updated Case in Indonesia</h2>\
        <p>\
            source: <a href="#listSource">below</a><br>\
            <mark>updated : <span id="covid19_case_updated">Loading</span></mark>\
        </p>\
    </header>\
    <aside class="hidden">\
        <figure>\
            <img src="./assets/undraw_medical_care_movn.svg" alt="">\
            <figcaption>\
                Illustration by <a href="https://undraw.co/illustrations">undraw.co</a>\
            </figcaption>\
        </figure>\
        <h3>Confirmed</h3>\
        <p class="tLarge confirmed" >Loading</p>\
        <!-- <p><small>*with small content</small></p> -->\           </aside>\           <aside class="hidden">\
        <figure>\
            <img src="./assets/undraw_celebration_0jvk.svg" alt="">\
            <figcaption>\
                Illustration by <a href="https://undraw.co/illustrations">undraw.co</a>\
            </figcaption>\
        </figure>\
        <h3>Recovered</h3>\
        <!-- <p>999999<sup>WoW</sup></p> -->\
        <p class="tLarge recovered" >Loading<sup>...</sup></p>\           </aside>\           <aside class="hidden">\
        <figure>\
            <img src="./assets/undraw_feeling_blue_4b7q.svg" alt="">\
            <figcaption>\
                Illustration by <a href="https://undraw.co/illustrations">undraw.co</a>\
            </figcaption>\
        </figure>\
        <h3>Deaths</h3>\
        <p class="tLarge deaths" >Loading</p>\
    </aside>',

    html_exchangeRate = '\
    <header>\
        <h2>Exchange Rate USD to IDR</h2>\
        <p>\
            source: <a href="#listSource">below</a><br>\
            <mark>updated : <span id="exchange_rate_updated">Loading</span></mark>\
            \
        </p>\
    </header>\
    <aside>\
        <figure>\
            <img src="./assets/undraw_vault_9cmw.svg" alt="">\
            <figcaption>\
                Illustration by <a href="https://undraw.co/illustrations">undraw.co</a>\
            </figcaption>\
        </figure>\
            <h3>1 USD = IDR :</h3>\
            <p class="tLarge exchangeRate" >Loading</p>\
            <!-- <p><small>*with small content</small></p> -->\
    </aside>',
    
    html_salahTimes = `
    <table>
        <thead>
            <tr>
                <th>Salah Name</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Fajr</td>
                <td>${times.Fajr}</td>
            </tr>
            <tr>
                <td>Dhuhr</td>
                <td>${times.Dhuhr}</td>
            </tr>
            <tr>
                <td>Asr</td>
                <td>${times.Asr}</td>
            </tr>
            <tr>
                <td>Maghrib</td>
                <td>${times.Maghrib}</td>
            </tr>
            <tr>
                <td>Isha</td>
                <td>${times.Isha}</td>
            </tr>
        </tbody>
    </table>`