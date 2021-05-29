package stepDefinitions;

import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;

import Base.TestBase;
import Pages.CollectCardPaymentPage;
import Pages.CommunicationReportsPage;
import Pages.ContactlessPaymentPage;
import Pages.LoginPage;
import Pages.TransactionReportPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactlessPayment extends TestBase{
	LoginPage loginPage;
	ContactlessPaymentPage contactless;
	CollectCardPaymentPage collectcard;
	CommunicationReportsPage comm;
	TransactionReportPage transactionpage;
	String RefNo;
	String paymentLink;
	String Amount;
	public ContactlessPayment() throws IOException {
		
		super();
		// TODO Auto-generated constructor stub
	}
	@Before()
	public void setUp() throws InterruptedException {
		browserInitialization();
	}
	@After()
	public void tearDown() {
		driver.quit();
	}

	@Given("^CA User is already on Home Page$")
	public void ca_User_is_already_on_Home_Page() throws Throwable {
		loginPage=new LoginPage();
		Thread.sleep(3000);
		loginPage.login(prop.getProperty("username"),prop.getProperty("password"));
		System.out.println("User is aleady on Home Page");
		Thread.sleep(3000);
	}

	@When("^CA Select payment type as Contactless$")
	public void ca_Select_payment_type_as_Contactless() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		contactless=new ContactlessPaymentPage();
		contactless.selectPaymentType();
	}

	@When("^CA Enter the Patient details ReferenceNumber:\"([^\"]*)\",FirstName:\"([^\"]*)\",LastName:\"([^\"]*)\",Phone/Email:\"([^\"]*)\",Amount:\"([^\"]*)\"$")
	public void ca_Enter_the_Patient_details_ReferenceNumber_FirstName_LastName_Phone_Email_Amount(String RefNo, String FirstName, String LastName, String phone_Email, String amount) throws Throwable {
		this.RefNo=RefNo;
		contactless.enterDateOfVisit();
		contactless.enterReferenceNumber(RefNo);
		contactless.enterFirstName(FirstName);
		contactless.enterLastName(LastName);
		contactless.enterPhoneOrEmail(phone_Email);
		contactless.enterAmount(amount);
		this.Amount=amount;
	   
	}

	@When("^CA Click on Submit button$")
	public void ca_Click_on_Submit_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		contactless.submitButton();
	    
	}

	@Then("^CA Payment link should sent to patient$")
	public void ca_Payment_link_should_sent_to_patient() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		comm=new CommunicationReportsPage();
		comm.navigateToCommunicationReport();
		comm.runCommunicationReport();
		paymentLink=comm.getCollectCardPaymentlink(RefNo);
		Boolean link=paymentLink.isBlank();
		Assert.assertEquals(link,false);
	}

	@When("^CA Open the Paymentlink$")
	public void ca_Open_the_Paymentlink() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		collectcard=new CollectCardPaymentPage();
		collectcard.openPaymentLink(paymentLink);
	}

	@When("^CA Enter Card Details Info Card Number: \"([^\"]*)\"&\"([^\"]*)\"$")
	public void ca_Enter_Card_Details_Info_Card_Number(String cardNumber1, String Cvv) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		collectcard.enterCardNumber(cardNumber1);
		collectcard.enterExpiryMonth();
		collectcard.expiryYear();
		collectcard.enterCVV(Cvv);
		collectcard.enterAccountHolderName();
	}

	@When("^CA Click on PayNow button$")
	public void ca_Click_on_PayNow_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		collectcard.PayNowBtn();
	}

	@Then("^CA Transaction should success$")
	public void ca_Transaction_should_success() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String TransactionID=collectcard.getTransactionID();
		System.out.println("Transaction Id:"+TransactionID);
	}

	@When("^CA ReLaunch Application to do refund/void$")
	public void ca_ReLaunch_Application_to_do_refund_void() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		browserInitialization();
		loginPage=new LoginPage();
		Thread.sleep(3000);
		loginPage.login(prop.getProperty("username"),prop.getProperty("password"));
		System.out.println("User is aleady on Home Page");
		Thread.sleep(3000);
	}

	@When("^CA Run the Transaction Report$")
	public void ca_Run_the_Transaction_Report() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		transactionpage=new TransactionReportPage();
		transactionpage.navigateTransactionReport();
		transactionpage.runTransactionReport();
	}

	@When("^CA Try to do full refund$")
	public void ca_Try_to_do_full_refund() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		transactionpage=new TransactionReportPage();
		transactionpage.refundButton(RefNo);
		transactionpage.enterRefundAmount(Amount);
		transactionpage.selectReasonOption();
		transactionpage.refundVoidSubmitBtn();
	}

	@Then("^CA Full refund should success$")
	public void ca_Full_refund_should_success() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Boolean status=transactionpage.verifyRefundedTransaction();
		Assert.assertTrue(status);
	}

	@When("^CA Try to do Void for refund transaction$")
	public void ca_Try_to_do_Void_for_refund_transaction() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		transactionpage.voidButton(RefNo);
		transactionpage.selectReasonOption();
		transactionpage.refundVoidSubmitBtn();
	}

	@Then("^CA Void refund should success$")
	public void ca_Void_refund_should_success() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  
	}

	@When("^CA Try to do Void for original transaction$")
	public void ca_Try_to_do_Void_for_original_transaction() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^CA Authorize Void should success$")
	public void ca_Authorize_Void_should_success() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}
	
	

}

