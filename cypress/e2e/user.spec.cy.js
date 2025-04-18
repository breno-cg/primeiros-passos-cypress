import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const menuPage = new MenuPage
const myInfoPage = new MyInfoPage

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfoPage()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.last({ nationality: 'jp' }))
    myInfoPage.fillEmployeeDetails(chance.natural({ min: 1000, max: 9999 }), chance.natural({ min: 1000, max: 9999 }), chance.natural({ min: 10000, max: 99999 }), chance.date({string: true}))
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
})