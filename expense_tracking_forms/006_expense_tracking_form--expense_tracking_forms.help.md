# Expense Tracking Form - Help Guide
## Purpose

The Expense Tracking Form is designed to record and monitor transactions, allowing you to track transactions, categorize them, and store metadata like the date of the transaction, the category, and status.

## How To Complete This Form

To complete this form, follow these steps:

1.  Enter the **Transaction Date**, which is the date when the transaction occurred.
2.  Enter the **Transaction Amount**, which is the value of the transaction.
3.  Select the correct **Category** for the transaction from the options provided.
4.  Enter a brief note about the transaction, if necessary.
5.  If you are tracking work hours, select **Category** 'Yes'; otherwise, select **Category** 'No'.
6.  If the transaction was done by you, select **User** 'Yes'; otherwise, select **User** 'No'.
7.  Enter your **User Email**, as it will be linked to the transaction.
8.  Enter your **User Phone**, for easy access in the future.
9.  Enter the ID number for the category that the transaction belongs to. If you don't know the ID, you won't have to fill this field.
10. Enter the **Company ID** number for the company involved in the transaction.
11. If the tool or device was assigned to the transaction, select **Assigned Tool** 'Yes'; otherwise, select **Assigned Tool** 'No'.
12. Enter your ID number for the form, so the form can be uniquely identified.
13. Finally, enter the date this form was created.
14. Update this form later as and when the information changes.
15. Select the status of the **Expense Status**, which can be **Active** or **Inactive**.

## Field-by-Field Explanation

*  **Transaction Date** (`transaction_date`, date): Enter the date on which the transaction occurred.
*  **Transaction Amount** (`transaction_amount`, number): Enter the value of the transaction.
*  **Category** (`transaction_category`, select_one, required): Categorize the transaction.
*  **Transaction Note** (`transaction_note`, note, optional): Enter a brief note about the transaction if needed.
*  **Category** (`category`, select_multiple, optional): If you're tracking work hours, pick "Yes"; otherwise, "No".
*  **User** (`user`, select_one, optional): If the transaction was done by you, pick "Yes"; otherwise, "No".
*  **User Email** (`user_email`, email, optional): Enter your email, which will be linked to the transaction.
*  **User Phone** (`user_phone`, text, optional): Enter your phone number for easy access.
*  **Expense Category ID** (`expense_category_id`, number, optional): Enter the ID number for the category that the transaction belongs to.
*  **Company ID** (`company_id`, select_one, optional): Enter the ID number for the company involved in the transaction.
*  **Assigned Tool** (`assigned_tool`, select_one, optional): If the tool or device was assigned, pick "Yes"; otherwise, "No".
*  **Form ID** (`form_id`, number, optional): Enter your ID number for the form.
*  **Created At** (`created_at`, date, optional): Enter the date when the form was created.
*  **Updated At** (`updated_at`, date, optional): Enter the date when the form was updated.
*  **Expense Status** (`expense_status`, select_one, optional): Enter the status of the expense, which is either "Active" or "Inactive".
