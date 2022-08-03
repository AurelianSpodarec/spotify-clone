import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from './slices/categories/categoriesSlice';
import globalReducer from './slices/global/globalSlice';
import searchReducer from './slices/search/search';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        global: globalReducer,
        search: searchReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch