import React from "react";
import algoliasearch from "algoliasearch";
import { InstantSearch, SearchBox, Configure } from "react-instantsearch-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import SearchContainer from "./components/SearchContainer";
import Header from "./components/Header";

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
    "city",
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
    toast("This restaurant is now removed from the database !", {
      position: toast.POSITION.TOP_LEFT,
    });
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
    .then(() => {
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
          <Configure aroundLatLngViaIP={true} />
          <Header
            index={index}
            SearchBox={SearchBox}
            handleRestaurantAdd={handleRestaurantAdd}
          />
          <SearchContainer handleRestaurantRemove={handleRestaurantRemove} />
        </InstantSearch>
      </>
    </ThemeProvider>
  );
}

export default App;
