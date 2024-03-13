import './scss/style.scss';
import { getCoinsApi } from './src/getCoins';




//!Selectors
const form = document.querySelector("header form");

//? form submit event
form.addEventListener("submit", (e) => {
    e.preventDefault(); //disable defult behaviour
    getCoinData();
    e.target.reset(); //? remove the input value after submut without refreshing the page.
})




const getCoinData = () => {
    const input = document.querySelector("header form input").value;
    if(!input.trim()){
        alert("input must be entered!!")
    }else{
        console.log(input);
        //? Get Coin
        getCoinsApi(input);
    }
}





