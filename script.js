// kelvin para celsius
var buttonKelvinCelsius = document.getElementById('k-c')

buttonKelvinCelsius.addEventListener('click', convKelvinCelsius)

function convKelvinCelsius() {
  let kelvinCelsius = parseFloat(document.getElementById('k-c-1').value)
  let resultado = kelvinCelsius - 273.15
  document.getElementById('k-c-2').value = resultado.toFixed(2)
}

// kelvin para fahrenheit
var buttonKelvinFahrenheit = document.getElementById('k-f')

buttonKelvinFahrenheit.addEventListener('click', convKelvinFahrenheit)

function convKelvinFahrenheit() {
  let kelvinFahrenheit = parseFloat(document.getElementById('k-f-1').value)
  let resultado = ((kelvinFahrenheit - 273.15) * 9) / 5 + 32
  document.getElementById('k-f-2').value = resultado.toFixed(2)
}

//celsius para kelvin
var buttonCelsiusKelvin = document.getElementById('c-k')

buttonCelsiusKelvin.addEventListener('click', convCelsiusKelvin)

function convCelsiusKelvin() {
  let celsiusKelvin = parseFloat(document.getElementById('c-k-1').value)
  let resultado = celsiusKelvin + 273.15
  document.getElementById('c-k-2').value = resultado.toFixed(2)
}

//celsius para fahrenheit
var buttonCelsiusFahrenheit = document.getElementById('c-f')

buttonCelsiusFahrenheit.addEventListener('click', convCelsiusFahrenheit)

function convCelsiusFahrenheit() {
  let celsiusFahrenheit = parseFloat(document.getElementById('c-f-1').value)
  let resultado = celsiusFahrenheit * (9 / 5) + 32
  document.getElementById('c-f-2').value = resultado.toFixed(2)
}

// fahrenheit para kelvin
var buttonFahrenheitKelvin = document.getElementById('f-k')

buttonFahrenheitKelvin.addEventListener('click', convFahrenheitKelvin)

function convFahrenheitKelvin() {
  let fahrenheitKelvin = parseFloat(document.getElementById('f-k-1').value)
  let resultado = (fahrenheitKelvin - 32) * (5 / 9) + 273.15
  document.getElementById('f-k-2').value = resultado.toFixed(2)
}

// fahrenheit para celsius
var buttonFahrenheitCelsius = document.getElementById('f-c')

buttonFahrenheitCelsius.addEventListener('click', convFahrenheitCelsius)

function convFahrenheitCelsius() {
  let fahrenheitCelsius = parseFloat(document.getElementById('f-c-1').value)
  let resultado = (fahrenheitCelsius - 32) * (5 / 9)
  document.getElementById('f-c-2').value = resultado.toFixed(2)
}
