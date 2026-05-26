import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/DashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/MyInfoPage.js'
import LogoutPage from '../pages/logoutPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const logoutPage = new LogoutPage()


describe('Orange HRM Tests', () => { 


 it('User Info Updade - Sucess', () => {
  loginPage.accessLoginPage() 
  loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

  dashboardPage.checkDashboardPage()

  menuPage.accessMyInfo()

  myInfoPage.fillPersonalDetails('firstName', 'lastname')
  myInfoPage.fillEmployeeDetails("employeeId", '7410852', '369258', '2025-15-05')
  myInfoPage.fillStatusDetails()
  myInfoPage.fillSaveFormButton()

  logoutPage.userLogout()
  })


})