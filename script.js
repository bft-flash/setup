(function () {
  "use strict";

  function init() {
    var preparing = document.getElementById("preparing");
    var ready = document.getElementById("ready");
    var countdown = document.getElementById("countdown");
    var progressBar = document.getElementById("progressBar");
    var timer = document.getElementById("timer");

    if (!preparing || !ready || !countdown) {
      console.error("Download page elements were not found.");
      return;
    }

    var total = 3;
    var remaining = total;

    countdown.textContent = remaining;

    if (progressBar) {
      progressBar.style.width = "0%";
    }

    var preparationTimer = setInterval(function () {
      remaining--;

      countdown.textContent = remaining;

      if (progressBar) {
        var percent = ((total - remaining) / total) * 100;
        progressBar.style.width = percent + "%";
      }

      if (remaining <= 0) {
        clearInterval(preparationTimer);

        preparing.style.display = "none";
        ready.style.display = "block";

        startTimer();
      }
    }, 1000);

    function startTimer() {
      var secondsLeft = 300;

      function update() {
        var minutes = Math.floor(secondsLeft / 60);
        var seconds = secondsLeft % 60;

        if (timer) {
          timer.textContent =
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");
        }

        if (secondsLeft <= 0) {
          clearInterval(expirationTimer);
          return;
        }

        secondsLeft--;
      }

      update();

      var expirationTimer = setInterval(update, 1000);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
