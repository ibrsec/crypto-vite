//export default >
const displayCoinCard = (coin) => {
  console.log(coin);
  const { change, price, iconUrl, name, symbol } = coin;
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
    <h2 class="coin-name">${name}</h2>

  `;

  ul.appendChild(coinLi);


};
export default displayCoinCard;
