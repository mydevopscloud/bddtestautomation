package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * @author BirendraRawal
 *
 */
public class SmokeTest {
	WebDriver driver;

	@Given("^Open firefox browser and start application$")
	public void open_firefox_browser_and_start_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.gecko.driver", "C:\\\\Users\\BirendraRawal\\Documents\\Selenium\\new Jars\\geckodriver-v0.20.1-win64\\geckodriver.exe");

		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.navigate().to("https://www.facebook.com");
		Thread.sleep(5000);
	}

/*	@When("^I enter valid username and password credentials$")
	public void i_enter_valid_username_and_password_credentials() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //enter user name and password
		driver.findElement(By.id("email")).sendKeys("mydevopscloud@gmail.com");
		driver.findElement(By.name("pass")).sendKeys("Test@123$");
	}*/
	
	@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\" credentials$")
	public void i_enter_valid_and_credentials(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//enter user name and password
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.name("pass")).sendKeys(password);
		Thread.sleep(1000);
	}

	@When("^Click login button$")
	public void click_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//Click on Login Button
	    driver.findElement(By.id("u_0_2")).click();
	    Thread.sleep(5000);
	}

	@Then("^User should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String expectedText = "Home";
		String actualText= driver.findElement(By.xpath("/html/body/div[1]/div[2]/div/div[1]/div/div/div/div[2]/div[1]/div[2]/div/a")).getText();
	    if(expectedText.equals(actualText)) {
	    	System.out.println("Success");
	    }else System.err.println("Fail");
	    
	    
	}
	
	
	@Then("^User should not be able to login$")
	public void user_should_not_be_able_to_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String expectedText = "loginform";
		String actualText= driver.findElement(By.xpath("//*[@id=\"loginform\"]")).getText();
	    if(expectedText.equals(actualText)) {
	    	System.out.println("Success: " + "Expected Text:=> " + expectedText + "Actual Text :=> " + actualText);
	    }else System.err.println("Fail: " + "Expected Text:=> " + expectedText + "Actual Text :=> " + actualText);
	}

	@Then("^Application should be closed$")
	public void application_should_be_closed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//close 
	   // driver.close();
		driver.quit();
	   // System.exit(0);
	    
	}
	
}
