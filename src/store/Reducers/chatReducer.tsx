import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_customers = createAsyncThunk(
  "chat/get_customers",
  async (sellerId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/chat/get-customers/${sellerId}`);

      //   console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
//
export const get_customer_message = createAsyncThunk(
  "chat/get_customer_message",
  async (customerId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/chat/get-customer-message/${customerId}`,
        {
          withCredentials: true,
        }
      );

      //   console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
//

export const send_message = createAsyncThunk(
  "chat/send_message",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/chat/send-customer-message`, info, {
        withCredentials: true,
      });

      //   console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

//
export const get_sellers = createAsyncThunk(
  "chat/get_sellers",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/chat/admin/get-sellers`, {
        withCredentials: true,
      });

      //   console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
//
export const send_message_seller_admin = createAsyncThunk(
  "chat/send_message_seller_admin",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/chat/message-send-seller-admin`, info, {
        withCredentials: true,
      });
      // console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//
export const get_message_seller_admin = createAsyncThunk(
  "chat/get_message_seller_admin",
  async (receiverId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/chat/message-get-seller-admin/${receiverId}`,
        {
          withCredentials: true,
        }
      );
      // console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
//
//
export const get_message_seller1 = createAsyncThunk(
  "chat/get_message_seller1",
  async (receiverId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/chat/message-get-seller/`, {
        withCredentials: true,
      });
      // console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const chatReducer = createSlice({
  name: "chat",
  initialState: {
    successMessage: "",
    errorMessage: "",
    customers: [],
    messages: [],
    activeCustomer: [],
    activeSeller: [],
    activeAdmin: [],
    friends: [],
    seller_admin_message: [],
    currentSeller: [],
    currentCustomer: [],
    sellers: [],
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
    updateMessage: (state, { payload }) => {
      state.messages = [...state.messages, payload];
    },
    updateSellers: (state, { payload }) => {
      state.activeSeller = payload;
    },
    updateCustomers: (state, { payload }) => {
      state.activeSeller = payload;
    },
    updateAdminMessage: (state, { payload }) => {
      state.seller_admin_message = [...state.seller_admin_message, payload];
    },
    updateSellerMessage: (state, { payload }) => {
      state.seller_admin_message = [...state.seller_admin_message, payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_customers.fulfilled, (state, { payload }) => {
        state.customers = payload.customers;
      })
      .addCase(get_customer_message.fulfilled, (state, { payload }) => {
        state.currentCustomer = payload.currentCustomer;
        state.messages = payload.messages;
      })
      .addCase(send_message.fulfilled, (state, { payload }) => {
        let tempFriends = state.customers;
        let index = tempFriends.findIndex(
          (f) => f.fdId === payload.message.receiverId
        );
        while (index > 0) {
          let temp = tempFriends[index];
          tempFriends[index] = tempFriends[index - 1];
          tempFriends[index - 1] = temp;
          index--;
        }

        state.customers = tempFriends;
        state.messages = [...state.messages, payload.message];
        state.successMessage = "Message Sent";
      })
      .addCase(get_sellers.fulfilled, (state, { payload }) => {
        state.sellers = payload.sellers;
      })
      .addCase(send_message_seller_admin.fulfilled, (state, { payload }) => {
        state.seller_admin_message = [
          ...state.seller_admin_message,
          payload.messageData,
        ];
        state.successMessage = "Message Sent";
      })
      .addCase(get_message_seller_admin.fulfilled, (state, { payload }) => {
        state.seller_admin_message = payload.messages;
        state.currentSeller = payload.currentSeller;
      })
      .addCase(get_message_seller1.fulfilled, (state, { payload }) => {
        state.seller_admin_message = payload.messages;
      });
  },
});

export default chatReducer.reducer;
export const {
  messageClear,
  updateMessage,
  updateSellers,
  updateAdminMessage,
  updateSellerMessage,
  updateCustomers,
} = chatReducer.actions;
