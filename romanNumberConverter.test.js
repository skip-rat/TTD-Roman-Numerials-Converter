
const { romanNumerialToDecimal, decimalToRomanNumerial } = require('./romanNumberConverter');

const fs = require('fs/promises');
const testDataFilepath = 'RomanNumerals.txt';
const testNumbers = new Array();

//  load test data from a file,
//  this contains a column of decimal numbers and a corresponding column of roman numeral numbers,
//  any addition columns are ignored

async function loadTestData() {
    try {
        const data = await fs.readFile(testDataFilepath, { encoding: 'utf8' });
        parseTestData(data);
    } catch (err) {
        console.error('Error loading test data file: ' + err);
    }
}


function parseTestData(data) {
    // split the data file into lines
    // split each line into fields and take the first 2 fields
    data.split('\n').map(line => {
        line.split(' ').slice(0, 2).reduce((acc, current) => {
            if (acc === null) {
                return current;
            } else {
                let arr = Array.of(Number.parseInt(acc.trim()), current.trim());
                testNumbers.push(arr);
                return current;
            }
        }, null);
    });
}

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

describe("romanNumerialToDecimal data file test (1..100 then every 100 to 1000)", () => {
    test('romanNumerialToDecimal', () => {
        return loadTestData().then(() => { 
            for (const num of testNumbers) {
                expect(romanNumerialToDecimal(num[1])).toBe(num[0])
            }
        });
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

describe("decimalToRomanNumerial data file test (1..100 then every 100 to 1000)", () => {
    test('decimalToRomanNumerial', () => {
        return loadTestData().then(() => { 
            for (const num of testNumbers) {
                expect(decimalToRomanNumerial(num[0])).toBe(num[1])
            }
        });
    });
});






