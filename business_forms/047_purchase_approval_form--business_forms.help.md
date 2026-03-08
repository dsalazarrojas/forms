# Purchase Approval Form - Help Guide
## Purpose
The Purchase Approval Form is used to gather information about purchases made within the organization, including the purchase date, amount, type, and status. This information is used by management to track and approve purchases.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required fields with the relevant information.
2. Ensure that all fields are accurate and complete before submitting the form.

## Field-by-Field Explanation

* **Purchase Info** (`general_info`, text, required): Enter a brief description of the purchase.
* **Purchase Date** (`purchase_date`, date, required): Enter the date of the purchase.
* **Purchase Amount** (`purchase_amount`, number, required): Enter the amount of the purchase.
* **Approval Level** (`approval_level`, select_one, required): Select the approval level for the purchase (High or Low).
* **Purchase Type** (`purchase_type`, select_multiple, required): Select the type of purchase (Yes or No).
* **Purchase Details** (`purchase_details`, note, required): Enter any additional details about the purchase.
* **Manager Approvals** (`manager_approvals`, select_multiple, required): Select whether the manager has approved the purchase (Yes or No).
* **Department Approvals** (`department_approvals`, select_multiple, required): Select whether the department has approved the purchase (Yes or No).
* **Purchase Status** (`purchase_status`, select_one, required): Select the status of the purchase (Active or Inactive).
* **Purchase Notes** (`purchase_notes`, note, required): Enter any additional notes about the purchase.
* **Manager Notes** (`manager_notes`, note, required): Enter any notes from the manager about the purchase.
* **Department Notes** (`department_notes`, note, required): Enter any notes from the department about the purchase.
* **Submitted By** (`submitted_by`, select_one, required): Select whether the purchase was submitted by the user (Yes or No).
* **Created By** (`created_by`, select_one, optional): Select whether the purchase was created by the user (Yes or No), if applicable.
* **Last Updated** (`last_updated`, date, optional): Enter the last date the purchase was updated.
* **Submitted Date** (`submitted_date`, date, required): Enter the date the purchase was submitted.
* **Approved Date** (`approved_date`, date, optional): Enter the date the purchase was approved.
* **Purchase Number** (`purchase_number`, text, required): Enter a unique number for the purchase.
* **Purchase Vendor** (`purchase_vendor`, text, required): Enter the vendor or supplier of the purchase.
* **Manager Name** (`manager_name`, text, required): Enter the name of the manager responsible for the purchase.
* **Department Name** (`department_name`, text, required): Enter the name of the department making the purchase.
* **Purchase Description** (`purchase_description`, text, required): Enter a brief description of the purchase.
* **Approval Reason** (`approval_reason`, text, required): Enter the reason for the approval of the purchase.
* **Submitted By** (`submitted_by_user`, text, optional): Enter the name of the user who submitted the purchase.
* **Approved By** (`approved_by_user`, text, optional): Enter the name of the user who approved the purchase.

Note: Some fields are marked as optional, but please fill them in if applicable.
