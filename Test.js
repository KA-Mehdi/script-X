// const { Builder, By, Key, until } = require("selenium-webdriver");

// async function example() {
//     let driver = await new Builder().forBrowser("chrome").build();

//     try {
//         // Go to the X.com website
//         await driver.get("https://x.com");

//         // Click the login link
//         await driver.findElement(By.xpath('//*[@href="/login"]')).click();

//         // Wait for the email input field to be ready, fill it, and click next
//         await driver.wait(until.elementLocated(By.xpath('//input[@type="text"]')), 10000).sendKeys("kamilmehdi449@gmail.com", Key.RETURN);

//         await driver.wait(until.elementLocated(By.xpath('//input[contains(@class, "r-30o5oe")]')), 10000).sendKeys("pffffffff00", Key.RETURN);

//         await driver.wait(until.elementLocated(By.xpath('//input[contains(@name, "password")]')), 10000).sendKeys("HHHTwitter@@321", Key.RETURN);

//         // Wait for the search input and search for "1337 Coding School"
//         await driver.wait(until.elementLocated(By.xpath('//input[@data-testid="SearchBox_Search_Input"]')), 10000).sendKeys("1337 Coding School", Key.RETURN);

//         // Wait for the span containing "1337 Coding School" and click it
//         await driver.wait(until.elementLocated(By.xpath('//span[contains(text(), "1337 Coding School")]')),10000).click();

//         // Scroll down to load more content if needed
//         await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
//         await driver.sleep(2000); // Wait for new posts to load 



//         await driver.wait(until.elementLocated(By.xpath('(//article)[1]')),10000).click();



//     } catch (error) {
//         console.error("error", error);
//     }
// }

// example();


const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Go to the X.com website
        await driver.get("https://x.com");

        // Click the login link
        let loginElement = await driver.findElement(By.xpath('//*[@href="/login"]'));
        loginElement.click();

        // Wait for the email input field to be ready, fill it, and click next
        let emailElement = await driver.wait(until.elementLocated(By.xpath('//input[@type="text"]')), 10000);
        await emailElement.sendKeys("kamilmehdi449@gmail.com", Key.RETURN);

        // Add sleep to ensure the next field has time to load
        await driver.sleep(2000);

        // Wait for the name input field 
        let nameElement = await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//input[contains(@class, "r-30o5oe")]'))),10000);
        await nameElement.sendKeys("pffffffff00", Key.RETURN);

        // Wait for the password input field
        let passwordElement = await driver.wait(until.elementLocated(By.xpath('//input[contains(@name, "password")]')), 10000);
        await passwordElement.sendKeys("HHHTwitter@@321", Key.RETURN);

        // Wait for the search input and search for "1337 Coding School"
        let searchElement = await driver.wait(until.elementLocated(By.xpath('//input[@data-testid="SearchBox_Search_Input"]')), 10000);
        await searchElement.sendKeys("1337 Coding School", Key.RETURN);

        // Wait for the span containing "1337 Coding School" and click it
        let accountDisplay = await driver.wait(until.elementLocated(By.xpath('//span[contains(text(), "1337 Coding School")]')), 10000);
        await accountDisplay.click();

        // Scroll down to load more content if needed
        await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
        await driver.sleep(2000); // Wait for new posts to load 

        let latestPost = await driver.wait(until.elementLocated(By.xpath('(//article)[1]')), 10000);
        await latestPost.click();

    } catch (error) {
        console.error("error", error);
    }
}

example();
