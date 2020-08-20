
import LoginPage from './LoginPage'
import { parse } from "papaparse";



describe('Test Suite', function () {
    let users

    before(() => {
        cy.fixture('LoginDataSheet')
            .then((list) => {
                //'parse' package is used to convert csv=> json
                users = parse(list, {
                    header: true,
                    complete: csvData => csvData.data
                }).data
            })
    })

    Cypress._.range(0, 9).forEach((k) => {
        it(`Test Case # ${k}`, () => {
            const user = users[k]
            const log = new LoginPage()
            log.visit()
            log.FillEmail(user.email)
            log.FillPassword(user.password)
            log.LoginClick()
            log.Result(user.expect_result)
            
        })
    })
})
