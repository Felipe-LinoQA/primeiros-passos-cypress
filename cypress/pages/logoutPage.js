class LogoutPage {
     selectorsList() {
        const selectors = {
            myMenuButton: ".oxd-userdropdown-icon",
            logoutButton: "[href='/web/index.php/auth/logout']"
        }
        return selectors
     }

     userLogout() {
        cy.get(this.selectorsList().myMenuButton).click()
        cy.get(this.selectorsList().logoutButton).click()
     }
        
}

export default LogoutPage