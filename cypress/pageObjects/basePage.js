// Base Page Class
export default class BasePage {

  // Base Url of the application
  baseUrl = "http://www.willistowerswatson.com";

  // Method to navigate to a path
  navigate(path) {
    cy
      .visit(this.baseUrl + path);
  }

  // Method to get title of the page
  getPageTitle() {
    return cy.title()
  }

}