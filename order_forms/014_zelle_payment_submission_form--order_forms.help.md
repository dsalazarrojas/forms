# Zelle Payment Submission Form - Help Guide
## Purpose
The Zelle Payment Submission Form is used to submit payments to individuals or entities via the Zelle payment service. This form collects user information, payment details, and other relevant data to facilitate the payment process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your User Information, including your name and contact details.
2. Select your payment method: Bank Account, Other (Specify), or Zelle (Specify). If you select "Other (Specify)", you will be asked to provide additional information.
3. If you selected "Bank Account" as your payment method, fill in the Bank Account Information.
4. If you selected "Other (Specify)" as your payment method, fill in the Other Payment Information.
5. Fill in the Zelle Information, if applicable.
6. Select a Payment Date.
7. Review your information and click the "Submit" button to send your payment details for processing.

## Field-by-Field Explanation

* **User Information** (`user_info`, text, required: false): Fill in your name and contact details.
* **Payment Method** (`user_payment_method`, select_one, required: false): Select your payment method: Bank Account, Other (Specify), or Zelle (Specify).
* **Bank Account Information** (`bank_account_info`, text, required: false): Fill in the details of your bank account, if using a bank account.
* **Other Payment Information** (`other_payment_info`, text, required: false): Fill in the details of your other payment method, if not using a bank account.
* **Zelle Information** (`zelle_info`, text, required: false): Fill in any Zelle-specific information, if applicable.
* **Payment Date** (`payment_date`, date, required: false): Select or enter a payment date in the correct format.
* **Submit** (`submit`, text, required: false): Review and submit your payment details for processing.
