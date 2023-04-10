import { useEffect, useState } from "react";

import WideContainer from "./UI/WideContainer";
import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./UI/ShimmerCard";
import { Link } from "react-router-dom";

function RestaurantList() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    try {
      getData();
    } catch (err) {
      console.log(err.message);
    }
  }, [latitude, longitude]);

  async function getData() {
    if (latitude && longitude) {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&page_type=DESKTOP_WEB_LISTING`
      );
      if (!response.ok) {
        return new Error("Something unexpected happened!");
      }

      const jsonData = await response.json();
      const restaurants = jsonData?.data?.cards[2]?.data?.data?.cards;
      setRestaurantData(restaurants);
      setFilteredRestaurants(restaurants);
    }
  }

  function filterRestaurants(searchQuery) {
    setFilteredRestaurants(
      restaurantData?.filter((restaurant) =>
        restaurant?.data?.name
          ?.toLowerCase()
          ?.includes(searchQuery.toLowerCase())
      )
    );
  }

  if (!restaurantData) {
    return (
      <WideContainer className="flex flex-col justify-center items-center gap-6 h-screen">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/connection_error_bsppck"
          className="h-96"
        />

        <div className="text-center">
          <h1 className="text-2xl font-bold">Uh-oh!</h1>
          <p className="text-slate-500">
            All restaurants are unserviceable, check back in some time.
          </p>
        </div>
      </WideContainer>
    );
  }

  return (
    <>
      <WideContainer className="flex justify-between gap-6 px-6 pt-6">
        <Search filterRestaurants={filterRestaurants} />
      </WideContainer>

      <WideContainer className="flex gap-6 p-6 flex-wrap">
        {filteredRestaurants?.length === 0 && restaurantData?.length !== 0 && (
          <h1 className="text-xl font-bold">
            No restaurants found for your search! 😖
          </h1>
        )}

        {restaurantData?.length === 0 &&
          [...Array(20)].map((item, index) => <ShimmerCard key={index} />)}

        {filteredRestaurants?.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant?.data?.id}`}
            key={restaurant?.data?.id}
          >
            <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id} />
          </Link>
        ))}
      </WideContainer>
    </>
  );
}

export default RestaurantList;
