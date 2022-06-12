'use strict';

// Write a function that tests if a string is a palindrome.

 function detectPalindrome (string) {
    const lowerString = string.toLowerCase();
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    let directString = '';
    let reverseString = '';
    let message = '';

    for (let i of lowerString) {
        if (abc.includes(i)) {
        directString += i;
        reverseString = i + reverseString;
        }
    };

    if (directString === reverseString) {
        message = 'Palindrome is caught';
    } else {
        message = 'It is not a palindrome';
    };

    return message;
 };

 module.exports = detectPalindrome;
