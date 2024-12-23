function openAlbumModal(videoSrc) {
    // Open the modal for album (video only)
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-video").style.display = "block";  // Show the video
    document.getElementById("modal-video").src = videoSrc;  // Set the video source
    document.getElementById("modal-description").innerText = videoSrc.split('/').pop().split('.')[0]; // Set description based on video name
}

function closeModal() {
    // Close the modal
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-video").style.display = "none";  // Hide the video when modal is closed
}
