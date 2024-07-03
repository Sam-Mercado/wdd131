function roundToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}

function CalculateWindChillInCelcius(temperature, windSpeed){

    let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return roundToTwoDecimals(windChill) ; 

}

const temperature = document.querySelector(".temperature");
const conditions = document.querySelector(".conditions");
const wind = document.querySelector(".wind");
const windChill = document.querySelector(".windChill");

let tempC = 10;
let windKmh = 4.8;

temperature.innerHTML =  `${tempC} °C`;
conditions.innerHTML = `Sunny`;
wind.innerHTML = `${windKmh}Km/h`;
windChill.innerHTML =`${CalculateWindChillInCelcius(tempC, windKmh)}°C`;

