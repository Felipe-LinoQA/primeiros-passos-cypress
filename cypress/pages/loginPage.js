class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: 'button',
            wrongCredentialAlert: ".oxd-alert"
        }

        return selectors

    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(usarname, password) {
        cy.get(this.selectorsList().usernameField).type(usarname)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).type('button')

    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}


export default LoginPage