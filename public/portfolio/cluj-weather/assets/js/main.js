//*** Temperature unit selector to local storage ***/

const unitSelector = document.querySelector('[name="units"]');

const submitBtn = document.querySelector('[type="submit"]');
submitBtn.addEventListener('click', () => localStorage.setItem('unit', `${unitSelector.value}`));

//*** Store temperature unit in cookies ***/
submitBtn.addEventListener('click', () => document.cookie = `unit = ${unitSelector.value}`);

//*** Fetch data from database ***/
const root = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '133fb352cfad5a6fc628be8fb421e015';
const clujId = 681290;

fetch(root + `weather?id=${clujId}&appid=${apiKey}`, {
  method: 'GET'
})
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResp) {
    console.log(jsonResp);
    let temperature = jsonResp.main;

    return temperature;
  })
  .then(function (temperature) {

    if (window.localStorage.getItem("unit") === "farenheit" || document.cookie === "unit=farenheit") {
      renderToFarenheit(temperature);
    }

    if (window.localStorage.getItem("unit") === "celsius" || document.cookie === "unit=celsius") {
      renderToCelsius(temperature);
    }

  })

//*** Selectors ***//
const tempSel = document.querySelector('.temperature p span');
const feelSel = document.querySelector('.feels-like p span');
const tempMinSel = document.querySelector('.temp-min p span');
const tempMaxSel = document.querySelector('.temp-max p span');
const humSel = document.querySelector('.humidity p span');
const presSel = document.querySelector('.pressure p span');

//*** Render and conversion ***/
function renderToFarenheit(temperature) {
  tempSel.innerText = convertToFarenheit(temperature.temp);
  feelSel.innerText = convertToFarenheit(temperature.feels_like);
  tempMinSel.innerText = convertToFarenheit(temperature.temp_min);
  tempMaxSel.innerText = convertToFarenheit(temperature.temp_max);
  humSel.innerText = temperature.humidity;
  presSel.innerText = temperature.pressure;
};

function renderToCelsius(temperature) {
  tempSel.innerText = convertToCelsius(temperature.temp);
  feelSel.innerText = convertToCelsius(temperature.feels_like);
  tempMinSel.innerText = convertToCelsius(temperature.temp_min);
  tempMaxSel.innerText = convertToCelsius(temperature.temp_max);
  humSel.innerText = temperature.humidity;
  presSel.innerText = temperature.pressure;
};

const convertToCelsius = (degrees) => (degrees - 273.15).toFixed(1);
const convertToFarenheit = (degrees) => ((degrees - 273.15) * 9 / 5 + 32).toFixed(1);


