document.addEventListener("DOMContentLoaded", function () {

  const page = document.querySelector(".lander-frost-page");

  if (!page) return;

  const preparing = page.querySelector("#preparing");
  const ready = page.querySelector("#ready");
  const countdown = page.querySelector("#countdown");
  const progressBar = page.querySelector("#progressBar");
  const timer = page.querySelector("#timer");

  let seconds = 3;

  const preparation = setInterval(function () {

    seconds--;

    if (countdown) {
      countdown.textContent = seconds;
    }

    if (progressBar) {
      progressBar.style.width = ((3 - seconds) / 3) * 100 + "%";
    }

    if (seconds <= 0) {

      clearInterval(preparation);

      if (preparing) {
        preparing.style.display = "none";
      }

      if (ready) {
        ready.style.display = "block";
      }

      startTimer();
    }

  }, 1000);


  function startTimer() {

    let remaining = 300;

    function updateTimer() {

      const minutes = Math.floor(remaining / 60);
      const secs = remaining % 60;

      if (timer) {
        timer.textContent =
          String(minutes).padStart(2, "0") +
          ":" +
          String(secs).padStart(2, "0");
      }

      if (remaining <= 0) {
        clearInterval(expirationTimer);
      }

      remaining--;
    }

    updateTimer();

    const expirationTimer = setInterval(updateTimer, 1000);
  }

});
