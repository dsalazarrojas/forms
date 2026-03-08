<thinking>...</thinking>

# Square Donation Form - Help Guide
## Purpose
The Square Donation Form is designed to collect information about one-time and recurring donations from individuals or organizations. This form helps in understanding the nature of the donations, including the amount, frequency, and other relevant details.

## How To Complete This Form

To complete the Square Donation Form, follow these steps:

1. Fill in your name and email address in the `donor_name` and `email` fields.
2. Select the `donation_amount` field to enter the amount you would like to donate.
3. Choose the `donation_amount_currency` field to select the currency of the donation (either USD or Other).
4. Select the frequency of your donation (one time or recurring) from the `frequency` field.
5. If you select a recurring donation, enter the start date and end date in the `donation_frequency_start_date` and `donation_frequency_end_date` fields.
6. Select the type of recurring donation (weekly, monthly, annually) from the `donation_frequency_type` field.
7. Enter any additional information about your donation in the `donor_email` and `donor_phone` fields.
8. Finally, review your entries and submit the form.

## Field-by-Field Explanation

* **donation_form** (Text, optional): This field is not actually used in the form. It is a placeholder for the form title.
* **donation_amount** (Number, optional): Enter the amount you would like to donate.
* **frequency** (Select One, optional): Choose whether you would like to make a one-time donation or a recurring donation.
	+ One time: A single donation.
	+ Recurring: A series of donations at regular intervals.
* **frequency_duration** (Number, optional): This field is currently not used. (Please note that this field was not actually used in the form).
* **donation_frequency** (Time, optional): This field is currently not used. (Please note that this field was not actually used in the form).
* **donation_date** (Date, optional): This field is currently not used. (Please note that this field was not actually used in the form).
* **donor_name** (Text, optional): Enter your name as the donor.
* **donation_amount_currency** (Select One, required): Select the currency of the donation.
	+ USD: United States Dollar.
	+ Other: Other currencies (Please note that this is not actually a field to enter other currencies, just an option for the dropdown).
* **donor_address** (Text, optional): Enter your address.
* **phone_number** (Text, optional): Enter your phone number.
* **email** (Email, optional): Enter your email address.
* **donation_frequency_type** (Select Multiple, optional): Select the type of recurring donation.
	+ Weekly: A weekly donation.
	+ Monthly: A monthly donation.
	+ Annually: A yearly donation.
* **donation_frequency_start_date** (Date, optional): Enter the start date of the recurring donation.
* **donation_frequency_end_date** (Date, optional): Enter the end date of the recurring donation.
* **donation_frequency_end_reason** (Text, optional): Enter the reason for ending the recurring donation.
* **donor_email** (Email, optional): Enter your email address.
* **donor_phone** (Text, optional): Enter your phone number.
* **frequency_donation_amount** (Number, optional): This field is currently not used. (Please note that this field was not actually used in the form).
* **frequency_donation_currency** (Select One, required): Select the currency of the recurring donation.
* **frequency_donation_note** (Text, optional): Enter additional information about your donation.
* **frequency_donation_frequency_type** (Select Multiple, optional): Select the type of recurring donation.
	+ Weekly: A weekly donation.
	+ Monthly: A monthly donation.
	+ Annually: A yearly donation.
* **frequency_donation_end_date** (Date, optional): Enter the end date of the recurring donation.
* **frequency_donation_end_reason** (Text, optional): Enter the reason for ending the recurring donation.
* **frequency_donation_end_comment** (Text, optional): Enter additional information about ending the recurring donation.
* **frequency_donation_total_donated** (Number, optional): This field is currently not used. (Please note that this field was not actually used in the form).

Note: The fields that are marked as "optional" or "not used" can be ignored or filled in if necessary. The required fields are: `donation_amount_currency` and `frequency_donation_currency`.
