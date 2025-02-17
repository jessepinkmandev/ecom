import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_admin_orders = createAsyncThunk(
  "order/get_admin_orders",
  async ({ perPage, page, search }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/get-admin-orders?page=${page}&&search=${search}&&perPage=${perPage}`,
        {
          withCredentials: true,
        }
      );

      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const orderReducer = createSlice({
  name: "order",
  initialState: {
    successMessage: "",
    errorMessage: "",
    order: {},
    totalOrder: 0,
    myOrders: [],
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_admin_orders.fulfilled, (state, { payload }) => {
      state.totalOrder = payload.totalOrder;
      state.myOrders = payload.orders;
    });
  },
});

export default orderReducer.reducer;
export const { messageClear } = orderReducer.actions;
