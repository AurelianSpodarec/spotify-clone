// @API Docs: https://developer.spotify.com/console/browse/
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getBrowseCategories() {
    const data = await SpotifyRequest("browse/categories", "GET")
    return data.categories
}

async function getBrowseByID(id:string) {
    const data = await SpotifyRequest(`browse/categories/${id}`, "GET")
    return data
}

export {
    getBrowseCategories,
    getBrowseByID
}