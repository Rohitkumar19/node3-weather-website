const request = require('request')
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1';
    console.log('url', url)
    request({
        url
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body) {
            callback('Unable to find location. Please try again later', undefined)
        } else {
            callback(undefined, {
                location: '124',
                logitude: '125',
                loaction: 'United States'
            })
        }
    })
}

module.exports = geoCode