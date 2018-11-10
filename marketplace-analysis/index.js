/**
 * https://developers.pricefy.io/#operation--analysis-marketplace--country---code--get
 */

const rp = require('request-promise')

const api_key = 'your-api-key'
const country_code = 'IT' // the country code you want to analyse
const marketplace_code = 'amazon' // the marketplace code you want to analyze

rp({
    uri: 'https://api.pricefy.io/v1/analysis/marketplace/'+country_code+'/'+marketplace_code,
    headers: {
        'Authorization': 'Bearer '+api_key
    }
})
.then(function(d){
    console.log(d)
})
          