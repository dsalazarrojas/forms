# square_charity_donation_form - Help Guide
## Purpose
The square_charity_donation_form is used to collect information for charitable donations made on the Square platform. This form gathers essential details to process donations accurately and securely.

## How To Complete This Form
To fill out the square_charity_donation_form, follow these steps:
1. Choose your donation type (Charitable or Merchant). This determines the donation type and its purpose.
2. Enter a valid amount for your donation. Note that the donation amount is not required.
3. Select your payment method (Credit Card or PayPal). Multiple methods can be selected.
4. Enter the donor's name for the purpose of tracking and communication.
5. Provide the donor's email address for secure and efficient communication.
6. Enter the donor's phone number for additional contact information.
7. Enter the date of the donation for record-keeping purposes.

## Field-by-Field Explanation
* **Donation Type** (select_one, required=False)
	+ This field determines the type of donation (Charitable or Merchant).
* **Donation Amount** (number, required=False)
	+ Enter the amount of the donation.
* **Payment Method** (select_multiple, required=False)
	+ Select the payment method for the donation (Credit Card or PayPal).
* **Donor Name** (text, required=False)
	+ Enter the donor's name for tracking and communication purposes.
* **Email** (email, required=False)
	+ Provide the donor's email address for secure and efficient communication.
* **Phone** (text, required=False)
	+ Enter the donor's phone number for additional contact information.
* **Donation Date** (date, required=False)
	+ Enter the date of the donation for record-keeping purposes.
* **Merchant** (text, required=False)
	+ Enter the name of the merchant related to the donation.
