import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { food_items } from "../food";
import { useSelector, useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { LuLeafyGreen, LuShoppingBag } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import RatingDisplay from "./RatingDisplay";
import Card2 from "./Card2";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from "../context/UserContext";
import Nav from "./Nav";

const OneCard = () => {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = food_items.find((food) => food.id === parseInt(id));

  const handleAddToCart = () => {
    dispatch(
      AddItem({
        id: item.id,
        name: item.food_name,
        price: item.price,
        qty: item.food_quantity,
        image: item.food_image,
        type: item.food_type,
        categories: item.food_category,
        description: item.description,
        rating: item.rating,
        review: item.reviews,
      })
    );
    // toast.success("Item added");
  };
  let items = useSelector((state) => state.cart);

  let subtotal = items?.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);
  // console.log(cate);

  if (!item) return <div className="bg-gray-400 opacity-5">Item not found</div>;

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="w-full h-[100px] flex justify-end items-start px-5 md:px-8">
        <div
          className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer"
          onClick={() => {
            setShowCart(true);
          }}
        >
          <span className="absolute top-0 right-2 text-black font-bold text-[18px]">
            {items.length}
          </span>
          <LuShoppingBag className="w-[30px] h-[30px] text-black " />
        </div>
      </div>
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-10">
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={item.food_image}
            alt={item.food_name}
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {item.food_name}
            </h1>
            <p>{item.description}</p>
            <div className="text-lg font-bold text-black">
              Rs {item.price}/-
            </div>
            <div className="flex gap-4 flex-wrap">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full uppercase font-bold text-sm">
                {item.food_category.replace(/_/g, " ")}
              </span>
              <div className="flex items-center gap-2 text-black text-lg font-semibold">
                {item.food_type === "veg" ? (
                  <LuLeafyGreen />
                ) : (
                  <GiChickenOven />
                )}
                <span>{item.food_type}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-black text-lg font-semibold">
              <span>{item.rating}</span>
              <RatingDisplay rating={item.rating} reviews={item.reviews} />
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Add to dish
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-black text-[18px] font-semibold">
            Order items
          </span>
          <RxCross2
            className="w-[30px] h-[30px] text-black text-[18px] font-semibold cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>

        {items.length > 0 ? (
          <>
            <div className="w-full mt-9 flex flex-col gap-8">
              {items?.map((item, index) => (
                <section key={index}>
                  <Card2
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                    qty={item.qty}
                  />
                </section>
              ))}
            </div>
            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8">
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Subtotal
                </span>
                <span className="text-black font-semibold text-lg">
                  Rs {subtotal}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Delivery Fee
                </span>
                <span className="text-black font-semibold text-lg">
                  Rs {deliveryFee}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Taxes
                </span>
                <span className="text-black font-semibold text-lg">
                  Rs {taxes}/-
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-9">
              <span className="text-2xl text-gray-600 font-semibold">
                Total
              </span>
              <span className="text-black font-semibold text-2xl">
                Rs {total}/-
              </span>
            </div>
            <button
              className="w-[80%] p-3 rounded-lg bg-black text-white hover:bg-black transition-all"
              onClick={() => {
                toast.success("Order Placed..");
              }}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className="text-center text-2xl text-black font-semibold pt-5">
            Empty Cart
          </div>
        )}
      </div>
    </div>
  );
};

export default OneCard;
