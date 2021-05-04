import React, { useState } from "react";
import { StyledForm } from "./RestaurantForm.styled";

const RestaurantForm = ({ openRestaurantForm, onRestaurantAdd }) => {
  const [inputs, setInputs] = useState({ name: "" });

  console.log(inputs);

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    setInputs((inputs) => ({
      ...inputs,
      objectID: id,
    }));
    onRestaurantAdd(inputs);
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <StyledForm open={openRestaurantForm}>
      <h3>Add a restaurant</h3>
      <form className="form-add-restaurant" onSubmit={handleSubmit}>
        <div>
          <label> Name</label>
          <br />
          <input
            type="text"
            name="name"
            required
            onChange={handleInputChange}
            value={inputs.name}
          />
        </div>
        <div>
          <label>address</label>
          <br />
          <input
            type="text"
            name="address"
            required
            onChange={handleInputChange}
            value={inputs.address}
          />
        </div>
        <div>
          <label>City</label>
          <br />
          <input
            type="text"
            name="city"
            required
            onChange={handleInputChange}
            value={inputs.city}
          />
        </div>
        <div>
          <label>Food type</label>
          <br />
          <input
            type="text"
            name="food_type"
            required
            onChange={handleInputChange}
            value={inputs.food_type}
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </StyledForm>
  );
};

export default RestaurantForm;
