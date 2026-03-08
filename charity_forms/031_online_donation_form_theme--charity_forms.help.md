# Online Donation Form Theme - Help Guide

## Purpose
This form is for users who wish to make an online donation to a specific charity. It helps the charity understand the type of donation, frequency, and amount of the donation, as well as collects essential contact information from the donor.

## How To Complete This Form
To complete this form, please follow these steps:

1. Review the form fields and ensure you are making a genuine donation.
2. Provide information for the fields marked as required.
3. Choose your preferred options for the select and select multiple fields.
4. Enter your donation amount and any additional notes.

## Field-by-Field Explanation
- **donation_form_theme** (`donation_form_theme`, text, optional): This field is used to collect the theme of the donation.
- **donation_amount** (`donation_amount`, number, optional): Enter the amount you wish to donate.
- **donation_frequency** (`donation_frequency`, select_one, optional): Select whether this is a one-time or recurring donation.
  * 'Yes' for a one-time donation
  * 'No' for a recurring donation
- **donation_frequency_frequency** (`donation_frequency_frequency`, select_multiple, optional): This field is used to specify the frequency of the donation, if selected as a recurring donation.
  * 'Yes' for weekly/monthly donations
  * 'No' for no frequency specified
- **donation_date** (`donation_date`, date, optional): This field is used to collect the date of the donation. If left blank, the current date will be assumed.
- **donor_name** (`donor_name`, text, optional): Enter your name.
- **donor_email** (`donor_email`, email, optional): Enter your email address.
- **donor_phone** (`donor_phone`, text, optional): Enter your phone number.
- **donor_note** (`donor_note`, note, optional): Add any additional notes or comments for the charity.
- **donor_donation_amount** (`donor_donation_amount`, number, optional): Enter the amount you are donating. This field is only visible if donation_frequency is selected as 'Yes'.
