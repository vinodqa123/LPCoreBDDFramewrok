$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/LPCore.feature");
formatter.feature({
  "line": 1,
  "name": "LP Core functional Regression test",
  "description": "",
  "id": "lp-core-functional-regression-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#Manual Entry Payment feature"
    }
  ],
  "line": 3,
  "name": "Verify Manual Entry Payment with different type of cards(VISA/MasterCard/Amex/Discover..)",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-manual-entry-payment-with-different-type-of-cards(visa/mastercard/amex/discover..)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select payment type as Manual Entry",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the Patient details as ReferenceNumber: \"\u003cReferenceNumber\u003e\", FirstName: \"\u003cfirstname\u003e\", LastName: \"\u003clastname\u003e\", Phone/Email :\"\u003cphone\u003e\", Amount :\"\u003cAmount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter Card Details Info Card Number: \"\u003ccardNumber\u003e\", Address:\"\u003caddress\u003e\", State:\"\u003cstate\u003e\", City\"\u003ccity\u003e\"\u0026Cvv: \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Manual Entry Payment should successfull",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-manual-entry-payment-with-different-type-of-cards(visa/mastercard/amex/discover..);",
  "rows": [
    {
      "cells": [
        "ReferenceNumber",
        "firstname",
        "lastname",
        "phone",
        "Amount",
        "cardNumber",
        "address",
        "state",
        "city",
        "cvv"
      ],
      "line": 12,
      "id": "lp-core-functional-regression-test;verify-manual-entry-payment-with-different-type-of-cards(visa/mastercard/amex/discover..);;1"
    },
    {
      "cells": [
        "1111-23",
        "John",
        "smith",
        "9548406651",
        "2",
        "4012002000060016",
        "Madhapur",
        "Hyderabad",
        "Telangana",
        "123"
      ],
      "line": 13,
      "id": "lp-core-functional-regression-test;verify-manual-entry-payment-with-different-type-of-cards(visa/mastercard/amex/discover..);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8247536400,
  "status": "passed"
});
formatter.before({
  "duration": 78300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Manual Entry Payment with different type of cards(VISA/MasterCard/Amex/Discover..)",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-manual-entry-payment-with-different-type-of-cards(visa/mastercard/amex/discover..);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select payment type as Manual Entry",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter the Patient details as ReferenceNumber: \"1111-23\", FirstName: \"John\", LastName: \"smith\", Phone/Email :\"9548406651\", Amount :\"2\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter Card Details Info Card Number: \"4012002000060016\", Address:\"Madhapur\", State:\"Hyderabad\", City\"Telangana\"\u0026Cvv: \"123\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Manual Entry Payment should successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "ManualEntryPayment.login_To_Application()"
});
formatter.result({
  "duration": 13952828200,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.select_PaymentType_ManualEntry()"
});
formatter.result({
  "duration": 5607380200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111-23",
      "offset": 47
    },
    {
      "val": "John",
      "offset": 69
    },
    {
      "val": "smith",
      "offset": 87
    },
    {
      "val": "9548406651",
      "offset": 109
    },
    {
      "val": "2",
      "offset": 131
    }
  ],
  "location": "ManualEntryPayment.enter_the_Patient_details_as_ReferenceNumber_FirstName_LastName_Phone_Email_Amount(String,String,String,String,String)"
});
formatter.result({
  "duration": 3763283300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4012002000060016",
      "offset": 38
    },
    {
      "val": "Madhapur",
      "offset": 66
    },
    {
      "val": "Hyderabad",
      "offset": 84
    },
    {
      "val": "Telangana",
      "offset": 101
    },
    {
      "val": "123",
      "offset": 118
    }
  ],
  "location": "ManualEntryPayment.enter_Card_Details_Info_Card_Number_Address_State_City_Cvv(String,String,String,String,String)"
});
formatter.result({
  "duration": 4142780700,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.Click_on_Confirm_button()"
});
formatter.result({
  "duration": 9185882900,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.verify_Payment_is_successfull()"
});
formatter.result({
  "duration": 281200,
  "status": "passed"
});
formatter.after({
  "duration": 712535600,
  "status": "passed"
});
formatter.after({
  "duration": 74800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Verify Partial refund for Manual Entry Transaction",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-partial-refund-for-manual-entry-transaction",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Select payment type as Manual Entry",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Enter the Patient details as ReferenceNumber: \"\u003cReferenceNumber\u003e\", FirstName: \"\u003cfirstname\u003e\", LastName: \"\u003clastname\u003e\", Phone/Email :\"\u003cphone\u003e\", Amount :\"\u003cAmount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Enter Card Details Info Card Number: \"\u003ccardNumber\u003e\", Address:\"\u003caddress\u003e\", State:\"\u003cstate\u003e\", City\"\u003ccity\u003e\"\u0026Cvv: \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Manual Entry Payment should successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Run the Transaction Report",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Try to do partial refund",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Partial refund should success",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-partial-refund-for-manual-entry-transaction;",
  "rows": [
    {
      "cells": [
        "ReferenceNumber",
        "firstname",
        "lastname",
        "phone",
        "Amount",
        "cardNumber",
        "address",
        "state",
        "city",
        "cvv"
      ],
      "line": 28,
      "id": "lp-core-functional-regression-test;verify-partial-refund-for-manual-entry-transaction;;1"
    },
    {
      "cells": [
        "2222",
        "John",
        "smith",
        "9548406651",
        "2",
        "4012002000060016",
        "Madhapur",
        "Hyderabad",
        "Telangana",
        "123"
      ],
      "line": 29,
      "id": "lp-core-functional-regression-test;verify-partial-refund-for-manual-entry-transaction;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8599801800,
  "status": "passed"
});
formatter.before({
  "duration": 64700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify Partial refund for Manual Entry Transaction",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-partial-refund-for-manual-entry-transaction;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Select payment type as Manual Entry",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Enter the Patient details as ReferenceNumber: \"2222\", FirstName: \"John\", LastName: \"smith\", Phone/Email :\"9548406651\", Amount :\"2\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Enter Card Details Info Card Number: \"4012002000060016\", Address:\"Madhapur\", State:\"Hyderabad\", City\"Telangana\"\u0026Cvv: \"123\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Manual Entry Payment should successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Run the Transaction Report",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Try to do partial refund",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Partial refund should success",
  "keyword": "Then "
});
formatter.match({
  "location": "ManualEntryPayment.login_To_Application()"
});
formatter.result({
  "duration": 15400256100,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.select_PaymentType_ManualEntry()"
});
formatter.result({
  "duration": 5209976000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 47
    },
    {
      "val": "John",
      "offset": 66
    },
    {
      "val": "smith",
      "offset": 84
    },
    {
      "val": "9548406651",
      "offset": 106
    },
    {
      "val": "2",
      "offset": 128
    }
  ],
  "location": "ManualEntryPayment.enter_the_Patient_details_as_ReferenceNumber_FirstName_LastName_Phone_Email_Amount(String,String,String,String,String)"
});
formatter.result({
  "duration": 3729304900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4012002000060016",
      "offset": 38
    },
    {
      "val": "Madhapur",
      "offset": 66
    },
    {
      "val": "Hyderabad",
      "offset": 84
    },
    {
      "val": "Telangana",
      "offset": 101
    },
    {
      "val": "123",
      "offset": 118
    }
  ],
  "location": "ManualEntryPayment.enter_Card_Details_Info_Card_Number_Address_State_City_Cvv(String,String,String,String,String)"
});
formatter.result({
  "duration": 4258461400,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.Click_on_Confirm_button()"
});
formatter.result({
  "duration": 9088582100,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.verify_Payment_is_successfull()"
});
formatter.result({
  "duration": 235200,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.runTransactionReport()"
});
formatter.result({
  "duration": 13056414300,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.Try_to_do_partial_refund()"
});
formatter.result({
  "duration": 6992496600,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.partial_refund_should_success()"
});
formatter.result({
  "duration": 62544100,
  "status": "passed"
});
formatter.after({
  "duration": 670666200,
  "status": "passed"
});
formatter.after({
  "duration": 48800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Verify Partial refund for Manual Entry Transaction",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-partial-refund-for-manual-entry-transaction",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Select payment type as Manual Entry",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Enter the Patient details as ReferenceNumber: \"\u003cReferenceNumber\u003e\", FirstName: \"\u003cfirstname\u003e\", LastName: \"\u003clastname\u003e\", Phone/Email :\"\u003cphone\u003e\", Amount :\"\u003cAmount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Enter Card Details Info Card Number: \"\u003ccardNumber\u003e\", Address:\"\u003caddress\u003e\", State:\"\u003cstate\u003e\", City\"\u003ccity\u003e\"\u0026Cvv: \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Manual Entry Payment should successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Run the Transaction Report",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Try to do full refund",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Full refund should success",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-partial-refund-for-manual-entry-transaction;",
  "rows": [
    {
      "cells": [
        "ReferenceNumber",
        "firstname",
        "lastname",
        "phone",
        "Amount",
        "cardNumber",
        "address",
        "state",
        "city",
        "cvv"
      ],
      "line": 43,
      "id": "lp-core-functional-regression-test;verify-partial-refund-for-manual-entry-transaction;;1"
    },
    {
      "cells": [
        "45452",
        "John",
        "smith",
        "9548406651",
        "2",
        "4012002000060016",
        "Madhapur",
        "Hyderabad",
        "Telangana",
        "123"
      ],
      "line": 44,
      "id": "lp-core-functional-regression-test;verify-partial-refund-for-manual-entry-transaction;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8847786100,
  "status": "passed"
});
formatter.before({
  "duration": 134900,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify Partial refund for Manual Entry Transaction",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-partial-refund-for-manual-entry-transaction;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Select payment type as Manual Entry",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Enter the Patient details as ReferenceNumber: \"45452\", FirstName: \"John\", LastName: \"smith\", Phone/Email :\"9548406651\", Amount :\"2\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Enter Card Details Info Card Number: \"4012002000060016\", Address:\"Madhapur\", State:\"Hyderabad\", City\"Telangana\"\u0026Cvv: \"123\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Manual Entry Payment should successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Run the Transaction Report",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Try to do full refund",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Full refund should success",
  "keyword": "Then "
});
formatter.match({
  "location": "ManualEntryPayment.login_To_Application()"
});
formatter.result({
  "duration": 12761955300,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.select_PaymentType_ManualEntry()"
});
formatter.result({
  "duration": 4507377800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45452",
      "offset": 47
    },
    {
      "val": "John",
      "offset": 67
    },
    {
      "val": "smith",
      "offset": 85
    },
    {
      "val": "9548406651",
      "offset": 107
    },
    {
      "val": "2",
      "offset": 129
    }
  ],
  "location": "ManualEntryPayment.enter_the_Patient_details_as_ReferenceNumber_FirstName_LastName_Phone_Email_Amount(String,String,String,String,String)"
});
formatter.result({
  "duration": 3640504300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4012002000060016",
      "offset": 38
    },
    {
      "val": "Madhapur",
      "offset": 66
    },
    {
      "val": "Hyderabad",
      "offset": 84
    },
    {
      "val": "Telangana",
      "offset": 101
    },
    {
      "val": "123",
      "offset": 118
    }
  ],
  "location": "ManualEntryPayment.enter_Card_Details_Info_Card_Number_Address_State_City_Cvv(String,String,String,String,String)"
});
formatter.result({
  "duration": 4080321300,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.Click_on_Confirm_button()"
});
formatter.result({
  "duration": 9089112200,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.verify_Payment_is_successfull()"
});
formatter.result({
  "duration": 210600,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.runTransactionReport()"
});
formatter.result({
  "duration": 11753409300,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.Try_to_do_full_refund()"
});
formatter.result({
  "duration": 6170933800,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.full_refund_should_success()"
});
formatter.result({
  "duration": 40144100,
  "status": "passed"
});
formatter.after({
  "duration": 636644600,
  "status": "passed"
});
formatter.after({
  "duration": 43000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Verify Refund void for Manual Entry Transaction",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-refund-void-for-manual-entry-transaction",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "Select payment type as Manual Entry",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Enter the Patient details as ReferenceNumber: \"\u003cReferenceNumber\u003e\", FirstName: \"\u003cfirstname\u003e\", LastName: \"\u003clastname\u003e\", Phone/Email :\"\u003cphone\u003e\", Amount :\"\u003cAmount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Enter Card Details Info Card Number: \"\u003ccardNumber\u003e\", Address:\"\u003caddress\u003e\", State:\"\u003cstate\u003e\", City\"\u003ccity\u003e\"\u0026Cvv: \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Manual Entry Payment should successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Run the Transaction Report",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "Try to do full refund",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "Try to do Void for refund transaction",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Void refund should success",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-refund-void-for-manual-entry-transaction;",
  "rows": [
    {
      "cells": [
        "ReferenceNumber",
        "firstname",
        "lastname",
        "phone",
        "Amount",
        "cardNumber",
        "address",
        "state",
        "city",
        "cvv"
      ],
      "line": 60,
      "id": "lp-core-functional-regression-test;verify-refund-void-for-manual-entry-transaction;;1"
    },
    {
      "cells": [
        "892329",
        "John",
        "smith",
        "9548406651",
        "2",
        "4012002000060016",
        "Madhapur",
        "Hyderabad",
        "Telangana",
        "123"
      ],
      "line": 61,
      "id": "lp-core-functional-regression-test;verify-refund-void-for-manual-entry-transaction;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8398717600,
  "status": "passed"
});
formatter.before({
  "duration": 49400,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Verify Refund void for Manual Entry Transaction",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-refund-void-for-manual-entry-transaction;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "Select payment type as Manual Entry",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "Enter the Patient details as ReferenceNumber: \"892329\", FirstName: \"John\", LastName: \"smith\", Phone/Email :\"9548406651\", Amount :\"2\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Enter Card Details Info Card Number: \"4012002000060016\", Address:\"Madhapur\", State:\"Hyderabad\", City\"Telangana\"\u0026Cvv: \"123\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Manual Entry Payment should successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Run the Transaction Report",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "Try to do full refund",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "Try to do Void for refund transaction",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Void refund should success",
  "keyword": "Then "
});
formatter.match({
  "location": "ManualEntryPayment.login_To_Application()"
});
formatter.result({
  "duration": 12502247400,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.select_PaymentType_ManualEntry()"
});
formatter.result({
  "duration": 4191208600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "892329",
      "offset": 47
    },
    {
      "val": "John",
      "offset": 68
    },
    {
      "val": "smith",
      "offset": 86
    },
    {
      "val": "9548406651",
      "offset": 108
    },
    {
      "val": "2",
      "offset": 130
    }
  ],
  "location": "ManualEntryPayment.enter_the_Patient_details_as_ReferenceNumber_FirstName_LastName_Phone_Email_Amount(String,String,String,String,String)"
});
formatter.result({
  "duration": 3696304000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4012002000060016",
      "offset": 38
    },
    {
      "val": "Madhapur",
      "offset": 66
    },
    {
      "val": "Hyderabad",
      "offset": 84
    },
    {
      "val": "Telangana",
      "offset": 101
    },
    {
      "val": "123",
      "offset": 118
    }
  ],
  "location": "ManualEntryPayment.enter_Card_Details_Info_Card_Number_Address_State_City_Cvv(String,String,String,String,String)"
});
formatter.result({
  "duration": 4116516600,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.Click_on_Confirm_button()"
});
formatter.result({
  "duration": 9082394600,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.verify_Payment_is_successfull()"
});
formatter.result({
  "duration": 209800,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.runTransactionReport()"
});
formatter.result({
  "duration": 13356883900,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.Try_to_do_full_refund()"
});
formatter.result({
  "duration": 6357935600,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.Try_to_do_Void_for_refund_transaction()"
});
formatter.result({
  "duration": 6695145100,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.void_refund_should_success()"
});
formatter.result({
  "duration": 121500,
  "status": "passed"
});
formatter.after({
  "duration": 691306900,
  "status": "passed"
});
formatter.after({
  "duration": 29400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Verify Authorize Void for Manual Entry Transaction",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-authorize-void-for-manual-entry-transaction",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "Select payment type as Manual Entry",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "Enter the Patient details as ReferenceNumber: \"\u003cReferenceNumber\u003e\", FirstName: \"\u003cfirstname\u003e\", LastName: \"\u003clastname\u003e\", Phone/Email :\"\u003cphone\u003e\", Amount :\"\u003cAmount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Enter Card Details Info Card Number: \"\u003ccardNumber\u003e\", Address:\"\u003caddress\u003e\", State:\"\u003cstate\u003e\", City\"\u003ccity\u003e\"\u0026Cvv: \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Manual Entry Payment should successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Run the Transaction Report",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "Try to do Void for original transaction",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "Authorize Void should success",
  "keyword": "Then "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-authorize-void-for-manual-entry-transaction;",
  "rows": [
    {
      "cells": [
        "ReferenceNumber",
        "firstname",
        "lastname",
        "phone",
        "Amount",
        "cardNumber",
        "address",
        "state",
        "city",
        "cvv"
      ],
      "line": 75,
      "id": "lp-core-functional-regression-test;verify-authorize-void-for-manual-entry-transaction;;1"
    },
    {
      "cells": [
        "6878",
        "John",
        "smith",
        "9548406651",
        "2",
        "4012002000060016",
        "Madhapur",
        "Hyderabad",
        "Telangana",
        "123"
      ],
      "line": 76,
      "id": "lp-core-functional-regression-test;verify-authorize-void-for-manual-entry-transaction;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7745541900,
  "status": "passed"
});
formatter.before({
  "duration": 31000,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Verify Authorize Void for Manual Entry Transaction",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-authorize-void-for-manual-entry-transaction;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "Select payment type as Manual Entry",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "Enter the Patient details as ReferenceNumber: \"6878\", FirstName: \"John\", LastName: \"smith\", Phone/Email :\"9548406651\", Amount :\"2\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "Enter Card Details Info Card Number: \"4012002000060016\", Address:\"Madhapur\", State:\"Hyderabad\", City\"Telangana\"\u0026Cvv: \"123\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Manual Entry Payment should successfull",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Run the Transaction Report",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "Try to do Void for original transaction",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "Authorize Void should success",
  "keyword": "Then "
});
formatter.match({
  "location": "ManualEntryPayment.login_To_Application()"
});
formatter.result({
  "duration": 12817480900,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.select_PaymentType_ManualEntry()"
});
formatter.result({
  "duration": 4703713500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6878",
      "offset": 47
    },
    {
      "val": "John",
      "offset": 66
    },
    {
      "val": "smith",
      "offset": 84
    },
    {
      "val": "9548406651",
      "offset": 106
    },
    {
      "val": "2",
      "offset": 128
    }
  ],
  "location": "ManualEntryPayment.enter_the_Patient_details_as_ReferenceNumber_FirstName_LastName_Phone_Email_Amount(String,String,String,String,String)"
});
formatter.result({
  "duration": 3641478300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4012002000060016",
      "offset": 38
    },
    {
      "val": "Madhapur",
      "offset": 66
    },
    {
      "val": "Hyderabad",
      "offset": 84
    },
    {
      "val": "Telangana",
      "offset": 101
    },
    {
      "val": "123",
      "offset": 118
    }
  ],
  "location": "ManualEntryPayment.enter_Card_Details_Info_Card_Number_Address_State_City_Cvv(String,String,String,String,String)"
});
formatter.result({
  "duration": 4094612600,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.Click_on_Confirm_button()"
});
formatter.result({
  "duration": 9082581800,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.verify_Payment_is_successfull()"
});
formatter.result({
  "duration": 97700,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.runTransactionReport()"
});
formatter.result({
  "duration": 14767723700,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.Try_to_do_Void_for_original_transaction()"
});
formatter.result({
  "duration": 6837596000,
  "status": "passed"
});
formatter.match({
  "location": "ManualEntryPayment.authorize_Void_should_success()"
});
formatter.result({
  "duration": 85500,
  "status": "passed"
});
formatter.after({
  "duration": 1564473900,
  "status": "passed"
});
formatter.after({
  "duration": 43100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 78,
      "value": "#Contactless Payment feature"
    }
  ],
  "line": 79,
  "name": "Verify Contacless Payment with different type of cards(VISA/MasterCard/Amex/Discover..)",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-contacless-payment-with-different-type-of-cards(visa/mastercard/amex/discover..)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "Select payment type as Contactless",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "Enter the Patient details ReferenceNumber:\"\u003cReferenceNumber\u003e\",FirstName:\"\u003cfirstname\u003e\",LastName:\"\u003clastname\u003e\",Phone/Email:\"\u003cphone\u003e\",Amount:\"\u003cAmount\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Payment link should send to Patient on given Phone/Email",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "Open the Payment link",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "Enter the card details CardNumber:\"\u003ccardNumber\u003e\"\u0026CVV:\"\u003ccvv\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "Click on PayNow button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Payment should successfull",
  "keyword": "Then "
});
formatter.examples({
  "line": 90,
  "name": "",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-contacless-payment-with-different-type-of-cards(visa/mastercard/amex/discover..);",
  "rows": [
    {
      "cells": [
        "ReferenceNumber",
        "firstname",
        "lastname",
        "phone",
        "Amount",
        "cardNumber",
        "address",
        "state",
        "city",
        "cvv"
      ],
      "line": 91,
      "id": "lp-core-functional-regression-test;verify-contacless-payment-with-different-type-of-cards(visa/mastercard/amex/discover..);;1"
    },
    {
      "cells": [
        "23290-23",
        "John",
        "smith",
        "9548406651",
        "3",
        "4012002000060016",
        "Madhapur",
        "Hyderabad",
        "Telangana",
        "123"
      ],
      "line": 92,
      "id": "lp-core-functional-regression-test;verify-contacless-payment-with-different-type-of-cards(visa/mastercard/amex/discover..);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11925302900,
  "status": "passed"
});
formatter.before({
  "duration": 37700,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "Verify Contacless Payment with different type of cards(VISA/MasterCard/Amex/Discover..)",
  "description": "",
  "id": "lp-core-functional-regression-test;verify-contacless-payment-with-different-type-of-cards(visa/mastercard/amex/discover..);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "Select payment type as Contactless",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "Enter the Patient details ReferenceNumber:\"23290-23\",FirstName:\"John\",LastName:\"smith\",Phone/Email:\"9548406651\",Amount:\"3\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "Click on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Payment link should send to Patient on given Phone/Email",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "Open the Payment link",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "Enter the card details CardNumber:\"4012002000060016\"\u0026CVV:\"123\"",
  "matchedColumns": [
    5,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "Click on PayNow button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "Payment should successfull",
  "keyword": "Then "
});
formatter.match({
  "location": "ManualEntryPayment.login_To_Application()"
});
formatter.result({
  "duration": 12892468400,
  "status": "passed"
});
formatter.match({
  "location": "ContactlessPayment.select_payment_type_as_Contactless()"
});
formatter.result({
  "duration": 7189773000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23290-23",
      "offset": 43
    },
    {
      "val": "John",
      "offset": 64
    },
    {
      "val": "smith",
      "offset": 80
    },
    {
      "val": "9548406651",
      "offset": 100
    },
    {
      "val": "3",
      "offset": 120
    }
  ],
  "location": "ContactlessPayment.enter_the_Patient_details_ReferenceNumber_FirstName_LastName_Phone_Email_Amount(String,String,String,String,String)"
});
formatter.result({
  "duration": 543556500,
  "status": "passed"
});
formatter.match({
  "location": "ContactlessPayment.click_on_Submit_button()"
});
formatter.result({
  "duration": 6447344400,
  "status": "passed"
});
formatter.match({
  "location": "ContactlessPayment.payment_link_should_send_to_Patient_on_given_Phone_Email()"
});
formatter.result({
  "duration": 67141594500,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LP00019\u0027, ip: \u002710.81.234.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\sys\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:62253}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3632fe017832067a28fdcd624b136297\n*** Element info: {Using\u003dxpath, value\u003d/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/span[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat Pages.CommunicationReportsPage.getCollectCardPaymentlink(CommunicationReportsPage.java:119)\r\n\tat stepDefinitions.ContactlessPayment.payment_link_should_send_to_Patient_on_given_Phone_Email(ContactlessPayment.java:74)\r\n\tat ✽.Then Payment link should send to Patient on given Phone/Email(src/main/java/Features/LPCore.feature:84)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ContactlessPayment.open_the_Payment_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4012002000060016",
      "offset": 35
    },
    {
      "val": "123",
      "offset": 58
    }
  ],
  "location": "ContactlessPayment.enter_the_card_details_CardNumber_CVV(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactlessPayment.click_on_PayNow_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactlessPayment.payment_should_successfull()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 708630400,
  "status": "passed"
});
formatter.after({
  "duration": 39000,
  "status": "passed"
});
});