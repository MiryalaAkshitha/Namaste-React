import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData} = props;
    console.log(resData)
    const{name,avgRating,sla,cuisines} = resData?.info
    return(
        <div className ="m-4 p-4 max-w-[250px] min-h-[500px]  rounded-lg bg-gray-100 hover:bg-gray-200 overflow-hidden">
            <img className ="res-logo rounded-lg"src={ CDN_URL+ resData.info.cloudinaryImageId} alt="res-logo"/>
            <h3 className ="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Delivery Time: {sla.deliveryTime} mins</h4>

        </div>
    )
}



// higher order fucntion 

export const Avaliability =(RestaurantCard)=>{
    return(props)=>{
        return(
            <>
            <label className="absolute text-black m-2 p-2 rounded-lg bg-slate-300">Open</label>
            <RestaurantCard {...props}/>
            </>
        )
    }
}

export default RestaurantCard;