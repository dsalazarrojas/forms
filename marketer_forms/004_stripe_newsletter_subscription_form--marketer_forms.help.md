<thinking>Form purpose: This form is for customers who have signed up for a subscription service. The form collects information about the customer's format and duration preferences for their subscription. The form asks for the customer's first and last name, email address, and format and duration preferences. The form also includes a confirm email field to prevent errors and ensure the customer's email is correct. The fields are divided into two sections: contact information (first name, last name, email) and subscription preferences (format, duration, frequency). The form is used to update the customer's subscription preferences and ensure that the customer receives the right format and frequency of their subscription. This form must be completed to update subscription preferences, and it should not be used for other purposes. It should only be used by customers who have already signed up for the service and are looking to make changes to their subscription. The form must not be used for new customers or customers who are signing up for the first time. The form is only for customers who are already subscribers and are looking to make changes to their subscription.</thinking>

# Stripe News Letter Form - Help Guide
## Purpose
The Stripe News Letter Form is used to update the subscription preferences of existing customers who have signed up for a subscription service.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your first name in the "First Name" field.
2. Fill in your last name in the "Last Name" field.
3. Enter your email address in the "Email" field.
4. Select your preferred format in the "Format" field. You can choose between "Digital" and "Print".
5. Select your preferred duration in the "Duration" field. You can choose between "Month", "Quarterly", and "Yearly".
6. Select the frequency of your subscription in the "Frequency" field.
7. Confirm your email address in the "Confirm Email" field to ensure accuracy.
8. Click the "Subscribe" button to submit your updated subscription preferences.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name to update your subscription preferences.
* **Last Name** (`last_name`, text, required): Enter your last name to update your subscription preferences.
* **Email** (`email`, email, required): Enter your email address to update your subscription preferences. Make sure to enter the same email address that you used when signing up for the service.
* **Format** (`format`, select_one, required): Select your preferred format for your subscription. You can choose between "Digital" and "Print".
* **Duration** (`duration`, select_one, required): Select your preferred duration for your subscription. You can choose between "Month", "Quarterly", and "Yearly".
* **Frequency** (`frequency`, number, required): Select the frequency of your subscription.
* **Confirm Email** (`confirm_email`, email, required): Confirm your email address to ensure accuracy and avoid errors.
* **Format & Frequency** (`format_frequency`, note, optional): This field is not editable and is only for informational purposes.
* **Subscribe** (`submit`, select_one, required): Click this button to submit your updated subscription preferences and confirm your changes.
