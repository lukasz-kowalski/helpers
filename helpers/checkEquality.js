const isObject = item => typeof item === 'object' && item !== null; // check if item is object and it's not null

const checkObjectsEquality = (object1, object2) => {
  if (!object1 || !object2) {
    return false;  // return false if some of items are undefined
  }
  if (Object.getPrototypeOf(object1) !== Object.getPrototypeOf(object2)) {
    return false;  // return false if objects have different prototype reference
  }

  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;  // return false if objects have different length of properties
  }

  object1Keys.sort()  // sort keys to have them in same order
  object2Keys.sort()

  for (let key of object1Keys) {
    if (object1Keys[key] !== object2Keys[key]) {
      return false;  // return false if properties have different name
    }
    if (!checkEquality(object1Keys[key], object2Keys[key])) {
      return false;  // return false if properties are not equal - recursion check
    }
  }

  return true;  // return true if other checks passed
}

const checkEquality = (item1, item2) => {
  if (!isObject(item1) && !isObject(item2)) {
    return item1 === item2;  // check is items are equal if they are not objects
  } else if (item1 === item2) {
    return true;  // return true if objects have same reference
  } else {
    return checkObjectsEquality(item1, item2);  // check if objects are equal
  }
}

export default checkEquality;
