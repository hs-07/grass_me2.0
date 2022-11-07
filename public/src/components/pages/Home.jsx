import React from "react";
import "../styles/home.css";
import Navbar from "../Navbar";

const Tile = ({ title, value }) => {
  return (
    <div className="tile m-2 p-2">
      <div className="tile-heading fs-3">{title}</div>
      <div className="tile-data fs-4 fw-400 fw-light">{value}</div>
    </div>
  );
};

const VerticalLine = () => <div className="h-100px m-2 border-end"></div>;

const Tiles = () => (
  <div className="tiles d-flex w-100 justify-content-around border-bottom">
    <Tile title={"wallet balance"} value={`₹2000`} />
    <VerticalLine />
    <Tile title={"previous purchase"} value={`₹2000`} />
    <VerticalLine />
    <Tile title={"holdings of land"} value={`3.47 acres`} />
    <VerticalLine />
    <Tile title={"order status"} value={`delivered`} />
  </div>
);

const repeat = (char, freq) => {
  var res = "";
  for (var i = 0; i < freq; i++) {
    res += char;
  }
  return res;
};

const Rating = ({ stars }) => (
  <div className="d-flex mt-auto ms-auto rating">rating: {repeat("⭐", 5)}</div>
);

const RightSide = ({ name }) => (
  <div className=" h-100 p-4 d-flex flex-column">
    <span className="fs-1 text-black font-black">Hey, {name}</span>
    <Tiles />
    <Rating stars={3} />
  </div>
);

const Crop = ({ name, price, old_price }) => {
  return (
    <div className="crop justify-content-between p-2 border-top d-flex">
      {name}
      <div
        className={
          "crop-price " +
          (price > old_price ? "text-success" : "text-danger") +
          " p-1"
        }
      >
        ({price > old_price ? "+" : ""}
        {(((price - old_price) * 100) / price).toFixed(2)}%) 
        {price}{" "}
        {price > old_price ? "⬆️" : "⬇️"}
      </div>
    </div>
  );
};

const LeftSide = ({ crops }) => (
  <div className="left-side border-end w-100 pe-3 h-100">
    
    <div className="search my-4">
      <input
        type="text"
        placeholder="search crops"
        className="search-bar my-1 mx-3"
      />
    </div>
    
    {crops.map((crop) => (
      <Crop name={crop.name} price={crop.price} old_price={crop.old_price} />
    ))}
    
    <div className="w-100 border-top"></div>
  </div>
);

function Home() {
  const name = "user";
  const crops = [
    { name: "Rice", price: 25, old_price: 24 },
    { name: "Wheat", price: 92, old_price: 95 },
    { name: "Tomato", price: 40, old_price: 42 },
    { name: "Jowar", price: 54, old_price: 55 },
    { name: "Bajra", price: 50, old_price: 48 },
    { name: "Potato", price: 49, old_price: 45 },
    { name: "Onion", price: 36, old_price: 35 },
    { name: "Mango", price: 295, old_price: 300 },
  ];
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row vh-75">
          <div className="col-4 h-100">
            <LeftSide crops={crops} />
          </div>
          <div className="col-8 ">
            <RightSide name={name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;