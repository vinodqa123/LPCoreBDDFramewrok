package Pages;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

import Base.TestBase;


public class CollectCardPaymentPage extends TestBase {
	

	@FindBy(xpath="//input[@id='CardNumber']")
	WebElement CardNumber;
	@FindBy(xpath="//select[@id='ExpMonth']")
	WebElement ExpMonth;
	@FindBy(xpath="//select[@id='ExpYear']")
	WebElement ExpYear;
	@FindBy(xpath="//input[@id='CardCvv']")
	WebElement CardCvv;
	@FindBy(xpath="//input[@id='CardHolderName']")
	WebElement CardHolderName;
	@FindBy(xpath="//body/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[5]/div[1]/input[1]")
	WebElement PaymentAmount;
	@FindBy(xpath="/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[4]/div[1]/p[1]")
	WebElement Speciality;
	@FindBy(xpath="//a[contains(text(),'Heartland EMail')]")
	WebElement ProviderName;
	@FindBy(xpath="//body/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/button[1]")
	WebElement PayNowBtn;
	
	public CollectCardPaymentPage() throws IOException{
	
		PageFactory.initElements(driver,this);
		
	}
	public void enterCardNumber(String cardNumber1) throws InterruptedException {
		Thread.sleep(3000);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("CardNumber")));
		CardNumber.sendKeys(cardNumber1);
	}
	public void enterExpiryMonth( ){
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("ExpMonth")));
		Select Expiry_Month = new Select(driver.findElement(By.id("ExpMonth")));
		Expiry_Month.selectByVisibleText("02");
	}
	public void expiryYear() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("ExpYear")));	
		Select Expiry_Year = new Select(driver.findElement(By.id("ExpYear")));
		Expiry_Year.selectByVisibleText("2023");
	}
	public void enterCVV(String Cvv) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("CardCvv")));	
		CardCvv.sendKeys(Cvv);
	}
	public void enterAccountHolderName() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("CardHolderName")));	
		driver.findElement(By.id("CardHolderName")).sendKeys("John Smith Holder");
	}
	public void enterZipCode() {
	/*	if(PaymentType.contains("Recurring Billing")) {
			WebElement zipCode=driver.findElement(By.xpath("//input[@id='AvsZipCode']"));
			zipCode.sendKeys("12345");
//			Reporter.log("Card details entered successfully!");
			driver.findElement(By.xpath("//body/div[4]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/button[1]")).click();
			
			
		}else {
			Thread.sleep(2000);
	//		Reporter.log("Card details entered successfully!");
			driver.findElement(By.xpath("//body/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/button[1]")).click();
		//	driver.findElement(By.xpath("//body/div[4]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/button[1]")).click();
		
		} */
	}
	public void PayNowBtn() throws InterruptedException {
		Thread.sleep(2000);
		//		Reporter.log("Card details entered successfully!");
				driver.findElement(By.xpath("//body/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/button[1]")).click();
	}
	
	public String getTransactionID() throws InterruptedException {
		Thread.sleep(3000);
		WebElement transId=driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/table[1]/tbody[1]/tr[10]/td[2]"));
		String TransactionId=transId.getText();
		return TransactionId;
	}
	public void printReceipt() throws InterruptedException {
		Boolean PaymentReceipt;
		Thread.sleep(2000);
		WebElement receipt=driver.findElement(By.xpath("//h2[contains(text(),'Payment Receipt')]"));
		PaymentReceipt=receipt.isDisplayed();	
	}
	
}
