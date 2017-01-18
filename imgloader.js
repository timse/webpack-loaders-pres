const loader = function(content) {
  return `module.exports = ${JSON.stringify(content)}`;
}

module.exports = loader;