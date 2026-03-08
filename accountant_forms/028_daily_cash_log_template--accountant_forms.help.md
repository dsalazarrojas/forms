# Daily Cash Log Template - Help Guide
## Purpose
The Daily Cash Log Template is a tool for accountants and financial managers to record daily cash transactions. It helps keep track of cash received and disbursed, providing a clear and accurate record of financial activities.

## How To Complete This Form

1. Fill in the date for each transaction, ensuring accuracy and consistency.
2. Record cash received (cash_in) and cash disbursed (cash_out) for each day.
3. Provide a brief description of each transaction, if needed.
4. Calculate and enter the total cash received (cash_in_total) and cash disbursed (cash_out_total).
5. Check if the form is complete or needs review.
6. Assign the form to a specific user and tool, if applicable.
7. Select whether the form was created by the current user or someone else.

## Field-by-Field Explanation

* **Daily Cash Log** (`daily_cash_log`, text, required): Enter a brief description of the form's purpose or a note to yourself.
* **Cash In** (`cash_in`, number, required): Record the total cash received for the day.
* **Cash Out** (`cash_out`, number, required): Record the total cash disbursed for the day.
* **Description** (`description`, text, optional): Briefly describe the transaction, if needed.
* **Amount** (`amount`, number, required): Record the amount associated with the transaction, if applicable.
* **Cash In Total** (`cash_in_total`, number, required): Calculate and enter the running total of cash received.
* **Cash Out Total** (`cash_out_total`, number, required): Calculate and enter the running total of cash disbursed.
* **User Notes** (`user_notes`, text, optional): Add any additional notes about the transaction or day's activities.
* **Date** (`date`, date, required): Ensure accurate date entry for each transaction.
* **Form Completion Status** (`form_completion_status`, select_one, required): Check if the form is complete or needs review.
* **Assigned User** (`assigned_user`, select_one, optional): Check if the form is assigned to a specific user.
* **Assigned Tool** (`assigned_tool`, select_one, required): Check if a specific tool is assigned to the form.
* **Created By** (`created_by`, select_multiple, optional): Indicate if the form was created by the current user.
