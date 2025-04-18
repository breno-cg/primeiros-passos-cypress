import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const menuPage = new MenuPage
const myInfoPage = new MyInfoPage

describe('Orange HRM Tests', () => {

  //const selectorsList = {
    //sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    //dashboardGrid: ".orangehrm-dashboard-grid",
    //myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    //employeeFirstNameField: "[name='firstName']",
    //employeeLastNameField: "[name='lastName']",
    //employeeGenericField: ".oxd-input--active",
    //dateCloseButton: ".--close",
    //dateField: "[placeholder='yyyy-dd-mm']",
    //selectArrowButton: ".oxd-select-text--arrow",
    //nationalityField: ".oxd-select-dropdown > :nth-child(5)",
    //maritalStatusField: ".oxd-select-dropdown > :nth-child(3)",
    //dataSaveButton: "[type='submit']"
  //}

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfoPage()
    //to commit: -m "add page objects"
    
    myInfoPage.fillPersonalDetails(userData.employeeData.firstName, userData.employeeData.lastName)
    myInfoPage.fillEmployeeDetails('1234', '5678', '123456', '2025-10-10')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    //cy.get("[name='username']").type('Admin')
    //cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    //cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    //cy.get('.oxd-button').click()
    //cy.get(selectorsList.loginButton).click()
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    //cy.get(selectorsList.dashboardGrid)
    //cy.get(selectorsList.myInfoButton).click()

    //cy.get(selectorsList.employeeFirstNameField).clear().type(userData.employeeData.firstname)
    //cy.get(selectorsList.employeeLastNameField).clear().type(userData.employeeData.lastname)
    //cy.get(selectorsList.employeeGenericField).eq(3).clear().type(userData.employeeData.employeeid)
    //cy.get(selectorsList.employeeGenericField).eq(4).clear().type(userData.employeeData.otherid)
    //cy.get(selectorsList.employeeGenericField).eq(5).clear().type(userData.employeeData.driverslicensenumber)
    //cy.get(selectorsList.dateField).eq(0).clear().type(userData.employeeData.expirydate)
    //cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.selectArrowButton).eq(0).click()
    //cy.get(selectorsList.nationalityField).click()
    //cy.get(selectorsList.selectArrowButton).eq(1).click()
    //cy.get(selectorsList.maritalStatusField).click()
    //cy.get(selectorsList.dataSaveButton).eq(0).click({ force: true })
    //cy.get('body').should('contain', 'Successfully Updated')
    //cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
    //cy.visit('/auth/login')
    //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
    //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test123')
    //cy.get('.oxd-button').click()
    //cy.get('.oxd-alert')
    //cy.get(selectorsList.usernameField).type(userData.userFail.username)
    //cy.get(selectorsList.passwordField).type(userData.userFail.password)
    //cy.get(selectorsList.loginButton).click()
    //cy.get(selectorsList.wrongCredentialAlert)
  })
})