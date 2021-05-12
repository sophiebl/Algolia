import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import Burger from "./Burger/Burger";
import Filters from "./Filters/Filters";
import RestaurantForm from "./RestaurantForm/RestaurantForm";
import PlusIcon from "./PlusIcon/PlusIcon";

export default function Header({ index, SearchBox, handleRestaurantAdd }) {
  const [open, setOpen] = useState(false);
  const [openRestaurantForm, setOpenRestaurantForm] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <header>
      <div className="burger" ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Filters open={open} index={index} mobile />
      </div>
      <h1>
        <span className="logo">Restaurants</span>
        <FontAwesomeIcon icon={faUtensils} />
      </h1>
      <SearchBox
        translations={{
          placeholder: "Location, Restaurant or Cuisine",
        }}
      />
      <div>
        <PlusIcon
          openRestaurantForm={openRestaurantForm}
          setOpenRestaurantForm={setOpenRestaurantForm}
        />
        <RestaurantForm
          openRestaurantForm={openRestaurantForm}
          onRestaurantAdd={handleRestaurantAdd}
        />
      </div>
    </header>
  );
}
