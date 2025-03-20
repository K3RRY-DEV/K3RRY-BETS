import { footballHTML } from '../Html-js-Generated/Generate-template.js';
import { sportsMobileNavLinks } from '../scripts/Mobile-nav-bar.js';
import { headerLinks} from './Desktop-nav.js';

/*FUNCTION THAT MAKES THE MOBILE TAB PANELS WORK*/
document.addEventListener('DOMContentLoaded',  () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to the clicked button and corresponding panel
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    
});

/*FUNCTION FOR THE MOBILE DROPDOWN LISTS*/
export function dropDownList() {
    const sportTitles = document.querySelectorAll('.sport-title, .league-title');

    sportTitles.forEach(title => {
        title.addEventListener('click', () => {
            const leagueList = title.nextElementSibling;
            leagueList.classList.toggle('show');
            
        });
    });
};

/*FUNCTION FOR THE DESKTOP COLLAPSIBLE SIDE-BAR*/
const sportsSideBar = document.querySelector(".side-sports-bar");
const sportsToggleBtn = document.querySelector(".sports-toggle-btn");
const leagueList = document.querySelectorAll(".league-list, .sub-league-list");

sportsToggleBtn.addEventListener("click", () => {
    console.log("clicked");
    sportsSideBar.classList.toggle("collapsed");

    //CLOSE DROPDOWNS WHEN NAV IS COLLAPSED
    if(sportsSideBar.classList.contains("collapsed")) {
        leagueList.forEach(list => {
            list.classList.remove("show");
        });
    }
});

//ADD ACTIVE CLASS TO THE ACTIVE LINK/LIST FOR MY DROPDOWNS
const sportLists = document.querySelectorAll(".sport-title, .league-title");

sportLists.forEach(list => {
  list.addEventListener("click", () => {
    //REMOVE ACTIVE CLASS FROM ALL LISTS
    sportLists.forEach(otherList => {
      otherList.classList.remove("active");
    })

    //ADD ACTIVE CLASS TO THE CLICKED LIST
    list.classList.add("active");
  })
})
