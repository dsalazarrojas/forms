# marathon_sponsorship_donation_form - Help Guide
## Purpose
The marathon sponsorship donation form is used to record and manage donations for a marathon event. It is essential to provide accurate and complete information to ensure smooth processing of donations.

## How To Complete This Form
1. Select the "Donation Event" option to indicate whether the donation is for a specific event or not. If you are unsure, select "Yes" for a event-specific donation.
2. Choose the donor's preferred method of donation from the "Donor Details" section.
3. Fill in the donor's personal details such as "First Name", "Last Name", and "Email" accurately.
4. Enter the "Phone" number of the donor for communication purposes.
5. Enter the donation amount.
6. Specify the payment method for the donation.
7. Verify the payment status and method if applicable.
8. Include any additional comments or notes about the donation.
9. Enter the donor's name and phone number for contact purposes.
10. Confirm the payment details with the donor.
11. Record the payment confirmation date and time.
12. Specify the payment method and status if applicable.

## Field-by-Field Explanation
* **Donation Event** (`donation_event`, `select_one`, required): Select "Yes" if the donation is for a specific event, otherwise select "No".
* **Donor Details** (`donation_method`, `select_multiple`, required): Select the preferred method of donation (e.g., cash, credit card, etc.).
* **First Name** (`first_name`, `text`, required): Enter the first name of the donor.
* **Last Name** (`last_name`, `text`, required): Enter the last name of the donor.
* **Email** (`email`, `email`, required): Enter the email address of the donor.
* **Phone** (`phone`, `text`, required): Enter the phone number of the donor.
* **Amount** (`amount`, `number`, required): Enter the amount of the donation.
* **Payment Method** (`payment_method`, `select_one`, required): Specify the payment method (e.g., cash, credit card, etc.).
* **Payment Status** (`payment_status`, `select_one`, required): Specify the payment status (e.g., active, inactive, etc.).
* **Note** (`note`, `note`, required): Include any additional comments or notes about the donation.
* **Donor Name** (`donor_name`, `text`, required): Enter the name of the donor.
* **Donor Phone** (`donar_phone`, `text`, required): Enter the phone number of the donor.
* **Payment Confirmation** (`payment_confirmation`, `note`, required): Confirm the payment details with the donor.
* **Donor Email** (`donor_email`, `email`, required): Enter the email address of the donor.
* **Payment Confirmation Date** (`payment_confirmation_date`, `date`, required): Record the date of payment confirmation.
* **Payment Confirmation Time** (`payment_confirmation_time`, `time`, required): Record the time of payment confirmation.
* **Payment Method 2** (`payment_method2`, `select_one`, required): Specify the second payment method (e.g., cash, credit card, etc.).
* **Payment Status 2** (`payment_status2`, `select_one`, required): Specify the second payment status (e.g., active, inactive, etc.).
