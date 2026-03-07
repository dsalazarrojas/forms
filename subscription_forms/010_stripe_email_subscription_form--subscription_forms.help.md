<thinking>
This form is used for customers to subscribe or unsubscribe to a email list. It is not intended to be used for other purposes.
The fields provided in this form are:
- a text field to input the customer's email address 
- a confirm text field to ensure the customer inputs the same email address twice
- a text field to input the customer's name (if applicable)
- a text field to input the email frequency (if applicable)
- a select field to confirm subscription 
- a select field to confirm unsubscription 

Please ensure that the form is not being used for any other purpose than email subscription and unsubscription.
</thinking>

# Stripe Email Subscription Form - Help Guide
## Purpose
This form is designed for customers to subscribe or unsubscribe to a email list. The form collects the necessary information to confirm subscription or unsubscription.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your email address in the Email Address field. If you are subscribing, enter your email address in the format `example@example.com`. If you are unsubscribing, enter your email address as it was previously subscribed.
2. In the Confirm Email field, re-enter your email address to confirm it.
3. If you are subscribing, select "Yes" in the Subscribe field. If you are unsubscribing, select "Yes" from the first option and "No" from the second option.
4. If you are providing your name, enter it in the Name field.
5. If you are selecting a frequency for your email subscriptions, enter it in the Email Frequency field.

## Field-by-Field Explanation

* **Email Address** (`email_address`, email, required: false): Enter your email address to subscribe or unsubscribe.
* **Confirm Email** (`confirm_email`, email, required: false): Re-enter your email address to confirm it.
* **Email Address Confirmation** (`email_address_confirmation`, note, required: false): This field is automatically generated to confirm your email address.
* **Name** (`name`, text, required: false): If you are subscribing, you may input your name here.
* **Email Frequency** (`email_frequency`, text, required: false): If you are subscribing, you may input how frequently you would like to receive emails.
* **Subscribe** (`subscribe`, select_one, required: false): Select "Yes" to confirm subscription.
* **Unsubscribe** (`unsubscribe`, select_multiple, required: false): If you are unsubscribing, select "Yes" from the first option and "No" from the second option.

## Tips
- Make sure to input the correct format for your email address.
- If you are subscribing, select the correct subscription frequency.
- If you are unsubscribing, select "Yes" from the first option and "No" from the second option to confirm unsubscription.
