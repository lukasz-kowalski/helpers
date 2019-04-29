// pipe n pure functions and return currentFunctionalue
// usage: pipe(fn1, fn2, fn3)(value) - fn3(fn2(fn1(value)));

// 1. pipe with single argument:

const pipe = (...fns) => value => fns.reduce((currentValue, currentFunction) => currentFunction(currentValue), value);

// 2. pipe with multi arguments:

const multiPipe = (...fns) => fns.reduce((currentFunction, nextFunction) => (...args) => nextFunction(currentFunction(...args)));

module.exports = { pipe, multiPipe };
