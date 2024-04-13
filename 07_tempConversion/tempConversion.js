const convertToCelsius = function(temp=-100) {
  temp=(temp-32)*5/9;
  temp=parseFloat(temp.toFixed(1));
  return temp;
};

const convertToFahrenheit = function(temp=73.2) {
  temp=(temp*1.8)+32;
  temp=parseFloat(temp.toFixed(1));
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
