import react, { useState, useEffect } from "react";

import { getArtist, getSeveralArtists } from "services/spotify/api/artists/artists";
import { getCategoriesPlaylists } from "services/spotify/api/playlist/playlist";
import { getArtists } from "services/spotify/api/search/search";

const ARTISTS_PLAYLISTS_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

// Put into own util file
function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Artists() {

    const [artists, setArtist] = useState([])
    const [artistsFetchStatus, setArtistsFetchStatus] = useState(ARTISTS_PLAYLISTS_STATES.fetching)

    async function fetchArtists() { 
        // const res = await getArtists("summer")
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

    function RenderArtistItem(props:any) {
        const { key, item, fetchStatus } = props;

        if(artistsFetchStatus === "fetching") {
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
            console.log(item)
            return (
                <div key={key} className="group transition-all duration-200 ease-in  relative rounded-lg overflow-hidden bg-[#181818] hover:bg-[#282828]">
                <a href={item.href} className="block p-4">

                    <div className="relative min-w-[146px]">
                        <img className="object-cover rounded-full min-h-[146px] w-full" src={item.images[0].url} alt={`Picture of ${item.name}`}/>

                        <div className="transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 absolute bottom-2 right-2 translate-y-[8px] group-hover:translate-y-0">    
                            <button className="transition-all duration-300 ease-in rounded-full bg-[#1cc759] hover:bg-[#1ed560] cursor-default h-12 w-12">
                                <div className="flex items-center align-center justify-center">
                                <svg className="w-[24px] h-[24px]" role="img" height="24" width="24" viewBox="0 0 24 24">
                                    <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                                </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="py-2">
                        <h3 className="text-white font-semibold">{item.name}</h3>
                        <span className="text-gray-300">{capitalizeFirstLetter(item.type)}</span>
                    </div>
                    {/* <img className="absolute bottom-0 right-0 h-24 w-24" style={{ transform: "rotate(25deg) translate(18%,-2%)" }} src={item.icons[0].url} alt={item.name} /> */}
                 
                </a>
                </div>
            )    
        }
        
    }

    function RenderArtistsListing() {
        if(artistsFetchStatus === "fetching") {
            return [...Array(9)].map((_, index) => {
                return (
                    <RenderArtistItem 
                        key={index} 
                        fetchStatus={artistsFetchStatus} 
                    />
                )
            })
        } else if (artistsFetchStatus === "success") {//@ts-ignore
           return artists && artists.items.map((artist:{}, index:number) => {
                return (
                    <RenderArtistItem 
                        key={index}
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