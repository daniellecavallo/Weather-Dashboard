var apiKey = "eed97305be64b7b9b5d3eb427b65c241"
var cityName = $("#cityname")
var cityDate = $("#citydate")
var cityTempature = $("#citytempature")
var cityHumidity = $("#humidity")
var cityWindspeed = $("#windspeed")
var cityinput = $("#cityinput")
var searchbutton = $("#searchbutton")
var searchcities = []
var getlocal = localStorage.getItem ("cities")
if (getlocal){
    searchcities = JSON.parse (getlocal)
}
function getweather (input){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${apiKey}`)
    .then( function(response) {
    return response.json()
    
    })
    .then( function(data) {
    console.log(data)
    var lat = data[0].lat
    var lon = data[0].lon
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`).then(function(response) {
    return response.json()
    }).then(function(data) {
    cityName.text(`CITY: ${data.name}`) 
    cityTempature.text(`TEMPATURE: ${data.main.temp}`) 
    cityHumidity.text(`HUMIDITY: ${data.main.humidity}`) 
    cityWindspeed.text(`WINDSPEED: ${data.wind.speed}`) 
    })
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`).then(function(response) {
        return response.json()
        }).then(function(data) {
        for (let i = 0; i < data.list.length; i += 8) {
            console.log(data.list[i])
        $(".date").eq(i).text(`DATE: ${data.list[i].dt_txt}`)
        $(".temp").eq(i).text(`TEMP: ${data.list[i].main.temp}`)
        $(".wind").eq(i).text(`WIND: ${data.list[i].wind.speed}`)
        $(".humid").eq(i).text(`HUMIDITY: ${data.list[i].main.humidity}`)
        }
    })
    })
}
$(function() {
    searchbutton.on("click", function(event) {
    searchcities.push(cityinput.val())
    localStorage.setItem("cities", JSON.stringify(searchcities))
        event.preventDefault()
        console.log("click")
    getweather (cityinput.val())    
})
})
