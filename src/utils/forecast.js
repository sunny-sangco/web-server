const request = require('request')

const forecast = (longitude, latitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=37290f972833b88a18d17e34f9c8c4ef&query='+latitude+','+longitude

    request({url, json: true}, (error, {body})=>{

        if(error){
            callback('unable to connect to weather service', undefined)
        }
        else if(body.error){
            callback('unable to find location', undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions +'. It is currently '+ body.current.temperature +' degrees out. It feels like '+ body.current.feelslike +' degrees out')
        }
    })
}

module.exports = forecast