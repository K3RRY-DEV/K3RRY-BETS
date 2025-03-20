import { dropDownList } from "../scripts/Sports.js";
import { footballCategories } from '../Scripts-data/Sports-data.js';
import { sportsData } from '../Scripts-data/Sports-data.js';

export let footballHTML = "";

footballHTML += `<ul class="league-list">`;

// Assuming footballCategories is defined elsewhere
footballCategories.forEach((category) => {
  footballHTML += `
          <li class="league-item">
              <div class="league-title"><img src="${category.countryFlag}" class="country-flags" alt="${category.countryName}">${category.countryName}</div>
              <ul class="sub-league-list">
                  <li class="comp-list"><img src="${category.firstDivisionLogo}" class="league-logo"  alt="${category.firstDivisionName}">${category.firstDivisionName}</li>
                  <li class="comp-list"><img src="${category.firstDomesticCupLogo}" class="league-logo"  alt="${category.firstDomesticCup}">${category.firstDomesticCup}</li>
                  <li class="comp-list"><img src="${category.secondDomesticCupLogo}" class="league-logo"  alt="${category.secondDomesticCup}">${category.secondDomesticCup}</li>
                  <li class="comp-list"><img src="${category.secondDivisionLogo}" class="league-logo"  alt="${category.secondDivisionName}">${category.secondDivisionName}</li>
                  <li class="comp-list"><img src="${category.thirdDivisionLogo}" class="league-logo"  alt="${category.thirdDivisionName}">${category.thirdDivisionName}</li>
                  <li class="comp-list"><img src="${category.fourthDivisionLogo}" class="league-logo"  alt="${category.fourthDivisionName}">${category.fourthDivisionName}</li>
                  <li class="comp-list"><img src="${category.fifthDivisionLogo}" class="league-logo"  alt="${category.fifthDivisionName}">${category.fifthDivisionName}</li>
              </ul>
          </li>
  `;
});

footballHTML += `</ul>`;

sportsData[0].sportContentHtml = footballHTML;

document.querySelector(".js-sports-container").innerHTML = `
<div class="sport-item">
    <div class="sport-title">${sportsData[0].svgCode}<span>Football</span></div>
    ${footballHTML}
</div>
`;
// document.querySelector(".js-sports-desktop-container").innerHTML = `
// <div class="side-sports-bar">
//   <button class="sports-toggle-btn"><i class="fi fi-br-align-justify"></i></button>
//   <div class="sport-title">${sportsSVGCodes[0].footballSVGCode}<span>Football</span></div>
//     ${footballHTML}
// </div>`;


//FUNCTION TO CREATE MORE SPORTS CATEGORIES
const createSportsContent = (sportsData, containerSelector) => {
  //FIND THE CONTAINER 
  const container = document.querySelector(containerSelector);
  // CHECK IF THE CONTAINER EXISTS
  if (!container) {
    console.log("Container not found.");
    return;
  }

  //START BUILDING THE HTML
  let allSportsContentHTML = "";

  //LOOP THROUGH EACH SPORT IN THE DATA
  sportsData.forEach((sport) => {
    //CREATE THE HTML FOR THE SPORT
    const sportsContentHTML = `
      <div class="sport-title">${sport.svgCode}<span>${sport.sportName}</span></div>
      ${footballHTML}
  `;
  //ADD THE SPORT TO THE CONTAINER
    allSportsContentHTML += sportsContentHTML;
  });

  //ADD ALL SPORTS TO THE CONTAINER
  container.innerHTML = allSportsContentHTML;
};

createSportsContent(sportsData, ".sports-content");
dropDownList(); // Call the function here