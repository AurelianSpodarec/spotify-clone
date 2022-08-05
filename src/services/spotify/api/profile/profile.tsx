// @API Docs: https://developer.spotify.com/console/users-profile/
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";

const token = localStorage.getItem('authToken');

async function getCurrentUserProfile() {
    const res = await SpotifyRequest("me", "GET")
    return res
}

async function getUserProfileByID(id:string) {
    const res = await SpotifyRequest(`users/${id}`, "GET")
    return res
}

export {
    getCurrentUserProfile,
    getUserProfileByID
}