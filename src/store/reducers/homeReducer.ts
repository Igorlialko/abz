import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface HomeState {
  pages: number[],
  disabledUsersButton: boolean,
}

const initialState: HomeState = {
  pages: [1],
  disabledUsersButton: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addPages(state) {
      state.pages.push(state.pages[state.pages.length - 1] + 1);
    },
    nullPages(state) {
      state.pages = [1];
    },
    setDisabledUsersButton(state, {payload}: PayloadAction<boolean>) {
      state.disabledUsersButton = payload;
    },
  },
});

export const userActions = homeSlice.actions;
export default homeSlice.reducer;
