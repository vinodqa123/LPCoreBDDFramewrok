package Pages;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import Base.TestBase;


public class LoginPage extends TestBase {

	// Defining Elements here
	
		@FindBy(name="User_Login_Id")
		public WebElement username;
		
		@FindBy(name="User_Login_Password")
		public WebElement password;
		
		@FindBy(name="submit")
		public WebElement loginButton;
		
		@FindBy(xpath="//a[contains(text(),'Home')]")
		public WebElement HomeMenu;
		
			
		public LoginPage() throws IOException{
			
			PageFactory.initElements(driver, this);
			
			
		}
		public String getPageTitle() {
			return driver.getTitle();
		}
		public void login(String Un,String Pwd) throws IOException, InterruptedException {
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("User_Login_Id")));
			username.sendKeys(Un);
			password.sendKeys(Pwd);
			
			loginButton.click();
			Thread.sleep(3000);
	//		Reporter.log("User logged in to the Application!");	
			
	}
}
