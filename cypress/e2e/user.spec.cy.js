import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: 'button',
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dataCloseField: '.--close',
    submitButton: "[type='submit']"
  }

 it.only('User Info Updade - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('testName') 
    cy.get(selectorsList.lastNameField).clear().type('testLastName')
    cy.get(selectorsList.genericField).eq(3).clear().type('LdTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('driversTeste')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-15-03')
    cy.get(selectorsList.dataCloseField).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast')
    
  })

  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})