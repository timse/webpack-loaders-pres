const loader = function(content) {
  return `module.exports = '<img src="data:image/png;base64,${content.toString('base64')}"/>'`;
}
loader.raw = true;

module.exports = loader;
