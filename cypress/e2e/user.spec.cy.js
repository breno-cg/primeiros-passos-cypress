import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    employeeFirstNameField: "[name='firstName']",
    employeeLastNameField: "[name='lastName']",
    employeeGenericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    dateField: "[placeholder='yyyy-dd-mm']",
    dataSaveButton: "[type='submit']"
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    //cy.get("[name='username']").type('Admin')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    //cy.get('.oxd-button').click()
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.employeeFirstNameField).clear().type(userData.employeeData.firstname)
    cy.get(selectorsList.employeeLastNameField).clear().type(userData.employeeData.lastname)
    cy.get(selectorsList.employeeGenericField).eq(3).clear().type(userData.employeeData.employeeid)
    cy.get(selectorsList.employeeGenericField).eq(4).clear().type(userData.employeeData.otherid)
    cy.get(selectorsList.employeeGenericField).eq(5).clear().type(userData.employeeData.driverslicensenumber)
    cy.get(selectorsList.dateField).eq(0).clear().type(userData.employeeData.expirydate)
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type(userData.employeeData.birthdate)
    cy.get(selectorsList.dataSaveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
    //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test123')
    //cy.get('.oxd-button').click()
    //cy.get('.oxd-alert')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})