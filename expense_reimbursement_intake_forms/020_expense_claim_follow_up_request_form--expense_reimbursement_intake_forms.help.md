<thinking>
We've received feedback that this form is confusing, and to help clarify its purpose and requirements, let's review the form's YAML fields to provide a clear help guide for the end-user.
After reviewing the input schema, we can see that the form is primarily for tracking expense claims, follow-up requests, and associated details. It appears to be used for internal purposes within a company. This form will help employees submit a request for follow-up on an expense claim that needs attention or clarification from a specific team member (assigned to).
The form will help us identify the company, employee submitting the request, the type of expense, the claim date, claim amount, follow-up date, follow-up notes, and the status of the request.
Before starting, double-check that the form is correctly completed and not duplicated, as some fields are marked as optional but may still be relevant for the request.
</thinking>

# Expense Claim Follow Up Request Form - Help Guide
## Purpose
This form is used to submit a follow-up request for an expense claim. The purpose of this form is to notify the assigned team member to follow up on the claim, provide any necessary information or clarification, and ensure the claim is processed accordingly.
## How To Complete This Form
To complete this form, please follow the steps below:

1. Enter your company name to help us identify the request.
2. Provide the employee's name who is submitting the request.
3. Select the department where the expense claim belongs to.
4. Choose the type of expense claim you are requesting a follow-up on.
5. Enter the date of the original claim.
6. Enter the amount of the claim.
7. Set a follow-up date for the team member.
8. Add any follow-up notes or comments.
9. Select whether any next steps are needed.
10. Choose the team member assigned to handle the follow-up request.
11. Select the current status of the request.
12. Add any additional notes or comments.

## Field-by-Field Explanation
* **Company** (`company`, text, **required**): Please enter your company name to identify the request.
* **Employee** (`employee`, text, **required**): Please enter the name of the employee submitting the request.
* **Department** (`department`, text, optional): Enter the department where the expense claim belongs to.
* **Expense Type** (`expense_type`, select_one, **required**): Select the type of expense claim you are requesting a follow-up on.
* **Claim Date** (`claim_date`, date, optional): Enter the date of the original claim.
* **Claim Amount** (`claim_amount`, number, **required**): Enter the amount of the claim.
* **Follow Up Date** (`follow_up_date`, date, optional): Set a follow-up date for the team member.
* **Follow Up Notes** (`follow_up_notes`, text, optional): Add any follow-up notes or comments.
* **Next Steps** (`next_steps`, select_multiple, optional): Select whether any next steps are needed.
* **Assigned To** (`assigned_to`, select_one, **required**): Choose the team member assigned to handle the follow-up request.
* **Status** (`status`, select_one, **required**): Select the current status of the request.
* **Notes** (`notes`, text, optional): Add any additional notes or comments.
* **Submitted By** (`submitted_by`, text, optional): Enter the name of the person submitting the request.
* **Submitted Date** (`submitted_date`, date, optional): Enter the date the request was submitted.
* **Assigned Tool** (`assigned_tool`, text, optional): Enter the tool or system assigned to handle the request.
* **Created By** (`created_by`, text, optional): Enter the name of the person who created the form.
* **Created Date** (`created_date`, date, optional): Enter the date the form was created.
* **Updated By** (`updated_by`, text, optional): Enter the name of the person who updated the form.
* **Updated User** (`updated_user`, text, optional): Enter the name of the person who updated the user.
* **Last Updated By** (`last_updated_by`, text, optional): Enter the name of the person who last updated the form.
* **Last Updated User** (`last_updated_user`, text, optional): Enter the name of the person who last updated the user.
* **Form Status** (`form_status`, select_one, optional): Select the current status of the form.
* **Form Type** (`form_type`, select_one, optional): Select the type of form this is (Expense Claim or Other).
* **Last Updated Date** (`last_updated_date`, date, optional): Enter the date the form was last updated.
* **Last Updated User 2** (`last_updated_user_2`, text, optional): Enter the name of the person who last updated the user.
* **Last Updated By 2** (`last_updated_by_2`, text, optional): Enter the name of the person who last updated the form.
* **Last** (`last`, text, optional): Enter any additional notes or comments.

## Tips
* Double-check that all required fields are completed before submitting the form.
* Make sure to provide accurate information to help the assigned team member understand the request.
* Review your form for any typos or errors before submitting.
