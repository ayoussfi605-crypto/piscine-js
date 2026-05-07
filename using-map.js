const citiesOnly = (arr) => arr.map((obj) => obj.city)

const upperCasingStates = (arr) => arr.map((elm) => elm.replace(/\b\w/g, c => c.toUpperCase()))

let c;
const fahrenheitToCelsius = (arr) => arr.map(f => c = Math.floor((parseInt(f) - 32) * 5/9 )+'°C')

const trimTemp = (arrobj) => arrobj.map((s) =>( {...s, temperature: s.temperature.replaceAll(' ', '')}))

let x;

const tempForecasts = (arrobj) => arrobj.map((w) => x = Math.floor((parseInt(w.temperature)-32)*5/9) +'°Celsius in '+ w.city.replace(/\b\w/g, c => c.toUpperCase())+', '+ w.state.replace(/\b\w/g, c => c.toUpperCase()))
