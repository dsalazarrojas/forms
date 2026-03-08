# insurance_coverage_inquiry_form - Help Guide
## Purpose
This form is designed to gather information from individuals who are inquiring about insurance coverage. It asks for contact details and specific insurance coverage information to serve the user's needs effectively.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name in the `first_name` field.
2. Fill in your Last Name in the `last_name` field.
3. Enter your Email in the `email` field.
4. Enter your Date of Birth in the `date_of_birth` field in the YYYY-MM-DD format.
5. Fill in your phone number in the `phone` field.
6. Select the type of insurance product you are inquiring about from the `insurance_product` dropdown menu.
7. Enter the start date of your desired insurance coverage in the `coverage_start_date` field.
8. Enter the end date of your desired insurance coverage in the `coverage_end_date` field.
9. If applicable, fill in the name of the insurance agency in the `insurance_agency_name` field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name in this field.
* **Last Name** (`last_name`, text, required): Enter your last name in this field.
* **Email** (`email`, email, required): Enter your email in the format of `yourname@example.com`.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format of YYYY-MM-DD.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Insurance Product** (`insurance_product`, select_multiple, required): Select the type of insurance product you are inquiring about.
* **Coverage Start Date** (`coverage_start_date`, date, required): Enter the start date of your desired insurance coverage in the YYYY-MM-DD format.
* **Coverage End Date** (`coverage_end_date`, date, required): Enter the end date of your desired insurance coverage in the YYYY-MM-DD format.
* **Insurance Agency Name** (`insurance_agency_name`, text, optional): If applicable, enter the name of the insurance agency. Otherwise, leave this field blank.
