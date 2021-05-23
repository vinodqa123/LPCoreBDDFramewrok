package Pages;

import java.awt.AWTException;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

import Base.TestBase;

public class TransactionReportPage extends TestBase {
	
	@FindBy(xpath="//a[@id='report']")
	WebElement Report_Menu;
	Alert alt;
	@FindBy(id="btnTranReport")
	WebElement TransactionReport_Menu;
	
	@FindBy(xpath="//a[contains(text(),'ALL Transaction')]")
	WebElement All_Transaction_Menu;
	
	@FindBy(xpath="//a[contains(text(),'Visa')]")
	WebElement VisaCard_Menu;
	
	@FindBy(xpath="//a[contains(text(),'Master Card')]")
	WebElement MasterCard_Menu;
	
	@FindBy(xpath="//a[contains(text(),'Amex')]")
	WebElement AmexCard_Menu;
	
	@FindBy(xpath="//a[contains(text(),'Discover')]")
	WebElement DiscoverCard_Menu;
	
	@FindBy(xpath="//a[contains(text(),'JCB')]")
	WebElement JCBCard_Menu;
	
	@FindBy(xpath="//a[contains(text(),'Unknown')]")
	WebElement UnknownCards_Menu;
	
	@FindBy(xpath="//tbody/tr[9]/td[1]/input[1]")
	WebElement E_CommerceCheckBox;
	
	@FindBy(xpath="//input[@id='devicetype']")
	WebElement Device_Checkbox;
	
	@FindBy(xpath="//input[@id='AddMerchant']")
	WebElement RunMyReport;
	
	@FindBy(xpath="//input[@id='refundamount']")
	WebElement refundAmount;
	
	@FindBy(xpath="//select[@id='FundReson']")
	WebElement reasonDropDown;
	
	@FindBy(xpath="//input[@id='Submit']")
	WebElement refund_Void_ConfirmBtn;
	
		
	public  Boolean TransType;
	
	public TransactionReportPage() throws IOException{
		
		PageFactory.initElements(driver,this);
		
	}
	public TransactionReportPage navigateTransactionReport() throws InterruptedException, AWTException, IOException {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[contains(text(),'Home')]")));
		driver.findElement(By.xpath("//a[contains(text(),'Home')]")).click();		
		Actions actions = new Actions(driver);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@id='report']")));
		actions.moveToElement(Report_Menu).moveToElement(TransactionReport_Menu).click().build().perform();	     
	    System.out.println("Navigated to Transaction Report menu");
	 		return new TransactionReportPage();
	    
	}
	
	
	public void runTransactionReport() throws InterruptedException {
		Thread.sleep(3000);
		Boolean EcommerceCheckbox=E_CommerceCheckBox.isSelected();		
			RunMyReport.click();
			String parent=driver.getWindowHandle();
			Set<String>s=driver.getWindowHandles();
			Thread.sleep(2000);
			// Now iterate using Iterator
			Iterator<String> I1= s.iterator();

			while(I1.hasNext())
			{
				String child_window=I1.next();

				if(!parent.equals(child_window))
				{
					driver.switchTo().window(child_window);
					driver.navigate().back();
					
				}					
			}
					
	}
	public void refundButton(String refNo) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//td[contains(text(),'"+refNo+"')]/following-sibling::td[5]/div[1]/div[1]/div[2]/a[1]/img[1]")));
		WebElement refundBtn=driver.findElement(By.xpath("//td[contains(text(),'"+refNo+"')]/following-sibling::td[5]/div[1]/div[1]/div[2]/a[1]/img[1]"));
		if(refundBtn.isDisplayed()) {
			refundBtn.click();
		}
	}
	public void enterRefundAmount(String partiaRrefundAmount) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='refundamount']")));
		refundAmount.clear();
		refundAmount.sendKeys(partiaRrefundAmount);
	}
	public void selectReasonOption() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//select[@id='FundReson']")));
		Select dropdown=new Select(reasonDropDown);
		dropdown.selectByIndex(2);
				
	}
	public void refundVoidSubmitBtn() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='Submit']")));
		refund_Void_ConfirmBtn.click();
		Alert alt=driver.switchTo().alert();
		alt.accept();
		driver.navigate().refresh();
	}
	public Boolean verifyRefundedTransaction() {
		Boolean refundstatus = null;
		WebElement TansType=driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[8]"));
		String TansactionType=TansType.getText();
		return TransType=TansactionType.contains("Refund");
	} 
	public void voidButton(String refNo) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//td[contains(text(),'"+refNo+"')]/following-sibling::td[5]/div[1]/div[1]/div[1]/a[1]/img[1]")));
		WebElement refundBtn=driver.findElement(By.xpath("//td[contains(text(),'"+refNo+"')]/following-sibling::td[5]/div[1]/div[1]/div[1]/a[1]/img[1]"));
		if(refundBtn.isDisplayed()) {
			refundBtn.click();
		}
	}
		

}
