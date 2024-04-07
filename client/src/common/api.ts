import { handleError } from "./functions";
import axios from "axios";

export const URL = "http://localhost:3000/api";

const apiInstance = axios.create({
  baseURL: URL,
});

// Response interceptor
apiInstance.interceptors.response.use((response) => {
  // You can modify the response data here
  return response.data;
});

export const commonReduxRequest = async (
  method: string,
  route: string,
  body: {},
  rejectWithValue: any
) => {
  let requestConfig = {
    method: method,
    url: route,
    data: body,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    withCredentials: true,
  };

  try {
    const response = await apiInstance(requestConfig);

    return response;
  } catch (error) {
    console.log(error);
    return handleError(error, rejectWithValue);
  }
};

export const commonRequest = async (
  method: string,
  route: string,
  body?: {}
) => {
  let requestConfig = {
    method: method,
    url: route,
    data: body,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    withCredentials: true,
  };

  try {
    const response = await apiInstance(requestConfig);

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
