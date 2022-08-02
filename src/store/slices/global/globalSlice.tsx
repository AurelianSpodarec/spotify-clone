import { createSlice } from "@reduxjs/toolkit";


export interface EditorStateInterface {
    navigationHistory: {
        activeIndex: number,
        items: [string?]
    }
}

const initialState: EditorStateInterface = {
    navigationHistory: {
        activeIndex: 0,
        items: []
    }
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setHistoryItem: (state, action) => {
            state.navigationHistory.items.push(action.payload)
        },
        nextHistoryItem: (state) => {
            if(state.navigationHistory.activeIndex <= state.navigationHistory.items.length) return
            state.navigationHistory.activeIndex = state.navigationHistory.activeIndex + 1
        },
        prevHistoryItem: (state) => {
            if(state.navigationHistory.activeIndex === 0) return
            state.navigationHistory.activeIndex = state.navigationHistory.activeIndex - 1
        }
    }

});

export const { 
    setHistoryItem, 
    nextHistoryItem,
    prevHistoryItem 
} = globalSlice.actions;

export default globalSlice.reducer;