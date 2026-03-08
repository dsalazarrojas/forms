# print_approval_form - Help Guide
## Purpose
The print_approval_form is designed to capture information about a customer's print approval status for a specific category.

## How To Complete This Form
To complete this form, follow these steps:
1. Choose the category of the print approval you are submitting.
2. Select the customer's name from the provided options.
3. Enter the customer's email address.
4. Provide the print approval status (approved, declined, or in progress).
5. Add any additional notes.
6. Select the print approval status description (optional).
7. Click submit to submit the form.

## Field-by-Field Explanation
* **Category** (`category`, `select_one`, required/optional): Select the category of the print approval you are submitting. This field is optional.
* **Customer Name** (`customer_name`, `select_one`, required/optional): Select the customer's name from the provided options.
* **Customer Email** (`customer_email`, `email`, required): Enter the customer's email address.
* **Customer Phone** (`customer_phone`, `text`, required/optional): Enter the customer's phone number (optional).
* **Approval Date** (`approval_date`, `date`, required/optional): Enter the date of the print approval (optional).
* **Notes** (`notes`, `note`, required/optional): Add any additional notes about the print approval.
* **Approval Status** (`approval_status`, `select_multiple`, required/optional): Select the print approval status (approved, declined, or in progress).
* **Form Submitted By** (`form_submitted_by`, `text`, required/optional): Enter the name of the person submitting the form (optional).
* **Description** (`description`, `select_multiple`, required/optional): Select the description of the print approval status (optional).

**Tips:**
* Make sure to select the correct category and customer name to ensure accurate tracking of print approvals.
* Enter a valid email address to ensure the customer can be contacted about the print approval status.
* Provide a clear and concise description of the print approval status, if needed.
* Use the notes field to add any additional context or information about the print approval.
