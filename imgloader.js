const loader = function(content) {
  const fileName = 'whale.png';
  this.emitFile(fileName, content);
  return `module.exports = '<img src="${fileName}"/>'`;
}
loader.raw = true;

module.exports = loader;
