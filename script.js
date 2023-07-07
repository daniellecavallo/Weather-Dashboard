var apiKey = "eed97305be64b7b9b5d3eb427b65c241"
var cityName = $("#cityname")
var cityDate = $("#citydate")
var cityTempature = $("#citytempature")
var cityHumidity = $("#humidity")
var cityWindspeed = $("#windspeed")
var cityinput = $("#cityinput")
var searchbutton = $("#searchbutton")
$(function() {
    searchbutton.on("click", function(event) {
        event.preventDefault()
        console.log("click")
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityinput.val()}&limit=1&appid=${apiKey}`)
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
    cityName.text(data.name) 
    cityTempature.text(data.main.temp) 
    cityHumidity.text(data.main.humidity) 
    cityWindspeed.text(data.wind.speed) 
    })
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`).then(function(response) {
        return response.json()
        }).then(function(data) {
        console.log(data)
        for (let i = 0; i < data.list.length; i += 8) {
        $(".forecast").each(function() {
        
        })
        }
        })
    })
    })
    
})

