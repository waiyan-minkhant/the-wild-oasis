import { useSearchParams } from "react-router-dom";

export function useUrl() {
  const [searchParams, setSearchParams] = useSearchParams();
  function readUrl(query) {
    return searchParams.get(query);
  }
  function updateUrl(query, value) {
    searchParams.set(query, value);
    setSearchParams(searchParams);
  }
  return { readUrl, updateUrl };
}
