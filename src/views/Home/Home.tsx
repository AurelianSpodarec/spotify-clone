import react, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getBrowseCategories, getBrowseCategoryByID } from "services/spotify/api/categories/categories";
import { getAvailableGenreSeeds } from "services/spotify/api/genre/genre";
import { getCategoriesPlaylists, getFeaturedPlaylists, getPlaylist } from "services/spotify/api/playlist/playlist";
  

  // TASK: 
    // 1. Output browse/categories
    // 2. Show subsequent categories
    // 3. Add pagination

// Fetch categories
// fetch sub-categories and create new categories list 


// TODO: Maybe create something to abstract these, idealy have a name that need to be written
 
function Home() {
 
    return (
        <div className="">
   
            <section>
                <div>
                    <h2>Hot Right now</h2>
                    <button>See All</button>
                </div>

                <div>
                    List
                </div>
            </section>
            
        </div>
    )
}

export default Home;