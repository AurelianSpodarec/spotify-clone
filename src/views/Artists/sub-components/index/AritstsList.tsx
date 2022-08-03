import Card from "components/Card/Card"

function ArtistsList(artistsFetchStatus:any) {
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

export default ArtistsList;