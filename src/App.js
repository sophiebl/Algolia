import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Highlight,
  RefinementList,
  connectHits,
} from "react-instantsearch-dom";

import "./App.css";
import toastr from "toastr";
import StarRatingComponent from "react-star-rating-component";

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_ADMIN_KEY
);

const index = searchClient.initIndex("restaurants");
index.setSettings({
  searchableAttributes: ["name, food_type"],
  attributesForFaceting: [
    "stars_count",
    "price_range",
    "food_type",
    "payment_options",
    "dining_style",
    "price",
  ],
});

const handleRestaurantRemove = (objectID) => {
  index.deleteObject(objectID).then(() => {
    toastr.success("Restaurant is now removed from the database");
  });
};

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <InstantSearch searchClient={searchClient} indexName="restaurants">
          <Header />
          <div className="wrapper">
            <FiltersItem />
            <Results />
          </div>
        </InstantSearch>
      </>
    </ThemeProvider>
  );
}

function Header() {
  return (
    <header className="">
      <h1>RestO</h1>
      <i className="fa fa-search" />
      <SearchBox />
    </header>
  );
}

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

function Results() {
  return (
    <div className="results-container" id="results">
      <MyHits />
      <div className="pagination">
        <Pagination />
      </div>
    </div>
  );
}

const MyHits = connectHits(({ hits }) => {
  const hs = hits.map((hit) => <HitComponent key={hit.objectID} hit={hit} />);
  return (
    <div className="results" id="hits">
      {hs}
    </div>
  );
});

function HitComponent({ hit }) {
  const rateComment = (rate) => {
    if (rate > 4.5 && rate <= 5) return `Exceptional - ${rate}`;
    if (rate > 4.0 && rate <= 4.5) return `Excellent - ${rate}`;
    if (rate > 3.5 && rate <= 4) return `Awesome - ${rate}`;
    if (rate > 3 && rate <= 3.5) return `Good - ${rate}`;
    if (rate >= 2.5 && rate <= 3) return `Average - ${rate}`;
    if (rate >= 2 && rate < 2.5) return `Ok - ${rate}`;
    if (rate < 2) return `Not good - ${rate}`;
    else return rate;
  };

  return (
    <div className="hit-container">
      <div className="img-col">
        <img
          src={hit.image_url}
          align="left"
          alt={hit.name}
          className="hit-img"
        />
      </div>
      <div className="infos-col">
        <h2>
          <Highlight attribute="name" hit={hit} />
        </h2>
        <Highlight attribute="stars_count" hit={hit} />
        <StarRatingComponent
          name="rate"
          value={hit.stars_count}
          editing={false}
        />
        <span>{rateComment(hit.stars_count)}</span>
        <Highlight attribute="reviews_count" hit={hit} />
        <br />
        <StarRatingComponent
          name="price"
          editing={false}
          renderStarIcon={() => <span>$</span>}
          starCount={4}
          value={hit.price}
        />
        <br />
        <Highlight attribute="food_type" hit={hit} /> -
        <Highlight attribute="city" hit={hit} />
      </div>
      <div className="delete-col">
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation();
            handleRestaurantRemove(hit.objectID);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default App;
