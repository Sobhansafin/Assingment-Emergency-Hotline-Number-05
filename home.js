
// HEART COUNTER

const headerHeartCount = document.getElementById("heartCount");
let totalLikes = 0;

const cardHearts = document.querySelectorAll(".cardHeart");

cardHearts.forEach((heart) => {
  heart.dataset.liked = "false";

  heart.addEventListener("click", () => {
    if (heart.dataset.liked === "false") {
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid", "text-red-500");
      heart.dataset.liked = "true";
      totalLikes++;
    } else {
      heart.classList.remove("fa-solid", "text-red-500");
      heart.classList.add("fa-regular");
      heart.dataset.liked = "false";
      totalLikes++;
    }
    headerHeartCount.innerHTML = `${totalLikes} <img src="assets/heart.png" class="w-6 h-6">`;
  });
});


// COIN 

let coins = 100; // starting coins
const coinDisplay = document.getElementById("coinCounter");

function updateCoins(amount) {
  coins += amount;
  if (coins < 0) coins = 0;
  coinDisplay.innerText = coins;
}


// CALL BUTTON FUNCTION

const callButtons = document.querySelectorAll(".bg-green-600.text-white"); // Call buttons in cards
const callHistoryList = document.querySelector("aside ul");

callButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-white");
    const serviceName = card.querySelector("h3").innerText;

    if (coins >= 20) {
      updateCoins(-20);

      const now = new Date();
      const timeString = now.toLocaleTimeString();

      const li = document.createElement("li");
      li.classList.add("flex", "justify-between");
      li.innerHTML = `<span>${serviceName}</span><span>${timeString}</span>`;
      callHistoryList.prepend(li);

      alert("📞 Calling " + serviceName + "... (20 coins deducted)");
    } else {
      alert("⚠️ You don't have enough coins.!");
    }
  });
});


// COPY BUTTON FUNCTION

let totalCopies = 0; 
const copyCount = document.getElementById("copyCount");

const copyButtons = document.querySelectorAll(".border.border-gray-300");

copyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-white");
    const number = card.querySelector("p.text-2xl").innerText;

    navigator.clipboard.writeText(number);
    totalCopies++;
    copyCount.innerText = totalCopies;
    alert("✅ Number copied: " + number);
  });
});


// CLEAR HISTORY BUTTON

const clearButton = document.querySelector("aside button");

clearButton.addEventListener("click", () => {
  callHistoryList.innerHTML = "";
});
