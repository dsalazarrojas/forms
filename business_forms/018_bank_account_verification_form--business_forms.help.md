<thinking>
To create a comprehensive help guide for the Bank Account Verification Form, I will first consider the form's purpose and ensure that it is not duplicating any existing information. Based on the provided YAML, the form appears to be designed to collect information from both the account holder (applicant) and a bank official, with the goal of verifying the account details. This form will likely be used for account-related inquiries or transactions, such as verifying account balances or status.

I will now output the final help guide in Markdown format as requested:

# Bank Account Verification Form - Help Guide
## Purpose
The Bank Account Verification Form is used to collect information from both the account holder (applicant) and a bank official to verify account details, such as account balances or status.

## How To Complete This Form
To complete this form, please follow these steps:

*   Part 1 - Applicant Information and Consent:
    *   The applicant (account holder) should start by providing their consent for the bank to release account information.
    *   They should then provide their full name and residential address.
*   Part 2 - Bank Official Verification:
    *   The bank official should then provide their name, title, and phone number for verification purposes.
    *   They should also indicate the current account status, account opening date, current balance, average balance for the last 6 months, and whether there has been any non-sufficient funds (NSF) activity in the last 12 months.
    *   Finally, they should date the verification.

## Field-by-Field Explanation

*   **Applicant Full Name** (`applicant_name`, text, required): Please enter your full name as it appears on your identification documents.
*   **Residential Address** (`applicant_address`, text, required): Please enter your current residential address.
*   **Name of Financial Institution** (`bank_name`, text, required): Please enter the name of the bank where you hold the account.
*   **Account Type** (`account_type`, select_one, required): Please select the type of account you have with the bank (Checking, Savings, or Other).
*   **Authorization to Release Information** (`verification_consent`, select_one, required): Please indicate that you authorize your bank to provide the requested verification details (I Authorize, Other).
*   **Current Account Status** (`account_status`, select_one, required): Please select the current status of your account (Active and in Good Standing, Restricted, or Closed).
*   **Date Account was Opened** (`account_open_date`, date, required): Please enter the date your account was opened.
*   **Current Account Balance** (`current_balance`, number, required): Please enter your current account balance.
*   **Average Balance (Last 6 Months)** (`average_balance_6mo`, number, required): Please enter your average account balance for the last 6 months.
*   **Has there been any Non-Sufficient Funds (NSF) activity in the last 12 months?** (`ns_fund_history`, select_one, required): Please indicate whether there has been any NSF activity in the last 12 months (No NSF Activity, 1-2 Instances, 3 or More Instances).
*   **Bank Official Name** (`official_name`, text, required): Please enter the name of the bank official completing this form.
*   **Bank Official Title** (`official_title`, text, required): Please enter the title of the bank official completing this form.
*   **Bank Phone Number for Verification** (`official_phone`, text, required): Please enter the phone number of the bank official for verification purposes.
*   **Date of Verification** (`verification_timestamp`, date, required): Please date and time of the verification.
*   **Official Bank Stamp (if available)**: Please ensure the physical copy is stamped if required.
Note: This help guide is based on the provided YAML and is intended to be concrete, concise, and practical. If you need further clarification or modifications, please let me know.
