import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
  DispatchProp,
} from "react-redux";

import playerReducer from "./features/playerSlice";
import { shazamApi } from "@/services/shazam_rapid";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
  reducer: {
    player: playerReducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch: () => AppDispatch = useReduxDispatch;
