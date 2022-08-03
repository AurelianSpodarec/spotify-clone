import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArtist } from "services/spotify/api/artists/artists";

import { TypeArtist } from "types/TypeArtist";

import { ArtistHeader } from "./sub-components/show";
 

const ARTIST_PLAYLISTS_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function Artist() {

    let { id }:any = useParams();

    const [artist, setArtist] = useState<TypeArtist|undefined>(undefined)
    const [artistFetchStatus, setArtistsFetchStatus] = useState(ARTIST_PLAYLISTS_STATES.fetching)

     async function fetchAritst() {
        const res = await getArtist(id)
        
         if(res && res.length === 0) {
            setArtistsFetchStatus(ARTIST_PLAYLISTS_STATES.failure)
        } else {
            setArtistsFetchStatus(ARTIST_PLAYLISTS_STATES.success)
            setArtist(res)
            console.log(res)
        }
    }

    useEffect(() => {
        fetchAritst()
    }, [])

  
    function RenderArtistPopular() {
        return <></>
    }
 
    return (
        <div className="text-white">

            <ArtistHeader artistFetchStatus={artistFetchStatus} artist={artist} />
           
            <section>

            </section>

        </div>
    )

}

export default Artist;