describe('Orange HRM Tests', () => {

  const selectorsList = {
    usarnameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: 'button',
    sectionTitle: '.oxd-text--h6',
    oxdCredentialAlert: '.oxd-alert'
  }

 it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usarnameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitle).contains('Dashboard')
  })

  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usarnameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.oxdCredentialAlert)
  })
})