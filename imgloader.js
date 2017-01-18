const loader = function(content) {
  return `module.exports = '${content.toString('base64')}'`;
}
loader.raw = true;

module.exports = loader;