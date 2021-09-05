import BasePage from './basePage.js'

// ICT Page Class
export default class ictPage extends BasePage {

  // Elements
  languageDropdownMenu = "[data-eventaction=\"Country Site Menu Opened\"]";
  AmericasDropdown = "#region-0 > .material-icons";
  USEnglishLink = "#region0 > .pt-3 > :nth-child(18) > .row > .d-block > .heading-5";
  searchButton = ".site-nav__btn--search-menu > .site-nav__btn__label";
  inputField = "input";

  // Method to select US English language
  selectUSEnglish() {
    cy.get(this.languageDropdownMenu).click();
    cy.get(this.AmericasDropdown).click();
    cy.get(this.USEnglishLink).click();
  }

  // Method to Search by a particular text
  searchByText(searchTerm) {
    cy.get(this.searchButton).click();
    cy.get(this.inputField).type(searchTerm).type('{enter}');
  }

}