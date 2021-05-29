import './sort'
import './math'
import './statistics'
import './format'
import './comparison'

import { ProtoJsError, ProtoJsTypeError, ProtoJsSignError, ProtoJsDecimalError, ProtoJsRequiredArgumentError } from '../../error/index'

// Pops the specified number of elements from the end of the array, returns an array of popped elements
Array.prototype.popN = function (n = 1) {
  if (typeof n != 'number') throw new ProtoJsTypeError('popN', 0, 'number', typeof n);
  if (this.length < n) throw new ProtoJsError('popN', `Cannot pop ${n} items from array with length of ${this.length}`);
  if (n <= 0) throw new ProtoJsSignError('popN', 0, n);
  if (n % 1 != 0) throw new ProtoJsDecimalError('popN', 0, n);

  const popped = [];
  for (let i = 0; i < n; i++) {
    popped.unshift(this[this.length - 1]);
    this.length--;
  }
  return popped;
}

// Shifts the specified number of elements from the end of the array, returns an array of popped elements
Array.prototype.shiftN = function (n = 1) {
  if (typeof n != 'number') throw new ProtoJsTypeError('shiftN', 0, 'number', typeof n);
  if (this.length < n) throw new ProtoJsError('shiftN', `Cannot shift ${n} items from array with length of ${this.length}`);
  if (n <= 0) throw new ProtoJsSignError('shiftN', 0, n);
  if (n % 1 != 0) throw new ProtoJsDecimalError('shiftN', 0, n);

  this.reverse();

  const shifted = [];
  for (let i = 0; i < n; i++) {
    shifted.push(this[this.length - 1]);
    this.length--;
  }
  this.reverse();
  return shifted;
}

// Returns a new array with the provided values inserted into the array at the provided index
Array.prototype.insert = function (index, ...values) {
  if (typeof index !== 'number' && typeof index !== 'string') throw new ProtoJsTypeError('insert', 0, 'number" or "string', typeof index);
  if (index < 0) throw new ProtoJsSignError('insert', 0, index);

  if (index === 0 || index === 'start') {
    return values.concat(this);
  } else if (index > this.length - 1 || index === 'end') {
    return this.concat(values);
  } else {
    let start = this.slice(0, index);
    let end = this.slice(index - 1);
    return start.concat(values).concat(end);
  }
}

// Returns a new array with the number of values removed from the array, starting at the provided index
Array.prototype.remove = function (index, length = 1) {
  if (typeof index != 'number') throw new ProtoJsTypeError('remove', 0, 'number', typeof index);
  if (typeof length != 'number') throw new ProtoJsTypeError('remove', 1, 'number', typeof length);
  if (index < 0) throw new ProtoJsSignError('remove', 0, index);
  if (length < 0) throw new ProtoJsSignError('remove', 1, length);

  let start = this.slice(0, index);
  let end = this.slice(index + length);
  return start.concat(end);
}

// Gets the element of an aray at a certain index, with negative values allowed
Array.prototype.at = function (n) {
  if (typeof n != 'number') throw new ProtoJsTypeError('at', 0, 'number', typeof n);
  if (n < 0 - this.length || n > this.length - 1) throw new ProtoJsError('at', `Cannot get element at index "${n}" from an array with length of ${this.length}`);

  if (n < 0) {
    n = this.length + n;
  }
  return this[n];
}


// Gets first element of an array
Array.prototype.first = function () {
  return this[0];
}

// Gets last element of an array
Array.prototype.last = function () {
  return this[this.length - 1];
}

// Removes a value if it is present in an array, and adds it if it's not
Array.prototype.toggle = function (value) {
  if (!arguments[0]) throw new ProtoJsRequiredArgumentError('toggle', 0);

  if (value.within(this)) {
    this.splice(this.indexOf(value), 1);
  } else {
    this.push(value);
  }
  return this;
}

// Returns the amount of times a provided value appears in an array
Array.prototype.count = function (value) {
  if (!arguments[0]) throw new ProtoJsRequiredArgumentError('count', 0);

  return this.reduce((acc, cur) => {
    if (value.equals(cur)) {
      acc++;
    }
    return acc;
  }, 0);
}

// Returns an object with keys representing a value from the original array, and values representing the number of times the value was found
Array.prototype.group = function () {
  return this.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
}

Array.prototype.pushUniq = function(value) {
  if (!arguments[0]) throw new ProtoJsRequiredArgumentError('pushUniq', 0);

  if (!value.within(this)) {
    this.push(value);
  }
  return this.length;
}

// TODO: Implement
Array.prototype.pull = function (...values) {

}

// Aliases
Array.prototype.start = Array.prototype.first;
Array.prototype.end = Array.prototype.last;
Array.prototype.get = Array.prototype.at;