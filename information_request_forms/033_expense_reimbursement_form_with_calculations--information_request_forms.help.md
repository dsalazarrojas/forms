# Expense Reimbursement Form With Calculations - Help Guide
## Purpose

This form is designed to collect information and data related to employee expenses, including expense dates, descriptions, amounts, and reimbursement details. The form is intended to be completed by employees or form submitters to report their expenses for reimbursement.

## How To Complete This Form

1. Fill in the required fields: **Expense Date**, **Expense Category**, and **Expense Amount**.
2. Select the **Expense Type** from the provided options.
3. Enter a brief **Expense Description**.
4. Provide the **Form Submitter** name, email, and role.
5. Enter the **Tax Amount** and **Tax Rate** (if applicable).
6. Add any additional comments or details in the **Form Submitter Comments** field.

## Field-by-Field Explanation

- **Expense Date** (`expense_date`): Enter the date of the expense.
  • Type: `date`
  • Required: `true`

- **Employee Name** (`employee_name`): Enter your name as it appears on your company ID.
  • Type: `text`
  • Required: `false`

- **Expense Description** (`expense_description`): Enter a brief description of the expense.
  • Type: `text`
  • Required: `false`

- **Expense Amount** (`expense_amount`): Enter the total amount of the expense.
  • Type: `number`
  • Required: `false`

- **Rate** (`rate`): Enter the rate or percentage associated with the expense.
  • Type: `number`
  • Required: `false`

- **Reimbursed Amount** (`reimbursed_amount`): Enter the reimbursed amount of the expense.
  • Type: `number`
  • Required: `false`

- **Tax Amount** (`tax_amount`): Enter the tax amount associated with the expense.
  • Type: `number`
  • Required: `false`

- **Form Submitter** (`form_submitter`): Enter your name as it appears on your company ID.
  • Type: `text`
  • Required: `false`

- **Form Submitter Role** (`form_submitter_role`): Enter your role within the company.
  • Type: `text`
  • Required: `false`

- **Form Submitter Email** (`form_submitter_email`): Enter your company email address.
  • Type: `email`
  • Required: `false`

- **Expense Type** (`expense_type`): Select the type of expense from the provided options (e.g., Entertainment, Business, Meal, Travel).
  • Type: `select_multiple`
  • Required: `false`

- **Expense Category** (`expense_category`): Select the category of the expense from the provided options (e.g., Business, Entertainment, Meals, Travel).
  • Type: `select_one`
  • Required: `true`

- **Expense Subcategory** (`expense_subcategory`): Select the subcategory of the expense from the provided options (e.g., Office supplies, Transportation, Food and Beverage).
  • Type: `select_one`
  • Required: `false`

- **Expense Date End** (`expense_date_end`): Enter the end date of the expense (e.g., for a travel expense).
  • Type: `date`
  • Required: `false`

- **Expense Type Other** (`expense_type_other`): Enter an other type of expense.
  • Type: `text`
  • Required: `false`

- **Form Submitter Phone** (`form_submitter_phone`): Enter your phone number.
  • Type: `text`
  • Required: `false`

- **Expense Subcategory Other** (`expense_subcategory_other`): Enter an other subcategory of expense.
  • Type: `text`
  • Required: `false`

- **Expense Description Detail** (`expense_description_detail`): Enter a detailed description of the expense.
  • Type: `text`
  • Required: `false`

- **Expense Reimbursed** (`expense_reimbursed`): Provide details about the reimbursed amount.
  • Type: `note`
  • Required: `false`

- **Tax Rate** (`tax_rate`): Enter the tax rate.
  • Type: `number`
  • Required: `false`

- **Form Submitter Comments** (`form_submitter_comments`): Add any comments or details related to the form submitter.
  • Type: `text`
  • Required: `false`

- **Expense Submitter** (`expense_submitter`): Enter the expense submitter's name.
  • Type: `text`
  • Required: `false`

- **Expense Total** (`expense_total`): Enter the total expense amount.
  • Type: `number`
  • Required: `false`

- **Form Submitter Notes** (`form_submitter_notes`): Add any notes or details related to the form submitters.
  • Type: `note`
  • Required: `false`

## Tips

* Ensure that all required fields are filled in accurately.
* Select the correct expense type, category, and subcategory from the provided options.
* Enter clear and detailed descriptions of the expense.
* Review and edit the form before submitting to ensure accuracy and completeness.
