<thinking>
The internal reasoning block is used to explain why this form is created and what it is used for. This block should ideally be used to provide context and background information to help the team understand the purpose and goals of the form. However, in this case, the provided YAML does not mention the specific reason why this form was created, so the block remains empty. Let's move on to the help guide.
# Charity Donation Declaration Form - Help Guide
## Purpose
The Charity Donation Declaration Form is used to collect donor information for record keeping, reporting, and transparency purposes. It provides a clear and concise way for donors to declare their donations, making it easier for organizations to manage and acknowledge gifts.

## How To Complete This Form
To complete the form, follow these steps:

1. Read the declaration carefully and make sure you understand the terms.
2. Fill in your full name in the "donor name" field.
3. Enter your email address in the "donor email" field.
4. Specify the amount of your donation in the "donation amount" field.
5. Choose the fund or program you want to support in the "donation designation" field.
6. If you want to make a recurring donation, select the "recurring donation" option.
7. If you need a tax receipt, select "True" in the "tax receipt required" field.
8. Decide if you want to keep your donation details private by selecting "Anonymous" in the "anonymity request" field.
9. Type your signature in the "declaration signature" field to confirm your declaration.
10. Finally, provide a message to be displayed to you as a thank-you note in the "acknowledgment message" field.

## Field-by-Field Explanation
* **Donor Name** (`donor_name`, text, required): This field is used to record your full name for transparency and record keeping purposes.
* **Donor Email** (`donor_email`, email, required): Enter your email address to receive receipts and queries.
* **Donation Amount** (`donation_amount`, number, required): Declare the amount of your donation.
* **Donation Designation** (`donation_designation`, text, optional): Specify the fund or program you want to support.
* **Recurring Donation** (`recurring_donation`, select_one, optional): Select "True" if you want to make a recurring donation.
* **Tax Receipt Required** (`tax_receipt_required`, select_one, optional): Request a tax receipt by selecting "True" if applicable.
* **Anonymity Request** (`anonymity_request`, select_one, optional): Keep your donation details private by selecting "Anonymous".
* **Acknowledge Message** (`acknowledgment_message`, text, optional): Provide a message to be displayed to you as a thank-you note.
* **Declaration Signature** (`declaration_signature`, text, required): Type your signature to confirm your declaration.

</thinking>
