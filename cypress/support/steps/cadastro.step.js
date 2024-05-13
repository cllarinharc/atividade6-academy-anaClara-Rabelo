import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastroPage from "../pages/cadastro.page";
import { faker } from "@faker-js/faker";

let email;
let name = 'clara';
let Cadastro = new cadastroPage();

Given("que acessei a tela de cadastro", function () {
   cy.visit('users/novo');
});

When("confirmar a operação", function () {
  cy.get(Cadastro.buttonSave).should("be.visible");
  Cadastro.clickButtonSave();
});


When("informo um nome válido", function () {
  Cadastro.typeName(name);
});

When("informo um email válido", function () {
  email = faker.internet.email();
  cy.wrap(email).as("emailFaker");

  Cadastro.typeEmail(email);
});

When("informo um nome com 100 caracteres", function () {
  Cadastro.typeName(
    "anaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaanaana"
  );
});

When("informo um email com 60 caracteres", function () {
  Cadastro.typeEmail(
    email + "anaanaanaanaanaanaa@naanaanaanaanaanaanaanaanaanaanaanaanaana"
  );
  Cadastro.clickButtonSave();
});

When("tentar cadastrar um usuário com campo nome vazio", function () {
  Cadastro.typeName(" ", { delay: 0 });
  Cadastro.typeEmail(email);
  Cadastro.clickButtonSave();
});

When("tentar cadastrar um novo usuário com email vazio", function () {
  Cadastro.typeName(name);
  Cadastro.typeEmail(" ");
  Cadastro.clickButtonSave();
});

When("informo um nome com menos de 4 caracteres", function () {
  cy.get("#name").type(`${faker.string.alpha(3)}`, { delay: 0 });
});

When("informo um nome com simbolo", function () {
  cy.get("#name").type("!@#$%");
});

Then(
  "o usuario devera ser cadastrado no sistema",
  function () {
    cy.get(Cadastro.successNotice, { timeout: 20000 })
    .should("be.visible")
    .and("contain.text", "Usuário salvo com sucesso!");
  }
);

Then(
  "visualizo a mensagem de erro de caracteres no email",
  function () {
    cy.get(Cadastro.failureNotice)
      .should("be.visible")
      .and("contain", "Informe no máximo 60 caracteres para o e-mail");
  }
);

Then(
  "visualizo a mensagem de erro de caracteres do nome",
  function () {
    cy.get(Cadastro.failureNotice)
      .should("be.visible")
      .and("contain", "Informe no máximo 100 caracteres para o nome");
  }
);

Then(
  "visualizo a mensagem de erro de limite minimo caracteres",
  function () {
    cy.get(Cadastro.failureNotice)
      .should("be.visible")
      .and("contain", "Informe pelo menos 4 letras para o nome.");
  }
);

Then(
  "visualizo a mensagem de erro no nome vazio",
  function () {
    cy.get(Cadastro.failureNotice)
      .should("be.visible")
      .and("contain", "Informe pelo menos 4 letras para o nome.");
  }
);

Then(
  "visualizo a mensagem de erro no email",
  function () {
    cy.get(Cadastro.failureNotice)
      .should("be.visible")
      .and("contain", "O campo e-mail é obrigatório.");
  }
);

Then(
  "visualizo a mensagem de erro no formato do nome",
  function () {
    cy.get(Cadastro.failureNotice)
      .should("be.visible")
      .and("contain", "Formato do nome é inválido.");
  }
);