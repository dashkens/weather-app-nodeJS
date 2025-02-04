const request = require('request');

const forecast = (latitude, longitude, callback) => {
    
    const url = `http://api.weatherstack.com/current?access_key=c14cd4b767ee34877ce531f98bbe2a3b&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body } ) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degrees out'
            )
        }
    })

// request({ url: url, json: true }, (err, res) => {
//   console.log(res.body.current.weather_descriptions[0] + '. It is currently ' + res.body.current.temperature + ' degress out. It feels like ' + res.body.current.feelslike + ' degrees out');
// })

}
  

module.exports = forecast