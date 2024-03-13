
//import default => could get any game
import  displayCoin  from "./displayCoins"; 
import axios from "axios"

const BASE_URL = "https://api.coinranking.com/v2/";
// const API_KEY = "";
const SEARCH_ENDPOINT = "coins";


export const getCoinsApi = async(value) => {
    const options = {
        // headers:{
        //     "x-access-token": API_KEY,
        // }
        headers:{
            "x-access-token": import.meta.env.VITE_API_KEY,
        }
    }
    const URL = `${BASE_URL}${SEARCH_ENDPOINT}?search=${value}&limit=1`;
    const response = await axios(URL,options);
    try{
        if(response.status === 200){
            console.log(response);
            // const jsonData = await response.json(); // from fetch
            if(!response.data.data.coins[0]){

                alert("coin bulunamadi")
            }else{
                displayCoin(response.data.data.coins[0]);
            }
        }
    }catch(error){
        console.log(error);
    }
}

