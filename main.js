
window.addEventListener("load", setup);
var APIKey = "5085017d3392121c188bb3fe674e1362";
const queryURL = (city) => 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={APIkey}';

function setup(){
    addListeners();
}

function addListeners(){
    document.getElementById("submit").addEventListener("click", retrieveInput)
}

function retrieveInput(){
    var city = document.getElementById("cityInput").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey)
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => displayInfo(data))
}

function displayInfo(data){
    console.log(data);
    let tempK = data['main']['temp'];
    let tempC = tempK - 273;
    let addTempC = document.getElementById("tempC");
    addTempC.innerHTML = "Temp (C): " + tempC;
    let tempF = CelsiusToF(tempC);
    let addTempF = document.getElementById("tempF");
    addTempF.innerHTML = "Temp (F): " + tempF;
    let weather = data['weather']['description'];
    let weatherAdd = document.getElementById("weatherType");
    weatherAdd.innerHTML = "Weather: " + weatherAdd;

}

function CelsiusToF(tempC){
    return tempC * (5/9) + 32;
}




