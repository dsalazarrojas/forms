<thinking>
To create a user-facing help guide for this "Campaign Donation Form" form, I will follow the provided structure and guidelines. This form is designed for donors to contribute to a campaign, and it seems to be a standard donation form used for multiple purposes. I assume it's intended for a non-profit organization or a crowdfunding platform. I will focus on explaining the purpose of the form, how to complete it, and the meaning of each field without inventing unsupported business logic. I will also consider the required fields and the available options for each field to ensure I provide clear and concise explanations.

</thinking>

# Campaign Donation Form - Help Guide

## Purpose
The Campaign Donation Form is designed for donors to contribute to a campaign by providing their personal information, donation details, and preferences. This form helps the campaign organizer to gather necessary data for processing donations, sending receipts, and keeping donor records.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your Donor Full Name as it should appear on donation records.
2. Provide your Donor Email for donation receipts and updates.
3. Specify the Donation Amount you wish to contribute.
4. Choose whether your donation is One Time, Monthly, Quarterly, or Annually.
5. Select the Payment Method used to process the donation (Credit Card, PayPal, or Bank Transfer).
6. Check if you wish to Donate Anonymously (hide your name from public lists).
7. If applicable, indicate if Employer Matching is being applied.
8. Provide any Tribute Information if the donation is in honor or memory of someone.
9. Check if you require an official Receipt.
10. Leave any Additional Comments for the campaign organizers.

## Field-by-Field Explanation

* **Donor Full Name** (`donor_name`, text, required): Enter your name as it should appear on donation records.
* **Donor Email** (`donor_email`, email, required): Provide your email address for donation receipts and updates.
* **Donation Amount** (`donation_amount`, number, required): Specify the amount to be donated.
* **Donation Frequency** (`donation_frequency`, select_one, required): Choose whether your donation is One Time, Monthly, Quarterly, or Annually.
* **Payment Method** (`payment_method`, select_one, required): Select the method used to process the donation (Credit Card, PayPal, or Bank Transfer).
* **Donate Anonymously** (`donate_anonymously`, select_one, optional): Check if you wish to donate anonymously, hiding your name from public lists.
* **Employer Matching** (`employer_matching`, select_one, optional): If applicable, indicate if employer matching is being applied.
* **Tribute Information** (`tribute_information`, text, optional): Provide any tribute information if the donation is in honor or memory of someone.
* **Receipt Needed** (`receipt_needed`, select_one, required): Check if you require an official receipt.
* **Additional Comments** (`additional_comments`, text, optional): Leave any additional comments or instructions for the campaign organizers.

# Tips
- Please ensure the donor information is accurate to process your donation correctly.
- Review each field carefully before submitting the form.
- If you have any questions or concerns, contact the campaign organizers for assistance.
