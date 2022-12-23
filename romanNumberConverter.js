// map a roman digit to a decimal digit
const romanNumerialMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C' : 100,
  'D' : 500,
  'M' : 1000
}

// map a decimal digit to one or more roman digits
// taking into account subtractive pairs of digits like 'IV'
const decimalNumberMap = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}


// Convert each roman numeral to a decimal integer and add them together,
// unless a lower digit preceeds a higher one, in which case subtract the
// lower digit from the running total. 
function romanNumerialToDecimal(numerals)
{
  if (numerals === undefined || numerals === null) 
      throw new Error("a roman numeral is required");
  if (typeof numerals !== 'string') return 0;

  let maxValue = 0;

  return numerals
        .toUpperCase()
        .split('')
        .reduceRight((runningTotal, numerial) => {
          const currValue = romanNumerialMap[numerial];
          maxValue = Math.max(maxValue, currValue);
          
          return (currValue >= maxValue ? 
                  runningTotal + currValue : 
                  runningTotal - currValue);
        }, 0)
}


// Iterate through the decimal digits we have roman numeral mappings for, biggest first,
// divide each into the decimal number, if result > 0, add that number of roman digits to the output
// repeat the process with the remainder and the rest of the roman digits
function decimalToRomanNumerial(decimals)
{
  if (decimals === undefined  || decimals === null) throw new Error("a decimal numer is required");
  if (typeof decimals !== 'number') return "";
  if(decimals <= 0) return "";

  let numberToConvert = decimals;
  const numerials = Object.keys(decimalNumberMap);
  let remainder = -1;
  let romanNumeral = "";

  while(remainder != 0) {
      let currentNumeral = numerials.pop();

      let quotient = Math.trunc(numberToConvert / currentNumeral);
      remainder = numberToConvert % currentNumeral;

      if(quotient > 0) {
        for(let i = 0; i < quotient; i++) {
          romanNumeral += decimalNumberMap[currentNumeral];
        }
        numberToConvert = remainder;
      }
  }
  
  return romanNumeral;

}

module.exports = {
  decimalToRomanNumerial,
  romanNumerialToDecimal
}
