const isDefined = <T>(tbd?: T): tbd is T => typeof tbd !== "undefined";

const arrayCountNumberOfOccurences = <T extends string | number | symbol>(
  arr: T[]
) =>
  arr.reduce((accumulator, current) => {
    accumulator[current] = (accumulator[current] || 0) + 1;
    return accumulator;
  }, {} as Record<T, number>);

const findTheOddInt = (arr: number[]) => {
  // count number of occurences for each unqiue item in array
  const numberOfOccurences = arrayCountNumberOfOccurences(arr);

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

tests.map((test) =>
  console.log({ [JSON.stringify(test)]: findTheOddInt(test) })
);
