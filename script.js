document.addEventListener("DOMContentLoaded", function () {
  const page = document.querySelector(".lander-frost-page");

  if (!page) {
    return;
  }

  const preparing = page.querySelector("#preparing");
  const ready = page.querySelector("#ready");
  const countdown = page.querySelector("#countdown");
  const progressBar = page.querySelector("#progressBar");
  const timer = page.querySelector("#timer");

  /* Preparation countdown */
  const preparationDuration = 3;
  let seconds = preparationDuration;

  const preparationTimer = setInterval(function () {
    seconds--;

    if (countdown) {
      countdown.textContent = seconds;
    }

    if (progressBar) {
      const progress =
        ((preparationDuration - seconds) / preparationDuration) * 100;

      progressBar.style.width = progress + "%";
    }

    if (seconds <= 0) {
      clearInterval(preparationTimer);

      if (preparing) {
        preparing.style.display = "none";
      }

      if (ready) {
        ready.style.display = "block";
      }

      startExpirationTimer();
    }
  }, 1000);

  /* Five-minute expiration timer */
  function startExpirationTimer() {
    let remaining = 300;
    let expirationTimer;

    function updateTimer() {
      const minutes = Math.floor(remaining / 60);
      const secondsLeft = remaining % 60;

      if (timer) {
        timer.textContent =
          String(minutes).padStart(2, "0") +
          ":" +
          String(secondsLeft).padStart(2, "0");
      }

      if (remaining <= 0) {
        clearInterval(expirationTimer);
        return;
      }

      remaining--;
    }

    updateTimer();

    expirationTimer = setInterval(updateTimer, 1000);
  }
});
