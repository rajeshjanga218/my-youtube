import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "chat",
  initialState: {
    chatList: [],
  },
  reducers: {
    addChat: (state, action) => {
      if (state.chatList.length > 20) {
        state.chatList.splice(20, 1);
      }
      state.chatList.unshift(action.payload);
    },
  },
});

export const { addChat } = liveChatSlice.actions;

export default liveChatSlice.reducer;
