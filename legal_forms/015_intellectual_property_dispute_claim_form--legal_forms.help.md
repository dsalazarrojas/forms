# Intellectual Property Dispute Claim Form - Help Guide
## Purpose
This form is for reporting intellectual property disputes. It requires providing details about the dispute, the type of intellectual property involved, and your contact information. This form will help us understand the nature of your claim and facilitate the resolution process.

## How To Complete This Form
1. Fill out the form completely, ensuring all required fields are filled.
2. Choose the correct "Case Type" to describe the nature of your dispute.
3. Provide accurate contact information, including your name, address, and email.
4. Describe your claim in detail in the "dispute_description" field.
5. Select the relevant type(s) of intellectual property involved.
6. Enter the date and time of the filing (if known).
7. Fill out the "additional_comments" field with any additional information you think is relevant.
8. Finally, review and sign the form to confirm your claim.

## Field-by-Field Explanation
* **Intellectual Property Dispute Claim Form** (`form_title`, text, required: false): This is the title of the form. You can leave this field empty, but it's not required for the submission process.
* **Case Type** (`case_type`, select_one, required: false): Choose the type of case to categorize your dispute (e.g., "Patent", "Copyright", "Trademark", etc.).
* **Party One Name** (`party_one_name`, text, required: false): Enter the name of the party filing the claim.
* **Party One Address** (`party_one_address`, text, required: false): Enter the address of the party filing the claim.
* **Party Two Name** (`party_two_name`, text, required: false): Enter the name of the opposing party.
* **Party Two Address** (`party_two_address`, text, required: false): Enter the address of the opposing party.
* **Dispute Description** (`dispute_description`, text, required: true): Describe the dispute in detail, including the facts and circumstances.
* **Intellectual Property Type** (`intellectual_property_type`, select_multiple, required: false): Select the type(s) of intellectual property involved (e.g., "Patent", "Copyright", "Trademark", etc.).
* **Date of Filing** (`date_of_filing`, date, required: false): Enter the date the claim was filed (if known).
* **Time of Filing** (`time_of_filing`, time, required: false): Enter the time the claim was filed (if known).
* **Contact Number** (`contact_number`, text, required: false): Enter your contact number for follow-up.
* **Email Address** (`email_address`, email, required: false): Enter your email address for follow-up.
* **Additional Comments** (`additional_comments`, text, required: true): Add any additional information that might be helpful in resolving the dispute.
* **Signature** (`signature`, text, required: true): Sign the form to confirm your claim.
* **Form Submit** (`form_submit`, select_one, required: false): Click "Submit" to complete the form submission.
