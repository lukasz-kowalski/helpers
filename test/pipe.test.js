const { pipe, multiPipe } = require('../helpers/pipe');

describe('pipe helper', () => {
  it('should return number 20 from piped functions', () => {
    const addFive = value => value + 5;
    const multiplyBy3 = value => value * 3;

    expect(pipe(multiplyBy3, addFive)(5)).toBe(20);
  })
})

describe('multiPipe helper', () => {
  it('should return ! TEST STRING ? from piped functions with multiple arguments', () => {
    const addToStart = (x, y, value) => x + ' ' + value + ' ' + y;
    const makeItBigger = str => str.toUpperCase()

    expect(multiPipe(addToStart, makeItBigger)('!', '?', 'test string')).toBe('! TEST STRING ?');
  })
})
