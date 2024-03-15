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
// https://corsproxy.io/?
  const fetchData = async () => {
    const response =  await fetch(`https://swiggy-server.netlify.app/api/restaurants`)

const data = await response.json();
console.log(data,'data')
  
    // const json = await data.json();
    // console.log(json,'json');
    setListofRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
        data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }
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
                    {/* <label>User Name:</label> */}

         {/* <input value={loggedInUser} onChange ={(e)=>setUserName(e.target.value)}/> */}
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
