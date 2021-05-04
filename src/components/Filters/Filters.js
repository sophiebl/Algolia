import React from "react";
import { bool } from "prop-types";
import { RefinementList } from "react-instantsearch-dom";

import { StyledFilters } from "./Filters.styled";
import { priceRange } from "../../helpers/FormatTextFilter";

const Filters = ({ open, index }) => {
  return (
    <StyledFilters open={open}>
      <FiltersItem />
    </StyledFilters>
  );
};

function FiltersItem() {
  return (
    <div>
      <div className="attributes-filters">
        <h4>Food type</h4>
        <RefinementList attribute="food_type" />
        <h4>Rate</h4>
        <RefinementList attribute="stars_count" />
        <h4>Dining style</h4>
        <RefinementList attribute="dining_style" />
        <h4>Price</h4>
        <RefinementList
          attribute="price"
          transformItems={(items) =>
            items.map((item) => {
              return {
                ...item,
                label: `${"$".repeat(parseInt(item.label))} ${priceRange(
                  item.label
                )}`,
              };
            })
          }
        />
        <h4>Payment options</h4>
        <RefinementList attribute="payment_options" />
      </div>
    </div>
  );
}

Filters.propTypes = {
  open: bool.isRequired,
};

export default Filters;
