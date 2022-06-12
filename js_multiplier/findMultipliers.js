'use strict';

// Create a function that takes an array of numbers as a parameter and returns the number of
// values that are a multiplier of either 4 or 6 (or, of course, both).

let arr = [];

function findMultipliers (arr) {
    let numberOfValues = 0;

    for (let i of arr) {
        if (typeof i === 'number') {
           
          if (i % 4 === 0) {
            numberOfValues ++;
            } else if (i % 6 === 0) {
            numberOfValues ++;
          }
        }
    }

    return numberOfValues;
};

module.exports = findMultipliers;
