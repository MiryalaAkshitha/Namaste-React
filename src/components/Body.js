import { useContext, useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard,{Avaliability} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
const AvaliabilityRestaurantCard = Avaliability(RestaurantCard)
  const [search, setSearch] = useState("");
  console.log(listofRestaurants,'listofRestaurants')
  const {loggedInUser,setUserName} = useContext(UserContext)
  useEffect(() => {
    fetchData();
  }, []);
//https://corsproxy.io/?
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
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="border border-solid border-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className ="px-4 py-1 bg-blue-100 m-4 rounded-lg"onClick={() => {
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
          <div className="search m-4 p-4">
                    <label>User Name:</label>

         <input value={loggedInUser} onChange ={(e)=>setUserName(e.target.value)}/>
          </div>
         
        </div>
        <div className="flex flex-wrap">

          {filteredRestaurants?.map((res) => (
            <Link key={res.info.id} to ={"/restaurants/"+res.info.id}>
              {res.info.isOpen ?( <AvaliabilityRestaurantCard  resData={res} />) :(<RestaurantCard  resData={res} />)}
              </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
