// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/search
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


// TODO: Have some default values for input and category - untill the user starts searching
async function searchRequest(input:string, category:string) {
    const res = await SpotifyRequest(`search?q=${input}&type=${category}`)
    return res;
}

async function getArtists() {
    const res = await SpotifyRequest('search?q=e&type=artist', "GET")
    return res;
}

export {
    searchRequest,
    getArtists
}