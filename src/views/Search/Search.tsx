import react, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getBrowseCategories, getBrowseCategoryByID } from "services/spotify/api/categories/categories";
import { getAvailableGenreSeeds } from "services/spotify/api/genre/genre";
import { getCategoriesPlaylists, getFeaturedPlaylists, getPlaylist } from "services/spotify/api/playlist/playlist";
  
// Original URL: https://open.spotify.com/search
//=========================================================


  // TASK: 
    // 1. Output browse/categories
    // 2. Show subsequent categories
    // 3. Add pagination

// Fetch categories
// fetch sub-categories and create new categories list 


// Each of this item will go to genre
// /genre/hip-hop - list of hip hop

// TODO: Maybe create something to abstract these, idealy have a name that need to be written
const CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

const SUB_CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function Search() {
    const test = useSelector((state:any) => state.categories)

    const [categories, setCategories] = useState([])
    const [categoriesFetchStatus, setCategoriesFetchStatus] = useState(CATEGORIES_LIST_STATES.fetching)

    const [subCategories, setSubCategories] = useState([])
    const [subCategoriesFetchStatus, setSubCategoriesFetchStatus] = useState(SUB_CATEGORIES_LIST_STATES.fetching)
  
    async function fetchCategories() { 
        const res = await getBrowseCategories();
        // const ress = await getCategoriesPlaylists("summer")
        // console.log("hi", res)
        if(res.items && res.items.length === 0) {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.failure)
        } else {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.success)
            setCategories(res) 
            // console.log("sub cat", res)
        }
    }

    async function fetchSubCategories() {
        // const res = await getPlaylist();
        const res = await getAvailableGenreSeeds();
    }

    function RenderCategoryItem(props:any) {
        const { key, item, fetchStatus } = props;

        if(categoriesFetchStatus === "fetching") {
            return (
                <div key={key} className="w-full h-24 border-2 rounded-md mx-auto mt-20">
                <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">

                    <div className="w-12 bg-gray-300 h-12 rounded-full "></div>

                    <div className="flex flex-col space-y-3">
                        <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                        <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                    </div>

                </div>
                </div>
            )
        } else {
            return (
                <div key={key} className="relative rounded-lg overflow-hidden">
                <a href={item.href} className="block h-[180px]">

                    <h3 className="p-4 text-white text-2xl font-bold">{item.name}</h3>
                    <img className="absolute bottom-0 right-0 h-24 w-24" style={{ transform: "rotate(25deg) translate(18%,-2%)" }} src={item.icons[0].url} alt={item.name} />
                 
                </a>
                </div>
            )    
        }
        
    }

    function RenderCategoriesListing() {
        if(categoriesFetchStatus === "fetching") {
            return [...Array(9)].map((_, index) => {
                return (
                    <RenderCategoryItem 
                        key={index} 
                        fetchStatus={categoriesFetchStatus} 
                    />
                )
            })
        } else if (categoriesFetchStatus === "success") {//@ts-ignore
            return categories && categories.items.map((category:{}, index:number) => {
                return (
                    <RenderCategoryItem 
                        key={index}
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
        fetchSubCategories()
    }, [categoriesFetchStatus])

    return (
        <div className="">
            <header className="px-8 pb-6 pt-10">
                <h2 className="text-white text-2xl font-bold">Browse all</h2>
            </header>

            <section className="px-8">
                <div className="grid gap-6 grid-cols-6 genre-list">
                    <RenderCategoriesListing />
                </div>
            </section>
        </div>
    )
}

export default Search;