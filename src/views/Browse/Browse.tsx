import react, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setSearchCategory } from "store/slices/search/search";

import { configCategories } from "config";
import { getBrowseCategories, getBrowseCategoryByID } from "services/spotify/api/categories/categories";

import { Card, Card2, Shelf } from "components";
import { ArtistsList } from "views/Artists/sub-components/index";
import { getCurrentUserProfile } from "services/spotify/api/profile/profile";

// SPOTCHIP TEST FILE

// TODO: Add TS support for the states
const CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function Browse() {

    const dispatch = useDispatch()
    const search = useSelector((state:any) => state.search)

    const [categories, setCategories] = useState([])
    const [categoriesFetchStatus, setCategoriesFetchStatus] = useState(CATEGORIES_LIST_STATES.fetching)
    
    // console.log("Page search", search)
    
    async function fetchCategories() { 
        const res = await getBrowseCategories();

        if(res.items && res.items.length === 0) {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.failure)
        } else {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.success)
            setCategories(res) 
        }
    }
 

    function RenderPagination(props:any) {
        const { data } = props;
        if(!data) <></>

        let currentPage = 1;
        let totalPages = Math.ceil(data.total / data.limit)
        
        let showNumberOfPages = 3;
        

        function lastPage() {

        }

        function prevPage() {

        }

        function nextPage() {

        }

        // console.log(data)

        // display all pages

        // console.log(totalPages)
    
        function pageLinks() {
            let a = Array.from({ length: totalPages }, (_, index) => <div key={index}>{index + 1}</div>);
            console.log("aaa", a)
            return a;
        }
      
        return (
            <div className="text-white space-x-2">
                <button>
                    Prev
                </button>

                    <div>
                        {pageLinks()}
                        <span>...</span>
                        <span>{totalPages - 1}</span>
                        <Link to="search">{totalPages}</Link>
                    </div>

                <button>
                    Next
                </button>
            </div>
        )
    }
 

    // Categories Listing/ Browse All
    // TODO: Don't show categories, except `All` untill the user has typed something in the searchBar
    function RenderCategoriesListing() {
        if(categoriesFetchStatus === "fetching") {
            return [...Array(9)].map((_, index) => {
                return (//@ts-ignore
                    <Card2 
                        key={index} 
                        fetchStatus={categoriesFetchStatus} 
                    />
                )
            })
        } else if (categoriesFetchStatus === "success") {//@ts-ignore
            return categories && categories.items.map((category:{}, index:number) => {
                return (
                    <Card2 
                        key={index}//@ts-ignore
                        item={category} 
                        fetchStatus={categoriesFetchStatus}
                    />
                )
            })
        } else if(categoriesFetchStatus === "failure") {
            return <h1>No categories found ;-(</h1>
        } 
    }

    useEffect(() => {
        fetchCategories()
    }, [categoriesFetchStatus])

    return (
        <div>
 
            <Shelf title="Browse all">
                <div className="grid gap-6 grid-cols-6 genre-list">
                    <RenderCategoriesListing />
                </div>
            </Shelf>   
          
        </div>
    )
}

export default Browse;