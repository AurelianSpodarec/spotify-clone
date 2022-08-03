import Card from "components/Card/Card";
import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getArtist, getSeveralArtists } from "services/spotify/api/artists/artists";
import { getCategoriesPlaylists } from "services/spotify/api/playlist/playlist";
import { getArtists } from "services/spotify/api/search/search";

import { TypeArtist } from "types/TypeArtist";

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
        // const ress = await getSeveralArtists();
        // const res3 = await getArtist("7dGJo4pcD2V6oG8kP0tJRR")

        const res = await getArtists()

        if(res && res.length === 0) {
            setArtistsFetchStatus(ARTISTS_PLAYLISTS_STATES.failure)
        } else {
            setArtistsFetchStatus(ARTISTS_PLAYLISTS_STATES.success)
            setArtist(res.artists) 
        }
    }

    // TODO: Put in its own file - later on
    function RenderArtistsListing() {
        if(artistsFetchStatus === "fetching") {
            return [...Array(9)].map((_, index) => {
                return (
                    <Card 
                        key={index} 
                        fetchStatus={artistsFetchStatus} 
                    />
                    
                )
            })
        } else if (artistsFetchStatus === "success") {//@ts-ignore
           return artists && artists.items.map((artist:TypeArtist, index:number) => {
                return (
                    <Card 
                        key={index} //@ts-ignore
                        item={artist} 
                        fetchStatus={artistsFetchStatus} 
                    />
                )
            })
        } else if(artistsFetchStatus === "failure") {
            return <h1>No categories found ;-(</h1>
        } 
    }


    useEffect(() => {
        fetchArtists()
    }, [artistsFetchStatus])


    return (
        <div className="">
           

           
            <section className="px-8">
            <div className="grid gap-6 grid-cols-6">

                <RenderArtistsListing />

            </div>
            </section>
        </div>
    )
}

export default Artists;