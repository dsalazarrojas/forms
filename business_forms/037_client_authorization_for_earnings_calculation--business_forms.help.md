<figure><thinking>

This form is designed to gather essential information from clients for earnings calculation and authorization purposes. It's crucial to ensure that the client provides accurate and complete data to facilitate a proper financial assessment. The form's fields are intended to collect identifying details, authorization, and specific calculation parameters.

</thinking>

# Client Authorization For Earnings Calculation - Help Guide
## Purpose
This form is used to gather client authorization for earnings calculation, which is crucial for financial assessments and income verification. Clients must provide accurate and complete information to ensure a thorough understanding of their financial situation.

## How To Complete This Form
To complete this form, clients should follow the steps below:

1. Provide their name and identifying information, including their Social Security or Tax ID number.
2. Confirm their current mailing address.
3. Provide a valid phone number for contact purposes.
4. Specify the purpose of the earnings verification, such as loan/c Credit Application, Financial Planning, or Tax Preparation.
5. Choose the dates for the earnings review period.
6. Authorize access to various financial data sources, including tax returns, pay stubs, and bank statements.
7. Identify the name and firm of the authorized professional handling the calculation.
8. Confirm the understanding of revocation rights and provide a digital signature.

## Field-by-Field Explanation

* **Client Legal Name** (`client_full_name`, text, required): The client's full name as it appears on their government-issued ID.
* **Social Security or Tax ID (Last 4 digits)** (`client_id_number`, text, required): The last 4 digits of the client's Social Security or Tax ID number for identity verification.
* **Current Mailing Address** (`address_on_file`, text, required): The client's current mailing address to ensure accurate contact and communication.
* **Contact Phone Number** (`contact_phone`, text, required): A valid phone number for the client to be contacted in case of questions or updates.
* **Purpose for Earnings Verification** (`calculation_purpose`, select_one, required): Choose the purpose of the earnings verification, such as Loan/Credit Application, Financial Planning, or Tax Preparation.
* **Start Date for Earnings Review** (`calculation_period_start`, date, required): The date from which the earnings review period begins.
* **End Date for Earnings Review** (`calculation_period_end`, date, required): The date until which the earnings review period ends.
* **Access to Federal and State Tax Returns** (`authorize_tax_returns`, select_one, required): Authorize access to federal and state tax returns for financial assessment.
* **Access to Pay Stubs and W2/1099 Forms** (`authorize_pay_stubs`, select_one, required): Authorize access to pay stubs and W2/1099 forms for financial assessment.
* **Access to Bank Statements and Deposit Records** (`authorize_bank_statements`, select_one, required): Authorize access to bank statements and deposit records for financial assessment.
* **Name of Authorized Accountant/Advisor** (`professional_name`, text, required): The name of the authorized professional handling the calculation.
* **Firm/Organization Name** (`professional_firm`, text, optional): The firm or organization name of the authorized professional.
* **Digital Signature of Client** (`electronic_signature`, text, required): A digital signature of the client confirming the authorization.
* **Date of Authorization** (`date_of_authorization`, date, required): The date on which the client provided this authorization.
* **Authorization Expiration** (`expiration_date`, date, optional): The date on which this authorization expires, if set.
* **Revocation Right Acknowledgement** (`revocation_right_ack`, select_one, required): Confirm understanding of revocation rights.
* **Secure Financial Assessment** (`footer_note`, note, optional): A note confirming the understanding of secure financial assessment.
