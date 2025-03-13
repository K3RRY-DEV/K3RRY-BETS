/*FUNCTIONS FOR CHANGING THE LINKS, TEXT AND ICONS OF THE MOBILE-NAV*/
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("virtualBetSlip").querySelector(".mobile-p").innerHTML="Bet Slip";
  document.getElementById("betSlip").className = "fa-solid fa-receipt"
  document.getElementById("virtualBetSlip").href = "../Pages-php/Sports.php"
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("contactMybets").querySelector(".mobile-p").innerHTML = "My Bets";
  document.getElementById("myBets").className = "fa-solid fa-compass";
  document.getElementById("virtualBetSlip").href = "#"
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("aboutMenu").querySelector(".mobile-p").innerHTML = "Menu";
  document.getElementById("menu").className = "fa-solid fa-bars";
  document.getElementById("aboutMenu").href = "#"
});