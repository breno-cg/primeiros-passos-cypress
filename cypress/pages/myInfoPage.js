class MyInfoPage {
    selectorsList() {
        const selectors = {
            employeeFirstNameField: "[name='firstName']",
            employeeLastNameField: "[name='lastName']",
            employeeGenericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            selectArrowButton: ".oxd-select-text--arrow",
            nationalityField: ".oxd-select-dropdown > :nth-child(5)",
            maritalStatusField: ".oxd-select-dropdown > :nth-child(3)",
            dataSaveButton: "[type='submit']"
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().employeeFirstNameField).clear().type(firstName)
        cy.get(this.selectorsList().employeeLastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate) {
        cy.get(this.selectorsList().employeeGenericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().employeeGenericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().employeeGenericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus() {
        cy.get(this.selectorsList().selectArrowButton).eq(0).click()
        cy.get(this.selectorsList().nationalityField).click()
        cy.get(this.selectorsList().selectArrowButton).eq(1).click()
        cy.get(this.selectorsList().maritalStatusField).click()
    }

    saveForm() {
        cy.get(this.selectorsList().dataSaveButton).eq(1).click({ force: true })
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage