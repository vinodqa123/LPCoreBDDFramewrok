package Pages;
import java.awt.AWTException;
import java.awt.Robot;
import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Reporter;

import Base.TestBase;
import Utility.Util;

public class ManualEntryPage extends TestBase {
	public String TransactionID;
	public String Ref_NO;
	public String PatientName;
	public String Amount;
	public String Last_4_digits_CardNumber;
	public String Phone_Email;
	
	public Boolean printReceiptbutton;
	Actions act ;
	@FindBy(xpath="//input[@id='ManualEntry']")
	WebElement ManualEntry_Radiobtn;
		
	@FindBy(xpath="//input[@id='liquiddateofvisit']")
	WebElement dateofVisit;
	
	@FindBy(xpath="//body/div[@id='MainContainer']/div[6]/div[1]/div[3]/form[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[2]/input[1]")
	WebElement referenceNumber;	

	@FindBy(name="liquidspecialist[]")
	WebElement speciality;
	
	@FindBy(name="liquidfirst[]")
	WebElement firstName;
	
	@FindBy(name="liquidlast[]")
	WebElement Lastname;
	
	@FindBy(name="liquidprocphone[]")
	WebElement phone;
	
	@FindBy(name="liquidprocamt[]")
	WebElement amount ;
	
	@FindBy(xpath="//input[@id='btnGet']")
	WebElement SubmitFormbtn;
	
	@FindBy(xpath="//input[@id='ClearFormBtn']")
	WebElement ClearFormbtn;
		
	@FindBy(name="CardNumber1")
	WebElement cardNumber ;
	
	@FindBy(name="ExpMonth1")
	WebElement Expmonth ;
	
	@FindBy(name="ExpYear1")
	WebElement ExpYear ;
	
	@FindBy(name="CardCvv1")
	WebElement CardCVV ;
	
	@FindBy(xpath="/html[1]/head/body[1]/div[6]/div[2]/div[1]/div[1]/div[1]/div[1]/div[4]/button[1]")
	WebElement Confirmbtn;
	
	@FindBy(xpath="//body/div[6]/div[2]/div[1]/div[1]/div[1]/div[1]/div[4]/button[2]")
	WebElement Cancelbtn;
	
	@FindBy(name="StreetAddress")
	WebElement address;
	
	@FindBy(name="City")
	WebElement city;
	
	@FindBy(name="State")
	WebElement state;
	
	@FindBy(name="ZipCode")
	WebElement zipCode;
	
	@FindBy(xpath="//b[contains(text(),'Success')]")
	WebElement Success;
	
	@FindBy(xpath="//body/div[@id='MainContainer']/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/img[1]")
	WebElement printReceipt;
	
	@FindBy(xpath="//body/div[@id='MainContainer']/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/a[2]/img[1]")
	WebElement Backbtn;
	
	@FindBy(xpath="//button[contains(text(),'Retry')]")
	WebElement Retry;
	
	@FindBy(xpath="//a[contains(text(),'Home')]")
	WebElement Home;
	@FindBy(xpath="//a[contains(text(),'Declined')]")
	WebElement Status;
	
	@FindBy(xpath="//a[contains(text(),'Logout')]")
	WebElement logout;
		
	public ManualEntryPage() throws IOException{
		
		PageFactory.initElements(driver,this);
		
	}
	public Boolean selectPaymentType() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[contains(text(),'Home')]")));
		Home.click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='ManualEntry']")));
		ManualEntry_Radiobtn.click();
		Reporter.log("Manual Entry Paayment option selected!");	
		Boolean ME=ManualEntry_Radiobtn.isSelected();
		return ME;
		
	}
	public void enterDateOfVisit() {
		dateofVisit.click();	
		Util.getCurrentDate();
		WebElement date=driver.findElement(By.xpath("//td[contains(text(),'"+Util.currentdate+"')]"));
		date.click();	
		Reporter.log("Date of Visit seleted!");	
	}
	
	public void enterReferenceNumber(String refNo) {
		referenceNumber.sendKeys(refNo);
		Reporter.log("Reference Number entered successfully!");	
	}
	public void selectSpeciality() {
		
	}
	public void enterFirstName(String fName) {
		firstName.sendKeys(fName);
		Reporter.log("First Name entered successfully!");	
	}
	public void enterLastName(String lName) {
		Lastname.sendKeys(lName);
		Reporter.log("Last Name entered successfully!");	
	}
	public void enterPhoneOrEmail(String phone_Email ) {
		phone.sendKeys(phone_Email);
		Reporter.log("Phone/Email entered successfully!");	
	}
	public void enterAmount(String Amount) {
		amount.sendKeys(Amount);
		Reporter.log("Amount entered successfully!");	
	}
	public void submitButton() throws InterruptedException {
		Thread.sleep(3000);
		SubmitFormbtn.click();
		Reporter.log("Submit button hit successfully");	
	}
	public void enterCardNumber(String cardNumber1) throws InterruptedException {
		Thread.sleep(3000);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("CardNumber1")));
		cardNumber.sendKeys(cardNumber1);
		Reporter.log("Card Number entered successfully!"+cardNumber1);	
	}
	public void enterExpiryMonth(String ExpMonth1) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("ExpMonth1")));
		Expmonth.sendKeys(ExpMonth1);
		Reporter.log("EXP Month entered successfully!"+ExpMonth1);	
	}
	public void expiryYear(String ExpYear1) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("ExpYear1")));	
		ExpYear.sendKeys(ExpYear1);
		Reporter.log("EXP Year entered successfully!"+ExpYear1);
	}
	public void enterCVV(String Cvv) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("CardCvv1")));	
		CardCVV.sendKeys(Cvv);
	}
	public void enterAddress(String Address) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("StreetAddress")));	
		address.sendKeys(Address);
	}
	public void enterCity(String City) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("City")));	
		city.sendKeys(City);
	}
	public void enterState(String State) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("State")));	
		state.sendKeys(State);
		
	}
	public void enterZipCode(String ZipCode) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("ZipCode")));
		zipCode.sendKeys(ZipCode);	
	}
	public void ConfirmBtn() throws InterruptedException {
		act= new Actions(driver);
		Thread.sleep(3000);			
		act.sendKeys(Keys.TAB).build().perform();
		Thread.sleep(3000);
		act.sendKeys(Keys.ENTER).build().perform();
		Thread.sleep(3000);
	}
	public Boolean printReceipt() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//body/div[@id='MainContainer']/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]/img[1]")));
		printReceiptbutton=printReceipt.isDisplayed();
		return printReceiptbutton;
		
	}
	public void Backbtn() throws AWTException, InterruptedException {
		Boolean backtohome=Backbtn.isDisplayed();
		printReceiptbutton=printReceipt.isDisplayed();
		Robot robot=new Robot();
	
		if(backtohome==true) {				
			Thread.sleep(3000);
			Backbtn.click();				
		}
	}

}
