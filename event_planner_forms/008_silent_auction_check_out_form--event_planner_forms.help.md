# Silent Auction Check Out Form - Help Guide
## Purpose
The Silent Auction Check Out Form is used by participants to provide information after placing a bid. This form helps to gather details such as participant's name, contact information, and payment methods.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the participant's name accurately.
2. If the participant is representing an organization, fill out the participant's organization.
3. If the participant has a relationship to the organization, fill out the relationship.
4. Fill out the participant's position and title (if applicable).
5. Fill out the participant's name of contact.
6. Fill out the contact phone number and email (if applicable).
7. Select the correct payment method from the options.
8. Fill out the payment received field (if applicable).
9. Fill out the check number and date of payment (if applicable).
10. Fill out the amount received accurately.
11. Fill out the tax deduction field (if applicable).
12. Fill out the tax deduction amount (if applicable).
13. Fill out the participant's donor ID (if applicable).
14. Fill out the participant's notes (if applicable).
15. Fill out the participant's fees (if applicable).

## Field-by-Field Explanation

* **Participant Name** (`participant_name`, `text`, required): The participant's name who has placed the bid.
* **Company Name** (`company_name`, `text`, optional): The name of the participant's company.
* **Auction Item** (`auction_item`, `text`, optional): The name of the auction item.
* **Bid Amount** (`bid_amount`, `text`, optional): The amount of the bid placed.
* **Bid Amount Currency** (`bid_amount_currency`, `text`, optional): The currency of the bid amount.
* **Payment Method** (`payment_method`, `text`, optional): The method used to pay for the bid.
* **Other Payment Method** (`payment_method_other`, `text`, optional): A text field to specify other payment methods.
* **Contact Phone** (`contact_phone`, `text`, optional): The participant's contact phone number.
* **Contact Email** (`contact_email`, `text`, optional): The participant's contact email.
* **Participant Signature** (`participant_signature`, `text`, optional): A signature from the participant.
* **Participant Organization** (`participant_organization`, `text`, optional): The name of the participant's organization.
* **Relationship to Organization** (`participant_relationship`, `text`, optional): The relationship of the participant to the organization.
* **Position** (`participant_position`, `text`, optional): The participant's position.
* **Title** (`participant_title`, `text`, optional): The participant's title.
* **Name of Contact** (`participant_name_of_contact`, `text`, optional): The name of the contact person.
* **Contact Address** (`contact_address`, `text`, optional): The contact address.
* **Payment Received** (`payment_received`, `text`, optional): A field to indicate if payment was received.
* **Check** (`payment_method_check`, `select_one`, optional): Select the check option.
* **Check Number** (`check_number`, `number`, optional): A field to specify the check number.
* **Date of Payment** (`date_of_payment`, `date`, optional): A field to specify the date of payment.
* **Amount Received** (`amount_received`, `number`, optional): A field to specify the amount received.
* **Tax Deduction** (`tax_deduction`, `text`, optional): A field to specify if tax was deducted.
* **Tax Deduction Amount** (`tax_deduction_amount`, `number`, optional): A field to specify the tax deduction amount.
* **Participant Donor ID** (`participant_donor_id`, `text`, optional): The participant's donor ID.
* **Notes** (`participant_notes`, `note`, optional): A field for additional notes.
* **Participant Fees** (`participant_fees`, `text`, optional): A field to specify any additional fees.
