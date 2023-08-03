
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CurrencyConverter extends Page {
    /**
     * define selectors using getter methods
     */
    get AmountInputfield () {
        return $('#amount');
    }
    
    get SourceCurrencyField(){
        return $("(//input[@type='text'])[2]")
    }

    get TargetCurrencyField(){
        return $("(//input[@type='text'])[3]")
    }

    get ConvertBtn(){
        return $('//button[(text() = "Convert")]')

    }

    get ConvertedFullAmount(){
        return $('.result__BigRate-sc-1bsijpp-1')
    }
    async EnterAmount (amount) {
        await this.AmountInputfield.setValue(amount);
    }
    
    async SelectSourceCurrency(sourceCurrency){
        await this.SourceCurrencyField.click()
        await this.SourceCurrencyField.setValue(sourceCurrency)
        //await $("//*[(contains(@class,'converterform-dropdown__option') or contains(@class,'ListboxOption')) and contains(.,'${sourceCurrency}')]").click()
        await $(`//*[contains(@class,'converterform-dropdown__option') or contains(@class,'ListboxOption')][contains(.,'${sourceCurrency}')]`).click();

    }

    async SelectTargetCurrency(targetCurrency){
        await this.TargetCurrencyField.click()
        await this.TargetCurrencyField.setValue(targetCurrency)
        await $(`//*[contains(@class,'converterform-dropdown__option') or contains(@class,'ListboxOption')][contains(.,'${targetCurrency}')]`).click();
    }
}

module.exports = new CurrencyConverter();