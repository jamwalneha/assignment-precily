import axios from "axios";

export const addData = (add_data) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_REQUEST" });
    const { data } = await axios.post("/add-data", add_data);
    if (data.success === 1) {
      dispatch({ type: "ADD_SUCCESS", payload: data.message });
    } else {
      dispatch({ type: "ADD_ERROR", payload: data.message });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: "ADD_ERROR", payload: "server error, try again" });
  }
};

export const updateData = (update_data) => async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      const { data } = await axios.put("/update-data", update_data);
      if (data.success === 1) {
        dispatch({ type: "UPDATE_SUCCESS", payload: data.message });
      } else {
        dispatch({ type: "UPDATE_ERROR", payload: data.message });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "UPDATE_ERROR", payload: "server error, try again" });
    }
  };

  export const getData = () => async (dispatch) => {
    try {
      dispatch({ type: "GET_REQUEST" });
      const { data } = await axios.get("/get-data");
      if (data.success === 1) {
        dispatch({ type: "GET_SUCCESS", payload: data.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
