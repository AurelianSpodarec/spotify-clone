import { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchRequest } from "services/spotify/api/search/search";
import { clearSearchInput, setSearchData, setSearchInput } from "store/slices/search/search";
import { HistoryButtons, SearchBar } from "./sub-components";


function Header() {
    const dispatch = useDispatch();
    const global = useSelector((state:any ) => state.global);
    const search = useSelector((state:any) => state.search)

    const globalNavigationHistory = global.navigationHistory;
    const location = useLocation();

    async function fetchSearch() {
        const res = await searchRequest(search.input, search.category);
        dispatch(setSearchData(res))
        console.log(res)
    }

    function handleClearSearch() {
        dispatch(clearSearchInput())
    }

    // function handleKeyboardESC() {
    //     dispatch(clearSearchInput())
    // }

    function onValueChange(e:any) {
        // Debounce every 300ms
        dispatch(setSearchInput(e.target.value))
    }

    function initialLoad() {
        fetchSearch()
    }

    useEffect(() => {
        // fetchSearch()
    }, [search.input])

    useEffect(() => {
        initialLoad()
    }, [])

    return (
        <header className="sticky z-10 top-0 h-[64px] bg-[#121212]">
        <div className="flex px-8 py-3">
        
            <HistoryButtons />

            {location.pathname === "/search" && 
                <SearchBar 
                    search={search} 
                    onValueChange={onValueChange} 
                    handleClearSearch={handleClearSearch} 
                />
            }

        </div>
        </header>
    )
}

export default Header;