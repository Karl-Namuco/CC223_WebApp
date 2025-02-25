fetch("/api/message")
  .then((response) => response.json())
  .then((data) => {
    console.log("Message from server:", data.message); 
  })
  .catch((error) => console.error("Error fetching message:", error));

function happyPlaylist(){
    const spotifyContainer = document.getElementById('spotifyContainer');
    const spotifyPlayer = document.getElementById("spotifyPlayer");

    const playlistId = "37i9dQZF1DXdPec7aLTmlC?si=6c1ded227ca146e7"; 
    spotifyPlayer.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
    spotifyContainer.style.display = "block";

}

function sadPlaylist(){
    const spotifyContainer = document.getElementById('spotifyContainer');
    const spotifyPlayer = document.getElementById("spotifyPlayer");

    const playlistId = "37i9dQZF1DWSqBruwoIXkA?si=e5ccfab6ecf240ba"; 
    spotifyPlayer.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
    spotifyContainer.style.display = "block";
}

function lovePlaylist(){
    const spotifyContainer = document.getElementById('spotifyContainer');
    const spotifyPlayer = document.getElementById("spotifyPlayer");

    const playlistId = "37i9dQZF1DX4cx0q5Jn2vp?si=d0694c2e28fc47a7";
    spotifyPlayer.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
    spotifyContainer.style.display = "block";
}

function relaxedPlaylist(){
    const spotifyContainer = document.getElementById('spotifyContainer');
    const spotifyPlayer = document.getElementById("spotifyPlayer");

    const playlistId = "3l6b0zuXjgyPxLK6PIAqED?si=c1e5e75568704477";
    spotifyPlayer.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
    spotifyContainer.style.display = "block";
}

function pumpedPlaylist(){
    const spotifyContainer = document.getElementById('spotifyContainer');
    const spotifyPlayer = document.getElementById("spotifyPlayer");

    const playlistId = "12T717v2KDBShceyjiZcMC?si=875ab811c37142e9";
    spotifyPlayer.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
    spotifyContainer.style.display = "block";
}