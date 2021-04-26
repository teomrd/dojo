const combineOf = (arr, arr2) => arr2.map((el) => [...arr, el]);

const findCompos = (combosToSearch, arr) =>
  combosToSearch.reduce((acc, c) => {
    const lastElement = c.slice(-1)[0];
    const indexOfLastElement = arr.indexOf(lastElement);
    const arrayToCombine = arr.slice(indexOfLastElement + 1);

    const res = combineOf(c, arrayToCombine);
    return [...acc, ...res];
  }, []);

const findAllPossibleComposOfSize = (compos, arr, n) => {
  if (compos.length === 0 || compos.some((c) => c.length === n)) return compos;

  const nextCombos = findCompos(compos, arr, n);
  return findAllPossibleComposOfSize(nextCombos, arr, n);
};

const findElementsCombinations = (element, arr, n) =>
  findAllPossibleComposOfSize([element], arr, n);

const getArrayCombinations = (arr, n) =>
  arr.reduce((acc, curr, i) => {
    const arrayToCombine = arr.slice(i + 1);
    const compos = findElementsCombinations(curr, arrayToCombine, n);
    return [...acc, ...compos];
  }, []);

module.exports = {
  getArrayCombinations,
  combineOf,
  findElementsCombinations,
};
