import { useState } from "react";
import "./Home.css";
function Home() {
  const [query, setQuery] = useState("");
  const handleQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  const handleSearch = () => (window.location.href = "/search/" + query);
  return (
    <>
      <div className="home">
        <div className="search">
          <div className="inputs">
            <div className="logo">
              <h2>Recipes</h2>
              <small>Find the recipes for your favorite meals</small>
            </div>
            <input type="text" value={query} onChange={handleQuery} />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
