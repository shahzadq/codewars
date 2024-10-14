const findTheOddInt = (arr: number[]) => {
  // count number of occurences for each unqiue item in array
  const numberOfOccurences = {} as Record<number, number>;

  arr.map((num) => {
    numberOfOccurences[num] =
      typeof numberOfOccurences[num] !== "undefined"
        ? numberOfOccurences[num] + 1
        : 1;
  });

  console.log(numberOfOccurences);
};

console.log(findTheOddInt([7]));
