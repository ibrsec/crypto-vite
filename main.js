


//? MAIN.JS
console.log("***** main *****");

const form = document.querySelector("form");
const input = document.getElementById("coins-input");
const coinsContainer = document.getElementById("coins-container");
const resetBtn = document.getElementById("reset-btn");

const BASE_URL = "https://api.coinranking.com/v2/";
const API_KEY = "coinrankinga9aae188e3b80d3ba69940202e8ba01daf51f9c184a5352f";
const SEARCH_ENDPOINT = "coins";
const SEARCH_PARAM_KEY = "search";


const getCoin = async (searched) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${SEARCH_ENDPOINT}?search=${searched}&limit=1`,
      {
        method: "GET",
        headers: {
          "x-access-token": API_KEY,
        },
      }
    );

    if (response.status === 200) {
      const jsonData = await response.json();
      console.log(jsonData);

      const coinNamesElements = document.querySelectorAll(".coin-name");
      let isExist = false;
      let existedCoin = "";
      coinNamesElements.forEach(item => {
        if(item.getAttribute("data-name") === jsonData.data.coins[0].name){
          isExist = true;
          existedCoin = item.getAttribute("data-name");
        }
      })
      

      if(!isExist){
        sendCoinsToDom(jsonData.data.coins[0]);
        input.value = "";
          input.focus();
      }else{
        Swal.fire(`'${existedCoin}' is in the listed coins!`);
        input.value = "";
          input.focus();
      }






    }else{
        input.focus();
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Response stauts is not 200!!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        input.value = "";
        
    }
  } catch (error) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong with Https Request!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      input.value = "";
        input.focus();
  }
};

form.onsubmit = async (e) => {
  e.preventDefault();
  if (!input.value) {
    input.focus();
    Swal.fire("Please enter a coin!");
  } else if(input.value.length < 3){
    input.focus();
    Swal.fire("Please enter at least 3 letter word!");
    input.value = "";
  }else {
    const value = input.value.trim();
    console.log(value);
    
    await getCoin(value);
    
  }
};


const sendCoinsToDom = (data) => {
    console.log(data);
console.log(data.name ?? "-");
    coinsContainer.innerHTML += `
    <li class="coin">
        <div class="remove-icon">
            <i class="fas fa-window-close"></i>
        </div>
        <h2 class="coin-name" data-name="${data.name ?? "-"}">
            <span>${data.name ?? "-"}</span>
            <sup>${data.symbol ?? "-"}</sup>
        </h2>
        <div class="coin-temp">$${data.price ? Number(data.price).toFixed(4) :  '-'}</div>
            <figure>
                <img class="coin-icon" src="${data.iconUrl ?? "./img/notfound.jpeg"}">                
                <figcaption style="color:green">
                    <i class="fa-solid fa-chart-line" style="color:${data.change ? (Number(data.change) >= 0 ? "green" : "red" ) : 'black'}"></i>
                    <span style="color:${data.change ? (Number(data.change) >= 0 ? "green" : "red" ) : 'black'}">${data.change ?? '-'}%</span>
                </figcaption>
        </figure></li>
    `;

}


coinsContainer.onclick = function(e){
    if(e.target.classList.contains("fa-window-close")){
        console.log(e.target);
        e.target.closest("li").remove();

    }
}



resetBtn.onclick = () => {
  console.log('object');
  coinsContainer.textContent = "";
}