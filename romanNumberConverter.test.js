
const { romanNumerialToDecimal, decimalToRomanNumerial } = require('./romanNumberConverter');

describe("romanNumerialToDecimal invalid input tests", () => {
    test('romanNumerialToDecimal error input', () => {
        expect(() => romanNumerialToDecimal()).toThrow(Error);
        expect(() => romanNumerialToDecimal(null)).toThrow(Error);
        expect(romanNumerialToDecimal('')).toBe(0);
    });    

    test('romanNumerialToDecimal basic data tests', () => {
        expect(romanNumerialToDecimal('I')).toBe(1);
        expect(romanNumerialToDecimal('Ii')).toBe(2);
        expect(romanNumerialToDecimal('IV')).toBe(4);
        expect(romanNumerialToDecimal('v')).toBe(5);
        expect(romanNumerialToDecimal('VI')).toBe(6);
        expect(romanNumerialToDecimal('IX')).toBe(9);
        expect(romanNumerialToDecimal('X')).toBe(10);
    });
});

describe("decimalToRomanNumerial invalid input tests", () => {
    test('decimalToRomanNumerial error input', () => {
        expect(() => decimalToRomanNumerial()).toThrow(Error);
        expect(() => decimalToRomanNumerial(null)).toThrow(Error);
        expect(decimalToRomanNumerial('IV')).toBe('');
        expect(decimalToRomanNumerial(-1)).toBe('');
        expect(decimalToRomanNumerial(0)).toBe('');
    });

    test('decimalToRomanNumerial basic data tests', () => {          
        expect(decimalToRomanNumerial(1)).toBe('I');
        expect(decimalToRomanNumerial(2)).toBe('II');
        expect(decimalToRomanNumerial(4)).toBe('IV');
        expect(decimalToRomanNumerial(5)).toBe('V');
        expect(decimalToRomanNumerial(6)).toBe('VI');
        expect(decimalToRomanNumerial(9)).toBe('IX');
        expect(decimalToRomanNumerial(10)).toBe('X');
    });
});






