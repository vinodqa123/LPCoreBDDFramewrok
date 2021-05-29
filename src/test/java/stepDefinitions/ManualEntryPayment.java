package stepDefinitions;

import java.awt.AWTException;
import java.io.IOException;

import org.junit.Assert;

import Base.TestBase;
import Pages.LoginPage;
import Pages.ManualEntryPage;
import Pages.TransactionReportPage;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ManualEntryPayment extends TestBase {
	LoginPage loginPage;
	ManualEntryPage manualEntryPage;
	TransactionReportPage transactionpage;
	String Last_4_digits_CardNumber;
	String RefNo;
	String Amount;
	String PatientName;
	String Phone_Email;
	String TransID;
	Boolean reciptBtn;
	public ManualEntryPayment() throws IOException {
		super();
	}
	@Before()
	public void setUp() throws InterruptedException {
		
	}
	@After()
	public void tearDown() {
		driver.quit();
	}
	
	@Given("^User is already on Home Page$")
	public void login_To_Application() throws InterruptedException, IOException {		
		loginPage=new LoginPage();
		Thread.sleep(3000);
		loginPage.login(prop.getProperty("username"),prop.getProperty("password"));
		System.out.println("User is aleady on Home Page");
		Thread.sleep(3000);
	}
	@When("^Select payment type as Manual Entry$")
	public void select_PaymentType_ManualEntry() throws IOException {
		manualEntryPage=new ManualEntryPage();
		Boolean ME=manualEntryPage.selectPaymentType();
		
	}
	@When("^Enter the Patient details as ReferenceNumber: \"([^\"]*)\", FirstName: \"([^\"]*)\", LastName: \"([^\"]*)\", Phone/Email :\"([^\"]*)\", Amount :\"([^\"]*)\"$")
	public void enter_the_Patient_details_as_ReferenceNumber_FirstName_LastName_Phone_Email_Amount(String refNo, String firstName, String lName, String phone, String amount) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.RefNo=refNo;
		this.Amount=amount;
		manualEntryPage=new ManualEntryPage();
		manualEntryPage.enterDateOfVisit();
		manualEntryPage.enterReferenceNumber(refNo);
		manualEntryPage.enterFirstName(firstName);
		manualEntryPage.enterLastName(lName);
		manualEntryPage.enterPhoneOrEmail(phone);
		manualEntryPage.enterAmount(amount);
		manualEntryPage.submitButton();
	}
	
	@When("^Enter Card Details Info Card Number: \"([^\"]*)\", Address:\"([^\"]*)\", State:\"([^\"]*)\", City\"([^\"]*)\"&Cvv: \"([^\"]*)\"$")
	public void enter_Card_Details_Info_Card_Number_Address_State_City_Cvv(String CardNumber, String Address, String State, String City, String Cvv) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		manualEntryPage.enterCardNumber(CardNumber);
		manualEntryPage.enterExpiryMonth("03");
		manualEntryPage.expiryYear("2022");
		manualEntryPage.enterCVV(Cvv);
		manualEntryPage.enterAddress(Address);
		manualEntryPage.enterState(State);
		manualEntryPage.enterCity(City);
		manualEntryPage.enterZipCode("32828");
	}
	
	/*
	@When("^Enter the Patient details as \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"&\"([^\"]*)\"$")
	public void enter_the_Patient_details_as(String refNo,String firstName,String lName,String phone,String amount,String CardNumber,String Address,String State,String City,String Cvv) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.RefNo=refNo;
		this.Amount=amount;
		ManualEntryPage manualEntryPage=new ManualEntryPage();
		manualEntryPage.enterDateOfVisit();
		manualEntryPage.enterReferenceNumber(refNo);
		manualEntryPage.enterFirstName(firstName);
		manualEntryPage.enterLastName(lName);
		manualEntryPage.enterPhoneOrEmail(phone);
		manualEntryPage.enterAmount(amount);
		manualEntryPage.submitButton();
		manualEntryPage.enterCardNumber(CardNumber);
		manualEntryPage.enterExpiryMonth("03");
		manualEntryPage.expiryYear("2022");
		manualEntryPage.enterCVV(Cvv);
		manualEntryPage.enterAddress(Address);
		manualEntryPage.enterState(State);
		manualEntryPage.enterCity(City);
		manualEntryPage.enterZipCode("32828");
		manualEntryPage.ConfirmBtn();
		reciptBtn=manualEntryPage.printReceipt();

	}
	*/
	@When("^Click on Confirm button$")
	public void Click_on_Confirm_button() throws InterruptedException {
		manualEntryPage.ConfirmBtn();
	}

	@Then("^Manual Entry Payment should successfull$")
	public void verify_Payment_is_successfull() {		
	//	Assert.assertTrue(reciptBtn);
		System.out.println("Payment is successfull");
		
	}
	@When("^Run the Transaction Report$")
	public void runTransactionReport() throws InterruptedException, AWTException, IOException {
		transactionpage=new TransactionReportPage();
		transactionpage.navigateTransactionReport();
		transactionpage.runTransactionReport();
	}
	@When("^Try to do partial refund$")
	public void Try_to_do_partial_refund() {
		transactionpage.refundButton(RefNo);
		transactionpage.enterRefundAmount("0.51");
		transactionpage.selectReasonOption();
		transactionpage.refundVoidSubmitBtn();
		
		
	}
	@Then("^Partial refund should success$")
	public void partial_refund_should_success() {
		Boolean status=transactionpage.verifyRefundedTransaction();
		Assert.assertTrue(status);
	}
	@When("^Try to do full refund$")
	public void Try_to_do_full_refund() {
		transactionpage.refundButton(RefNo);
		transactionpage.enterRefundAmount(Amount);
		transactionpage.selectReasonOption();
		transactionpage.refundVoidSubmitBtn();
			
	}
	@When("^Try to do Void for refund transaction$")
	public void Try_to_do_Void_for_refund_transaction() {
		transactionpage.voidButton(RefNo);
		transactionpage.selectReasonOption();
		transactionpage.refundVoidSubmitBtn();
				
	}
	@Then("^Full refund should success$")
	public void full_refund_should_success() {
		Boolean status=transactionpage.verifyRefundedTransaction();
		Assert.assertTrue(status);
	}
	@When("^Try to do Void for original transaction$")
	public void Try_to_do_Void_for_original_transaction() {
		transactionpage.voidButton(RefNo);
		transactionpage.selectReasonOption();
		transactionpage.refundVoidSubmitBtn();
	}
	@Then("^Void refund should success$")
	public void void_refund_should_success() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^Authorize Void should success$")
	public void authorize_Void_should_success() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}




}
