# Chit Shoot - Help Guide

## Purpose

This form is for participants to sign up for a chit program, providing essential information required for chit allocation and approval.

## How To Complete This Form

1. Fill out the form with accurate information for each field.
2. Review your submissions before submitting the form.
3. Ensure all required fields are filled.
4. Submit the completed form.

## Field-by-Field Explanation

- **Participant Information**: Provide your basic details to be identified as a participant.
  - **First Name** (`participant_first_name`, text, required): Enter your first name.
  - **Last Name** (`participant_last_name`, text, required): Enter your last name.
  - **Email Address** (`email`, email, required): Enter your valid email address.
  - **Phone Number** (`phone`, text, required): Enter your phone number.

- **Participant Details** (participant_information, note, required): This is where you can add any additional information you want to share about yourself.
  - **Chit Details** (`chit_details`, note, optional): If you have any specific preferences for your chit allocation.

- **Chit Preferences**: Choose your desired chit preferences.
  - **Preferred Chit Amount** (`chit_amount`, select_one, required): Select the amount you would like to have in your chit.
  - **Preferred Duration** (`chit_duration`, select_one, required): Choose the duration you would like your chit to be allocated for.
  - **Preferred Payment Date** (`payment_date`, number, optional): Select the day of the month you would like to receive your chit.

- **Nominee Information**: Provide details about the person or entity you are nominating for the chit.
  - **Nominee Name** (`nominee_name`, text, required): Enter the name of the nominee.
  - **Relationship to Nominee** (`nominee_relationship`, text, required): Describe your relationship to the nominee.
  - **Nominee Contact** (`nominee_contact`, text, optional): Enter the contact information of the nominee.

- **Payment Information**: Choose how you would like to pay for your chit.
  - **Preferred Payment Method** (`payment_method`, select_one, required): Select the method you prefer to use for payment.
  - **Bank Name** (`bank_name`, text, optional): If you are paying through bank transfer, provide the name of your bank.
  - **Account Number** (`account_number`, text, optional): Enter your account number if paying through bank transfer.

- **Guarantor Information**: Provide details required for approval.
  - **Guarantor Name** (`guarantor_name`, text, required): Enter the name of the guarantor.
  - **Guarantor Contact** (`guarantor_contact`, text, required): Enter the contact information of the guarantor.
  - **Guarantor Address** (`guarantor_address`, text, optional): Enter the address of the guarantor.

- **Additional Information**: Provide any additional details you think are important.
  - **Additional Information** (`additional_information`, note, optional): Enter any other information you would like to share.

- **Program Details**: Confirm your understanding of the program.
  - **How Did You Hear About This Chit** (`how_did_you_hear`, select_one, optional): Select how you heard about the program.
  - **Have you participated in a Chit Before?** (`previous_membership`, select_one, optional): Confirm if you have participated in a chit before.
  - **Special Requests or Comments** (`special_requests`, text, optional): Enter any special requests or comments.
  - **I agree to the terms and conditions** (`terms_agreement`, select_one, required): Confirm you understand and agree to the terms and conditions.
  - **Participant Signature** (`participant_signature`, text, required): Digital signature of the participant.
  - **Date of Signup** (`signup_date`, date, required): Enter the date of your signup.

Note: This help guide is based on the provided YAML fields, and explanations are provided for every field to make the user understand the purpose and usage of each field. If a field label is weak/unclear, best-effort explanation is provided to make it understandable.
