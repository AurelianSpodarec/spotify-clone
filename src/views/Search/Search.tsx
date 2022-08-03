import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { configCategories } from "config";
import { getBrowseCategories, getBrowseCategoryByID } from "services/spotify/api/categories/categories";
import { Shelf } from "components";
import { setSearchCategory } from "store/slices/search/search";


const CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function Search() {

    const dispatch = useDispatch()
    const search = useSelector((state:any) => state.search)

    const [categories, setCategories] = useState([])
    const [categoriesFetchStatus, setCategoriesFetchStatus] = useState(CATEGORIES_LIST_STATES.fetching)


    async function fetchCategories() { 
        const res = await getBrowseCategories();

        if(res.items && res.items.length === 0) {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.failure)
        } else {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.success)
            setCategories(res) 
        }
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

    function setCategory(category:any) {
        dispatch(setSearchCategory(category.slug))
    }

    function RenderCategoriesOptions() {
        return (
            <div className="sticky z-10 top-[64px] bg-[#121212]">
                <div className="px-8 pt-1 pb-3 space-x-3">

                    {configCategories && configCategories.map((category, index) => {
                        return (
                            <button onClick={() => setCategory(category)} key={index} className="inline-block py-1 px-3 rounded-2xl bg-[#232323]">
                                <span className="text-white font-semibold text-sm">{category.name}</span>
                            </button>
                        )
                    })}
                    
                </div>
            </div>
        )
    }

    useEffect(() => {
        fetchCategories()
    }, [categoriesFetchStatus])

    return (
        <div>

            <RenderCategoriesOptions />

            <Shelf title="Recent Searches" linkText="See all" link="/">

            </Shelf>

            <Shelf title="Browse all">
                <div className="grid gap-6 grid-cols-6 genre-list">
                    <RenderCategoriesListing />
                </div>
            </Shelf>
        </div>
    )
}

export default Search;