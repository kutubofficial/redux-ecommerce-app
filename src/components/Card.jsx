import React from "react";
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Card({ name, image, id, price, description, rating, reviews, type }) {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-black ">
      <div
        onClick={() => navigate(`/food/${id}`)}
        className="w-[100%] h-[60%] overflow-hidden rounded-lg"
      >
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-black">Rs {price}/-</div>
        <div className="flex justify-center items-center gap-2 text-black text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
        {/* <RatingDisplay rating={rating} reviews={reviews} /> */}
      </div>
      <button
        className="w-full p-3 rounded-lg bg-black text-white hover:bg-black transition-all"
        onClick={() => {
          dispatch(
            AddItem({
              id: id,
              name: name,
              price: price,
              // description: description,
              image: image,
              // rating: rating,
              qty: 1,
            })
          );
          toast.success("item added");
        }}
      >
        Add to dish
      </button>
    </div>
  );
}

export default Card;
