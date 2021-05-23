package stepDefinitions;

import java.io.IOException;

import org.junit.Assert;

import Base.TestBase;
import Pages.CollectCardPaymentPage;
import Pages.CommunicationReportsPage;
import Pages.ContactlessPaymentPage;
import Pages.LoginPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactlessPayment extends TestBase{
	LoginPage loginPage;
	ContactlessPaymentPage contactless;
	CollectCardPaymentPage collectcard;
	CommunicationReportsPage comm;
	String RefNo;
	String paymentLink;
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

	@When("^Select payment type as Contactless$")
	public void select_payment_type_as_Contactless() throws Throwable {
	   
		contactless=new ContactlessPaymentPage();
		contactless.selectPaymentType();
	   
	}

	@When("^Enter the Patient details ReferenceNumber:\"([^\"]*)\",FirstName:\"([^\"]*)\",LastName:\"([^\"]*)\",Phone/Email:\"([^\"]*)\",Amount:\"([^\"]*)\"$")
	public void enter_the_Patient_details_ReferenceNumber_FirstName_LastName_Phone_Email_Amount(String RefNo, String FirstName, String LastName, String phone_Email, String amount) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.RefNo=RefNo;
		contactless.enterDateOfVisit();
		contactless.enterReferenceNumber(RefNo);
		contactless.enterFirstName(FirstName);
		contactless.enterLastName(LastName);
		contactless.enterPhoneOrEmail(phone_Email);
		contactless.enterAmount(amount);
		
	}

	@When("^Click on Submit button$")
	public void click_on_Submit_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		contactless.submitButton();
		
	}
	    
	
/*
	@Then("^Payment link should send to Patient on given Phone/Email$")
	public void payment_link_should_send_to_Patient_on_given_Phone_Email() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		comm=new CommunicationReportsPage();
		comm.navigateToCommunicationReport();
		comm.runCommunicationReport();		
		paymentLink=comm.getCollectCardPaymentlink(RefNo);
	   
	}

	@When("^Open the Payment link$")
	public void open_the_Payment_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get(paymentLink);
	   
	}

	@When("^Enter the card details CardNumber:\"([^\"]*)\"&CVV:\"([^\"]*)\"$")
	public void enter_the_card_details_CardNumber_CVV(String cardNumber, String cvv) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    collectcard=new CollectCardPaymentPage(); 
	    collectcard.enterCardNumber(cardNumber);
	    collectcard.enterExpiryMonth();
	    collectcard.expiryYear();
	    collectcard.enterCVV(cvv);
	    collectcard.enterAccountHolderName();
	   	    
	}

	@When("^Click on PayNow button$")
	public void click_on_PayNow_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 collectcard.PayNowBtn();
	}

	@Then("^Payment should successfull$")
	public void payment_should_successfull() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String TransactionID=collectcard.getTransactionID();

	   
	}

*/

}
