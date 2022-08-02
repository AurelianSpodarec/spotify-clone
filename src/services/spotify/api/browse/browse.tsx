// @API Docs: https://developer.spotify.com/console/browse/
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getNewReleases() {
    const data = await SpotifyRequest('browse/new-releases', "GET")
    return data
}

async function getRecommendations() {
    const data = await SpotifyRequest('recommendations', "GET")
    return data
}

export {
    getNewReleases,
    getRecommendations
}