const cloneObject = object => {
  const clone = {};  // instantiation of new object

  for (let property in object) {
    if (Array.isArray(object[property])) {
      clone[property] = object[property].slice(0); // if property is array, copy that array
    }
    else if (object[property] !== null && typeof (object[property]) === 'object') { //if property is object, call recursively cloneObject
      clone[property] = cloneObject(object[property]);  // returns copied nested object and assigns this object as property of clone object
    }
    else {
      clone[property] = object[property]; // if property has primitive value, assign this property to clone object
    }
  }

  return clone; // return deep cloned object
}
