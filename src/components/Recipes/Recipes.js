import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axios/axios";
import Recipe from "./Recipe/Recipe";
import "./Recipes.css";
function Recipes() {
  const { query } = useParams();
  const [search, setSearch] = useState(query);
  const [recipes, setRecipes] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const fetchRecipes = async () => {
    try {
      const { data } = await axiosInstance().get("?q=" + search);
      return data.hits;
    } catch (error) {
      return null;
    }
  };
  const searchRecipes = async () => {
    const data = await fetchRecipes();
    setRecipes(data);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchRecipes();
    }
  };
  useEffect(() => {
    const loadRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    loadRecipes();
  }, []);

  return (
    <>
      <div className="recipes">
        <div className="inputs">
          <div className="logo">
            <h2>Recipes</h2>
            <small>Find the recipes for your favorite meals</small>
          </div>
          <input
            type="text"
            value={search}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
          <button onClick={searchRecipes}>Search</button>
        </div>
        <div className="recipes-results">
          {recipes.map((recipe) => {
            return <Recipe data={recipe} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Recipes;
