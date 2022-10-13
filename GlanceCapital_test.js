Feature('Login');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://dev.glancecapital.com');
    I.wait(2);
    I.click('//a[@class="btn btn-link"]');
    I.wait(2);
    I.fillField('//input[@id="input-email"]',"osman.saral+70@gmail.com");
    I.fillField('//input[@id="input-password"]',"123qweASD");
    I.click('//button[@id="btn-continue"]');
    I.wait(3);
    I.click('//a[@href="/transactions"]');
    I.wait(3);
    I.click('//a[@href="/accounts"]');
    I.wait(3);
    I.click('//a[@href="/mastercard"]');
    I.wait(3);
    I.click('//a[@href="/api/auth/logout"]');
    pause()



});
