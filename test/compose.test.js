const { compose, multiCompose } = require('../helpers/compose');

describe('compose helper', () => {
  it('should return number 20 from piped functions', () => {
    const addFive = value => value + 5;
    const multiplyBy3 = value => value * 3;

    expect(compose(addFive, multiplyBy3)(5)).toBe(20);
  })
})

describe('multiCompose helper', () => {
  it('should return ! TEST STRING ? from piped functions with multiple arguments', () => {
    const addToStart = (x, y, value) => x + ' ' + value + ' ' + y;
    const makeItBigger = str => str.toUpperCase()

    expect(multiCompose(makeItBigger, addToStart)('!', '?', 'test string')).toBe('! TEST STRING ?');
  })
})
