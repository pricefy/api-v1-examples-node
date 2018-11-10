/**
 * https://developers.pricefy.io/#operation--analysis-price--country--get
 */

const rp = require('request-promise')

const api_key = 'your-api-key'
const country_code = 'IT' // the country code you want to analyse

rp({
    uri: 'https://api.pricefy.io/v1/analysis/price/'+country_code,
    headers: {
        'Authorization': 'Bearer '+api_key
    }
})
.then(function(d){
    console.log(d)
})
          