# Policy Cancellation Form - Help Guide
## Purpose
The Policy Cancellation Form is a document used to request cancellation of a policy. This form is used by policy holders to notify the company of their intent to cancel their policy. It helps to gather essential information for a smooth cancellation process.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer "Yes" or "No" to "type_of_policy" field, indicating whether you hold a policy.
2. If you answer "Yes", provide the policy details in the "policy_details" field.
3. Enter the reason for cancellation in the "cancellation_reason" field.
4. Enter your contact details, including email and phone number in the "contact_details" and "phone_number" fields, respectively.
5. Choose the date of cancellation in the "date_of_cancellation" field.
6. Select "Yes" or "No" to confirm the cancellation in the "confirmation_of_cancellation" field.

## Field-by-Field Explanation

* **Policy Cancellation** (`policy_cancellation_form`, text, required: false): This is the main heading of the form where you need to state that you are submitting a policy cancellation request.
* **Type of policy** (`type_of_policy`, select_one, required: false): Check "Yes" if you hold a policy, and "No" if you do not.
* **Policy details** (`policy_details`, note, required: false): Enter a brief description of the policy you are canceling, if applicable.
* **Cancellation reason** (`cancellation_reason`, text, required: false): Enter the reason for cancelling the policy.
* **Contact details** (`contact_details`, email, required: false): Enter your email address so we can contact you regarding the cancellation.
* **Phone number** (`phone_number`, text, required: false): Enter your phone number so we can contact you regarding the cancellation.
* **Date of cancellation** (`date_of_cancellation`, date, required: false): Choose the date when you want to cancel your policy.
* **Confirmation of cancellation** (`confirmation_of_cancellation`, select_multiple, required: false): Confirm that you want to cancel your policy by selecting "Yes" or "No".
