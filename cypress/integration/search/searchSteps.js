import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import ICTPage from '../../pageObjects/ictPage';
import SearchPage from '../../pageObjects/searchPage';
const ictPage = new ICTPage();
const searchPage = new SearchPage();

Given('ICT webpage is open with title {string}', (pageTitle) => {
  cy.setCookie("truste.eu.cookie.notice_preferences", "2:");
  ictPage.navigate('/ICT');
  ictPage.getPageTitle().should('eq', pageTitle);
})

When('I change the language to United States English', () => {
  ictPage.selectUSEnglish();
})

When('I search for {string}', (searchTerm) => {
  ictPage.searchByText(searchTerm);
})

Then('Search Page is opened with title {string}', (pageTitle) => {
  searchPage.getPageTitle().should('eq', pageTitle);
})

Then('Page heading contains {string}', (searchTerm) => {
  searchPage.verifyTextInPageHeading(searchTerm);
})

When('Sort by Date if not sorted already', () => {
  searchPage.sortByDateIfNotAlready();
})

When('Filter for {string} Content type filter', (filterName) => {
  searchPage.contentTypeFiltering(filterName);
})

Then('Article links in the list are correct', () => {
  searchPage.verifyArticleLinks();
})