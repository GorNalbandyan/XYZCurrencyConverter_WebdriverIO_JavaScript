const LoginPage = require('../../pageobjects/login.page')
const SecurePage = require('../../pageobjects/secure.page')
const CurrencyCnverter  = require('../../pageobjects/currencyConverter.page')

describe('Login to XE converter', () => {
    it('should login XE currency converter page', async () => {
        await LoginPage.open()
        await expect(CurrencyCnverter.AmountInputfield).toBeExisting()
    })
})


