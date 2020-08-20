

class Registerpage {

    visit() {
        cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F')
    }

    SelectGender(value) {
        if(value){
        const field = cy.get('[type="radio"]')
        field.check(value)
        }
        return this
    }

    FillFirstname(value) {
        const field = cy.get('#FirstName')
        field.clear()
        if(value!=""){
            field.type(value)
        }
        else{
            field.type('{enter}')
            cy.get('#FirstName-error').should('have.text', 'First name is required.')
        }
        
        return this
    }

    FillLastname(value) {
        const field = cy.get('#LastName')
        field.clear()
        if(value!=""){
            field.type(value)
        }
        else{
            field.type('{enter}')
            cy.get('#LastName-error').should('have.text', 'Last name is required.')
        }
        return this
    }

    SelectDateOfBirthDay(value) {
        const field = cy.get('select[name="DateOfBirthDay"]')
        field.select(value!=""?value:'0')
        return this
    }
    SelectDateOfBirthMonth(value) {
        const field = cy.get('select[name="DateOfBirthMonth"]')
        field.select(value!=""?value:'0')
        return this
    }
    SelectDateOfBirthYear(value) {
        const field = cy.get('select[name="DateOfBirthYear"]')
        field.select(value!=""?value:'0')
        return this
    }
    FillEmail(value) {
        const field = cy.get('#Email')
        field.clear()
        if(value!=""){
            field.type(value)
        }
        else{
            field.type('{enter}')
            cy.get('#Email-error').should('have.text', 'Email is required.')
        }
        
        return this
    }

    FillCompanyName(value) {
        const field = cy.get('#Company')
        field.clear()
        field.type(value!=""?value:'{enter}')
        return this
    }
    FillNewsLetter(value) {
        if(value == 'false'){
        const field = cy.get('#Newsletter')
        field.uncheck()
        }
        
    }

    FillPassword(value) {
        const field = cy.get('#Password')
        field.clear()
        if(value!=""){
           
            field.type(value)
            if(value.length<6){
            cy.get('#Password-error').should('have.text', 'Password must meet the following rules: must have at least 6 characters')
            }
        }
        else{
            field.type('{enter}')
            cy.get('#Password-error').should('have.text', 'Password is required.')
        }
        
        return this
    }

    FillConfirmPassword(value1,value2) {
        const field = cy.get('#ConfirmPassword')
        field.clear()
        if(value1!=""){
            field.type(value1)
            
            if(value1!=value2){
                cy.get('#ConfirmPassword-error').should('have.text', 'The password and confirmation password do not match.')
            }
           
            
        }
        else{
            field.type('{enter}')
            cy.get('#ConfirmPassword-error').should('have.text', 'Password is required.')
        }
        
        return this
    }

    SubmitData() {
        const button = cy.get('#register-button')
        button.click()
        return this
    }

    Result(value){
        cy.url().should('eq', value)
        return this
    }



}

export default Registerpage