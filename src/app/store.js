import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movies } from "../services/Api";

export const store = configureStore({
    reducer: {
        [movies.reducerPath]: movies.reducer,
    },
    middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(movies.middleware),
})

setupListeners(store.dispatch)