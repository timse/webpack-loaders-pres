const path = require('path');

const loader = function(content) {
  return content;
}
loader.raw = true;

loader.pitch = function(remainingRequest) {
  const resource = this.resourcePath;
  const placeholderPath = path.join(__dirname, 'placeholder.js');
  return `
    var placeholder = require('!!${placeholderPath}!${resource}');
    var path = require('!${remainingRequest}');
    module.exports = '<img src="' + placeholder.url + '" id="image" /><script>var i = new Image();i.src="' + path + '";i.onload=function(){var oi =document.querySelector("#image"); oi.parentElement.replaceChild(i,oi);}</script>'
  `;
}

module.exports = loader;
