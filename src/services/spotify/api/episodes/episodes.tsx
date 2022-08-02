// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-episode
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getEpisode(id:string) {
    const res = await SpotifyRequest(`episodes/${id}`, "GET")
    return res
}

async function getSeveralEpisodes() {
    const res = await SpotifyRequest('episodes', "GET")
    return res
}

async function getUserSavedEpisodes() {
    const res = await SpotifyRequest('me/episodes', "GET")
    return res
}

async function saveEpisodesForUser(data:{}) {
    const res = await SpotifyRequest('me/episodes', "PUT", data)
    return res
}

async function deleteEpisodesForUser(data:{}) {
    const res = await SpotifyRequest('me/episodes', "DELETE", data)
    return res
}

async function checkUserSavedEpisodes(data:{}) {
    const res = await SpotifyRequest('me/episodes/contains', "GET", data)
    return res
}
 
export {
    getEpisode,
    getSeveralEpisodes,
    getUserSavedEpisodes,
    saveEpisodesForUser,
    deleteEpisodesForUser
}