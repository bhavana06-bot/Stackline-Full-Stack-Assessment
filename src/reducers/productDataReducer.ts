import {ApplicationState,ActionTypes} from '../utills/types'
  // Define the initial state
const initialState: ApplicationState = {
  data: [],
  error: undefined,
  };

  

  const productDataReducer = (state: ApplicationState = initialState, action: ActionTypes): ApplicationState => {
    switch (action.type) {
      case "FETCH_DATA_SUCCESS":{
        state.error = "";
        state.data = action.payload;
        return state;
      }
      case "FETCH_DATA_FAILURE":{
        state.error = action.payload
        state.data =[];
        return state;
      }
      default:
        return state;
    }
  };
  
  export default productDataReducer;