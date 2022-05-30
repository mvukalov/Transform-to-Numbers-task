const array = ["AAA12", "A 2 A ", "-2-2"];
const array2 = ["", "", "AAAAS", "-2", ""];
const array3 = [["2AA2"], ["A---A-A"], ["-2-2as++?da5"], []];
const array4 = [["-2"], ["2 a s 2"], ["2"], "2++DDD2"];

const getNumber = function (array, subArr) {
  let number = 0;
  const regex = /-?\d+/g;

  const ElementToNumber = (array) =>
    array
      .match(regex)
      ?.map((n) => Number(n))
      .reduce((acc, n) => acc + n, 0) || 0;

  if (!subArr) {
    number = ElementToNumber(array);
    return number;
  }
  if (subArr) {
    for (const arr of array) {
      number = ElementToNumber(arr);
    }
    return number;
  }
};
const calcSum = function (array) {
  let subArr;
  let finalSum = 0;

  for (const arr of array) {
    subArr = Array.isArray(arr);
    finalSum += getNumber(arr, subArr);
  }
  console.log(`Sum of all numbers in array is equal to: ${finalSum} 💥`);
  finalSum = 0;
};

calcSum(array);
calcSum(array2);
calcSum(array3);
calcSum(array4);
