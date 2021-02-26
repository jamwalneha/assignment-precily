const initialState = {
  isAddRequest: false,
  isAddSuccess: false,
  isAddError: false,
  addMessage: "",

  isUpdateRequest: false,
  isUpdateSuccess: false,
  isUpdateError: false,
  updateMessage: "",

  isGetRequest: false,
  isGetSuccess: false,
  isGetError: false,
  getData: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // ADD TODO

    case "ADD_REQUEST": {
      return {
        ...state,
        isAddRequest: true,
        isAddSuccess: false,
        isAddError: false,
        addMessage: "",
      };
    }
    case "ADD_SUCCESS": {
      return {
        ...state,
        isAddRequest: false,
        isAddSuccess: true,
        isAddError: false,
        addMessage: action.payload,
      };
    }
    case "ADD_ERROR": {
      return {
        ...state,
        isAddRequest: false,
        isAddSuccess: false,
        isAddError: true,
        addMessage: action.payload,
      };
    }

    // UPDATE TODO

    case "UPDATE_REQUEST": {
      return {
        ...state,
        isUpdateRequest: true,
        isUpdateSuccess: false,
        isUpdateError: false,
        updateMessage: "",
      };
    }
    case "UPDATE_SUCCESS": {
      return {
        ...state,
        isUpdateRequest: false,
        isUpdateSuccess: true,
        isUpdateError: false,
        updateMessage: action.payload,
      };
    }
    case "UPDATE_ERROR": {
      return {
        ...state,
        isUpdateRequest: false,
        isUpdateSuccess: false,
        isUpdateError: true,
        updateMessage: action.payload,
      };
    }

    //GET TODO

    case "GET_REQUEST": {
      return {
        ...state,
        isGetRequest: true,
        isGetSuccess: false,
        isGetError: false,
        getData: null,
      };
    }
    case "GET_SUCCESS": {
      return {
        ...state,
        isGetRequest: false,
        isGetSuccess: true,
        isGetError: false,
        getData: action.payload,
      };
    }
    case "GET_ERROR": {
      return {
        ...state,
        isGetRequest: false,
        isGetSuccess: false,
        isGetError: true,
        getData: null,
      };
    }

    default:
      return state
  }
};

export default dataReducer;
