import React from "react";
import { bool } from "prop-types";
import { RefinementList } from "react-instantsearch-dom";

import { StyledFilters } from "./Filters.styled";
import { priceRange } from "../../helpers/FormatTextFilter";

const Filters = ({ open }) => {
  return (
    <StyledFilters open={open}>
      <div className="attributes-filters">
        <h4>City</h4>
        <RefinementList attribute="city" />
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
    </StyledFilters>
  );
};

Filters.propTypes = {
  open: bool.isRequired,
};

export default Filters;
