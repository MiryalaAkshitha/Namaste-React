import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4491088&lng=78.3565045&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json,'json');
    setListofRestaurants(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
  };
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
  return(
<h1>Check your internet</h1>)
  // conditional rendering
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => {
                console.log("hello")
                const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
                
              setFilteredRestaurants(filteredRestaurant);
                console.log("updated", filteredRestaurant)


               
            }

                }
                >search</button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredlist = listofRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListofRestaurants(filteredlist);
              console.log(filteredlist);
            }}
          >
            Filter
          </button>
        </div>
        <div className="res-container">

          {filteredRestaurants?.map((res) => (
            <Link key={res.info.id} to ={"/restaurants/"+res.info.id}><RestaurantCard  resData={res} /></Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
