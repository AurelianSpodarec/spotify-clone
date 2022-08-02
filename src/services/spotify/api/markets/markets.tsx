// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-available-markets
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getMarkets(id:string) {
    const res = await SpotifyRequest('markets', "GET")
    return res
}

export {
    getMarkets
}