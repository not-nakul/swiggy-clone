import { RESTAURANT_IMG_URL } from "../utils/constants";

function RestaurantCard({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwoString,
  avgRating,
  lastMileTravelString,
  slaString,
}) {
  const rating = parseFloat(avgRating);
  return (
    <article className="flex flex-col gap-4 w-72 h-full p-4 border rounded-lg hover:shadow-lg hover:cursor-pointer">
      <img
        src={RESTAURANT_IMG_URL + cloudinaryImageId}
        className="rounded-lg"
      />

      <div>
        <h1 className="text-slate-800 text-lg font-bold ">{name}</h1>
        <p className="text-slate-600 text-sm text">{cuisines.join(", ")}</p>
      </div>

      <div className="flex justify-between items-center text-slate-600 text-sm">
        <p
          className={`text-white font-semibold p-0.5 ${
            rating >= 4 ? `bg-green-500` : `bg-orange-500`
          }`}
        >
          ⭐{avgRating}
        </p>
        <p>{costForTwoString}</p>
      </div>

      <hr></hr>

      <div className="flex justify-between items-center text-slate-600 text-sm">
        <p>{lastMileTravelString}</p>
        <p>{slaString}</p>
      </div>
    </article>
  );
}

export default RestaurantCard;
