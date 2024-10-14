const isDefined = <T>(tbd?: T): tbd is T => typeof tbd !== "undefined";

const findTheOddInt = (arr: number[]) => {
  // count number of occurences for each unqiue item in array
  const numberOfOccurences = {} as Record<number, number>;

  arr.map((num) => {
    numberOfOccurences[num] =
      typeof numberOfOccurences[num] !== "undefined"
        ? numberOfOccurences[num] + 1
        : 1;
  });

  return Object.keys(numberOfOccurences)
    .map((key) => {
      const value = numberOfOccurences[key];
      if (value % 2) return key;
    })
    .filter(isDefined)[0];
};

const tests = [
  [7],
  [0],
  [1, 1, 2],
  [0, 1, 0, 1, 0],
  [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1],
];

tests.map((test) => console.log(findTheOddInt(test)));
