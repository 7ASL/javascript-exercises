const convertToCelsius = function(temperatureInFahrenheit) {
  const temperatureInCelsius = (temperatureInFahrenheit - 32) * (5/9);
  return temperatureInCelsius === 0 ? 0 : Number(temperatureInCelsius.toFixed(1));
};

const convertToFahrenheit = function(temperatureInCelsius) {
  const temperatureInFahrenheit = (temperatureInCelsius * (9/5)) + 32;
  return temperatureInFahrenheit === 0 ? 0 : Number(temperatureInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
