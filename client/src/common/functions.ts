import { formatDistanceToNow } from "date-fns";

export const handleError = (error: any, rejectWithValue: any) => {
  if (error.response && error.response.data.error) {
    console.log(error.response.data.error);

    return rejectWithValue(error.response.data.error);
  } else {
    return rejectWithValue(error.message);
  }
};

export const formatDate = (passedDate: Date) => {
  return formatDistanceToNow(new Date(passedDate));
};
