# E Learning Program Payment Form - Help Guide
## Purpose
The E Learning Program Payment Form is designed to collect payment information from users for eLearning programs. This form is intended for internal use and is meant to be completed by users to submit their payment details.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the required information in the corresponding fields.
2. Review and verify the accuracy of your input before submission.

## Field-by-Field Explanation

* **form_submit** (`form_submit`, text, required: false): Enter a brief description of the payment.
* **payment_method** (`payment_method`, select_one, required: false): Choose how you would like to pay (e.g., "Yes" or "No").
* **method** (`method`, select_one, required: false): Select a payment method (this field seems to have the same purpose as "payment_method").
* **price** (`price`, text, required: false): Enter the price of the payment.
* **student_name** (`student_name`, text, required: false): Enter your student's name.
* **email** (`email`, email, required: false): Enter your email address.
* **phone** (`phone`, text, required: false): Enter your phone number.
* **payment_date** (`payment_date`, date, required: false): Select the date of payment.
* **payment_time** (`payment_time`, time, required: false): Select the time of payment.

## Tips
* Double-check your input for accuracy before submitting the form.
* Ensure that you have filled in all required fields (if any).
