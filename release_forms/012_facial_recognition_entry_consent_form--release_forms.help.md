<thinking>
# Facial Recognition Entry Consent Form - Help Guide

## Purpose

The Facial Recognition Entry Consent Form is a form designed to collect consent from individuals for facial recognition purposes. This form is used to gather essential information about the individual, including their contact details, consent status, and date of birth. The form is typically used in situations where facial recognition technology is being used, such as in security, medical, or identification verification scenarios.

## How To Complete This Form

To complete this form, follow these steps:

1. Provide general information about yourself on page 1.
2. Enter your contact details on page 2.
3. Confirm your consent status on page 3.
4. Enter your date of birth on page 4.
5. Provide your contact phone number on page 5 (optional).
6. Enter the date of your consent on page 6 (if applicable).
7. Sign and date the form on page 7.
8. Enter your email address and contact email on pages 8 and 9, respectively (if applicable).

## Field-by-Field Explanation

### General Information (Page 1)
 * **General Information** (`general_info`, text, required: false): Enter your name, address, and any other relevant general information about yourself.

### Contact Information (Page 2)
 * **Contact Information** (`contact_info`, text, required: false): Provide your contact information, including your physical address, phone number, and other relevant details.

### Facial Recognition (Page 3)
 * **Facial Recognition** (`facial_recognition`, text, required: false): This field is not clearly described in the provided YAML, so we'll assume it's for additional notes or comments related to facial recognition.

### Consent (Page 4)
 * **Consent** (`consent`, select_one, required: true): Select one of the options to indicate your consent status. The options are: 
     * Option 1
     * Option 2
     * Option 3

### Date Of Birth (Page 5)
 * **Date Of Birth** (`date_of_birth`, date, required: false): Enter your date of birth in the format MM/DD/YYYY.

### Contact Phone (Page 6)
 * **Contact Phone** (`contact_phone`, text, required: false): Enter your contact phone number.

### Consent Date (Page 7)
 * **Consent Date** (`consent_date`, date, required: false): If you've selected Option 1 or 2 on the consent field, enter the date of consent.

### Signature (Page 8)
 * **Signature** (`signature`, note, required: false): Sign and date the form to confirm your consent.

### Email (Page 9)
 * **Email** (`email`, email, required: false): Enter your email address.

### Contact Email (Page 10)
 * **Contact Email** (`contact_email`, email, required: false): Enter your contact email address.

Note: The fields with required set to "false" are optional and can be filled in if applicable.
