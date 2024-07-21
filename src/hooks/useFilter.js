export function useFilter(filterField, filterValue, filterSign, data) {
  function callback(el) {
    if (filterSign === "=") return el[filterField] === filterValue;
    if (filterSign === ">") return el[filterField] > filterValue;
    if (filterSign === "<") return el[filterField] < filterValue;
    if (filterSign === ">=") return el[filterField] >= filterValue;
    if (filterSign === "<=") return el[filterField] <= filterValue;
  }
  const filteredData = data.filter(callback);
  return filteredData;
}
