import React from "react";
import Banner from "./HomePageComponents/Banner/Banner";
import Restaurants from "./HomePageComponents/RestaurantRoutes/Restaurants";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Restaurants></Restaurants>
    </div>
  );
};

export default Home;
