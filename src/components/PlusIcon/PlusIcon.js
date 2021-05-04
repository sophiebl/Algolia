import React from "react";
import { bool, func } from "prop-types";
import { StyledPlusIcon } from "./PlusIcon.styled";

const PlusIcon = ({ openRestaurantForm, setOpenRestaurantForm }) => {
  return (
    <StyledPlusIcon
      openRestaurantForm={openRestaurantForm}
      onClick={() => setOpenRestaurantForm(!openRestaurantForm)}
    >
      <div className="plus alt"></div>
    </StyledPlusIcon>
  );
};

PlusIcon.propTypes = {
  openRestaurantForm: bool.isRequired,
  setOpenRestaurantForm: func.isRequired,
};

export default PlusIcon;
