import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu =()=>{
    const [resInfo,setResInfo] = useState(null)

    const {resId} = useParams();
    console.log(resId,"RESID")
    useEffect(()=>{
fetchMenu();
    },[])

    const fetchMenu = async()=>{
const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.455913314523556&lng=78.3653698861599&restaurantId="+ resId +"&catalog_qa=undefined&submitAction=ENTER")
const json = await data.json()
console.log(json,'json')
setResInfo(json.data)

    }
if( resInfo === null) return<Shimmer/>
 
const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info ;
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    return (
        <div id = "menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>

                <ul>
                    {itemCards.map((item)=>(
                       <li>
                        {item.card.info.name}- {"Rs."}
                        {item.card.info.price /100 || item.card.info.defaultPrice /100}

                       </li> 
                    ))}
                   


                </ul>

        </div>
    )
}

export default RestaurantMenu;