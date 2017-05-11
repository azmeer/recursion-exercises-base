const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...

const stringify = function(obj) {
  /*
    We test the object, and based on its type do the following:
       a string - return the string enclosed in quotes
       a boolean - return a string of 'true' or 'false'
       a number - return a string of the number
       null - return a string of 'null'
       an object - recursively call stringify on keys and values of the object
       an array - recursively call stringify on the elements of the array
  */
  if (typeof(obj) === 'string') return '\"'+obj+'\"';
  else if (typeof(obj) === 'number') return obj.toString();
  else if (typeof(obj) === 'boolean') return obj ? 'true' : 'false';
  else if (obj === null) return 'null';
  else if (_.isArray(obj)) return stringifyArray(obj);
  else if (_.isObject(obj)) return stringifyObject(obj);
  else {
    // error
    return '';
  }
};

const stringifyArray = function(obj) {
  return '[' +  _.map(obj, (element, index) => stringify(element)).join(',') + ']';
}

const stringifyObject = function(obj) {
  return '{' +
    _.map(_.keys(obj), key => stringify(key) + ':' + stringify(obj[key])).join(',')
    + '}';
}

module.exports = {
  stringify: stringify
};
