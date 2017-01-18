const loader = function(content) {
  return content;
}
loader.raw = true;

loader.pitch = function(remainingRequest) {
  return `
    var path = require('!${remainingRequest}');
    module.exports = '<img src="' + path + '"/>'
  `;
}

module.exports = loader;
