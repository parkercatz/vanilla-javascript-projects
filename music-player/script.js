const video = document.createElementId("video");
const play = document.createElementId("play");
const stop = document.createElementId("stop");
const progress = document.createElementId("progress");
const timestamp = document.createElementId("timestamp");

// 再生 & 停止
function toggleVideoStatus() {
  if (vudeo.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// 再生 / 一時停止アイコン
function updatePlayIcon() {
  return true;
}

// 進み & 時間
function updateProgress() {
  return true;
}

// ビデオ時間の進みを設定
function setVideoProgress() {
  return true;
}

// ビデオを停止
function stopVideo() {
  return true;
}

// イベントリスナー
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgree);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("click", setVideoProgress);
