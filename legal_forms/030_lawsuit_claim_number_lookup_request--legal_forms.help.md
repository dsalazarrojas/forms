<thinking> 

This form is used to request a lookup for a lawsuit claim number. The purpose of this form is to allow users to enter their claim number and other relevant information to facilitate a lookup or inquiry regarding their claim. The form should only be used by authorized users or individuals with a legitimate reason for requesting this information. To prevent duplication, the system checks for existing lookups for the same claim number and will only process new requests if the claim number is not already being looked up.

</thinking>

# Lawsuit Claim Number Lookup Request - Help Guide
## Purpose
The Lawsuit Claim Number Lookup Request form is used to request a lookup for a lawsuit claim number. This form allows users to enter their claim number and other relevant information to facilitate a lookup or inquiry regarding their claim.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the claim number in the "Claim Number" field.
2. Select the requesting firm in the "Requesting Firm" field.
3. Describe the case in the "Case Description" field.
4. Select the supporting documents to be attached, such as Proof of Service, Proof of Payment, or Proof of Loss.
5. Enter the contact name and email address (if applicable) in the "Contact Name", "Email", and "Phone Number" fields.
6. Enter the address in the "Address" field.
7. Select the state from the "State" field.
8. Enter the zip code in the "Zip Code" field.
9. (Optional) Enter the date and time in the "Date" and "Time" fields.
10. Add any additional comments in the "Comments" field.

## Field-by-Field Explanation
* **Claim Number** (`claim_number`, `number`, required: false): Enter the lawsuit claim number.
* **Case Number** (`case_number`, `number`, required: false): Enter the case number.
* **Requesting Firm** (`requesting_firm`, `text`, required: false): Enter the requesting firm name.
* **Case Description** (`case_description`, `text`, required: false): Describe the case.
* **Supporting Documents** (`supporting_documents`, `select_multiple`, required: true): Select the supporting documents to be attached, such as Proof of Service, Proof of Payment, or Proof of Loss.
* **Contact Name** (`contact_name`, `text`, required: false): Enter the contact name.
* **Email** (`email`, `email`, required: false): Enter the email address (if applicable).
* **Phone Number** (`phone_number`, `text`, required: false): Enter the phone number.
* **Address** (`address`, `text`, required: false): Enter the address.
* **City** (`city`, `text`, required: false): Enter the city.
* **State** (`state`, `select_one`, required: true): Select the state.
* **Zip Code** (`zip_code`, `text`, required: false): Enter the zip code.
* **Date** (`date`, `date`, required: false): Enter the date.
* **Time** (`time`, `time`, required: false): Enter the time.
* **Comments** (`comments`, `text`, required: false): Add any additional comments.
