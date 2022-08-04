import react, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setSearchCategory } from "store/slices/search/search";

import { configCategories } from "config";
import { getBrowseCategories, getBrowseCategoryByID } from "services/spotify/api/categories/categories";

import { Card, Card2, Shelf } from "components";
import { ArtistsList } from "views/Artists/sub-components/index";

const CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function Search() {

    let { userId } = useParams();

    const dispatch = useDispatch()
    const search = useSelector((state:any) => state.search)
    const global = useSelector((state:any ) => state.global);

    const [categories, setCategories] = useState([])
    const [categoriesFetchStatus, setCategoriesFetchStatus] = useState(CATEGORIES_LIST_STATES.fetching)
    
    console.log("Page search", search)
    
    async function fetchCategories() { 
        const res = await getBrowseCategories();
    
        if(res.items && res.items.length === 0) {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.failure)
        } else {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.success)
            setCategories(res) 
        }
    }

    function setCategory(category:any) {
        dispatch(setSearchCategory(category.slug))
    }


    // Categories nav - on click, re-fetch 
    function RenderCategoriesOptions() {
        if(!configCategories) return <></>
        return (
            <div className="sticky z-10 top-[64px] bg-[#121212]">
                <div className="px-8 pt-1 pb-3 space-x-3">

                    {configCategories && configCategories.map((category, index) => {
                        return (
                            <button onClick={() => setCategory(category)} key={index} className={`${search.category === category.slug ? "text-black bg-white" : "text-white bg-[#232323]"} ${index === 0 && "mr-4"} inline-block py-1 px-3 rounded-2xl `}>
                                <span className="font-semibold text-sm">{category.name}</span>
                            </button>
                        )
                    })}
                    
                </div>
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

    // console.log("wooooooooooo", search.recentSearches)

    function RenderRecentSearch() {
        return (
            <Shelf title="Recent Searches" linkText="See all" link="/recent-searches">
            <div className="grid gap-6 grid-cols-6">

                {search.recentSearches.slice(0, 6).map((item:any) => {
                        return (
                            <Card 
                                key={item.id}
                                item={item}
                                canDelete={true}
                                fetchStatus="success"
                            />
                        )
                    })
                }

            </div>
            </Shelf>
        )
    }

    return (
        <div>

            <RenderCategoriesOptions />
       
            {search.category === "artist" && 
                <Shelf>
                        {/*@ts-ignore  */}
                    <ArtistsList data={search.data} fetchStatus="success"/>
                </Shelf>
            }
            
            {search.category === "" &&
            <>

                {search && search.recentSearches.length !== 0 && 
                    <RenderRecentSearch />
                }

                <Shelf title="Browse all">
                    <div className="grid gap-6 grid-cols-6 genre-list">
                        <RenderCategoriesListing />
                    </div>
                </Shelf>
                
            </>
            }
        </div>
    )
}

export default Search;