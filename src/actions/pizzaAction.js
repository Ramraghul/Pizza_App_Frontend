import axios from "axios";
import {
  getPizzaData,
  addNewPizza,
  getPizzaId,
  updatesPizza,
  deletedPizza,
} from "../utils/APIRoutes";
import swal from "sweetalert";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get(getPizzaData);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
   await axios.post(addNewPizza, { pizza });

    dispatch({ type: "ADD_PIZZAS_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_PIZZAS_FAIL", payload: error });
  }
};

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post(getPizzaId, { pizzaId });

    dispatch({ type: "GET_PIZZABYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZABYID_FAIL", payload: error });
  }
};

export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZABYID_REQUEST" });
  try {
    const response = await axios.post(updatesPizza, { updatedPizza });

    dispatch({ type: "UPDATE_PIZZABYID_SUCCESS", payload: response.data });
    window.location.href = "/admin/pizzalist";
  } catch (error) {
    dispatch({ type: "UPDATE_PIZZABYID_FAIL", payload: error });
  }
};

export const deletePizza = (pizzaId) => async (dispatch) => {
  try {
    await axios.post(deletedPizza, { pizzaId });
    swal("Pizza Deleted Successfully!", "success");
    window.location.href = "/admin/pizzalist";
  } catch (error) {
    swal("Error while deleting pizza");
  }
};
