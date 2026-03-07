<thinking>
To create a user-facing help guide for the "Data Storage Billing Form", we need to ensure that the form's purpose is understood and that each field's meaning is clear. The form's purpose is likely for users to input their billing information for data storage services. This form might be used in a variety of contexts, such as when a user is requesting more storage space on a cloud-based platform or for services that require periodic billing.

To determine if this form is being duplicated, we would need to know if there are other forms with similar fields or if this form is being used in conjunction with another form. However, based on the provided YAML fields, this form seems to be a single, straightforward data collection form. We should ensure that users understand that this form is meant for billing purposes and that all fields are required to accurately calculate and process the payment. If any of these assumptions are incorrect, we would need to add more context or clarify the form's purpose and requirements.

The form appears to be for collecting billing information, which may include payment method, amount due, credit card details, and other relevant fields. This information is likely used to charge the user for the services they are using.

</thinking>
# Data Storage Billing Form - Help Guide
## Purpose
The Data Storage Billing Form is a form used to collect billing information from users for data storage services. This form is meant to be completed with accurate and up-to-date information to ensure that charges are calculated correctly.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your First Name in the "First Name" field.
2. Enter your Last Name in the "Last Name" field.
3. Enter your address in the "Address" field.
4. Enter your Email address in the "Email" field. This field is designed to validate your email address.
5. Enter your Phone number in the "Phone" field.
6. Enter your Credit Card Number in the "Credit Card Number" field. This will be used for payment processing.
7. Enter your Expiration Date of your credit card in the "Expiration Date" field.
8. Enter the Amount Due for the billing cycle in the "Amount Due" field.
9. Select your preferred Payment Method from the "Payment Method" dropdown menu.
10. Finally, click on the "Submit" button to complete the form.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, optional): Enter your first name as it is spelled on your identification documents.
* **Last Name** (`last_name`, text, optional): Enter your last name as it is spelled on your identification documents.
* **Address** (`address`, text, optional): Enter your address where the payment will be sent.
* **Email** (`email`, email, optional): Enter your valid email address to receive payment confirmations and updates.
* **Phone** (`phone`, text, optional): Enter your phone number for billing and payment confirmation.
* **Credit Card Number** (`credit_card_number`, text, optional): Enter your credit card number for payment processing.
* **Expiration Date** (`expiration_date`, date, optional): Enter the expiration date of your credit card for payment verification.
* **Amount Due** (`amount_due`, number, optional): Enter the amount due for the billing cycle.
* **Payment Method** (`payment_method`, select_one, optional): Select your preferred payment method: Visa, Mastercard, Amex, or other.
* **Submit** (`submit`, text, optional): Click this button to submit your billing information for processing.
