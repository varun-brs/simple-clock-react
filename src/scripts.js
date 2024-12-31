function calcDegrees(time, max) {
  return (time / max) * 360;
}

function updateClock() {
  const hourHand = document.querySelector(".hourHand");
  const minuteHand = document.querySelector(".minuteHand");
  const secondHand = document.querySelector(".secondHand");

  if (!hourHand || !minuteHand || !secondHand) return;

  const currentTime = new Date();
  const secondHandDegrees = calcDegrees(currentTime.getSeconds(), 60);
  const minuteHandDegrees = calcDegrees(currentTime.getMinutes(), 60);
  const hourHandDegrees = calcDegrees(
    currentTime.getHours() * 60 + currentTime.getMinutes(),
    720
  );

  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
}

setInterval(updateClock, 1000);

updateClock();
