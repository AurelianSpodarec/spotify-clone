// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/search
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";




async function getArtists() {
    const res = await SpotifyRequest('search?q=e&type=artist', "GET")
    return res
}

// async function getArtists() {
//     const res = await SpotifyRequest('search?q=all&type=artist', "GET")
//     return res
// }


export {
    getArtists
}