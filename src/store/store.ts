import {configureStore} from "@reduxjs/toolkit";

import homeReducer from "./reducers/homeReducer";
import {usersApi} from "./api/usersApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    homeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(({
      serializableCheck: false,
    })).concat([
      usersApi.middleware,
    ]),
});

export type TypeRootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

