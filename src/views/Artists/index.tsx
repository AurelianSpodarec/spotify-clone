import react, { useState, useEffect } from "react";

import { getArtists } from "services/spotify/api/search/search";
import { ArtistsList } from "./sub-components/index";


const ARTISTS_PLAYLISTS_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

interface ArtistList {
    href: string;
    items: [],
    limit: number;
    next?: string;
    offset?: number;
    previous?: string;
    total: number; 
}

function Artists() {

    const [artists, setArtist] = useState<ArtistList[]>([])
    const [artistsFetchStatus, setArtistsFetchStatus] = useState(ARTISTS_PLAYLISTS_STATES.fetching)

    async function fetchArtists() { 
        const res = await getArtists()

        if(res && res.length === 0) {
            setArtistsFetchStatus(ARTISTS_PLAYLISTS_STATES.failure)
        } else {
            setArtistsFetchStatus(ARTISTS_PLAYLISTS_STATES.success)
            setArtist(res.artists) 
        }
    }

    useEffect(() => {
        fetchArtists()
    }, [artistsFetchStatus])

    return (
        <div>

            <section className="px-8">
            

                {/* <ArtistsList /> */}

             
            </section>
            
        </div>
    )
}

export default Artists;