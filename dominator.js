const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const generateGetElementFunction = function(property) {
  return function (root, target) {
    return _.filter(flattenTreeToArray(root), node => {
      const regexp = `(\w+\s+)?${target}(\s+\w)?`;
      return (node.nodeType === 1) && (node[property].match(regexp));
    });
  };
};


const getElementById = function (root, id) {
  return _.find(flattenTreeToArray(root), node => {
    return (node.nodeType === 1) && (node.id === id);
  });
};

const getElementsByClassName = generateGetElementFunction('className');

const getElementsByTagName = generateGetElementFunction('tagName');

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
