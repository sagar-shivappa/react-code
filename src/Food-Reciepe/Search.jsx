import { useEffect, useState } from "react";

export default function Search({ setFoodItems }) {
  const [search, setSearch] = useState("pizza");
  const searchReciepe = "https://api.spoonacular.com/recipes/complexSearch";
  const api_key="ecbc2567b2024a3499674d8128dcb2dd"

  useEffect(() => {
    function fecthdata() {
      fetch(`${searchReciepe}?query=${search}&apiKey=${api_key}`)
      .then((data) =>
        data.json()
      ).then(data=>setFoodItems(data.results))
    }
    fecthdata();
  }, [search]);

  return (
    <>
      <input
        type="text"
        value={search}
        className="form-control"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
