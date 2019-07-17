const assert = require('assert');

describe('Applitools Example Page', () => {
    it('should have the right title', () => {
        browser.url('https://applitools.com/helloworld');
        const title = browser.getTitle();
        assert.equal(title, 'Applitools');
    });
});