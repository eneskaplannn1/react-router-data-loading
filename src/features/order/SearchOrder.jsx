import { useState } from "react";

function SearchOrder() {
  const [query, setQuery] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder=""
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </form>
  );
}

export default SearchOrder;
