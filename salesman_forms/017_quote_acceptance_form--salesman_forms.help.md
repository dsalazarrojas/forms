<thinking>

This form, quote_acceptance_form, is designed to gather information from salespersons to confirm their acceptance of quotes. It is intended to be used in conjunction with other forms, such as sales order forms, to track sales data and ensure that quotes are properly acknowledged. The form should not be used to collect new sales information, but rather to verify that the salesperson has reviewed and accepted the quote details. This form should only be filled out by salespersons and not by clients.

</thinking>

# quote_acceptance_form - Help Guide
## Purpose
The quote_acceptance_form is used to confirm salesperson's acceptance of quotes. This form ensures that sales data is accurately recorded and up-to-date.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the quote details to ensure accuracy.
2. Confirm that you have reviewed and accepted the quote.
3. Fill out the form with the relevant information.

## Field-by-Field Explanation
* **quote_acceptance_form** (`quote_acceptance_form`, text, required): This is the main field where you confirm your acceptance of the quote.
* **quote_details** (`quote_details`, text, optional): Please provide any additional comments or details about the quote.
* **quote_number** (`quote_number`, number, optional): Enter the quote number for your reference.
* **client** (`client`, select_one, optional): Select 'Yes' to confirm that the quote is for a client.
* **sales_person** (`sales_person`, select_one, optional): Select 'Yes' to confirm that the quote is for a salesperson.
* **quote_date** (`quote_date`, date, optional): Enter the date of the quote.
* **quote_time** (`quote_time`, time, optional): Enter the time of the quote.
* **comments** (`comments`, note, optional): Add any additional comments about the quote.
* **email** (`email`, email, optional): Enter your email address for communication purposes.
* **phone** (`phone`, text, optional): Enter your phone number for communication purposes.
* **agreement** (`agreement`, select_one, optional): Select 'Yes' to confirm that you have read and agreed to the quote terms.
* **date_signed** (`date_signed`, date, optional): Enter the date you signed the quote.
* **time_signed** (`time_signed`, time, optional): Enter the time you signed the quote.
* **signed_by** (`signed_by`, text, optional): Enter your name as it appears on the quote.
* **company** (`company`, text, optional): Enter your company name.
* **address** (`address`, text, optional): Enter your address.
* **city** (`city`, text, optional): Enter your city.
* **state** (`state`, text, optional): Enter your state.
* **zip** (`zip`, text, optional): Enter your zip code.

Note: All fields are optional unless marked as required.
