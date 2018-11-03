function pulloutArray(source) {
const array = [];
  for (let value of source.values()) {
    if (Array.isArray(value)) {
      for (let valueTwo of value.values()) {
        if (Number.isInteger(valueTwo)) {
          array.push(valueTwo);
        }
      }
    }
    if (Number.isInteger(value)) {
      array.push(value);
    }
  }
  console.log(array);
}
