package Pages;

import java.awt.AWTException;
import java.awt.Robot;
import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Base.TestBase;
import Utility.Util;

public class ContactlessPaymentPage extends TestBase {
	@FindBy(id="PatientAppointment")
	WebElement contactlessRadioBtn;
	
	@FindBy(name="liquiddateofvisit")
	WebElement dateofVisit;
	
	@FindBy(name="liquidaccountnumber[]")
	WebElement referenceNumber;
	
	@FindBy(name="liquidspecialist[]")
	WebElement speciality;
	
	@FindBy(name="liquidfirst[]")
	WebElement firstName;
	
	@FindBy(name="liquidlast[]")
	WebElement lastName;
	
	@FindBy(name="liquidprocphone[]")
	WebElement Phone_Email;
	
	@FindBy(name="liquidprocamt[]")
	WebElement Amount;
	
	@FindBy(xpath="//body/div[@id='MainContainer']/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/img[1]")
	WebElement backBtn;
	
	@FindBy(xpath="//input[@id='btnGet']")
	WebElement submitButton;
	
	@FindBy(xpath="//a[contains(text(),'Home')]")
	WebElement HomeMenu;
	
	public ContactlessPaymentPage() throws IOException{
		
		PageFactory.initElements(driver,this);
		
	}
	public Boolean selectPaymentType() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[contains(text(),'Home')]")));
		HomeMenu.click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='PatientAppointment']")));
		contactlessRadioBtn.click();
		Boolean CA=contactlessRadioBtn.isSelected();
		return CA;
		
	}
	public void enterDateOfVisit() {
		dateofVisit.click();	
		Util.getCurrentDate();
		WebElement date=driver.findElement(By.xpath("//td[contains(text(),'"+Util.currentdate+"')]"));
		date.click();			
	}
	
	public void enterReferenceNumber(String refNo) {
		referenceNumber.sendKeys(refNo);
	}
	public void selectSpeciality() {
		
	}
	public void enterFirstName(String fName) {
		firstName.sendKeys(fName);
	}
	public void enterLastName(String lName) {
		lastName.sendKeys(lName);
	}
	public void enterPhoneOrEmail(String phone_Email ) {
		Phone_Email.sendKeys(phone_Email);
	}
	public void enterAmount(String amount) {
		Amount.sendKeys(amount);
	}
	public void submitButton() throws InterruptedException {
		Thread.sleep(3000);
		submitButton.click();
	}
	
	public void Backbtn() throws AWTException, InterruptedException {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//body/div[@id='MainContainer']/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/img[1]")));			
		Boolean backtohome=backBtn.isDisplayed();		
		if(backtohome==true) {				
			Thread.sleep(3000);
			backBtn.click();				
		}
	}


}
