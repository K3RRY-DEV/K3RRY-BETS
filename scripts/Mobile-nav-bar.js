/*FUNCTIONS FOR CHANGING THE LINKS, TEXT AND ICONS OF THE SPORTS PAGE FOOTER MOBILE-NAV*/

export const sportsMobileNavLinks = document.addEventListener('DOMContentLoaded', () => {

  document.getElementById("virtualBetSlip").querySelector(".mobile-p").innerHTML="Bet Slip";
  document.getElementById("betSlip").className = "fa-solid fa-receipt"
  document.getElementById("virtualBetSlip").href = "../Pages-php/Sports.php"

  document.getElementById("contactMybets").querySelector(".mobile-p").innerHTML = "My Bets";
  document.getElementById("myBets").className = "fa-solid fa-compass";
  document.getElementById("virtualBetSlip").href = "#"

  document.getElementById("aboutMenu").querySelector(".mobile-p").innerHTML = "Menu";
  document.getElementById("menu").className = "fa-solid fa-bars";
  document.getElementById("aboutMenu").href = "#"
});