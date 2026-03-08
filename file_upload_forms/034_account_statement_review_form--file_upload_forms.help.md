# Account Statement Review Form - Help Guide

## Purpose
The Account Statement Review Form is designed to help customer service representatives and account managers review and verify account statements for discrepancies and inaccuracies. This form ensures that account information is accurate and up-to-date, reducing the risk of unauthorized transactions and improving customer satisfaction.

## How To Complete This Form

1. Fill in the customer's information, including their name, account number, email address, and phone number.
2. Confirm that the statement balance is accurate. If not, select the type of discrepancy and provide a description.
3. Select the type of discrepancy that applies to the issue (if any).
4. Provide details about the discrepancy, including the amount and a description.
5. Select the preferred resolution and follow-up method for the issue.

## Field-by-Field Explanation

* **Customer Full Name (Customer Name)** (`customer_name`, `text`, required): Enter the customer's full name as it appears on their account information.
* **Account Number (Account Number)** (`account_number`, `text`, required): Enter the customer's account number.
* **Email Address (Email Address)** (`email`, `email`, required): Enter the customer's email address.
* **Phone Number (Phone Number)** (`phone_number`, `text`, required): Enter the customer's phone number.
* **Statement Period Under Review (Statement Period)** (`statement_period`, `text`, required): Enter the period of the statement under review, e.g., January 2026.
* **Statement Date (Statement Date)** (`statement_date`, `date`, required): Enter the date of the statement.
* **Statement Closing Balance (Statement Closing Balance)** (`statement_balance`, `number`, required): Confirm that the statement balance is accurate.
* **Is the Statement Balance Accurate? (Is the Statement Balance Accurate)** (`balance_accuate`, `select_one`, required): Select whether the statement balance is accurate or not.
* **Type of Discrepancy (Type of Discrepancy)** (`discrepancy_type`, `select_multiple`, required): Select all the types of discrepancies found in the statement.
* **Discrepancy Amount (Discrepancy Amount)** (`discrepancy_amount`, `number`, optional): Enter the amount of the discrepancy (if applicable).
* **Description of the Discrepancy (Description of the Discrepancy)** (`discrepancy_description`, `text`, optional): Provide a description of the discrepancy.
* **Expected Correct Amount (Expected Correct Amount)** (`expected_correct_amount`, `number`, optional): Enter the expected correct amount (if applicable).
* **Preferred Resolution (Preferred Resolution)** (`preferred_resolution`, `select_one`, required): Select the preferred resolution for the issue.
* **Preferred Contact Method for Follow-Up (Preferred Contact Method for Follow-Up)** (`preferred_contact_method`, `select_one`, required): Select the preferred contact method for follow-up.
* **Additional Comments (Additional Comments)** (`additional_comments`, `text`, optional): Enter any additional comments or details about the issue.
