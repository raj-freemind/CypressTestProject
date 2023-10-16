



class LoginPage {



    visit() {
        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')
    }

    FillEmail(value) {
        const field = cy.get('#Email')
        field.clear()
        if(value!=""){
            field.type(value)
            //change
        }
        else{
            field.type('{enter}')
            cy.get('#Email-error').should('have.text', 'Please enter your email')
        }
        
        return this
    }

    FillPassword(value) {
        const field = cy.get('#Password')
        field.clear()
        if(value!=""){
            field.type(value)
        }
        else{
            field.type('{enter}')
            
        }
        return this
    }

    LoginClick() {
        const button = cy.get('.login-button')
        button.click()
        return this

    }
    
    Result(value){

        if(value=='login'){
            cy.url().should('eq',"https://demo.nopcommerce.com/")
            
        }
        else{
            
            cy.url().should('eq',"https://demo.nopcommerce.com/login?returnurl=%2F")
        }


    }

}

export default LoginPage