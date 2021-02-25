// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('check', function() {
  this.timeout(60000)
  /**@type {import('selenium-webdriver').ThenableWebDriver} */
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('check', async function() {
    await driver.get("https://dev.incognitohr.com/en")
    await driver.manage().window().setRect({ width: 1920, height: 1080})
    await driver.findElement(By.linkText("Sign in")).click()
    await driver.findElement(By.id("loginform-identity")).click()
    await driver.findElement(By.id("loginform-identity")).sendKeys("artur@osi.in.ua")
    await driver.findElement(By.id("loginform-password")).click()
    await driver.findElement(By.id("loginform-password")).sendKeys(Key.SPACE, Key.SPACE, Key.SPACE, Key.SPACE, Key.SPACE, '1')
    await driver.findElement(By.name("login-button")).click()

    await driver.wait(until.elementLocated(By.linkText("Account")), 5000);

    await driver.findElement(By.linkText("Account")).click()
    await driver.findElement(By.linkText("My Jobs")).click()

    await driver.wait(until.elementLocated(By.css("#w0 > li:nth-child(1) > a")), 5000);
    
    await driver.findElement(By.css("#w0 > li:nth-child(1) > a")).click()
    // await driver.executeScript(`document.querySelector("a[data-href='/en/jobs/autotestjobcreation/delete']").scrollIntoView()`);
    // await driver.wait(until.elementLocated(By.xpath("(//button[@type=\'button\'])[3]")), 5000);
    await driver.findElement(By.css(".btn-soft-danger")).click()

    // await driver.sleep(5000)
    await driver.wait(until.elementLocated(By.linkText("Delete")), 5000);
    await driver.findElement(By.linkText("Delete")).click()
    
    // driver.navigate().refresh();
    await driver.wait(until.elementLocated(By.id('w4')), 5000)
    {
      const elements = await driver.findElements(By.id("w4"))
      assert(elements.length)
    }

    await driver.findElement(By.linkText("Account")).click()
    await driver.findElement(By.linkText("My Jobs")).click()

    await driver.wait(until.elementLocated(By.css("#w0 > li:nth-child(1) > a")), 5000);
    
    await driver.findElement(By.css("#w0 > li:nth-child(1) > a")).click()
    {
      const elements = await driver.findElements(By.linkText("Auto_Test_Job_Creation"))
      console.log('kek:', elements);
      assert(elements.length === 0)
    }
    {
      const elements = await driver.findElements(By.xpath("//p[contains(.,\'​Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, error voluptates tempore veritatis voluptatibus minima qui ipsa doloribus laboriosam obcaecati corporis officiis magni, eius temporibus incidunt quisquam labore, sunt recusandae.\')]"))
      assert(elements.length === 0)
    }
  })
})
