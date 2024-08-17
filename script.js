function playVideo(videoElement) {
  const videoPopup = document.getElementById("videoPopup");
  const popupVideo = document.getElementById("popupVideo");

  popupVideo.src = videoElement.src;
  videoPopup.style.display = "flex";
  document.body.style.overflow = "hidden"; // Disable background scrolling
}

function closeVideo() {
  const videoPopup = document.getElementById("videoPopup");
  const popupVideo = document.getElementById("popupVideo");

  videoPopup.style.display = "none";
  popupVideo.src = "";
  document.body.style.overflow = "auto"; // Re-enable background scrolling
}
