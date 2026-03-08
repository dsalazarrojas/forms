# Uniform Return Form - Help Guide
## Purpose
The Uniform Return Form is used to document reasons and details related to returned items in a store or inventory setting.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields, indicated by an asterisk (\*).
2. Provide a clear and concise description of the reason for the return in the "Reason" field.
3. If applicable, select the relevant reasons for the return from the "Reason Code" and "Another Reason Code" fields.
4. Enter the date of the return in the "Date" field.
5. Add any additional comments in the "Comments" field if necessary.

## Field-by-Field Explanation

* **Return Form** (`storekeeper_form`, text, optional): Enter a brief description of the return.
* **Reason** (`reason`, select_one, optional): Select the main reason for the return.
* **Description** (`reason_description`, text, optional): Provide a detailed explanation of the reason for the return.
* **Another Reason** (`reason_description2`, text, optional): Provide additional details about the return reason.
* **Date** (`date`, date, optional): Enter the date of the return.
* **Return Reason** (`return_reason`, text, optional): Enter the reason for the return.
* **Another Return Reason** (`return_reason2`, text, optional): Provide additional details about the return reason.
* **Reason Code** (`reason_code`, select_one, optional): Select a reason code related to the return.
* **Another Reason Code** (`reason_code3`, select_one, optional): Select another reason code related to the return.
* **Comments** (`comments`, text, optional): Add any additional comments about the return.
* **Another Comments** (`comments2`, text, optional): Provide additional comments about the return.

Please note that all fields are optional unless explicitly marked as required. If a field is marked as required, ensure to fill it in accordingly.
