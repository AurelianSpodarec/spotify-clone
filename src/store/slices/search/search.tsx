import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchRequest } from "services/spotify/api/search/search";


export interface EditorStateInterface {
    input: string;
    category: string;
    recentSearches: []
}

const initialState: EditorStateInterface = {
    input: "test",
    category: "artists",
    recentSearches: [],
}

const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
      const response = await searchRequest("test", "artists")
      return response.data
    }
  )

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
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
    extraReducers: (builder) => {
        
    }

});

export const { 
    setSearchInput,
    clearSearchInput,
    setSearchCategory,
    clearSearchCategory
} = searchSlice.actions;

export default searchSlice.reducer;