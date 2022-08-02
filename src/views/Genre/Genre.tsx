import { useEffect } from "react";
import { getArtist, getSeveralArtists } from "services/spotify/api/artists/artists";
import { getCategoriesPlaylists } from "services/spotify/api/playlist/playlist";
import { getArtists } from "services/spotify/api/search/search";

const CATEGORIES_PLAYLISTS_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function Genre() {

    async function fetchCategoriesPlaylists() { 
        // const res = await getCategoriesPlaylists("summer")
        // const ress = await getSeveralArtists();
        // const res3 = await getArtist("7dGJo4pcD2V6oG8kP0tJRR")

        const res5 = await getArtists()

        console.log(res5)
    }



    useEffect(() => {
        fetchCategoriesPlaylists()
    }, [])


    return (
        <div className="">
            {/* TODO: Extract header into component */}
            <header className="px-8 pb-6 pt-10 flex justify-between">
                <h2 className="text-white text-2xl font-bold">Browse all</h2>
                <span className="block text-xs text-gray-200 font-semibold uppercase text-white">Sell all</span>
            </header>

            {/* Extract sectoininto component */}
            <section className="px-8">
                <div className="grid gap-6 grid-cols-6 genre-list">
                    
                </div>
            </section>
        </div>
    )
}

export default Genre;