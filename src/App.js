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

import React from "react";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_ADMIN_KEY
);

const index = searchClient.initIndex("restaurants");
index.setSettings({
  searchableAttributes: ["name, food_type"],
  attributesForFaceting: ["stars_count", "price_range", "food_type"],
});

const handleDocumentRemove = (objectID) => {
  index.deleteObject(objectID).then(() => {
    toastr.success("Restaurant is now removed from the database");
  });
};

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName="restaurants">
      <Header />
      <Filters />
      <Results />
    </InstantSearch>
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

function Filters() {
  return (
    <div className="search-container">
      <div className="attributes-filters">
        <RefinementList attribute="food_type" />
        <RefinementList attribute="price_range" />
        <RefinementList attribute="stars_count" />
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
  return (
    <div className="hit-container">
      <div className="img-container">
        <img
          src={hit.image_url}
          align="left"
          alt={hit.name}
          className="hit-img"
        />
      </div>
      <div className="infos-container">
        <Highlight attribute="name" hit={hit} /> -
        <Highlight attribute="stars_count" hit={hit} />
        <StarRatingComponent
          name="rate"
          value={hit.stars_count}
          editing={false}
        />
        <br />
        <Highlight attribute="food_type" hit={hit} /> -
        <Highlight attribute="city" hit={hit} />
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDocumentRemove(hit.objectID);
        }}
      >
        Supprimer
      </button>
    </div>
  );
}

export default App;
