# Church Donation Receipt Form - Help Guide
## Purpose
This form is used to collect information for a church donation receipt. It is intended for church members, visitors, or corporate donors to report their donations and receive a formal acknowledgement.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your full name as it should appear on the receipt.
2. Provide your email address for contact and communication purposes.
3. Enter your phone number (optional).
4. Enter your full mailing address.
5. Select the date of the donation.
6. Enter the total amount donated.
7. Choose how the donation was made (cash, check, credit card, debit card, etc.).
8. If paid by check, enter the check number.
9. Select the fund to which the donation was directed (e.g., General Fund, Building Fund, etc.).
10. Choose how you would like to receive your receipt (email, mail, pick up in person).
11. Select the tax year for the donation.
12. If a corporate donation, enter the Employer Identification Number (EIN).
13. Choose whether to allow the church to acknowledge the donation publicly.
14. Enter any additional information or notes for the receipt.
15. Enter any special instructions for the receipt.

## Field-by-Field Explanation

* **Donor Full Name** (`donor_name`, text, required): Enter your full name as it should appear on the receipt.
* **Donor Email Address** (`donor_email`, email, required): Enter your email address for contact and communication purposes.
* **Donor Phone Number** (`donor_phone`, text, optional): Enter your phone number (if desired).
* **Donor Mailing Address** (`donor_address`, text, required): Enter your full street address, city, state, and zip code.
* **Date of Donation** (`donation_date`, date, required): Select the date of the donation.
* **Total Donation Amount** (`donation_amount`, number, required): Enter the total amount donated.
* **Method of Donation** (`donation_method`, select_one, required): Choose how the donation was made (cash, check, credit card, etc.).
* **Check Number** (`check_number`, text, optional): If paid by check, enter the check number.
* **Donation Fund Designation** (`donation_fund`, select_one, required): Select the fund to which the donation was directed (e.g., General Fund, Building Fund, etc.).
* **Receipt Delivery Method** (`receipt_type`, select_one, required): Choose how you would like to receive your receipt (email, mail, pick up in person).
* **Tax Year for Donation** (`tax_year`, select_one, required): Select the tax year for the donation.
* **Employer EIN (if corporate donation)** (`employer_ein`, text, optional): If a corporate donation, enter the Employer Identification Number (EIN).
* **Donor Acknowledgment** (`donor_acknowledgment`, select_one, required): Choose whether to allow the church to acknowledge the donation publicly.
* **Additional Information** (`additional_info`, text, optional): Enter any additional information or notes for the receipt.
* **Special Receipt Instructions** (`receipt_notes`, text, optional): Enter any specific requirements for this receipt.
