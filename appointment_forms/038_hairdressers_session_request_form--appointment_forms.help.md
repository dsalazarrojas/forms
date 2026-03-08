# Hairdressers Session Request Form - Help Guide
## Purpose
The purpose of this form is to collect information from clients for a hairdresser session, including their contact information, appointment details, and payment information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your contact information, including your name and any other relevant details.
2. Provide the details of your appointment, including the date and time you would like to have the session.
3. Choose your session preferences, such as whether you would like to have any specific services or products used during the session.
4. If you are paying by credit card, fill in your payment method and amount.
5. Choose your payment status, which will determine when the payment is due.
6. Add any notes or comments about your session.

## Field-by-Field Explanation

* **Session Request Form** (`session_request_form`, text, required): Enter a brief description of your session request.
* **Client Contact Information** (`contact_info`, text, optional): Provide your contact information, including your name, email, and phone number.
* **Appointment Details** (`appointment_details`, text, optional): Provide the details of your appointment, including the date and time you would like to have the session.
* **Session Preferences** (`session_preferences`, select_one, optional): Choose whether you would like to have any specific services or products used during the session.
* **Payment Information** (`payment_info`, text, optional): Enter your payment method and amount.
* **Payment Options** (`payment_options`, text, optional): Select your payment options, such as credit card or bank transfer.
* **Hair Dresser Information** (`hair_dresser_info`, text, optional): This field is not meant to be used by clients. It's a field that the form creator might use for internal purposes.
* **Payment Method** (`payment_method`, select_one, optional): Choose whether you will be paying by credit card or other methods.
* **Payment Amount** (`payment_amount`, number, optional): Enter the amount you will be paying for the session.
* **Payment Status** (`payment_status`, select_multiple, optional): Choose whether your payment is active or inactive.
* **Notes** (`notes`, note, optional): Add any notes or comments about your session.
* **Confirmation** (`confirmation`, text, optional): Confirm that you have submitted your session request form correctly.
