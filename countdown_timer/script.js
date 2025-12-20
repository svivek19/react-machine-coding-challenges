(function () {
  let hourEl = document.querySelector(".hour");
  let minuteEl = document.querySelector(".minute");
  let secondEl = document.querySelector(".second");

  let startBtn = document.querySelector(".start");
  let stopBtn = document.querySelector(".stop");
  let resetBtn = document.querySelector(".reset");

  let countdownTimer = null;

  startBtn.addEventListener("click", function () {
    if (hourEl.value == 0 && minuteEl.value == 0 && secondEl.value == 0) return;

    function startInterval() {
      startBtn.style.display = "none";
      stopBtn.style.display = "inline-block";

      countdownTimer = setInterval(function () {
        timer();
      }, 1000);
    }

    startInterval();
  });

  function stopInterval(state) {
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";

    clearInterval(countdownTimer);
  }

  function timer() {
    if (secondEl.value > 60) {
      minuteEl.value++;
      secondEl.value = parseInt(secondEl.value) - 59;
    }

    if (minuteEl.value > 60) {
      hourEl.value++;
      minuteEl.value = parseInt(minuteEl.value) - 60;
    }

    if (hourEl.value == 0 && minuteEl.value == 0 && secondEl.value == 0) {
      hourEl.value = "00";
      minuteEl.value = "00";
      secondEl.value = "00";
      stopInterval();
    } else if (secondEl.value != 0) {
      secondEl.value = `${secondEl.value <= 10 ? "0" : ""}${
        secondEl.value - 1
      }`;
    } else if (minuteEl.value != 0 && secondEl.value == 0) {
      secondEl.value = 59;
      minuteEl.value = `${minuteEl.value <= 10 ? "0" : ""}${
        minuteEl.value - 1
      }`;
    } else if (hourEl.value != 0 && minuteEl.value == 0) {
      minuteEl.value = 60;
      hourEl.value = `${hourEl.value <= 10 ? "0" : ""}${hourEl.value - 1}`;
    }
  }

  stopBtn.addEventListener("click", function () {
    stopInterval("pause");
  });

  resetBtn.addEventListener("click", function () {
    stopInterval();
    hourEl.value = "00";
    minuteEl.value = "00";
    secondEl.value = "00";
  });
})();
