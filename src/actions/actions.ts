import { Dispatch } from "redux";
import { ActionTypes } from '../utills/types'
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../constant";

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
      // API call to fetch mock data
      const response = await fetch("https://mocki.io/v1/cd569385-602e-4776-99a1-edb3f911d869"); // mock api 
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error: any) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

