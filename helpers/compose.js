// compose n pure functions and return value

const compose = (...fns) => value => fns.reduceRight((currentValue, currentFunction) => currentFunction(currentValue), value);

export default compose;
