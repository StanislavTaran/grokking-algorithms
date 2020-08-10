const getGreatestCommonDivider = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
    return num1 + num2;
  }
};

console.log(getGreatestCommonDivider(120, 20));
