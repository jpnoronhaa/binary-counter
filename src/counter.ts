export default function binCountUp(array: number[]) {
  if (array.length !== 8) {
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }

  let carry = 1;

  const newArray = array.map((value) => {
    if (carry === 0) return value;
    let newValue = value;

    if (newValue === 0) {
      newValue += carry;
      carry = 0;
    } else {
      newValue = 0;
    }

    return newValue;
  });

  return newArray;
}
