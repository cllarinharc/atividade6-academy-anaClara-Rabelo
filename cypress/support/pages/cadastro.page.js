export default class cadastroPage {
  inputName = ".sc-dLMFU.Mcjyi.nameInput";
  inputEmail = "#email";
  failureNotice = ".sc-cPiKLX";
  successNotice = ".go3958317564";
  buttonSave = ".sc-dAlyuH.jdAtLn";

  typeName(name) {
    cy.get(this.inputName).type(name);
  }
  typeEmail(email) {
    cy.get(this.inputEmail).type(email);
  }
  clickButtonSave() {
    cy.get(this.buttonSave).click();
  }
}
