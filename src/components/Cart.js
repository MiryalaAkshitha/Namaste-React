import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart =()=>{
    const cartItems = useSelector((store)=> store.cart.items )
    const dispatch = useDispatch()
    const handleClear =()=>{
dispatch(clearCart())    }
    return(
        <div className ="text-center m-4 p-4">
            <h3 className ="font-bold text-2xl">Cart</h3>
<div className = "w-6/12 m-auto">
    <button className ="m-2 p-2 text-white bg-black rounded-lg" onClick ={handleClear}>Clear Cart</button>
    {cartItems.length===0 ? <h1>No items in your cart</h1> : <ItemList items = {cartItems}/>
}
</div> 
</div>
   )
}

export default Cart;