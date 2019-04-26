// pipe n pure functions and return value

const pipe = (...fns) => value => fns.reduce((currentValue, currentFunction) => currentFunction(currentValue), value);

export default pipe;
