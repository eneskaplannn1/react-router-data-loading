import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="rounded-full w-40 bg-yellow-100 px-4 py-3 focus:w-72 transition-all duration-300"
      />
    </form>
  );
}

export default SearchOrder;
