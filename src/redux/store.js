import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./Contacts/filtersSlice";
import contactsReducer from "./Contacts/contactsSlice"
import { persistedAuthReducer } from "./Auth/authSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


export const store = configureStore({
    reducer: {
        phonebook: contactsReducer,
        filter: filterReducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

  export const persistor = persistStore(store)
