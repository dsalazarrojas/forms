# Workshop Billing Form - Help Guide
## Purpose
The purpose of this form is to collect and record billing details, payment information, and workshop-related data for workshop participants.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Fill in the participant details such as name, phone number, and email.
2. Select the payment method and payment amount.
3. Fill in the billing address and name.
4. Select the participant type (Individual, Team, or Group).
5. Select the participant status (Registered, Unregistered, or Pending).
6. Optionally, fill in the workshop details such as workshop name, description, price, date, time, and location.
7. Select the payment status (Pending, Paid, Partially Paid, or Unpaid).

## Field-by-Field Explanation

* **Participant Details**
	+ **Participant Name** (`participant_name`, text, required/optional): Enter the participant's name.
	+ **Participant Phone** (`participant_phone`, text, required/optional): Enter the participant's phone number.
	+ **Participant Email** (`participant_email`, email, required/optional): Enter the participant's email.
* **Payment Information**
	+ **Payment Method** (`payment_method`, select_multiple, required): Select one or more payment methods (Visa, Mastercard, Amex, Discover).
	+ **Payment Amount** (`payment_amount`, number, required/optional): Enter the payment amount.
	+ **Payment Date** (`payment_date`, date, required/optional): Enter the payment date.
	+ **Payment Time** (`payment_time`, time, required/optional): Enter the payment time.
	+ **Payment Status** (`payment_status`, select_one, required): Select the payment status (Pending, Paid, Partially Paid, Unpaid).
* **Billing Details**
	+ **Billing Name** (`billing_name`, text, required/optional): Enter the billing name.
	+ **Billing Phone** (`billing_phone`, text, required/optional): Enter the billing phone number.
	+ **Billing Email** (`billing_email`, email, required/optional): Enter the billing email.
* **Workshop Details**
	+ **Workshop ID** (`workshop_id`, text, required/optional): Enter the workshop ID.
	+ **Workshop Name** (`workshop_name`, text, required/optional): Enter the workshop name.
	+ **Workshop Description** (`workshop_description`, text, required/optional): Enter the workshop description.
	+ **Workshop Price** (`workshop_price`, number, required/optional): Enter the workshop price.
	+ **Workshop Date** (`workshop_date`, date, required/optional): Enter the workshop date.
	+ **Workshop Time** (`workshop_time`, time, required/optional): Enter the workshop time.
	+ **Workshop Location** (`workshop_location`, text, required/optional): Enter the workshop location.
* **Participant Type** (`participant_type`, select_one, required): Select the participant type (Individual, Team, Group).
* **Participant Status** (`participant_status`, select_one, required): Select the participant status (Registered, Unregistered, Pending).

## Tips
- Ensure that all required fields are filled out before submitting the form.
- Double-check the participant and billing information for accuracy.
- Review the workshop details for accuracy before submitting the form.
- Ensure that the payment method and amount are correct and valid.
