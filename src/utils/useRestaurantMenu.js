import { useEffect, useState } from "react"
const useRestaurantMenu=(resId)=>{
        const [resInfo,setResInfo] = useState(null)

        useEffect(()=>{
            fetchMenu()
        },[])
        const fetchMenu = async()=>{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.455913314523556&lng=78.3653698861599&restaurantId="+ resId +"&catalog_qa=undefined&submitAction=ENTER")
            const json = await data.json()
            console.log(json,'json')
            setResInfo(json.data)
        }
    return resInfo
}

export default useRestaurantMenu;