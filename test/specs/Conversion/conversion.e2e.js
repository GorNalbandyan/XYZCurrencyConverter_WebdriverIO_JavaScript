const LoginPage = require('../../pageobjects/login.page')
const CurrencyConverter  = require('../../pageobjects/currencyConverter.page')

describe('Make conversion', () => {
    it('should be able to Get Full conversion amount', async () => {
        await LoginPage.open()
        await expect(CurrencyConverter.AmountInputfield).toBeExisting()
        await CurrencyConverter.EnterAmount(100)
        await CurrencyConverter.SelectSourceCurrency('US Dollar')
        await CurrencyConverter.SelectTargetCurrency('Armenian Dram')
        await CurrencyConverter.ConvertBtn.click()
        await expect(CurrencyConverter.ConvertedFullAmount).toBeExisting()
    })
})


