// compose n pure functions and return value
// usage: compose(fn1, fn2, fn3)(value) - fn1(fn2(fn3(value)));

// 1. compose with single argument:

const compose = (...fns) => value => fns.reduceRight((currentValue, currentFunction) => currentFunction(currentValue), value);

// 2. compose with multi arguments:

const multiCompose = (...fns) => fns.reduceRight((currentFunction, nextFunction) => (...args) => nextFunction(currentFunction(...args)));

module.exports = { compose, multiCompose };
