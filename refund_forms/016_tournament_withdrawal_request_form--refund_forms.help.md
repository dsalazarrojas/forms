<thinking>
We will be creating a user-facing help guide for the "Tournament Withdrawal Request Form" to help end-users understand its purpose and complete it efficiently.
The form is used to collect information from users for tournament withdrawals, which is likely a critical part of managing events or matches within a tournament system.
To ensure the form is properly filled out, we'll cover the form's purpose, the step-by-step process to complete it, and provide field-by-field explanations for each field.
This guide will help users understand what each field is for and how to fill it out accurately.
</thinking>

# Tournament Withdrawal Request Form - Help Guide

## Purpose
The Tournament Withdrawal Request Form is used to collect information for tournament withdrawals. Users are requested to fill out the form to provide details on their withdrawal, which helps in processing and addressing their request efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form and make sure you have all the necessary information before proceeding.
2. For each field, read the explanation below and fill it out accordingly.
3. Review your entries before submitting the form.

## Field-by-Field Explanation

* **User** (`user`, `select_one`, required/optional): Please select either 'Yes' or 'No' to indicate whether you are the user withdrawing or not. If you are the user, select 'Yes', otherwise, select 'No'.
* **Participant** (`participant`, `select_one`, required/optional): Choose whether the participant is withdrawing or not, similar to 'User'. Select 'Yes' for withdrawal, otherwise, select 'No'.
* **Reason for Withdrawal** (`reason`, `text`, required/optional): Provide a brief explanation for your withdrawal in this text field. This will help the tournament organizers understand your reason for withdrawing.
* **Date** (`date`, `date`, required/optional): Enter the date of the withdrawal. Ensure the format is in a correct date format (MM/DD/YYYY).
* **Time** (`time`, `time`, required/optional): If applicable, select the time of the withdrawal. This is for timing-related withdrawals.
* **Tournament** (`tournament`, `select_one`, required/optional): Indicate whether the tournament is involved in the withdrawal by selecting 'Yes' or 'No'.
* **Refund Status** (`refund_status`, `select_one`, required/optional): Choose the refund status of your withdrawal. Select from 'Not Refunded', 'Partially Refunded', or 'Fully Refunded' based on your withdrawal circumstances.
* **Amount** (`amount`, `number`, required/optional): If applicable, enter the amount involved in the withdrawal. Ensure it's a valid number.
* **Additional Notes** (`notes`, `note`, required/optional): Provide any additional notes or comments related to your withdrawal.
* **Assigned to** (`assigned_to`, `select_one`, required/optional): Indicate whether someone is assigned to handle your withdrawal by selecting 'Yes' or 'No'.

## Tips
* Double-check your entries for accuracy before submitting the form.
* Ensure you have all necessary information before filling out the form.
* If you're unsure about any field, refer to the field's explanation above for clarification.
