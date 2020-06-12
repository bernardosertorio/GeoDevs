module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.solit(',').map(tech => tech.trim());
}