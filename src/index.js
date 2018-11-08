const arabicToRomanPrimitivesLookup = {
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
  1000: 'M',
};

const arabicLookup = Object.entries(arabicToRomanPrimitivesLookup).sort((a, b) => b[0] - a[0]);

/**
 * @param {Number} arabicNumber
 * @param {String}
 */
function arabicToRoman(arabicNumber) {
  if (arabicNumber < 1) {
    return '';
  }

  const romanNumber = arabicToRomanPrimitivesLookup[arabicNumber];
  const isPrimitive = Boolean(romanNumber);

  if (isPrimitive) {
    return romanNumber;
  }

  const [lowerArabic, lowerRoman] = arabicLookup.find(([a]) => a <= arabicNumber);

  return lowerRoman + arabicToRoman(arabicNumber - lowerArabic);
}

module.exports = arabicToRoman;
