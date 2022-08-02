// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlists-tracks
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getTrack(id:string) {
    const res = await SpotifyRequest(`tracks/${id}`, "GET")
    return res
}

async function getSeveralTrack() {
    const res = await SpotifyRequest('tracks', "GET")
    return res
}

async function getUserSavedTracks() {
    const res = await SpotifyRequest('me/tracks', "GET")
    return res
}

async function saveTracksForCurrentUser() {
    const res = await SpotifyRequest('me/tracks', "PUT")
    return res
}

async function removeTracksForCurrentUser() {
    const res = await SpotifyRequest('me/tracks', "DELETE")
    return res
}

async function checkUserSavedTracks() {
    const res = await SpotifyRequest('me/tracks/contains', "GET")
    return res
}

async function getTracksAudioFeature() {
    const res = await SpotifyRequest('audio-feature', "GET")
    return res
}

async function getTrackAudioFeature(id:string) {
    const res = await SpotifyRequest(`audio-feature/${id}`, "GET")
    return res
}

async function getTrackAudioAnalysis(id:string) {
    const res = await SpotifyRequest(`audio-analysis/${id}`, "GET")
    return res
}

async function getTrackRecommended(id:string) {
    const res = await SpotifyRequest(`audio-analysis/${id}`, "GET")
    return res
}

export {
    getTrack,
    getSeveralTrack,
    getUserSavedTracks,
    saveTracksForCurrentUser,
    removeTracksForCurrentUser,
    checkUserSavedTracks,
    getTracksAudioFeature,
    getTrackAudioFeature,
    getTrackAudioAnalysis,
    getTrackRecommended
}