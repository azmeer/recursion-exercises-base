const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const stringify = function(obj) {
  if (typeof(obj) === 'string') return '\"'+obj+'\"';
  else if (typeof(obj) === 'number') return obj.toString();
  else if (typeof(obj) === 'boolean') return obj ? 'true' : 'false';
  else if (obj === null) return 'null';
  else if (_.isArray(obj)) return stringifyArray(obj);
  else return stringifyObject(obj);
};

const stringifyArray = function(obj) {
  return '[' +  _.map(obj, (element => stringify(element))).join(',') + ']';
};

const stringifyObject = function(obj) {
  return '{' +
    _.map(_.keys(obj), key => stringify(key) + ':' + stringify(obj[key])).join(',')
    + '}';
};

module.exports = {
  stringify: stringify
};
