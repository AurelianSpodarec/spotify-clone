import { TypeArtist } from "types/TypeArtist";

import Card from "components/Card/Card"

function ArtistsList(props:any) {
    const { data, fetchStatus } = props

    // console.log("Arists list", data.artists.items)
    if(fetchStatus === "fetching") {
    return [...Array(9)].map((_, index) => {
        return (
            <div className="grid gap-6 grid-cols-6">
                <Card 
                    key={index} 
                    fetchStatus={fetchStatus} 
                />
            </div>
            )
        })
    } else if (fetchStatus === "success") {//@ts-ignore
        return (
            <div className="grid gap-6 grid-cols-6">
             {data.artists && data.artists.items.map((data:TypeArtist, index:number) => {
                return (
                    
                        <Card 
                            key={index} //@ts-ignore
                            item={data} 
                            fetchStatus={fetchStatus} 
                        />
                
                    )
                })}
            </div>
        )
    } else if(fetchStatus === "failure") {
        return (
            <h1 className="text-red-500">No categories found ;-(</h1>
        )
    } 
        

}

export default ArtistsList;