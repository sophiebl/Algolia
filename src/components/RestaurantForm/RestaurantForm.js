import React from "react";
import { StyledForm } from "./RestaurantForm.styled";

import { useForm } from "react-hook-form";

const RestaurantForm = ({ openRestaurantForm, onRestaurantAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => data && onRestaurantAdd(data);

  return (
    <StyledForm open={openRestaurantForm}>
      <h3>Add a restaurant</h3>
      <form className="form-add-restaurant" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Name</label>
          <br />
          <input {...register("name", { required: true })} />
          <br />
          <span>{errors?.name?.type === "required" && "Name is required"}</span>
        </div>
        <div>
          <label> Address</label>
          <br />
          <input {...register("address", { required: true })} />
          <br />
          <span>
            {errors?.address?.type === "required" && "Address is required"}
          </span>
        </div>
        <div>
          <label> City</label>
          <br />
          <input {...register("city", { required: true })} />
          <br />
          <span>{errors?.city?.type === "required" && "City is required"}</span>
        </div>
        <div>
          <label> Food type</label>
          <br />
          <select {...register("food_type", { required: true })}>
            <option value="American">American</option>
            <option value="Italian">Italian</option>
            <option value="Steakhouse">Steakhouse</option>
            <option value="Steak">Steak</option>
            <option value="Japannese">Japannese</option>
            <option value="French">French</option>
            <option value="Mexican">Mexican</option>
          </select>
          <br />
          <span>
            {errors?.food_type?.type === "required" && "Food type is required"}
          </span>
        </div>
        <div>
          <label> Dining style</label>
          <br />
          <select {...register("dining_style")}>
            <option value="Casual Elgant">Casual Elgant</option>
            <option value="Casual Dining">Casual Dining</option>
            <option value="Fine Dining">Fine Dining</option>
            <option value="Home Style">Home Style</option>
          </select>
        </div>
        <button className="btn">Add</button>
      </form>
    </StyledForm>
  );
};

export default RestaurantForm;
