'use strict';

describe(`Function 'detectPalindrome'`, () => {
  
    const detectPalindrome = require('../detectPalindrome');

    it(`should be declared`, () => {
        expect(detectPalindrome)
         .toBeInstanceOf(Function);
    });

    it(`should return a string`, () => {
        expect(detectPalindrome())
         .toBe('string');
    });

    it(`should return 'Palindrome is caught' for 'noon'`, () => {
        expect(detectPalindrome('noon'))
        .toBe('Palindrome is caught');
    });

    it(`should return 'Palindrome is caught' for 'repaper'`, () => {
        expect(detectPalindrome('repaper'))
        .toBe('Palindrome is caught');
    });

    it(`should return 'Palindrome is caught' for 'don't nod'`, () => {
        expect(detectPalindrome('don\'t nod'))
        .toBe('Palindrome is caught');
    });

    it(`should return 'Palindrome is caught' for 'was it a cat I saw?'`, () => {
        expect(detectPalindrome('was it a cat I saw?'))
        .toBe('Palindrome is caught');
    });

    it(`should return 'It is not a palindrome' for 'moon'`, () => {
        expect(detectPalindrome('moon'))
        .toBe('It is not a palindrome');
    });

    it(`should return 'It is not a palindrome' for 'Geeks for Geeks'`, () => {
        expect(detectPalindrome('Geeks for Geeks'))
        .toBe('It is not a palindrome');
    });

    it(`should return 'It is not a palindrome' for 'was it a dog I saw?'`, () => {
        expect(detectPalindrome('was it a cat I saw?'))
        .toBe('It is not a palindrome');
    });

});
