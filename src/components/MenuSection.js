import { Fragment, useState } from "react";

import MenuItem from "./MenuItem";

function MenuSection({
  toggleMenu,
  sectionTitle,
  carousel,
  itemCards,
  categories,
}) {
  const [isShown, setIsShown] = useState(false);
  function toggleMenu() {
    setIsShown((previous) => !previous);
  }

  return (
    <section className="flex flex-col gap-4 py-3">
      {sectionTitle && (
        <>
          <div className="flex justify-start gap-4 p-6 bg-slate-200 rounded-lg">
            <h1 className="font-bold text-2xl">{sectionTitle}</h1>
            <button className="text-sm underline" onClick={toggleMenu}>
              {isShown ? "hide" : "show"}
            </button>
          </div>
        </>
      )}

      {carousel?.map((item) => (
        <MenuItem
          isShown={isShown}
          vegClassifier={item?.dish?.info?.itemAttribute?.vegClassifier}
          name={item?.dish?.info?.name}
          price={item?.dish?.info?.price}
          description={item?.dish?.info?.description}
          imageId={item?.dish?.info?.imageId}
          key={item?.dish?.info?.id}
        />
      ))}

      {itemCards?.map((item) => (
        <MenuItem
          isShown={isShown}
          vegClassifier={item?.card?.info?.itemAttribute?.vegClassifier}
          name={item?.card?.info?.name}
          price={item?.card?.info?.price}
          description={item?.card?.info?.description}
          imageId={item?.card?.info?.imageId}
          key={item?.card?.info?.id}
        />
      ))}

      {categories?.map((category, index) => (
        <Fragment key={index}>
          {category?.itemCards?.map((item) => (
            <MenuItem
              isShown={isShown}
              vegClassifier={item?.card?.info?.itemAttribute?.vegClassifier}
              name={item?.card?.info?.name}
              price={item?.card?.info?.price}
              description={item?.card?.info?.description}
              imageId={item?.card?.info?.imageId}
              key={item?.card?.info?.id}
            />
          ))}
        </Fragment>
      ))}
    </section>
  );
}

export default MenuSection;
