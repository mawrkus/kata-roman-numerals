const arabicToRoman = require('..');

describe('arabicToRoman', () => {
  it('should be a function', () => {
    expect(arabicToRoman).toBeInstanceOf(Function);
  });

  it('should return a string', () => {
    expect(arabicToRoman(42)).toEqual(expect.any(String));
  });

  describe('for numbers below 1', () => {
    it('should return an empty string', () => {
      let result = arabicToRoman(0);
      expect(result).toBe('');

      result = arabicToRoman(-1);
      expect(result).toBe('');
    });
  });

  describe('for numbers below 4', () => {
    it('should convert them properly', () => {
      let result = arabicToRoman(1);
      expect(result).toBe('I');

      result = arabicToRoman(2);
      expect(result).toBe('II');

      result = arabicToRoman(3);
      expect(result).toBe('III');
    });
  });

  describe('for 4', () => {
    it('should return "IV"', () => {
      const result = arabicToRoman(4);
      expect(result).toBe('IV');
    });
  });

  describe('for numbers from 5 to 8', () => {
    it('should convert them properly', () => {
      let result = arabicToRoman(5);
      expect(result).toBe('V');

      result = arabicToRoman(6);
      expect(result).toBe('VI');

      result = arabicToRoman(7);
      expect(result).toBe('VII');

      result = arabicToRoman(8);
      expect(result).toBe('VIII');
    });
  });

  describe('for 9', () => {
    it('should return "IX"', () => {
      const result = arabicToRoman(9);
      expect(result).toBe('IX');
    });
  });

  describe('for numbers from 10 to 13', () => {
    it('should convert them properly', () => {
      let result = arabicToRoman(10);
      expect(result).toBe('X');

      result = arabicToRoman(11);
      expect(result).toBe('XI');

      result = arabicToRoman(12);
      expect(result).toBe('XII');

      result = arabicToRoman(13);
      expect(result).toBe('XIII');
    });
  });

  describe('for 14', () => {
    it('should return "XIV"', () => {
      const result = arabicToRoman(14);
      expect(result).toBe('XIV');
    });
  });

  describe('for number from 15 to 18', () => {
    it('should convert them properly', () => {
      let result = arabicToRoman(15);
      expect(result).toBe('XV');

      result = arabicToRoman(16);
      expect(result).toBe('XVI');

      result = arabicToRoman(17);
      expect(result).toBe('XVII');

      result = arabicToRoman(18);
      expect(result).toBe('XVIII');
    });
  });

  describe('for 19', () => {
    it('should return "XIX"', () => {
      const result = arabicToRoman(19);
      expect(result).toBe('XIX');
    });
  });

  describe('for 24', () => {
    it('should return "XXIV"', () => {
      const result = arabicToRoman(24);
      expect(result).toBe('XXIV');
    });
  });

  describe('for 30', () => {
    it('should return "XXX"', () => {
      const result = arabicToRoman(30);
      expect(result).toBe('XXX');
    });
  });

  describe('for 48', () => {
    it('should return "XLVIII"', () => {
      const result = arabicToRoman(48);
      expect(result).toBe('XLVIII');
    });
  });

  describe('for 666', () => {
    it('should return "DCLXVI"', () => {
      const result = arabicToRoman(666);
      expect(result).toBe('DCLXVI');
    });
  });

  describe('for 949', () => {
    it('should return "CMXLIX"', () => {
      const result = arabicToRoman(949);
      expect(result).toBe('CMXLIX');
    });
  });

  describe('for 4888', () => {
    it('should return "MMMMDCCCLXXXVIII"', () => {
      const result = arabicToRoman(4888);
      expect(result).toBe('MMMMDCCCLXXXVIII');
    });
  });
});
