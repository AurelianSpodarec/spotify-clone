import { createSlice } from "@reduxjs/toolkit";

// TODO: Extract this into new slices accordingly - one slice per feature is better as this will get too big of a file to manage

 export interface EditorStateInterface {
    navigationHistory: {
        activeIndex: number,
        items: [string?]
    },
    clickedPlay: {
        item: {},
        isOpen: boolean;
    }
}

const initialState: EditorStateInterface = {
    navigationHistory: {
        activeIndex: 0,
        items: []
    },
    clickedPlay: {
        item: {},
        isOpen: false,
    }
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setHistoryItem: (state, action) => {
            state.navigationHistory.items.push(action.payload)
            state.navigationHistory.activeIndex = state.navigationHistory.activeIndex + 1
        },
        nextHistoryItem: (state) => {
            if(state.navigationHistory.activeIndex <= state.navigationHistory.items.length) return
            state.navigationHistory.activeIndex = state.navigationHistory.activeIndex + 1
        },
        prevHistoryItem: (state) => {
            if(state.navigationHistory.activeIndex === 0) return
            state.navigationHistory.activeIndex = state.navigationHistory.activeIndex - 1
        },
        setClickedPlay: (state, action) => {
            state.clickedPlay.item = action.payload
        },
        clearClickedPlay: (state) => {
            state.clickedPlay.item = {}
        },
        setClickedPlayOpen: (state) => {
            state.clickedPlay.isOpen = true
        },
        setClickedPlayClose: (state) => {
            state.clickedPlay.isOpen = false
        }
    }

});

export const { 
    setHistoryItem, 
    nextHistoryItem,
    prevHistoryItem,
   
    setClickedPlay,
    clearClickedPlay,
    setClickedPlayOpen,
    setClickedPlayClose
} = globalSlice.actions;

export default globalSlice.reducer;