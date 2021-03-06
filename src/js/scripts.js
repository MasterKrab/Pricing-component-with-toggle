const checkbox = document.getElementById("duration");
const pricesElements = document.querySelectorAll(".card__number");

const updatePrices = (duration) =>{
   let num = 0;

   for(let type in prices){
      pricesElements[num].textContent = prices[type][duration];
      num++;
   };
};

checkbox.addEventListener("click", () => checkbox.checked ? updatePrices("monthly") : updatePrices("annually"));

document.addEventListener("DOMContentLoaded", () => updatePrices("monthly"));
