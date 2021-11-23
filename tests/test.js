//destructure the functions required
const {By, Key, Builder} = require('selenium-webdriver');
require('chromedriver');

//create an async function
async function selenJS(){

    //create a search string that will be used in Google search
    let searchString = 'Choose Chicago';

    //build the browser and launch
    let driver = await new Builder().forBrowser('chrome').build();

    //fetch google.com from the browser
    await driver.get('http://google.com');

    //send a search query by passing in the searchString
    await driver.findElement(By.name('q')).sendKeys(searchString, Key.RETURN);

    //retrive the page title
    let title = await driver.getTitle();
    console.log('Title is: ', title);

    //quit the browser after execution
    await driver.quit();

};


selenJS();