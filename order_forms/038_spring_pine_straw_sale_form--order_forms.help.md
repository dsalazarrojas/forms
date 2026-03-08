# spring_pine_straw_sale_form - Help Guide
## Purpose
This form is designed for users to generate a custom output file containing information about their order or sale, for administrative or reporting purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide a title for your sale or order.
2. Select the category of the sale or order from the dropdown menu.
3. Enter a description of the sale or order.
4. Choose the BSA logos that should be included in the report.
5. Select a phone number and email address (if applicable).
6. Choose the required and optional sales fields that should be included in the report.
7. Enter the name of the file to export the report to.

## Field-by-Field Explanation

* **Spring Pine Straw Sale Form** (`form_title`, text, optional): Enter a title for your sale or order.
* **Category** (`form_category`, select_one, optional): Select a category for your sale or order from the dropdown menu.
* **Description** (`form_description`, text, optional): Enter a description of your sale or order.
* **Output File** (`form_output_file`, text, optional): Enter the name of the file to export the report to.
* **BSA Logo** (`form_bsa_logo`, select_multiple, optional): Choose the BSA logos that should be included in the report.
* **Phone** (`form_phone`, text, optional): Enter a phone number (if applicable).
* **Email** (`form_email`, email, optional): Enter an email address (if applicable).
* **Required Fields** (`form_required_fields`, select_multiple, optional): Choose the required sales fields that should be included in the report.
* **Optional Fields** (`form_optional_fields`, select_multiple, optional): Choose the optional sales fields that should be included in the report.
