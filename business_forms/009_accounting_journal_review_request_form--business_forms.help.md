# Accounting Journal Review Request Form - Help Guide
## Purpose
This form is used to request a review of an accounting journal entry for discrepancies or errors. It helps the reviewer to identify and address any issues before proceeding with the next steps in the accounting process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name as the preparer who created the entry.
2. Enter the date the entry was recorded.
3. Provide the system-generated ID or reference number for the journal entry.
4. Enter the total debit amount for the entry.
5. Enter the total credit amount for the entry (which should match the debit amount).
6. Provide a brief description of the entry, including the purpose of the transaction.
7. Select all the accounts affected by the entry.
8. Choose the urgency level of the review, such as Routine, Month-End Close, Year-End Close, or Urgent Correction.
9. Optionally, provide any supporting documentation or instructions for the reviewer.
10. Enter the email address of the reviewer to be notified of this request.

## Field-by-Field Explanation

* **Preparer Name** (`preparer_name`, text, required): The person who created the entry.
* **Entry Date** (`entry_date`, date, required): The date the entry was recorded.
* **Journal Entry ID** (`journal_entry_id`, text, required): The system-generated ID or reference number for the entry.
* **Total Debit Amount** (`total_debit_amount`, number, required): The total debit amount for the entry.
* **Total Credit Amount** (`total_credit_amount`, number, required): The total credit amount for the entry (should match the debit amount).
* **Description of Entry** (`description_of_entry`, text, required): A brief description of the entry, including the purpose of the transaction.
* **Affected Accounts** (`affected_accounts`, select_multiple, required): Select all the accounts impacted by the entry.
* **Review Urgency** (`review_urgency`, select_one, required): The level of urgency for the review, such as Routine, Month-End Close, Year-End Close, or Urgent Correction.
* **-- Supporting Documentation --** (`doc_header`, note, optional): Provide any supporting documentation or instructions for the reviewer.
* **Ensure all relevant invoices or calculations are attached to the entry** (`doc_instruction`, note, optional): A note for the reviewer to ensure all relevant documentation is attached.
* **Reviewer Notification Email** (`reviewer_notification_email`, email, required): The email address of the reviewer to be notified of this request.
