// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-related-artists
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getArtist(id:string) {
    const res = await SpotifyRequest(`artists/${id}`, "GET")
    return res
}

async function getSeveralArtists() {
    const res = await SpotifyRequest('artists', "GET")
    return res
}

async function getArtistAlbums(id:string) {
    const res = await SpotifyRequest(`artists/${id}/albums`, "GET")
    return res
}

async function getArtistTopTracks(id:string) {
    const res = await SpotifyRequest(`artists/${id}/top-tracks`, "GET")
    return res
}

async function getArtistRelatedArtists(id:string) {
    const res = await SpotifyRequest(`artists/${id}/related-artists`, "GET")
    return res
}
 
export {
    getArtist,
    getSeveralArtists,
    getArtistAlbums,
    getArtistTopTracks,
    getArtistRelatedArtists
}