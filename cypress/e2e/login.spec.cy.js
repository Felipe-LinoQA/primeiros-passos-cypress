import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/DashboardPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Orange HRM Tests', () => {


 it('User Info Updade - Sucess', () => {
    loginPage.accessLoginPage() 
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
 })

 
  it('login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})
