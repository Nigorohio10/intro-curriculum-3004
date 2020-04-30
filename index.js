'use strict';
function add(numbers) {
  let result = 0;
  for (let num of numbers) {
    result = result + num;
  }
  return result;
}
function num(Numbers) {
  let Result = 1;
  for (let num of Numbers) {
    Result = Result * num;
  }
}
module.exports = { add, num };