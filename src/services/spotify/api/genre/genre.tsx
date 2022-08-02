// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendation-genres
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getAvailableGenreSeeds() {
    const res = await SpotifyRequest("recommendations/available-genre-seeds", "GET")
    return res;
}

export {
    getAvailableGenreSeeds
}