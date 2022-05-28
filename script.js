const array = ["AAA12", "A 2 A ", "-2-2"];
const array2 = ["", "", "AAAAS", "-2", ""];
const array3 = [["2AA2"], ["A---A-A"], ["-2-2as++?da5"], []];
const array4 = [["-2"], ["2 a s 2"], ["2"], "2++DDD2"];

const DigitsFromString = function (array) {
  const regex = /-?\d+/g;
  let digits;
  let sum = 0;

  if (!subArr) {
    digits = array.match(regex);
    sum = digits?.map((n) => Number(n)).reduce((acc, mov) => acc + mov, 0) || 0;
    return sum;
  }
  if (subArr) {
    for (const arr of array) {
      digits = arr.match(regex);
      sum =
        digits?.map((n) => Number(n)).reduce((acc, mov) => acc + mov, 0) || 0;
    }
    return sum;
  }
};

let finalSum = 0;
let subArr;

const PrintSum = function (array) {
  for (const arr of array) {
    subArr = Array.isArray(arr);
    finalSum += DigitsFromString(arr);
  }
  console.log(`Sum of all digits in array is equal to: ${finalSum} 💥`);
  finalSum = 0;
};

PrintSum(array);
PrintSum(array2);
PrintSum(array3);
PrintSum(array4);
