# Annuity Withdrawal Form - Help Guide
## Purpose
This form is used to request an annuity withdrawal. Please fill out the form carefully and accurately to ensure your request is processed efficiently.

## How To Complete This Form
1. Fill out the form with your accurate and complete information.
2. Review the form before submitting it to ensure everything is correct.
3. Make sure to sign and date the form to confirm your request.

## Field-by-Field Explanation

* **Account Holder Name** (`account_holder_name`, text, required): Your full legal name.
* **Social Security Number** (`social_security`, text, required): Your social security number for identification purposes.
* **Date of Birth** (`date_of_birth`, date, required): Your date of birth.
* **Annuity Account Number** (`account_number`, text, required): Your annuity policy or account number.
* **Email Address** (`email`, email, required): Your contact email for communication.
* **Phone Number** (`phone`, text, required): Your contact phone number.
* **Account Establishment Date** (`account_establishment_date`, date, optional): The date when your annuity was opened.
* **Type of Annuity** (`annuity_type`, select_one, required): The type of annuity you have.
* **Current Account Balance** (`current_balance`, number, optional): The approximate value of your account balance.
* **Type of Withdrawal Requested** (`withdrawal_type`, select_one, required): The type of withdrawal you are requesting.
* **Withdrawal Amount** (`withdrawal_amount`, number, required): The dollar amount you are requesting for withdrawal.
* **Reason for Withdrawal** (`withdrawal_reason`, select_one, required): The reason for your withdrawal request.
* **Detailed Explanation** (`reason_details`, text, optional): Additional details about your withdrawal request.
* **Withdrawal Timing** (`withdrawal_timing`, select_one, required): The timing of your withdrawal request.
* **Specific Withdrawal Date** (`specific_date`, date, optional): If you selected a specific date for your withdrawal.
* **I understand potential tax implications** (`tax_implications_aware`, select_one, required): Acknowledgement of potential tax implications of your withdrawal.
* **I understand early withdrawal penalties may apply** (`early_withdrawal_penalty_aware`, select_one, required): Acknowledgement of potential early withdrawal penalties.
* **Preferred Payment Method** (`payment_method`, select_one, required): The method you prefer for payment.
* **Bank Account Information** (`bank_account_info`, text, optional): Your bank account information for direct deposit.
* **Spouse Consent** (`spousal_consent`, select_one, optional): Spouse consent status.
* **Beneficiary Notifications** (`beneficiary_notifications`, select_one, optional): Beneficiary notifications status.
* **Financial Advisor Coordination** (`financial_advisor_coordination`, select_one, optional): Coordination with your financial advisor.
* **I request this withdrawal and understand the terms** (`request_certification`, select_one, required): Confirmation of your understanding of the terms and conditions.
