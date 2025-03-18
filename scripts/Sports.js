import{footballCategories} from '../Scripts-data/Sports-data.js';
import{footballHTML} from '../Scripts-data/Sports-data.js';
import{sportsMobileNavLinks} from '../scripts/Mobile-nav-bar.js';

/*FUNCTION THAT MAKES THE TAB PANELS WORK*/
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
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

/*FUNCTION FOR THE DROPDOWN LISTS*/
export function dropDownList() {
    const sportTitles = document.querySelectorAll('.sport-title, .league-title');
  
    sportTitles.forEach(title => {
        title.addEventListener('click', () => {
            const leagueList = title.nextElementSibling;
            leagueList.classList.toggle('show');

           
  
 
        });
    });
  };