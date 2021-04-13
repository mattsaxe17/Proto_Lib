import './sort'
import './math'
import './statistics'
import './format'

// Pops the specified number of elements from the end of the array, returns an array of popped elements
Array.prototype.popN = function (n = 1) {
  if (typeof n != 'number') throw new Error('PROTOLIB ERR: (Function "popN") Can only take parameter of type "number", was given a "' + typeof n + '"');
  if (this.length < n) throw new Error('PROTOLIB ERR: (Function "popN") Cannot pop ' + n + ' items from array with length of ' + this.length);
  if (n < 0) throw new Error('PROTOLIB ERR: (Function "popN") Cannot take negative number as parameter, was given ' + n);

  const popped = [];
  for (let i = 0; i < n; i++) {
    popped.unshift(this[this.length - 1]);
    this.length--;
  }
  return popped;
}

// Shifts the specified number of elements from the end of the array, returns an array of popped elements
Array.prototype.shiftN = function (n = 1) {
  if (typeof n != 'number') throw new Error('PROTOLIB ERR: (Function "shiftN") Can only take parameter of type Number, was given "' + n + '"');
  if (this.length < n) throw new Error('PROTOLIB ERR: (Function "shiftN") Cannot shift ' + n + ' items from array with length of ' + this.length);
  if (n < 0) throw new Error('PROTOLIB ERR: (Function "shiftN") Cannot take negative number as parameter, was given ' + n);

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
  if (typeof index != 'number') throw new Error('PROTOLIB ERR: (Function "insert") Argument "index" must be of type "number", but was passed in as type ' + typeof index);
  if (typeof length != 'number') throw new Error('PROTOLIB ERR: (Function "remove") Argument "length" must be of type "number", but was passed in as type ' + typeof length)
  if (index < 0) throw new Error('PROTOLIB ERR: (Function "insert") Cannot take negative number as index, was given ' + index);

  if (index == 0) {
    return values.concat(this);
  } else if (index > this.length - 1) {
    return this.concat(values);
  } else {
    let start = this.slice(0, index);
    let end = this.slice(index - 1);
    return start.concat(values).concat(end);
  }
}

// Returns a new array with the number of values removed from the array, starting at the provided index
Array.prototype.remove = function (index, length = 1) {
  if (typeof index != 'number') throw new Error('PROTOLIB ERR: (Function "remove") Argument "index" must be of type "number", but was passed in as type ' + typeof index);
  if (typeof length != 'number') throw new Error('PROTOLIB ERR: (Function "remove") Argument "length" must be of type "number", but was passed in as type ' + typeof length);
  if (index < 0) throw new Error('PROTOLIB ERR: (Function "remove") Cannot take negative number as index, was given ' + index);
  if (length < 0) throw new Error('PROTOLIB ERR: (Function "remove") Cannot take negative number as length, was given ' + length);

  let start = this.slice(0, index);
  let end = this.slice(index + length);
  return start.concat(end);
}

// Gets the element of an aray at a certain index, with negative values allowed
Array.prototype.at = function (n) {
  if (typeof n != 'number') throw new Error('PROTOLIB ERR: (Function "at") Argument "n" must be of type "number", but was passed in as type ' + typeof n);
  if (n < 0 - this.length || n > this.length - 1) throw new Error('PROTOLIB ERR: (Function "at") Tried to get an element that was out of range. Tried to get element at ' + n + ', but possible indexes range from ' + (0 - this.length) + ' to ' + (this.length -1));

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
  if (this.includes(value)) {
    this.splice(this.indexOf(value), 1);
  } else {
    this.push(value);
  }

  return this;
}

// Aliases
Array.prototype.start = Array.prototype.first;
Array.prototype.end = Array.prototype.last;
Array.prototype.get = Array.prototype.at;