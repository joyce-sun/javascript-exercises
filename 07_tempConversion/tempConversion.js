const convertToCelsius = function(fahrenheit) {
  let celsius = 0;
  celsius = (fahrenheit - 32) * (5/9);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = 0;
  fahrenheit = celsius * (9/5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

