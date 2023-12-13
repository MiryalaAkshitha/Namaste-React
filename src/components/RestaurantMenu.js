import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu =()=>{

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resId,"RESID")
   
   

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