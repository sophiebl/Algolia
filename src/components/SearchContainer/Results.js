import React from "react";
import { Pagination, Highlight, connectHits } from "react-instantsearch-dom";
import StarRatingComponent from "react-star-rating-controlled-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { rateComment } from "../../helpers/FormatTextFilter";

// import {
//   GoogleMapsLoader,
//   GeoSearch,
//   Control,
//   Marker,
// } from "react-instantsearch-dom-maps";

export default function Results({ handleRestaurantRemove }) {
  const MyHits = connectHits(({ hits }) => {
    const hs = hits.map((hit) => <HitComponent key={hit.objectID} hit={hit} />);
    return (
      <div className="results" id="hits">
        {hs}
      </div>
    );
  });

  const HitComponent = ({ hit }) => {
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
          <div>
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
          </div>
          <div>
            <StarRatingComponent
              name="price"
              editing={false}
              renderStarIcon={() => <span>$</span>}
              starCount={4}
              value={hit.price}
            />
            <span className="separator">·</span>
            <Highlight attribute="food_type" hit={hit} />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="mr-5"
              style={{ marginRight: 5 }}
            />
            <Highlight attribute="city" hit={hit} />
          </div>
        </div>
        <div className="delete-col">
          <button
            className="btn secondary"
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
  };

  return (
    <div id="results">
      <div style={{ height: 100 }}>
        {/* <GoogleMapsLoader
              apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
              endpoint="https://maps.googleapis.com/maps/api/js?v=weekly"
            >
              {(google) => (
                <GeoSearch
                  google={window.google}
                  initialZoom={8}
                  mapTypeId={google.maps.MapTypeId.SATELLITE}
                  initialPosition={{
                    lat: 48.88038,
                    lng: 2.32695,
                  }}
                >
                  {({ hits }) => (
                    <div>
                      <Control />
                      {hits.map((hit) => (
                        <Marker key={hit.objectID} hit={hit} />
                      ))}
                    </div>
                  )}
                </GeoSearch>
              )}
            </GoogleMapsLoader> */}
      </div>

      <MyHits />
      <div className="pagination">
        <Pagination />
      </div>
    </div>
  );
}
