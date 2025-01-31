import axios from "axios";
import { Dispatch } from "redux";
import {ApplicationState,ActionTypes} from '../utills/types'
import { SORT, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,FETCH} from "../constant";




  
  export const fetchDataSuccess = (data: any): ActionTypes => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
  });
  
  export const fetchDataFailure = (error: string): ActionTypes => ({
    type: FETCH_DATA_FAILURE,
    payload: error
  });

export const fetchData = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    try {
      const response = await fetch("https://mocki.io/v1/cd569385-602e-4776-99a1-edb3f911d869");
      const data = await response.json();
      console.log('data in fetch',data);
      dispatch(fetchDataSuccess(data));
    } catch (error: any) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

