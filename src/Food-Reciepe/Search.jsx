import { useEffect, useState } from "react";
import  items from '../mock-server/items.json'

export default function Search({ setFoodItems }) {
  const [search, setSearch] = useState("pizza");
  const searchReciepe = "https://api.spoonacular.com/recipes/complexSearch";
  const api_key = "ecbc2567b2024a3499674d8128dcb2dd";
  const isDev = true;

  useEffect(() => {
    function fecthdata() {
      if (isDev) {
        console.log(items)
        setFoodItems(items)
      } else {
        fetch(`${searchReciepe}?query=${search}&apiKey=${api_key}`)
          .then((data) =>
            data.json()
          ).then(data => {
            console.log(data.results)
            setFoodItems(data.results)
          }
          )
      }

    }
    fecthdata();
  }, [search]);

  return (
    <>
    <div className="row justify-content-center">
      <div className="col-md-6">
      <input
        type="text"
        value={search}
        className="form-control " placeholder="Search for your favourite food... "
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
    
    </div>
      
    </>
  );
}
