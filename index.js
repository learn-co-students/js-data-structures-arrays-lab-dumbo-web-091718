// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name)

}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name)
}

function appendDriver(name) {

  let allDrivers = [];
  allDrivers = drivers.slice();
  allDrivers.push(name);

  return allDrivers;
}

function prependDriver(name){
  let allDrivers = [];
  allDrivers = drivers.slice();
  allDrivers.unshift(name);

  return allDrivers;
}

function removeLastDriver(name){
  let allDrivers = [];
  allDrivers = drivers.slice();
  allDrivers.pop(name);

  return allDrivers;
}

function removeFirstDriver(name){
  let allDrivers = [];
  allDrivers = drivers.slice();
  allDrivers.shift(name);

  return allDrivers;
}
