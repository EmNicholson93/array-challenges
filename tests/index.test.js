const { multiplesOfN } = require('../lib/index');

describe('mupltiples of n', () => {
  it('returns an array of nums that are mutiples of 5', () => {
  
    const multiples = multiplesOfN(5);
    
    expect(multiples).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });
  it('returns an array of nums that are mutiples of 15', () => {
    const multiples = multiplesOfN(15);
    
    expect(multiples).toEqual([15, 30, 45, 60, 75, 90]);
  });
  it('returns no array of nums that are mutiples of 113', () => {
    const multiples = multiplesOfN(113);
    
    expect(multiples).toEqual([]);
  });
});
