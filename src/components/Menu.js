import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import WideContainer from "./UI/WideContainer";
import ShimmerCard from "./UI/ShimmerCard";
import MenuSection from "./MenuSection";
import { RESTAURANT_IMG_URL } from "../utils/constants";
import MenuHeader from "./MenuHeader";

function Menu() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [menuSection, setMenuSection] = useState([]);
  const { id } = useParams();

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
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${id}&submitAction=ENTER`
      );
      if (!response.ok) {
        return new Error("Something unexpected happened!");
      }

      const jsonData = await response.json();
      setRestaurantInfo(jsonData?.data?.cards[0]?.card?.card?.info);
      setMenuSection(
        jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    }
  }

  return (
    <WideContainer className="p-6">
      {menuSection?.length === 0 && (
        <div className="flex gap-6 flex-wrap">
          {[...Array(20)].map((item, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      )}

      <MenuHeader
        imageId={restaurantInfo?.cloudinaryImageId}
        name={restaurantInfo?.name}
        cuisines={restaurantInfo?.cuisines?.join(", ")}
        area={restaurantInfo?.areaName}
        locality={restaurantInfo?.locality}
        city={restaurantInfo?.city}
        costForTwo={restaurantInfo?.costForTwoMessage}
        rating={restaurantInfo?.avgRatingString}
        totalRatings={restaurantInfo?.totalRatingsString}
      />

      {menuSection.length > 0 &&
        menuSection?.map((section, index) => (
          <MenuSection
            sectionTitle={section?.card?.card?.title}
            carousel={section?.card?.card?.carousel}
            itemCards={section?.card?.card?.itemCards}
            categories={section?.card?.card?.categories}
            key={index}
          />
        ))}
    </WideContainer>
  );
}

export default Menu;
