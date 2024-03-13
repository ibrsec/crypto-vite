//export default >
const displayCoinCard = (coin) => {
  console.log(coin);
  const { change, price, iconUrl, name, symbol,rank } = coin;
  console.log(change);
  console.log(price);
  console.log(iconUrl);
  console.log(name);
  console.log(symbol);

  const ul = document.querySelector("#coins-container");
  const coinLi = document.createElement("li");
  coinLi.classList.add("coin");
  coinLi.innerHTML = `
    <div class="remove-icon">
        <i class="fas fa-window-close"></i>
    </div>
    <h2 class="coin-name">
  <span>${name}</span>
  <sup>${symbol}</sup>
  </h2>

<div class="coin-temp">${Number(price).toFixed(4)}</div>
<figure>
  <img src="${iconUrl}" class="coin-icon" alt="">
  <figcaption style="color:${change < 0 ? 'red' : 'green'}">
  <i class="fa-solid fa-chart-line"></i>
  <span>%${change ?? "0.00"}<span>
    
  </figcaption>
  <div>Rank: ${rank}</div>
</figure>
  `;

  ul.appendChild(coinLi);

    //? card elete button event
    const removeIcon = coinLi.querySelector(".remove-icon");
    removeIcon.addEventListener("click", () => {
        coinLi.remove();
    })


};
export default displayCoinCard;
