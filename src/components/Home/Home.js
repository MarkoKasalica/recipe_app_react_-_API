import { useState } from "react";
import "./Home.css";
function Home() {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  const handleSearch = () => (window.location.href = "/search/" + query);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div className="home">
        <div className="search">
          <div className="inputs">
            <div className="logo">
              <h2>Recipes</h2>
              <small>Find the recipes for your favorite meals</small>
            </div>
            <input
              type="text"
              value={query}
              onChange={handleQuery}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch} type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
