import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";

import { searchRequest } from "services/spotify/api/search/search";
import { clearSearchInput, setSearchData, setSearchInput } from "store/slices/search/search";

import { HistoryButtons, SearchBar } from "./sub-components";


function Header() {
    const dispatch = useDispatch();
    const global = useSelector((state:any ) => state.global);
    const search = useSelector((state:any) => state.search)

    const location = useLocation();

    // console.log("global", global)

    // TODO UX
    // When user clicks `All`, search will be ereased 
    // When user goes to input, preselect 'artists' as default, because spotify api is meh

    async function fetchSearch() {
        const res = await searchRequest(search.input, search.category);
        console.log("header", res)
        dispatch(setSearchData(res))
    }

    function handleClearSearch() {
        dispatch(clearSearchInput())
    }

    function onValueChange(e:any) {
        // Debounce every 300ms, use something like load-dash or do this in redux
        dispatch(setSearchInput(e.target.value))

        const nextURL = `http://localhost:3000/search/${e.target.value}/${search.category}`;
        // add category at the end, if it exists
        window.history.replaceState(null, "", nextURL)
    }

    useEffect(() => {
        fetchSearch()
    }, [search.input])

    useEffect(() => {
        fetchSearch()
    }, [])

    return (
        <header className="sticky z-10 top-0 h-[64px] bg-[#121212]">
        <div className="flex px-8 py-3">
        
            <HistoryButtons />

            {/* {location.pathname === "/search" &&  */}
                <SearchBar 
                    search={search} 
                    onValueChange={onValueChange} 
                    handleClearSearch={handleClearSearch} 
                />
            {/* } */}

        </div>
        </header>
    )
}

export default Header;