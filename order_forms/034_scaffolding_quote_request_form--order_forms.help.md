# scaffolding_quote_request_form - Help Guide
## Purpose
The scaffolding quote request form is used to collect customer information and request a quote for a scaffolding project.

## How To Complete This Form
To complete this form, follow the steps below:

1. Review and understand the form purpose.
2. Fill in your contact details, such as whether you have provided contact details before or not.
3. Enter your project details, selecting either "Yes" or "No".
4. Enter your quote request details.
5. Select the date of your quote request.
6. Enter the contact person's name.
7. Enter the phone number of the contact person.
8. Enter the email of the contact person.
9. Enter the address of the project site.
10. Enter any additional quote details.
11. Select whether the project requires scaffolding or not.

## Field-by-Field Explanation

* **Contact Details (1)** (`contact_details`, `select_multiple`, required: `false`):
	+ This field is used to confirm whether you have provided contact details before or not.
	+ Select "Yes" if you have already provided contact details, otherwise select "No".
* **Project Details (2)** (`project_details`, `select_one`, required: `false`):
	+ This field is used to determine whether you want to provide project details or not.
	+ Select "Yes" if you want to provide project details, otherwise select "No".
* **Quote Request (3)** (`quote_request`, `text`, required: `false`):
	+ This field is used to enter your quote request.
	+ Enter a brief description of your quote request.
* **Quote Request Date (4)** (`quote_request_date`, `date`, required: `false`):
	+ This field is used to select the date of your quote request.
	+ Choose the date when you would like to receive a quote.
* **Contact Person (5)** (`contact_person`, `text`, required: `false`):
	+ This field is used to enter the name of the contact person.
	+ Enter the name of the person who will be in contact with us.
* **Phone Number (6)** (`phone_number`, `text`, required: `false`):
	+ This field is used to enter the phone number of the contact person.
	+ Enter the phone number of the contact person.
* **Email (7)** (`email`, `email`, required: `false`):
	+ This field is used to enter the email of the contact person.
	+ Enter the email of the contact person.
* **Address (8)** (`address`, `text`, required: `false`):
	+ This field is used to enter the address of the project site.
	+ Enter the address where the project will be located.
* **Quote Details (9)** (`quote_details`, `text`, required: `false`):
	+ This field is used to enter any additional quote details.
	+ Enter any additional information that you think is relevant to the quote.
* **Scaffolding Type (10)** (`scaffolding_type`, `select_one`, required: `false`):
	+ This field is used to determine whether the project requires scaffolding or not.
	+ Select "Yes" if the project requires scaffolding, otherwise select "No".
