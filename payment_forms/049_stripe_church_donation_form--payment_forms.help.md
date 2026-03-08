# stripe_church_donation_form - Help Guide
## Purpose
The purpose of this form is to collect donations from users for the church. It allows users to specify the purpose of their donation, the amount, and the payment method.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the "Full Name" field with your name as it appears on your identification.
2. Enter your email address in the "Email" field. This will be used as a confirmation of your identity.
3. Confirm your email address in the "Confirm Email" field by re-entering it.
4. Select one or more donation types that you are making for the church from the "Donations" field. You can select multiple options by holding down the Ctrl key (or Command key on a Mac) and clicking on each option.
5. Enter the amount of your donation in the "Amount" field. This field is expecting a numerical value.
6. Choose the frequency of your donation by selecting "One time" or "Regularly" from the "Frequency" field.
7. If you are making a regular donation, enter the interval in which you would like to make the donation in the "interval" field. This field is only shown if you select "Regularly" in the "Frequency" field.
8. Select the method of payment from the "Payment Method" field. You can choose between "Credit Card" and "Bank Transfer".
9. If you are making a payment via "Bank Transfer", select "Bank" from the "Payment Method Submitted By" field.
10. Enter any additional notes or comments about your donation in the "Notes" field.
11. Finally, enter the name of the person submitting the donation in the "Submitted By" field.

## Field-by-Field Explanation
* **Full Name** (`name`, text, required): Enter your full name as it appears on your identification.
* **Email** (`email`, email, required): Enter your email address. This will be used as a confirmation of your identity.
* **Confirm Email** (`confirm_email`, text, required): Confirm your email address by re-entering it.
* **Donations** (`donation_type`, select multiple, required): Choose one or more donation options.
* **Amount** (`amount`, number, required): Enter the amount of your donation.
* **Frequency** (`frequency`, select one, required): Choose between "One time" and "Regularly" to specify the frequency of your donation.
* **interval** (`frequency_interval`, number, required if Frequency is Regularly): If you selected "Regularly" in the "Frequency" field, enter the interval in which you would like to make the donation.
* **Payment Method** (`payment_method`, select one, required): Choose between "Credit Card" and "Bank Transfer" to select the method of payment.
* **Payment Method Submitted By** (`payment_method_submitted_by`, select one, required if Payment Method is Bank Transfer): If you selected "Bank Transfer" in the "Payment Method" field, select "Bank" to indicate that the payment was submitted by the bank.
* **Notes** (`notes`, text, required): Enter any additional notes or comments about your donation.
* **Submitted By** (`submitted_by`, text, required): Enter the name of the person submitting the donation.
