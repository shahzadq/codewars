const isDefined = <T>(tbd?: T): tbd is T => typeof tbd !== "undefined";
const isOdd = (num: number) => num % 2;
const getKeys = <O extends object>(obj: O) => Object.keys(obj) as (keyof O)[];

// https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
const arrayCountNumberOfOccurences = <T extends string | number | symbol>(
  arr: T[]
) =>
  arr.reduce((accumulator, current) => {
    // for the current item in the accumulator, add one
    accumulator[current] = (accumulator[current] || 0) + 1;
    return accumulator;
  }, {} as Record<T, number>);

// have to use number[] as type although would be better to somehow come up with a type that guarantees at least one array element occurs an odd number of times - dont think you can do this in ts
export const findTheOddInt = (arr: number[]) => {
  // count number of occurences for each unqiue item in array
  const numberOfOccurences = arrayCountNumberOfOccurences(arr);

  const items = getKeys(numberOfOccurences)
    .map((key) => {
      const value = numberOfOccurences[key];
      if (isOdd(value)) return key;
      return undefined;
    })
    .filter(isDefined);

  // because the scenario guarantees there will always be one interger that appears an odd number of times, we can just return the first (and only) item in the items array
  return Number(items[0]);
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
