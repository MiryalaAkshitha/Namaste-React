import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log("clicked");
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="py-2">
            <div className="flex">
              <img src={CDN_URL + item.card.info.imageId} className="w-24" />
              <button
                className="bg-gray-200 text-black font-bold p-2 m-2 rounded-lg"
                onClick={() => handleAddItem(item)}
                
              >
                Add +
              </button>
            </div>
            <span className="font-bold">{item.card.info.name}</span>
            <span>
              - ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
