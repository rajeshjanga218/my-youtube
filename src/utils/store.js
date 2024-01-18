import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import serachSlice from "./serachSlice";
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
  reducer: { app: appSlice, search: serachSlice, chat: liveChatSlice },
});

export default store;
