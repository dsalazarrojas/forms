# Bank Account Holder Death Notification Form - Help Guide
## Purpose
This form is designed to notify the bank of a deceased account holder, allowing the bank to freeze the account and handle it according to their protocols for estate administration.

## How To Complete This Form
To complete this form, please follow these steps:

1. **Full Legal Name of Deceased**: Provide the full legal name of the deceased account holder.
2. **Date of Death**: Enter the date of death as listed on the official death certificate.
3. **Primary Bank Account Number**: Enter the primary bank account number of the deceased.
4. **Last 4 Digits of Deceased's SSN**: Enter the last four digits of the deceased's Social Security Number (SSN) for verification purposes.
5. **Informant Full Name**: Enter your full name as the person submitting this notification.
6. **Relationship to the Deceased**: Select your relationship to the deceased (e.g., Spouse, Next of Kin, Executor, Attorney, or Other).
7. **Informant Phone Number**: Enter your phone number for the bank to contact you.
8. **Informant Email Address**: Enter your email address for the bank to contact you.
9. **Death Certificate Link**: Provide a secure link to the scanned official death certificate.
10. **Letters Testamentary or Small Estate Affidavit Link**: Provide a link to the required document, if applicable.
11. **Do you wish to place a security freeze on the account immediately?**: Select 'Yes - Freeze Account' if you want to freeze the account immediately, or 'No - Maintain for automatic payments' if you want to allow automatic payments to continue.
12. **Are there known recurring automatic payments?**: Select 'Yes - Keep active' if there are recurring payments, 'Yes - Stop all' to stop all payments, or 'No known payments' if there are no recurring payments.
13. **I certify that I am authorized to provide this notification**: Select 'I Agree' if you are authorized to provide this notification, or 'Other' if you are not authorized and need to provide additional information.
14. **Notification Date**: Enter the date of submission.

## Field-by-Field Explanation
- **Full Legal Name of Deceased** (`deceased_name`, text, required): Provide the full legal name of the deceased account holder.
- **Date of Death** (`date_of_death`, date, required): Enter the date of death as listed on the official death certificate.
- **Primary Bank Account Number** (`account_number_deceased`, text, required): Enter the primary bank account number of the deceased.
- **Last 4 Digits of Deceased's SSN** (`ssn_last_four`, text, required): Enter the last four digits of the deceased's Social Security Number (SSN) for verification purposes.
- **Informant Full Name** (`informant_name`, text, required): Enter your full name as the person submitting this notification.
- **Relationship to the Deceased** (`informant_relationship`, select_one, required): Select your relationship to the deceased (e.g., Spouse, Next of Kin, Executor, Attorney, or Other).
- **Informant Phone Number** (`informant_phone`, text, required): Enter your phone number for the bank to contact you.
- **Informant Email Address** (`informant_email`, email, required): Enter your email address for the bank to contact you.
- **Death Certificate Link** (`death_certificate_link`, text, required): Provide a secure link to the scanned official death certificate.
- **Letters Testamentary or Small Estate Affidavit Link** (`letters_testamentary_link`, text, required): Provide a link to the required document, if applicable.
- **Do you wish to place a security freeze on the account immediately?** (`freezing_request`, select_one, required): Select 'Yes - Freeze Account' if you want to freeze the account immediately, or 'No - Maintain for automatic payments' if you want to allow automatic payments to continue.
- **Are there known recurring automatic payments?** (`recurring_payments_noted`, select_one, required): Select 'Yes - Keep active' if there are recurring payments, 'Yes - Stop all' to stop all payments, or 'No known payments' if there are no recurring payments.
- **I certify that I am authorized to provide this notification** (`certification_statement`, select_multiple, required): Select 'I Agree' if you are authorized to provide this notification, or 'Other' if you are not authorized and need to provide additional information.
- **Notification Date** (`submission_date`, date, required): Enter the date of submission.
