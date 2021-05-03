import React from "react";
import { bool } from "prop-types";
import { RefinementList } from "react-instantsearch-dom";

import { StyledFilters } from "./Filters.styled";

const Filters = ({ open, index }) => {
  return (
    <StyledFilters open={open}>
      <FiltersItem />
    </StyledFilters>
  );
};

function FiltersItem() {
  return (
    <div className="search-container">
      <div className="attributes-filters">
        <RefinementList attribute="food_type" />
        <RefinementList attribute="price_range" />
        <RefinementList attribute="stars_count" />
        <RefinementList attribute="dining_style" />
        <RefinementList attribute="price" />
        <RefinementList attribute="payment_options" />
      </div>
    </div>
  );
}

Filters.propTypes = {
  open: bool.isRequired,
};

export default Filters;
