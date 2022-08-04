import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchRequest } from "services/spotify/api/search/search";


export interface SearchStateInterface {
    input: string;
    category: string;
    data: [],
    recentSearches: []
}

const initialState: SearchStateInterface = {
    input: "",
    category: "",
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
        setSearchData: (state, { payload }) => {
            state.data = payload
        },
        setSearchInput: (state, { payload }) => {
            state.input = payload
        },
        clearSearchInput: (state) => {
            state.input = ""
        },
        setSearchCategory: (state, { payload }) => {
            state.category = payload
        },
        clearSearchCategory: (state) => {
            state.category = "";
        },
        setRecentSearchItem: (state, { payload }) => {
            const inArray = state.recentSearches.find((item:any) => item.id === payload.id);
            if(inArray) return
             //@ts-ignore
            state.recentSearches.unshift(payload) 
        },
        removeRecentSearchItem: (state, { payload }) => {
          // @ts-ignore
           state.recentSearches.splice(state.recentSearches.findIndex((item) => item.id === payload.id), 1);
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
    clearSearchCategory,
    setRecentSearchItem,
    removeRecentSearchItem
} = searchSlice.actions;

export default searchSlice.reducer;