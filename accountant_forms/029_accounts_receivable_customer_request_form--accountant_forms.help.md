<thinking>
I will create a user-facing help guide for the "Accounts Receivable Customer Request Form" as per the provided YAML fields.
</thinking>

# Accounts Receivable Customer Request Form - Help Guide
## Purpose
This form is designed to collect information from customers for accounts receivable requests, such as invoices, payments, credit balances, or disputes. It helps our team understand the customer's needs and provide timely and accurate support.

## How To Complete This Form
1. Fill out the form completely and accurately, including all required fields.
2. If you have any supporting documents, select them accordingly.
3. Provide as much detail as possible in the "Details of Request" field.
4. Enter your contact email address so we can respond to your request.
5. If you have any follow-up contact information, such as a phone number, you can include it for our convenience.
6. Choose the urgency of your request from the options provided.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required): Enter the customer's name as it appears on their account.
* **Account Number** (`account_number`, text, required): Enter your internal customer ID for reference.
* **Request Type** (`request_type`, select_one, required): Choose how we can help you:
	+ Invoice Copy
	+ Payment Confirmation
	+ Credit Balance Inquiry
	+ Dispute Resolution
	+ Update Billing Info
* **Invoice Number Referenced** (`invoice_number_referenced`, text, optional): If applicable, enter the invoice number related to your request.
* **Details of Request** (`details_of_request`, text, required): Provide a detailed description of your request.
* **Contact Email** (`contact_email`, email, required): Enter your email address where we should send the response.
* **Contact Phone** (`contact_phone`, text, optional): Enter your phone number for follow-up.
* **Requested Documents** (`document_header`, note, optional): This is a note indicating that you may need to attach documents related to your request.
* **Documents Needed** (`documents_needed`, select_multiple, optional): Select all relevant documents you require:
	+ Original Invoice
	+ Signed Proof of Delivery
	+ Statement of Account
	+ Tax Form
* **Date of Request** (`date_of_request`, date, required): Enter the date you are submitting this request.
* **Response Urgency** (`response_urgency`, select_one, required): Choose the urgency of your request:
	+ Standard
	+ High

Please fill out the form carefully and accurately, and we will do our best to respond promptly to your request.
