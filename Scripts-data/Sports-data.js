import { dropDownList } from "../scripts/Sports.js";

const sportCategories = [
  {
    sportName: "Football",
    countryName: {
      england: "England",
      spain: "Spain",
      italy: "Italy",
      germany: "Germany",
      france: "France",
    },
    countryFlag: {
      england: "../Sports images/Countries Flags/england.png",
      spain: "../Sports images/Countries Flags/spain.png",
      italy: "../Sports images/Countries Flags/italy.png",
      germany: "../Sports images/Countries Flags/germany.png",
      france: "../Sports images/Countries Flags/france.png",
    },
    tournamentName: {
      topFlightDivision: {
        england: "Premier League",
        spain: "LaLiga",
        italy: "Serie A",
        germany: "Bundesliga",
        france: "Ligue 1",
      },
      secondFlightDivision: {
        england: "Championship",
        spain: "LaLiga 2",
        italy: "Serie B",
        germany: "2.Bundesliga",
        france: "Ligue 2",
      },
      firstDomesticCup: {
        england: "FA Cup",
        spain: "Copa del Rey",
        italy: "Coppa Italia",
        germany: "DFB-Pokal",
        france: "Coupe de France",
      },
      secondDomesticCup: "EFL Cup",
      lowerFirstDivision: "League One",
      lowerSecondDivision: "League Two",
      lowerSecondDivision: "National League",
    },
    tournamentLogo: {
      topFlightDivision: {
        premierLeague: "../Sports images/England/league logos/EPL LOGO.png",
        laLiga: "../Sports images/Spain/league logos/LaLiga Logo.png",
        serieA: "../Sports images/Italy/league logos/Serie A Logo.png",
        bundesliga: "../Sports images/Germany/league logos/Bundesliga Logo.png",
        ligue1: "../Sports images/France/league logos/French Ligue 1.png",
      },
      secondFlightDivision: {
        championship: "../Sports images/England/league logos/Championship.png",
        laLiga2: "../Sports images/Spain/league logos/LaLiga_2.png",
        serieB: "../Sports images/Italy/league logos/Serie_BKT.png",
        bundesliga2: "../Sports images/Germany/league logos/2._Bundesliga.png",
        ligue2: "../Sports images/Italy/league logos/Serie_BKT.png",
      },
      firstDomesticCup: {
        faCup: "../Sports images/England/league logos/FA_Cup.png",
        copadelrey: "../Sports images/Spain/league logos/Copa_Del_Rey.png",
        coppaItalia: "../Sports images/Italy/league logos/Coppa_Italia.png",
        dfbPokal: "../Sports images/Germany/league logos/DFB-Pokal.png",
        coupeDeFrance:
          "../Sports images/France/league logos/Coupe_de_France.png",
      },
    },
  },
];

