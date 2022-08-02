import react, { useState, useEffect } from "react";
import { getBrowseCategories } from "services/spotify/api/categories/categories";
import { getFeaturedPlaylists } from "services/spotify/api/playlist/playlist";
  

  // TASK: 
    // 1. Output browse/categories
    // 2. Show subsequent categories
    // 3. Add pagination

// Fetch categories
// fetch sub-categories and create new categories list 

function Home() {

    const [categories, setCategories] = useState([])
    // const [subCategories, setSubCategories] = useState([])
    const [fetchStatus, setFetchStatus] = useState('fetching')

  
    async function fetchCategories() { 
        const res = await getBrowseCategories()
        setCategories(res) 
        setFetchStatus('success')
    }


    function RenderCategoryItem(props:any) {
        const { key, item, fetchStatus } = props;

        if(fetchStatus === "fetching") {
            return (
                <div key={key} className="w-60 h-24 border-2 rounded-md mx-auto mt-20">
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
                <div key={key}>
                    {item.name}
                </div>
            )    
        }
        
    }

    function RenderCategoriesListing() {
        console.log("Cat data", categories.items)
        if(fetchStatus === "fetching") {
            return [...Array(9)].map((_, index) => {
                return <RenderCategoryItem key={index} fetchStatus={fetchStatus} />
            })
        } else if (fetchStatus === "success") {
            return categories && categories.items.map((category:{}, index:number) => {
                return (
                    <RenderCategoryItem 
                        key={index}
                        item={category} 
                        fetchStatus={fetchStatus}
                    />
                )
            })
        } else if(fetchStatus === "failure") {
            return <h1>No categories found ;-(</h1>
        } 
    }

    useEffect(() => {
        fetchCategories()
    }, [fetchStatus])

    return (
        <div className="bg-cyan-500">
            <RenderCategoriesListing />
        </div>
    )
}

export default Home;