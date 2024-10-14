const findTheOddInt = (arr: number[]) => {
  // count number of occurences for each unqiue item in array
  const numberOfOccurences = {} as Record<number, number>;

  arr.map((num) => {
    numberOfOccurences[num] =
      typeof numberOfOccurences[num] !== "undefined"
        ? numberOfOccurences[num] + 1
        : 1;
  });

  const i = Object.keys(numberOfOccurences).map((key) => {
    const value = numberOfOccurences[key];
    if (value % 2) return key;
  });
};

console.log(findTheOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
