import { createSlice } from "@reduxjs/toolkit";


export interface EditorStateInterface {
    categories: {};
}

const initialState: EditorStateInterface = {
    categories: {"hi": "wo"}
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        }
    }

});

export const { setCategories, } = categoriesSlice.actions;

export default categoriesSlice.reducer;