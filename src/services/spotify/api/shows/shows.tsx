// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-show
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getShow(id:string) {
    const res = await SpotifyRequest(`shows/${id}`, "GET")
    return res
}

async function getSeveralShows() {
    const res = await SpotifyRequest('shows', "GET")
    return res
}

async function getShowEpisodes(id:string) {
    const res = await SpotifyRequest(`shows/${id}/episodes`, "GET")
    return res
}

async function getUserSavedShows() {
    const res = await SpotifyRequest('me/shows', "GET")
    return res
}

async function saveShowsForCurrentUser(data:{}) {
    const res = await SpotifyRequest('me/shows', "PUT", data)
    return res
}

async function removeShowsForCurrentUser(data:{}) {
    const res = await SpotifyRequest('me/shows', "DELETE", data)
    return res
}

async function checkUserSavedShows(data:{}) {
    const res = await SpotifyRequest('me/shows/contains', "GET", data)
    return res
}
 
export {
    getShow,
    getSeveralShows,
    getShowEpisodes,
    getUserSavedShows,
    saveShowsForCurrentUser,
    removeShowsForCurrentUser,
    checkUserSavedShows
}