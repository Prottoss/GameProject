const {Builder,By,until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const edge = require('selenium-webdriver/edge');

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

async function test(driver){
	console.log("opening browser window")
    await driver.get('http://localhost:4200');
	driver.manage().setTimeouts({implicit: 10000}) // sets selenium to wait 10 seconds for pages to load
	
	console.log("finding login fields")
	let username = await driver.findElement(By.id('username'));
	let pwd = await driver.findElement(By.id('password'));
	
	console.log("filling in login fields")
	await username.sendKeys("dummy");
	await pwd.sendKeys("Password1!");
	console.log("finding login button")
	let login = await driver.findElement(By.id('loginbtn'));
	console.log("clicking login button")
	await login.click();
	console.log("finding profile button, and clicking")
	await driver.findElement(By.linkText('Profile')).click();
	
	console.log("waiting for profile page to load");
	let usernameDisplay = await driver.findElement(By.xpath('/html/body/app-root/app-customer-profile-page/div[2]/div[1]/div/div/h3[1]/b'));
	await driver.wait(until.elementIsVisible(usernameDisplay),10000);
	let text = await usernameDisplay.getAttribute('innerHTML')
	if (text != "dummy"){
		console.log("!! username display is not displaying the expected username 'dummy'! instead it's "+text);
	}else{
		console.log("username displayed is correct");
	}
	console.log("-- Login complete! --");
	console.log("performing checkout");
	await driver.get('http://localhost:4200/games/a833cb2a-36b0-4b3e-9b58-bcfef05f5497');
	let addtocart = await driver.findElement(By.xpath('/html/body/app-root/app-game-page/div/div[1]/div/div[2]/button'));
	await driver.wait(until.elementIsVisible(addtocart),10000);
	console.log("adding to cart");
	addtocart.click();
	await sleep(1000);
	await driver.get('http://localhost:4200/cart');
	console.log("checking out");
	let checkout=await driver.findElement(By.xpath('/html/body/app-root/app-shopping-cart/div/div/button[3]'));
	await driver.wait(until.elementIsVisible(checkout),1000);
	await sleep(1000);
	checkout.click();
	console.log("checkout clicked");
	await sleep(1000);
	/*
	let cwindow = driver.getWindowHandle()
	// find the paypal iframe and switch to it
	console.log("finding paypal iframe");
	let paypalIframe = await driver.findElement(By.xpath('//*[@title="PayPal"]'))
	await driver.switchTo().frame(paypalIframe);
	console.log("finding buy button")
	await driver.findElement(By.xpath('//*[@id="buttons-container"]/div/div[1]/div')).click();
	
	
	let paypalBtn = await driver.findElement(By.xpath('//*[@id="buttons-container"]/div/div[1]/div/div[1]/span'));
	await driver.wait(until.elementIsVisible(paypalBtn),10000);
	paypalBtn.click();
	console.log("paypal button clicked")
	await driver.wait(
    async () => (await driver.getAllWindowHandles()).length === 2,
    10000
  );
  console.log("new window handle found")
  const windows = await driver.getAllWindowHandles();
windows.forEach(async handle => {
  if (handle !== originalWindow) {
    await driver.switchTo().window(handle);
  }
});
console.log("switched to second window")
	await driver.wait(until.titleIs('Log in to your account'), 10000);
	*/
	console.log("tests complete, closing window")
    await driver.quit();
}

(async function openChromeTest() {
  try {
// CHROME
	console.log("TESTING ON GOOGLE CHROME");
    let options = new chrome.Options();
    let driver = await new Builder()
                .setChromeOptions(options)
                .forBrowser('chrome')
                .build();
	await test(driver);
	console.log("TESTING ON GOOGLE CHROME COMPLETE");
// FIREFOX
	console.log("TESTING ON FIREFOX");
    options = new firefox.Options();
    driver = await new Builder()
                .setFirefoxOptions(options)
                .forBrowser('firefox')
                .build();
	await test(driver);
	console.log("TESTING ON FIREFOX COMPLETE");
// EDGE
	console.log("TESTING ON EDGE");
    options = new edge.Options();
    driver = await new Builder()
                .setEdgeOptions(options)
                .forBrowser('MicrosoftEdge')
                .build();
	await test(driver);
	console.log("TESTING ON EDGE COMPLETE");
  } catch (error) {
    console.log(error)
  }
})();


