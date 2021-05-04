import React, { useState } from "react";
import { Burger, Filters, RestaurantForm, PlusIcon } from "./components";
import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Highlight,
  RefinementList,
  connectHits,
} from "react-instantsearch-dom";

import {
  GoogleMapsLoader,
  GeoSearch,
  Control,
  Marker,
} from "react-instantsearch-dom-maps";

import { priceRange, rateComment } from "./helpers/FormatTextFilter";

import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRatingComponent from "react-star-rating-controlled-component";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import {
  faTrash,
  faMapMarkerAlt,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

toast.configure();

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_ADMIN_KEY
);

const index = searchClient.initIndex("restaurants");
index.setSettings({
  searchableAttributes: [
    "food_type, city, area, neighborhood",
    "name",
    "postal_code",
  ],
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

const handleRestaurantAdd = (inputs) => {
  const objects = [
    {
      ...inputs,
      area: "New York / Tri-State Area",
      country: "US",
      image_url: "https://www.opentable.com/img/restimages/99889.jpg",
      mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=99889",
      payment_options: ["AMEX", "MasterCard", "Visa"],
      phone: "7185754033x",
      postal_code: "11375",
      price: 3,
      reserve_url: "http://www.opentable.com/single.aspx?rid=99889",
      state: "NY",
      _geoloc: { lat: 40.710483, lng: -73.849684 },
      stars_count: 4.5,
      reviews_count: 36.0,
      neighborhood: "Forest Hills",
      phone_number: "(718) 575-4033",
      price_range: "$31 to $50",
      dining_style: "Casual Dining",
      rounded_stars_count: 5,
    },
  ];

  index
    .saveObjects(objects, { autoGenerateObjectIDIfNotExist: true })
    .then(({ objectIDs }) => {
      toast.success("Restaurant is now added to the database", {
        position: toast.POSITION.TOP_LEFT,
      });
    });
};

function App() {
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
  const [open, setOpen] = useState(false);
  const [openRestaurantForm, setOpenRestaurantForm] = useState(false);

  return (
    <header className="">
      <div className="burger">
        <Burger open={open} setOpen={setOpen} />
        <Filters open={open} index={index} />
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

function FiltersItem() {
  return (
    <div className="search-container">
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
        <Highlight attribute="food_type" hit={hit} />
        <br />
        <FontAwesomeIcon icon={faMapMarkerAlt} />
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
