<thinking>
We are creating a help guide for a "Fishing Charters Booking Form" which will likely be used to collect information from customers for booking a fishing charter. This form is likely used to gather details from both the customer and the fisher (the person offering the charter), such as their names, email and phone numbers, dates and times for the charter, charter details, and payment information. The form will help to streamline the booking process and ensure that all relevant information is collected in one place.

Before creating a new guide, I will make sure to review and analyze the provided form schema. This will help us to identify any areas that may need further clarification or explanation.

Upon reviewing the form schema, it appears that the form is divided into several sections, each with its own label and description. Some of the fields are required (e.g. customer_name, email, fisher_name, fisher_availability), while others are not (e.g. phone, charter_details, customer_notes). The form also includes fields for payment information, which will help to clarify the payment terms and methods for the customer.

To write the help guide, I will follow the provided YAML structure and explanation. I will start by creating an introduction to the form purpose and how to complete it, followed by a detailed explanation of each field.

</thinking>

# Fishing Charters Booking Form - Help Guide
## Purpose
This form is designed to collect information from customers and fishers for booking a fishing charter. The form will help to streamline the booking process and ensure that all relevant information is collected in one place.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your customer name and email in the "Customer Name" and "Email" fields.
2. Select the date and time for the charter in the "Date" and "Time" fields.
3. Enter the charter details in the "Charter Details" field.
4. If you have any specific notes or requests for the charter, enter them in the "Customer Notes" field.
5. Provide the fisher's name and email in the "Fisher Name" and "Fisher Email" fields.
6. Enter the fisher's phone number in the "Fisher Phone" field.
7. Enter the charter price in the "Charter Price" field.
8. Select the payment terms and method in the "Payment Terms" and "Payment Method" fields.
9. If applicable, select the fisher's availability in the "Fisher Availability" field.
10. Finally, enter the payment date in the "Payment Date" field.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Enter the customer's full name.
* **Email** (`email`, email, required): Enter the customer's email address.
* **Phone** (`phone`, text, optional): Enter the customer's phone number (if applicable).
* **Date** (`date`, date, required): Select the date for the charter.
* **Time** (`time`, time, required): Select the time for the charter.
* **Charter Details** (`charter_details`, note, optional): Enter any additional details about the charter.
* **Customer Notes** (`customer_notes`, note, optional): Enter any specific notes or requests for the charter.
* **Fisher Name** (`fisher_name`, text, required): Enter the fisher's name.
* **Fisher Email** (`fisher_email`, email, required): Enter the fisher's email address.
* **Fisher Phone** (`fisher_phone`, text, optional): Enter the fisher's phone number (if applicable).
* **Fisher Details** (`fisher_details`, note, optional): Enter any additional details about the fisher.
* **Charter Price** (`charter_price`, number, required): Enter the price of the charter.
* **Payment Terms** (`payment_terms`, note, optional): Enter any payment terms or conditions.
* **Payment Method** (`payment_method`, select_multiple, required): Select the payment method (Yes/No).
* **Payment Date** (`payment_date`, date, required): Select the payment date.
* **Fisher Availability** (`fisher_availability`, select_multiple, required): Select the fisher's availability (Yes/No).

Note: The following fields are required for both the customer and fisher sides of the form: customer_name, email, fisher_name, fisher_email, charter_price, payment_terms, payment_method, and payment_date. 

I hope this help guide is clear and concise. Let me know if you need any further clarification or explanation. 

# Tips

* Make sure to enter all required fields to complete the form successfully.
* If you are unsure about any field, contact the fisher or customer support for assistance.
* Double-check the entered information before submitting the form to ensure accuracy. 
* Be sure to review and agree on the payment terms before submitting the form.
