import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchRequest } from "services/spotify/api/search/search";


export interface SearchStateInterface {
    input: string;
    category: string;
    data: [],
    recentSearches: []
}

const initialState: SearchStateInterface = {
    input: "d",
    category: "artist",
    data: [],
    recentSearches: [],
}

// const fetchSearch = createAsyncThunk(
//     'search/fetchSearch',
//     async (state, userId: number, thunkAPI) => {
//       const response = await searchRequest(state.input, state.category)
//       return response.data
//     }
//   )

 
export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchData: (state, action) => {
            state.data = action.payload
        },
        setSearchInput: (state, action) => {
            state.input = action.payload
        },
        clearSearchInput: (state) => {
            state.input = ""
        },
        setSearchCategory: (state, action) => {
            state.category = action.payload
        },
        clearSearchCategory: (state) => {
            state.category = "";
        }
        // search
    },
    // extraReducers: (state) => {
    //     fetchSearch(state)
    // }

});

export const { 
    setSearchData,
    setSearchInput,
    clearSearchInput,
    setSearchCategory,
    clearSearchCategory
} = searchSlice.actions;

export default searchSlice.reducer;