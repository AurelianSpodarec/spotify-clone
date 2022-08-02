// @API Docs: https://developer.spotify.com/console/users-profile/
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";



async function getCurrentUserprofile() {
    const data = await SpotifyRequest("me", "GET")
    return data
}

async function getUserProfileByID(id:string) {
    const data = await SpotifyRequest(`users/${id}`, "GET")
    return data
}

export {
    getCurrentUserprofile,
    getUserProfileByID
}