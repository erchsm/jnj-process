
export default function(toNumber) {
  var numbers = document.querySelector('.callout span'),
  to = 0;
  
  to = toNumber;
  (parseFloat(numbers.innerHTML) < to) ? countUp() : countDown();
}

var count = function(toNumber) {
}

var countUp = function () {
  if (parseFloat(numbers.innerHTML) >= to) {
    return;
  }
  requestAnimationFrame(countUp);
  numbers.innerHTML = Math.round((parseFloat(numbers.innerHTML) + 0.1) * 100) / 100;
}

var countDown = function () {
  if (parseFloat(numbers.innerHTML) <= to) {
    return;
  }
  requestAnimationFrame(countDown);
  numbers.innerHTML = Math.round((parseFloat(numbers.innerHTML) - 0.1) * 100) / 100;
}