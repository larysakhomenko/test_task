'use strict';

describe(`Function 'findMultipliers'`, () => {
    const findMultipliers = require('./findMultipliers');

    it(`should be declared`, () => {
        expect(findMultipliers)
         .toBeInstanceOf(Function);
    });

    it(`should return a number`, () => {
        expect(findMultipliers())
         .toBe('number');
    });

    it(`should return 0 if array is empty`, () => {
        expect(findMultipliers([]))
        .toBe(0);
    });

    it(`should return 0 if parameters are string`, () => {
        expect(findMultipliers(['4', '6']))
        .toBe(0);
    });

    it(`should return 0 if parameters are boolean`, () => {
        expect(findMultipliers(['true', 'false']))
        .toBe(0);
    });

    it(`should return 1 if array is [4, 5] `, () => {
        expect(findMultipliers([4, 5]))
        .toBe(1);
    });

    it(`should return 1 if array is [3, 6, 7] `, () => {
        expect(findMultipliers([3, 6, 7]))
        .toBe(1);
    });

    it(`should return 2 if array is [0, 12, 13, 14] `, () => {
        expect(findMultipliers([0, 12, 13, 14]))
        .toBe(2);
    });

    it(`should return 2 if array is [-16, -18] `, () => {
        expect(findMultipliers([-16, -18]))
        .toBe(2);
    });

    it(`should return 3 if array is [12348, 106146, 1894296, 23896546, 597862438] `, () => {
        expect(findMultipliers([12348, 106146, 1894296, 23896546, 597862438]))
        .toBe(3);
    });
});

