

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
}

module.exports = new SecurePage();
