const LoginPage = require('../../pageobjects/login.page')
const CurrencyConverter  = require('../../pageobjects/currencyConverter.page')

describe('Be able to swap currencies', () => {
    const testCases = [
        { amount: 100, sourceCurrency: 'US Dollar', targetCurrency: 'Armenian Dram' }
    ];

    testCases.forEach((testCase) => {
        it(`should be able to to swap currencies at conversion`, async () => {
            await LoginPage.open();
            await expect(CurrencyConverter.AmountInputfield).toBeExisting();
            await CurrencyConverter.EnterAmount(testCase.amount);
            await CurrencyConverter.SelectSourceCurrency(testCase.sourceCurrency);
            await CurrencyConverter.SelectTargetCurrency(testCase.targetCurrency);
            await CurrencyConverter.ConvertBtn.click();
            await CurrencyConverter.SwapCurrenciesBtn.click();
            const fromText = await CurrencyConverter.SourceCurrencyText.getText();
            const toText = await CurrencyConverter.TargetCurrencyText.getText();
            await expect(await CurrencyConverter.SourceCurrencyText.getText()).toContain(
                testCase.targetCurrency,
                `Expected source currency text to contain "${testCase.targetCurrency}" but found "${await CurrencyConverter.SourceCurrencyText.getText()}"`
            );
            await expect(await CurrencyConverter.TargetCurrencyText.getText()).toContain(
                testCase.sourceCurrency,  
                `Expected target currency text to be "${testCase.sourceCurrency}" but found "${await CurrencyConverter.TargetCurrencyText.getText()}"`
                );
        });
    });
});
