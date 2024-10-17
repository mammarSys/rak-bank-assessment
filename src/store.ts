import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;

const store = configureStore({
  reducer: {
    name: nameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
