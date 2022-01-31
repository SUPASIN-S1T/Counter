let count = 0;

let decreaseBtn = document.querySelector("#decrease-btn");
let resetBtn = document.querySelector("#reset-btn");
let increaseBtn = document.querySelector("#increase-btn");
let resultCount = document.querySelector(".number");

// function
function decreaseCount(e) {
  if (e.currentTarget === decreaseBtn) {
    resultCount.style.color = "red";
    count--;
  }
  return (resultCount.textContent = count);
}

function resetCount(e) {
  if (e.currentTarget === resetBtn) {
    resultCount.style.color = "#00E0B8";
    count = 0;
  }
  return (resultCount.textContent = count);
}

function increaseCount(e) {
  if (e.currentTarget === increaseBtn) {
    resultCount.style.color = "#00E0B8";
    count++;
  }
  return (resultCount.textContent = count);
}

// call function
decreaseBtn.addEventListener("click", decreaseCount);
resetBtn.addEventListener("click", resetCount);
increaseBtn.addEventListener("click", increaseCount);
