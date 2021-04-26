const combineOf = (arr, arr2) => arr2.map(el => [...arr, el]);

const combineAll = (element, arr, n) => {
  const combos = combineOf([element], arr);
  const validCombos = combos.filter(c => c.length === n);
  if(validCombos.length > 0) return validCombos;
    
  let found = false;
  let combosToSearch = combos;

  while (!found && combosToSearch.length > 0) {
    const results = combosToSearch.reduce((acc, c) => {
      const lastElement =  c.slice(-1)[0];
      const indexOfLastElement = arr.indexOf(lastElement);
      const arrayToCombine = arr.slice(indexOfLastElement+1)
  
      const res = combineOf(c, arrayToCombine);
      return [
        ...acc,
        ...res
      ];
    }, []);

    if(results.filter(c => c.length === n).length > 0) {
      found = true;
      return results;
    }
    else {
      combosToSearch = results;
    }
  }
  return [];
};

const getArrayCombinations = (arr, n) => {
  return arr.reduce((acc, element, i) => {
    const arrayToCombine = arr.slice(i + 1);
    const compos = combineAll(element, arrayToCombine, n);
    console.log({ compos });
    const validCombos = compos.filter(c => c.length === n);
    
    return [
      ...acc,
      ...validCombos
    ]
  }, []);
}

module.exports = {
  getArrayCombinations,
  combineOf,
  combineAll,
}