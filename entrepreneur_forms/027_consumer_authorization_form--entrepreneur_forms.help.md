# Consumer Authorization Form - Help Guide
## Purpose
This form is used for consumer authorization in a business-to-consumer (B2C) context. It is designed to collect personal and financial information from the consumer to authorize a specific service or activity.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter your First Name in the **First Name** field.
2. Enter your Last Name in the **Last Name** field.
3. Enter your Email Address in the **Email Address** field.
4. Enter your Phone Number in the **Phone Number** field.
5. Enter your Street Address in the **Street Address** field.
6. Enter your City in the **City** field.
7. Enter your State or Province in the **State or Province** field.
8. Enter your ZIP or Postal Code in the **ZIP or Postal Code** field.
9. Enter your Date of Birth in the **Date of Birth** field.
10. Select the Type of Authorization from the dropdown menu.
11. Describe what you are authorizing in the **Authorization Details** field.
12. Identify the Authorized Party in the **Authorized Party** field.
13. If applicable, enter the Authorization Amount.
14. Enter the Authorization Start Date.
15. If applicable, enter the Authorization End Date.
16. Select if this is a Recurring Authorization.
17. If you are making a payment, select the Payment Method and enter the Last Four Digits.
18. Enter the Purpose of Authorization.
19. Confirm that you have read and agree to the Terms and Conditions.
20. Confirm that you have read the Privacy Policy.
21. Confirm that you understand you can revoke this authorization.
22. Sign and date the form as the Consumer with your full name.
23. (Optional) If required, enter the Witness Name and sign as the Witness.

## Field-by-Field Explanation

* **First Name** (`consumer_first_name`, text, required): Enter your first name as it is commonly known.
* **Last Name** (`consumer_last_name`, text, required): Enter your last name as it is commonly known.
* **Email Address** (`consumer_email`, email, required): Enter your primary email address.
* **Phone Number** (`consumer_phone`, text, required): Enter your contact phone number.
* **Street Address** (`consumer_address`, text, required): Enter your mailing address.
* **City** (`consumer_city`, text, required): Enter the city where you reside.
* **State or Province** (`consumer_state`, text, required): Enter your state or province of residence.
* **ZIP or Postal Code** (`consumer_zip`, text, required): Enter your postal code.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth.
* **Type of Authorization** (`authorization_type`, select_one, required): Select what you are authorizing (e.g. Payment, Service, Information Release, etc.).
* **Authorization Details** (`authorization_details`, text, required): Describe what you are authorizing in detail.
* **Authorized Party** (`authorized_party`, text, required): Identify who you are authorizing.
* **Authorization Amount** (`authorization_amount`, number, optional): If applicable, enter the dollar amount for the authorization.
* **Authorization Start Date** (`authorization_start_date`, date, required): Enter the start date of the authorization.
* **Authorization End Date** (`authorization_end_date`, date, optional): If applicable, enter the end date of the authorization.
* **Is This a Recurring Authorization** (`recurring_authorization`, select_one, required): Select if this is a one-time or ongoing authorization.
* **Payment Method** (`payment_method`, select_one, optional): Select the payment method (e.g. Credit Card, Debit Card, etc.).
* **Last Four Digits** (`card_last_four`, text, optional): If applicable, enter the last four digits of your card or account.
* **Purpose of Authorization** (`purpose_of_authorization`, text, required): Describe the reason for this authorization.
* **Terms and Conditions** (`terms_acknowledgment`, select_one, required): Confirm that you have read and agree to the Terms and Conditions.
* **Privacy Policy** (`privacy_policy_acknowledgment`, select_one, required): Confirm that you have read the Privacy Policy.
* **Revocation Understanding** (`revocation_understanding`, select_one, required): Confirm that you understand you can revoke this authorization.
* **Consumer Signature** (`consumer_signature`, text, required): Sign and date with your full name.
* **Signature Date** (`signature_date`, date, required): Date of signing.
* **Witness Name** (`witness_name`, text, optional): If required, enter the name of the witness.
* **Witness Signature** (`witness_signature`, text, optional): If required, sign as the witness.

Note: Some fields are optional and only applicable in specific circumstances. The required fields are those marked as "required" in the form YAML.
