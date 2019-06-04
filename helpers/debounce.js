const debounce = (fnToDebounce, interval) => {
  let timer;
  return (...args) => {  // returning debounced function and passing arguments to debounced function
    clearInterval(timer);  // clearing old interval to have only one timeout at the moment
    timer = setTimeout(() => fnToDebounce(...args), interval); // setting new interval
  }
}

module.exports = debounce;
