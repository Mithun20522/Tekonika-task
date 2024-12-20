import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import patientReducer from "./slices/patientSlice";

const persistConfig = {
  key: "patient",
  storage,
  whitelist: ["basicDetails", "legalDocuments", "demographics"],
};

const persistedReducer = persistReducer(persistConfig, patientReducer);

export const store = configureStore({
  reducer: {
    patient: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
