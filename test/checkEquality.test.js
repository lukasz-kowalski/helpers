const checkEquality = require('../helpers/checkEquality');

describe('checkEquality helper', () => {
  it('should return true if strings are equal', () => {
    expect(checkEquality('a', 'a')).toBe(true);
  })

  it('should return false if strings are not equal', () => {
    expect(checkEquality('a', 'b')).toBe(false);
  })

  it('should return true if numbers are equal', () => {
    expect(checkEquality(3, 3)).toBe(true);
  })

  it('should return false if numbers are not equal', () => {
    expect(checkEquality(3, 4)).toBe(false);
  })

  it('should return true if booleans are equal', () => {
    expect(checkEquality(false, false)).toBe(true);
  })

  it('should return false if booleans are not equal', () => {
    expect(checkEquality(true, false)).toBe(false);
  })

  it('should return false if one argument is missing', () => {
    expect(checkEquality(true)).toBe(false);
  })

  it('should return true if objects have same reference', () => {
    const obj1 = {a: 'a', b: 'b'};
    const obj2 = obj1;
    expect(checkEquality(obj1, obj2)).toBe(true);
  })

  it('should return true if objects values are equal', () => {
    const obj1 = {a: 'a', b: 'b'};
    const obj2 = {a: 'a', b: 'b'};
    expect(checkEquality(obj1, obj2)).toBe(true);
  })

  it('should return false if some object properties are missing', () => {
    const obj1 = {a: 'a', b: 'b', c: 'c'};
    const obj2 = {a: 'a', b: 'b'};
    expect(checkEquality(obj1, obj2)).toBe(false);
  })

  it('should return false if objects values are not equal', () => {
    const obj1 = {a: 'a', b: 'b'};
    const obj2 = {a: 'd', b: 'e'};
    expect(checkEquality(obj1, obj2)).toBe(false);
  })

  it('should return false if prototypes are equal', () => {
    class TestObject {
      constructor(name) {
        this.name = name;
      }
    }

    const obj1 = new TestObject('test object');
    const obj2 = new TestObject('test object');

    expect(checkEquality(obj1, obj2)).toBe(true);
  })

  it('should return false if prototypes are not equal', () => {
    class TestObject {
      constructor(name) {
        this.name = name;
      }
    }

    class TestObject2 {
      constructor(name) {
        this.name = name;
      }
    }

    const obj1 = new TestObject('test object');
    const obj2 = new TestObject2('test object');

    expect(checkEquality(obj1, obj2)).toBe(false);
  })

  it('should return true if nested objects are equal', () => {
    const obj1 = {
      a: 'a',
      b: {
        c: 'c'
      }
    }

    const obj2 = {
      a: 'a',
      b: {
        c: 'c'
      }
    }
    expect(checkEquality(obj1, obj2)).toBe(true);
  })

  it('should return false if nested objects are no equal', () => {
    const obj1 = {
      a: 'a',
      b: {
        c: 'c'
      }
    }

    const obj2 = {
      a: 'a',
      b: {
        c: 'd'
      }
    }
    expect(checkEquality(obj1, obj2)).toBe(false);
  })

  it('should return true if nested objects are equal', () => {
    const obj1 = {
      a: 'a',
      b: {
        c: ['a', 'b']
      }
    }

    const obj2 = {
      a: 'a',
      b: {
        c: ['a', 'b']
      }
    }
    expect(checkEquality(obj1, obj2)).toBe(true);
  })

  it('should return true if nested objects are not equal', () => {
    const obj1 = {
      a: 'a',
      b: {
        c: ['d', 'e']
      }
    }

    const obj2 = {
      a: 'a',
      b: {
        c: ['a', 'b']
      }
    }
    expect(checkEquality(obj1, obj2)).toBe(false);
  })
})
