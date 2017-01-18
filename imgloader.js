const loader = function(content) {
  return `module.exports = '<img src="${content}"/>'`;
}
loader.raw = true;

module.exports = loader;
