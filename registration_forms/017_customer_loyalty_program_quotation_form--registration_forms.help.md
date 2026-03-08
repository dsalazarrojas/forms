# Customer Loyalty Program Quotation Form - Help Guide
## Purpose
The Customer Loyalty Program Quotation Form is designed to collect relevant information from customers to determine their eligibility for a loyalty program. This form helps to identify whether a customer is eligible for a program and to generate a quotation for their participation.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your First Name in the First Name field.
2. Enter your Last Name in the Last Name field.
3. Provide your Email address in the Email field. Ensure it is a valid email address.
4. If you have a Phone number, enter it in the Phone field.
5. Select your customer type from the Customer Type options.
6. Select your eligibility for a loyalty program from the Loyalty Program options.
7. Choose a date and time for your quotation.
8. If you have any additional information or notes about your quotation, enter it in the Note field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name as it appears on your official documents.
* **Last Name** (`last_name`, text, required): Enter your last name as it appears on your official documents.
* **Email** (`email`, email, required): Enter your valid Email address.
* **Phone** (`phone`, text, optional): Enter your phone number if you prefer to be contacted via phone.
* **Customer Type** (`customer_type`, select_one, optional):
	+ Select Yes if you are a customer or No if you are not a customer.
* **Customer Type Options** (`customer_type_options`, text, optional): Provide additional information about your customer type if necessary.
* **Loyalty Program** (`loyalty_program`, select_multiple, optional):
	+ Select Yes if you are eligible for a loyalty program or No if you are not.
* **Loyalty Program Options** (`loyalty_program_options`, text, optional): Provide additional information about your loyalty program eligibility if necessary.
* **Date** (`date`, date, required): Choose a date for your quotation.
* **Time** (`time`, time, required): Choose a time for your quotation.
* **Note** (`note`, note, optional): Provide any additional notes or comments about your quotation.
