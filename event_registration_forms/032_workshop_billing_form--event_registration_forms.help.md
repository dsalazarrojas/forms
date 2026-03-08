<thinking>
This form is used to capture workshop participant information and billing details. It is intended for workshops, but the term "workshop" is somewhat generic, so this form can be adapted to other types of events or activities as well. 

The form is designed to collect participant details, which can be useful for event organizers or administrators to keep track of attendees and their associated billing information. 

The form is not intended for live use during event registration, but rather as a tool for collecting information for billing purposes after the fact. 

The form does not enforce business logic for participant capacity or availability, nor does it handle duplicate entries in any way. 

It is recommended to use the participant ID field to prevent duplicate entries.
</thinking>

# Workshop Billing Form - Help Guide
## Purpose
The purpose of this form is to collect participant and billing details for events, allowing event organizers or administrators to track and manage billing information.

## How To Complete This Form

### Step 1: Provide Participant Information
Enter the participant's name, email, company (if applicable), job title, and address.

### Step 2: Select the Payment Method
Choose one of the three payment methods: Stripe, PayPal, or Credit Card.

### Step 3: Enter Billing Details
Enter the invoice date and the total cost associated with the event.

### Step 4: Add Additional Fees (Optional)
If applicable, enter any additional fees associated with the event.

## Field-by-Field Explanation

* **Participant Name** (`participant_name`, text, optional): Enter the participant's name.
* **Participant Email** (`participant_email`, email, optional): Enter the participant's email address.
* **Participant Company** (`participant_company`, text, optional): Enter the participant's company name (if applicable).
* **Participant Job Title** (`participant_job_title`, text, optional): Enter the participant's job title.
* **Participant Address** (`participant_address`, text, optional): Enter the participant's address.
* **Billing Details** (`billing_details`, text, optional): Enter any billing notes or details.
* **Invoice Date** (`billing_invoice_date`, date, optional): Enter the date the invoice was issued.
* **Total Cost** (`billing_total_cost`, number, optional): Enter the total cost associated with the event.
* **Payment Method** (`billing_payment_method`, select_one, optional): Choose a payment method from the options (Stripe, PayPal, Credit Card).
* **Additional Fees** (`billing_additional_fees`, number, optional): Enter any additional fees associated with the event.
 
## Tips

* Be sure to fill out all required fields, as some fields are required for billing purposes.
* If you are unsure about any field, refer to the event organizer or administrator for clarification.
* You can use this form to collect multiple participants' information and billing details.
* This form is designed for post-event use, so it can be used to collect information after the workshop has taken place. 

This form is intended to be flexible and adaptable, so feel free to modify it according to your specific needs.
