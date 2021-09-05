import BasePage from './basePage.js'

// Search Page Class
export default class searchPage extends BasePage {

  // Elements
  pageHeading = ".CoveoQuerySummary > :nth-child(1) > :nth-child(4)";
  datesList = ".CoveoFieldValue.wtw-inline-field.wtw-listing-result-date";
  datesSortButton = "[aria-label=\"Sort by Date in descending order\"]";
  linksList = ".CoveoFieldValue.wtw-listing-result-uri";

  // Methos to verify a paticular text in page heading
  verifyTextInPageHeading(searchTerm) {
    cy.get(this.pageHeading).contains(searchTerm);
  }

  // Method to verify sorting by date
  verifySortingByDate() {
    var flag = 0;
    var newDate = new Date('01/01/0001');
    var oldDate = new Date("01/01/2050");
    return cy.get(this.datesList).each(($el) => {
      cy.wrap($el).invoke('text').then((val) => {
        newDate = new Date(val);
        if (oldDate <= newDate) {
          flag = 1;
        }
      })
        .then(() => oldDate = newDate)
    })
      .then(() => { return flag; })
  }

  // Method to sort by date if its not already sorted by date
  sortByDateIfNotAlready() {
    this.verifySortingByDate()
      .then((flag) => {
        if (flag == 1) {
          cy.get(this.datesSortButton).click();
          cy.wait(3000);
          this.verifySortingByDate()
            .then((newFlag) => {
              expect(newFlag).to.eq(1);
            })

        }
      })
  }

  // Method to filter
  contentTypeFiltering(filterName) {
    cy.get('[data-value="' + filterName + '"] > .coveo-facet-value-label > .coveo-facet-value-label-wrapper > .coveo-facet-value-checkbox').click();
  }

  // Method to verify article links
  verifyArticleLinks() {
    cy.get(this.linksList).each(($el) => {
      cy.wrap($el).invoke('text').should('match', new RegExp("^https://www.willistowerswatson.com/en-US/"));
    })
  }
}