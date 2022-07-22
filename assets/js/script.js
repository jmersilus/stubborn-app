
    var latChicago  = "41.8781";
    var logChicago  = "87.6298";
    var latAustin = "30.2672";
    var logAustin = "97.7431";
    var latNewYork = "40.7128";
    var logNewYork = "74.0060";
    var latOrlando = "81.3789";
    var logOrlando = "28.5384";
    var latSanFransico = "122.4194";
    var logSanFransico ="37.7749";
    var latSeattle = "122.3321";
    var logSeattle = "47.6062";
    var latDenver = "39.7392";
    var logDenver = "104.9903";
    var latAtlanta = "33.7490";
    var logAtlanta = "84.3880";



    
    var getLocale = function (location) {
        // format the github api
        var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + log + "&exclude={part}&appid=eceee4a0024957a411954f261a712b6f";
        //make request
        fetch(apiUrl).then(function(response) {
            response.json().then(function(data) {
                console.log(data);
            });
        });
    };

    var userFormEl = document.querySelector("#user-form");
    var nameInputEl = document.querySelector("#lat"); 
    var nameInputE2 = document.querySelector("#log");  

    var formSubmitHandler = function(event) {
        event.preventDefault();
        // get value from input element
    var lat = nameInputEl.value.trim();
    var log = nameInputE2.value.trim();

    if (lat) {
    getLocale(lat);
    nameInputEl.value = "";
    } else {
    alert("choose valid lat");
    }

    if (log) {
        getLocale(log);
        nameInputE2.value = "";
        } else {
        alert("choose valid log");
        }


        console.log(event);
      };

    userFormEl.addEventListener("submit", formSubmitHandler);