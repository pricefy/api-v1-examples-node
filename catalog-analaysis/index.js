/**
 * https://developers.pricefy.io/#operation--analysis-catalog--country---id--get
 */

const rp = require('request-promise')

const api_key = 'your-api-key'
const country_code = 'IT' // the country code you want to analyse
const product_ean = '3175681126213'

rp({
    uri: 'https://api.pricefy.io/v1/analysis/catalog/'+country_code+'/EAN:'+product_ean,
    headers: {
        'Authorization': 'Bearer '+api_key
    }
})
.then(function(d){
    console.log(d)
})
          