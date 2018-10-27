// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendDriver(name) {
  return drivers.push(name);
}


function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  return drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  return drivers.shift(name);
}

function appendDriver(name) {
  const new_arr = drivers.concat(name);
  return new_arr;
}

function prependDriver(name) {
  const new_arr1 = [name, ...drivers];
  return new_arr1;
}

function removeLastDriver(name) {
  const new_arr2 = drivers.slice(0, -1);
  return new_arr2;
}

function removeFirstDriver(name) {
  const new_arr3 = drivers.slice(1);
  return new_arr3;
}