export const footballCategories = [
  {
    countryName: "England",
    countryFlag: "../Sports images/Countries Flags/england.png",
    firstDivisionName: "Premier League",
    firstDivisionLogo:"../Sports images/England/league logos/EPL LOGO.png",
    secondDivisionName: "Championship",
    secondDivisionLogo: "../Sports images/England/league logos/Championship.png",
    thirdDivisionName: "League One",
    thirdDivisionLogo: "../Sports images/England/league logos/League One.png",
    fourthDivisionName: "League Two",
    fourthDivisionLogo: "../Sports images/England/league logos/League two.png",
    fifthDivisionName: "National League",
    fifthDivisionLogo: "../Sports images/England/league logos/National League.jpg",
    firstDomesticCup: "FA Cup",
    firstDomesticCupLogo: "../Sports images/England/league logos/FA_Cup.png",
    secondDomesticCup: "EFL Cup",
    secondDomesticCupLogo: "../Sports images/England/league logos/EFL_(Carabao)_Cup_.png",
  },
  {
    countryName: "Italy",
    countryFlag: "../Sports images/Countries Flags/italy.png",
    firstDivisionName: "Serie A",
    firstDivisionLogo:"../Sports images/Italy/league logos/Serie A Logo.png",
    secondDivisionName: "Serie B",
    secondDivisionLogo: "../Sports images/Italy/league logos/Serie_BKT.png",
    thirdDivisionName: "Serie C",
    thirdDivisionLogo: "../Sports images/Spain/league logos/Segunda_Federación.png",
    fourthDivisionName: "Primera Federacion",
    fourthDivisionLogo: "../Sports images/Spain/league logos/Primera_Federación.png",
    fifthDivisionName: "Primera Federacion Women",
    fifthDivisionLogo: "/Sports images/Spain/league logos/Primera_Federación_FutFem.png",
    firstDomesticCup: "Coppa Italia",
    firstDomesticCupLogo: "../Sports images/Italy/league logos/Coppa_Italia.png",
    secondDomesticCup: "Spanish Super Cup",
    secondDomesticCupLogo: "../Sports images/Spain/league logos/Spanish_super_cup.png",
  },
  {
    countryName: "Spain",
    countryFlag: "../Sports images/Countries Flags/spain.png",
    firstDivisionName: "LaLiga",
    firstDivisionLogo:"../Sports images/Spain/league logos/LaLiga Logo.png",
    secondDivisionName: "LaLiga 2",
    secondDivisionLogo: "../Sports images/Spain/league logos/LaLiga_2.png",
    thirdDivisionName: "Segunda Federacion",
    thirdDivisionLogo: "../Sports images/Spain/league logos/Segunda_Federación.png",
    fourthDivisionName: "Primera Federacion",
    fourthDivisionLogo: "../Sports images/Spain/league logos/Primera_Federación.png",
    fifthDivisionName: "Primera Federacion Women",
    fifthDivisionLogo: "../Sports images/Spain/league logos/Primera_Federación_FutFem.png",
    firstDomesticCup: "Copa Del Rey",
    firstDomesticCupLogo: "../Sports images/Spain/league logos/Copa_Del_Rey.png",
    secondDomesticCup: "Spanish Super Cup",
    secondDomesticCupLogo: "../Sports images/Spain/league logos/Spanish_super_cup.png",
  },
  {
    countryName: "Germany",
    countryFlag: "../Sports images/Countries Flags/germany.png",
    firstDivisionName: "Bundesliga",
    firstDivisionLogo:"../Sports images/Germany/league logos/Bundesliga Logo.png",
    secondDivisionName: "2.Bundesliga",
    secondDivisionLogo: "../Sports images/Germany/league logos/2._Bundesliga.png",
    thirdDivisionName: "3.Liga",
    thirdDivisionLogo: "../Sports images/Germany/league logos/3._Liga_.png",
    fourthDivisionName: "Primera Federacion",
    fourthDivisionLogo: "../Sports images/Spain/league logos/Primera_Federación.png",
    fifthDivisionName: "Primera Federacion Women",
    fifthDivisionLogo: "/Sports images/Spain/league logos/Primera_Federación_FutFem.png",
    firstDomesticCup: "DFB POKAL",
    firstDomesticCupLogo: "../Sports images/Germany/league logos/DFB-Pokal.png",
    secondDomesticCup: "Spanish Super Cup",
    secondDomesticCupLogo: "../Sports images/Spain/league logos/Spanish_super_cup.png",
  },
  {
    countryName: "France",
    countryFlag: "../Sports images/Countries Flags/france.png",
    firstDivisionName: "Ligue 1",
    firstDivisionLogo:"../Sports images/France/league logos/French Ligue 1.png",
    secondDivisionName: "Ligue 2",
    secondDivisionLogo: "../Sports images/Germany/league logos/2._Bundesliga.png",
    thirdDivisionName: "3.Liga",
    thirdDivisionLogo: "../Sports images/Germany/league logos/3._Liga_.png",
    fourthDivisionName: "Primera Federacion",
    fourthDivisionLogo: "../Sports images/Spain/league logos/Primera_Federación.png",
    fifthDivisionName: "Primera Federacion Women",
    fifthDivisionLogo: "/Sports images/Spain/league logos/Primera_Federación_FutFem.png",
    firstDomesticCup: "Coupe de France",
    firstDomesticCupLogo: "../Sports images/France/league logos/Coupe_de_France.png",
    secondDomesticCup: "Spanish Super Cup",
    secondDomesticCupLogo: "../Sports images/Spain/league logos/Spanish_super_cup.png",
  },
];


export let footballHTML = "";

footballHTML += `<ul class="league-list">`;

// Assuming footballCategories is defined elsewhere
footballCategories.forEach((category) => {
  footballHTML += `
          <li class="league-item">
              <div class="league-title"><img src="${category.countryFlag}" class="country-flags" alt="${category.countryName}">${category.countryName}</div>
              <ul class="sub-league-list">
                  <li class="comp-list"><img src="${category.firstDivisionLogo}" class="league-logo"  alt="${category.firstDivisionName}">${category.firstDivisionName}</li>
                  <li><img src="${category.firstDomesticCupLogo}" class="league-logo"  alt="${category.firstDomesticCup}">${category.firstDomesticCup}</li>
                  <li><img src="${category.secondDomesticCupLogo}" class="league-logo"  alt="${category.secondDomesticCup}">${category.secondDomesticCup}</li>
                  <li><img src="${category.secondDivisionLogo}" class="league-logo"  alt="${category.secondDivisionName}">${category.secondDivisionName}</li>
                  <li><img src="${category.thirdDivisionLogo}" class="league-logo"  alt="${category.thirdDivisionName}">${category.thirdDivisionName}</li>
                  <li><img src="${category.fourthDivisionLogo}" class="league-logo"  alt="${category.fourthDivisionName}">${category.fourthDivisionName}</li>
                  <li><img src="${category.fifthDivisionLogo}" class="league-logo"  alt="${category.fifthDivisionName}">${category.fifthDivisionName}</li>
              </ul>
          </li>
  `;
});

footballHTML += `</ul>`;

document.querySelector(".js-sports-container").innerHTML = `
<div class="sport-item">
    <div class="sport-title">Football</div>
    ${footballHTML}
</div>
`;

dropDownList(); // Call the function here