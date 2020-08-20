import Registerpage from './Registerpage'

import { parse } from "papaparse";

describe('dynamic users using request', () => {

    let users

    before(() => {
        cy.fixture('RegisterDataSheet')
            .then((list) => {
                //'parse' package is used to convert csv=> json
                users =parse(list, {
                    header: true,
                    complete: csvData => csvData.data
                }).data
                
            })
            
    })


// if json file load  then we can use 
// const testData = require('../../fixtures/example')
// testData.forEach((data)=>{
//     it('testcase name',()=>{
//          add required logic
//          console.log(data)
//     })
// })


//if test case increse range should be update (Temp solution)
    Cypress._.range(0, 8).forEach((k) => {
        it(`Test Case # ${k}`, () => {
            const user = users[k]
            console.log(user)
            const reg = new Registerpage()
            reg.visit()
            reg.SelectGender(user.gender)
            reg.FillFirstname(user.f_name)
            reg.FillLastname(user.l_name)
            reg.SelectDateOfBirthDay(user.b_day)
            reg.SelectDateOfBirthMonth(user.b_month)
            reg.SelectDateOfBirthYear(user.b_year)
            reg.FillCompanyName(user.company_name)
            reg.FillEmail(user.email)
            reg.FillNewsLetter(user.is_newsletter)
            reg.FillPassword(user.password)
            reg.FillConfirmPassword(user.confirm_password,user.password)
            reg.SubmitData()
            reg.Result(user.expect_result)
        })
    })
})


