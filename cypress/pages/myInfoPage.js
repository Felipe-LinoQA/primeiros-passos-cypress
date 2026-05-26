class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dataCloseButton: '.--close',
            genericComboBox: ".oxd-select-text",
            secondIntemComboBox: '.oxd-select-dropdown > :nth-child(27)',
            thirdIntemComboBox: '.oxd-select-dropdown > :nth-child(4)',
            submitButton: "[type='submit']",

        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    
    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dataCloseButton).click()
    }
    
    fillStatusDetails() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().secondIntemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().thirdIntemComboBox).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type('1985-15-03')
    }
    
    fillSaveFormButton(){
        cy.get(this.selectorsList().dataCloseButton).click()
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
}


export default MyInfoPage