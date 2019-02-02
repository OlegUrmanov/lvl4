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

function _test() {
  console.log("\n\nTask_2");

  console.log("\npulloutArray([1, 2, [3,4, [123,2,11]], null, NaN, 't', ['teset'], 123])");

  pulloutArray([1, 2, [3, 4, [123, 2, 11]], null, NaN, 't', ['teset'], 123])
}
