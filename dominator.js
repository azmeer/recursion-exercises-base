const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const generateGetElementFunction = function(property) {
  return function (root, target) {
    return _.filter(flattenTreeToArray(root), node => {
      const regexp = `\\b${target}\\b`;
      return (node.nodeType === 1) && (node[property].match(regexp) !== null);
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
