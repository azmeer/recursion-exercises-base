
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  node.childNodes.forEach( childNode => visitAllNodes(childNode, callback) );
  callback(node);
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  const nodes = [];
  visitAllNodes(node, childNode => nodes.push(childNode));
  return nodes;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};
