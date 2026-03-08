# Meal Reimbursement Form - Help Guide
## Purpose
This form is used to collect meal reimbursement requests from employees for business purposes.

## How To Complete This Form
1. Select all the categories that apply to your meal reimbursement request.
2. Provide a description of the meal and the business purpose for the expense.
3. Enter the date the meal occurred.
4. Enter the time the meal occurred.
5. Add any additional notes about the meal or your request.
6. Enter your email address for contact purposes.
7. Enter your phone number for contact purposes.
8. Attach any relevant files or documents related to the meal expense.

## Field-by-Field Explanation

* **Business Forms** (`business_forms`, select_multiple, required: false): Select all the categories that apply to your meal reimbursement request. This will help us understand the business purpose of your expense.
* **Category** (`category`, select_one, required: false): Choose the category that best describes the type of expense (e.g. "Yes" for business related, "No" for personal).
* **Description** (`description`, text, required: false): Provide a brief description of the meal and the business purpose for the expense.
* **Form ID** (`form_id`, number, required: false): This field is for internal use only. Please do not fill it out.
* **Date** (`date`, date, required: false): Enter the date on which the meal occurred.
* **Time** (`time`, time, required: false): Enter the time on which the meal occurred.
* **Note** (`note`, note, required: false): Add any additional notes about the meal or your request.
* **Email** (`email`, email, required: false): Enter your email address for contact purposes.
* **Phone** (`phone`, text, required: false): Enter your phone number for contact purposes.
* **File** (`file`, text, required: false): Attach any relevant files or documents related to the meal expense.
