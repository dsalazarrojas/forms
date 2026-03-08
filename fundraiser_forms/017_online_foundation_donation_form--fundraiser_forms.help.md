# online-foundation-donation-form - Help Guide

## Purpose
This form is designed to collect donations from individuals interested in supporting the foundation. It allows users to provide their personal details, donation preferences, and payment information, which will be used to process and confirm the donation.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the required fields (marked as "Required") with your details and preferences.
2. Double-check your information for accuracy before submitting the form.
3. Review the options for the "Donation Type", "Frequency", "Payment Method", and "Confirm Donation Type", "Confirm Frequency", and "Confirm Payment Method" fields to ensure you select the correct options.
4. Provide any additional notes or comments in the "Notes" field if necessary.
5. Click the "Submit" button to send the form to the foundation.

## Field-by-Field Explanation

### First Name
* **First Name** (`first_name`, `text`, Required): This field is used to collect your first name.
* **Last Name** (`last_name`, `text`, Required): This field is used to collect your last name.

### Email
* **Email** (`email`, `email`, Required): This field is used to collect your email address, which will be used to contact you about your donation.

### Phone
* **Phone** (`phone`, `text`, Required): This field is used to collect your phone number, which will be used as a contact method.

### Amount
* **Amount** (`amount`, `number`, Required): This field is used to collect the amount of your donation.

### Donation Type
* **Donation Type** (`donation_type`, `select_multiple`, Required): Select one or more of the provided options to indicate the type(s) of donation you are making.
*   *Option 1*: This option is not specified in the YAML, so I'm assuming it's for general donations.
*   *Option 2*: This option is also not specified, but it might be for specific causes or projects.

### Frequency
* **Frequency** (`frequency`, `select_one`, Required): Select one of the provided options to indicate how often you would like to make donations.

### Payment Method
* **Payment Method** (`payment_method`, `select_one`, Required): Select one of the provided options to indicate your preferred payment method.

### Notes
* **Notes** (`notes`, `note`, Optional): This field is used to provide any additional comments or information about your donation.

### Confirm Email
* **Confirm Email** (`confirm_email`, `email`, Required): This field is used to confirm your email address, which will be used to contact you about your donation.

### Confirm Phone
* **Confirm Phone** (`confirm_phone`, `text`, Required): This field is used to confirm your phone number, which will be used as a contact method.

### Confirm Amount
* **Confirm Amount** (`confirm_amount`, `number`, Required): This field is used to confirm the amount of your donation.

### Confirm Donation Type
* **Confirm Donation Type** (`confirm_donation_type`, `select_multiple`, Required): Select one or more of the provided options to confirm the type(s) of donation you are making.

### Confirm Frequency
* **Confirm Frequency** (`confirm_frequency`, `select_one`, Required): Select one of the provided options to confirm how often you would like to make donations.

### Confirm Payment Method
* **Confirm Payment Method** (`confirm_payment_method`, `select_one`, Required): Select one of the provided options to confirm your preferred payment method.

### Confirm Notes
* **Confirm Notes** (`confirm_notes`, `note`, Optional): This field is used to confirm any additional comments or information about your donation.

**Tips**

* Make sure to double-check your information before submitting the form to avoid errors.
* If you are unsure about any of the options, you can always contact the foundation for clarification.
* The foundation will contact you with a confirmation of your donation and any further details.
