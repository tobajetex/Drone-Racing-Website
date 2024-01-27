// javascript
/*const hamburger=document.querySelector("#img");
const toba =document.querySelector("#exit-icon");

const navContainer= document.querySelector(".nav-container");
toba.addEventListener("click" , makeInvisible)
hamburger.addEventListener("click" ,makeVisible);
function makeVisible(){
   navContainer.style.display="flex"; 
}
function makeInvisible(){
    navContainer.style.display="none";  
}
*/
/* Set the width of the side navigation to 250px */
function openNav() {
  document.querySelector(".nav-container").style.transform = "translateX(0px)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.querySelector(".nav-container").style.transform = "translateX(400px)";
} 