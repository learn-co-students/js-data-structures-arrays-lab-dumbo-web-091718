// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
 return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(name) {
  return drivers.pop()
}
function destructivelyRemoveFirstDriver(name) {
  return drivers.shift()
}

function appendDriver(name) {
  return  [...drivers, name]
}

function prependDriver(name) {
  return [name, ...drivers]
}

function removeLastDriver(name) {
 return drivers.slice(0,2)
}

function removeFirstDriver(name){
  return drivers.slice(-2) //slice & return the 2 last
}
