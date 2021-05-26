import React from "react";

import Filters from "../Filters/Filters";
import Results from "./Results";

export default function SearchContainer({ handleRestaurantRemove }) {
  return (
    <div className="wrapper">
      <Filters />
      <Results handleRestaurantRemove={handleRestaurantRemove} />
    </div>
  );
}
