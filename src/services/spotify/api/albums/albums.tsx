// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-album
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getAlbum(id:string) {
    const res = await SpotifyRequest(`albums/${id}`, "GET")
    return res
}

async function getSeveralAlbums() {
    const res = await SpotifyRequest('albums', "GET")
    return res
}
 
async function getAlbumTracks(id:string) {
    const res = await SpotifyRequest(`albums/{id}/tracks`, "GET")
    return res
}

async function getSavedAlbums() {
    const res = await SpotifyRequest('me/albums', "GET")
    return res
}

async function saveAlbums(data:{}) {
    const res = await SpotifyRequest('me/albums', "PUT", data)
    return res
}

async function checkSavedAlbums() {
    const res = await SpotifyRequest('me/albums/contains', "GET")
    return res
}

async function getAlbumNewReleases() {
    const res = await SpotifyRequest('browse/new-release', "GET")
    return res
}

export {
    getAlbum,
    getSeveralAlbums,
    getAlbumTracks,
    getSavedAlbums,
    saveAlbums,
    checkSavedAlbums,
    getAlbumNewReleases
}