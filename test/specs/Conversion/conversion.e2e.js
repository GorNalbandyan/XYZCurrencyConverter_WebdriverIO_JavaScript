const LoginPage = require('../../pageobjects/login.page')
const CurrencyConverter  = require('../../pageobjects/currencyConverter.page')

describe('Make conversion', () => {
    const testCases = [
        { amount: 100, sourceCurrency: 'US Dollar', targetCurrency: 'Armenian Dram' },
        { amount: 50, sourceCurrency: 'Euro', targetCurrency: 'Japanese Yen' },
        // Add more test cases as needed
    ];

    testCases.forEach((testCase, index) => {
        it(`should be able to Get Full conversion amount - Test Case ${index + 1}`, async () => {
            await LoginPage.open();
            await expect(CurrencyConverter.AmountInputfield).toBeExisting();
            await CurrencyConverter.EnterAmount(testCase.amount);
            await CurrencyConverter.SelectSourceCurrency(testCase.sourceCurrency);
            await CurrencyConverter.SelectTargetCurrency(testCase.targetCurrency);
            await CurrencyConverter.ConvertBtn.click();
            await expect(CurrencyConverter.ConvertedFullAmount).toBeExisting();
        });
    });
});


