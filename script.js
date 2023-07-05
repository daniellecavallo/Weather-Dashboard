var apiKey = "eed97305be64b7b9b5d3eb427b65c241"
var cityName = $("#cityname")
var cityDate = $("#citydate")
var cityTempature = $("#citytempature")
var cityHumidity = $("#humidity")
var cityWindspeed = $("#citywindspeed")
var cityinput = $("#cityinput")
var searchbutton = $("#searchbutton")
$(function() {

})
searchbutton.on("click", function() {
    console.log("click")
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityinput.val()}&limit=1&appid=${apiKey}`)
.then( function(response) {
return response.json()

})
.then( function(data) {
console.log(data)
})
})
