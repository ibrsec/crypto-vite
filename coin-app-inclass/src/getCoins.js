
//import default => could get any game
import  displayCoin  from "./displayCoins"; 

const BASE_URL = "https://api.coinranking.com/v2/";
const API_KEY = "coinrankinga9aae188e3b80d3ba69940202e8ba01daf51f9c184a5352f";
const SEARCH_ENDPOINT = "coins";


export const getCoinsApi = async(value) => {
    const options = {
        method:"GET",
        headers:{
            "x-access-token": API_KEY,
        }
    }
    const URL = `${BASE_URL}${SEARCH_ENDPOINT}?search=${value}&limit=1`;
    const response = await fetch(URL,options);
    try{
        if(response.status === 200){
            const jsonData = await response.json();
            if(!jsonData.data.coins[0]){

                alert("coin bulunamadi")
            }else{
                displayCoin(jsonData.data.coins[0]);
            }
        }
    }catch(error){
        console.log(error);
    }
}