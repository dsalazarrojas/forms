# financial_approval_form - Help Guide
## Purpose
The financial approval form is a tool used by financial teams to review and approve or reject employee requests for financial expenses and budget allocation. 

## How To Complete This Form

To complete this form, please follow these steps:

1. Select the type of financial request you are submitting: 
   - Expense Reimbursement
   - Funding Allocation
   - Budget Request

2. If you are submitting an Expense Reimbursement request, please enter the amount you are requesting.
3. If you are submitting a Funding Allocation request, please select the options for the type of reimbursement you are requesting.
4. Please select the appropriate date and time for the approval.
5. Provide any additional notes or comments regarding your request.

## Field-by-Field Explanation

* **Budget Request**: 
  * (`budget_request_form`, `select_one`, optional): Select the type of budget request you are submitting.
  * (`Expense Reimbursement`, `Funding Allocation`, `Budget Request`): Choose one of the options to categorize your request.
* **Request Amount**: 
  * (`budget_request_amount`, `number`, optional): Enter the amount you are requesting for the selected budget type.
* **Expense Reimbursement**: 
  * (`expense_reimbursement_form`, `select_multiple`, optional): Select the type of expense reimbursement you are requesting.
* **Approve Date**: 
  * (`approval_date`, `date`, optional): Enter the date on which you would like to receive the approval.
* **Approve Time**: 
  * (`approval_time`, `time`, optional): Enter the time on which you would like to receive the approval.
* **Note**: 
  * (`note`, `note`, optional): Enter any additional comments or notes you would like to provide.
* **Email**: 
  * (`email`, `email`, optional): Enter your email address for contact purposes. 

## Tips
- Please ensure that the selected options match the type of request you are submitting.
- Please enter accurate and complete information to help with the review process.
- If you have any questions or concerns, please contact the financial team for assistance.
