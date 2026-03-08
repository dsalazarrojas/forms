<thinking>
To create a user-facing help guide for the "Web Development Payment Form", I will follow these steps:

1. Analyze the form's purpose and requirements.
2. Extract relevant information from the YAML schema.
3. Use the extracted information to create the help guide in Markdown format.

The form is designed to collect information from clients or customers for web development projects. The form will likely be used by business development teams or project managers to gather essential details for project planning, budgeting, and communication.

</thinking>

# Web Development Payment Form - Help Guide
## Purpose
This form is designed to collect information from clients or customers for web development projects, including project details, payment preferences, and contact information.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the project name and description.
2. Choose a payment type (one-time or recurring).
3. Enter the payment amount.
4. Select the payment method (bank transfer, PayPal, or credit card).
5. Enter any additional comments or description.
6. Provide the estimated project duration.
7. Select the requested start and end dates.
8. Enter contact person name.
9. Enter contact email.
10. Enter contact phone number.
11. Provide the client's address.

## Field-by-Field Explanation
* **Project Name** (`project_name`, text, required): Enter the name of the project.
* **Payment Type** (`payment_type`, select_one, optional): Choose a payment type (one-time or recurring).
* **Payment Amount** (`payment_amount`, number, optional): Enter the payment amount for the project.
* **Payment Method** (`payment_method`, select_one, optional): Select a payment method (bank transfer, PayPal, or credit card).
* **Request Description** (`request_description`, text, optional): Enter any additional comments or description about the project.
* **Estimated Project Duration** (`estimated_project_duration`, time, optional): Enter the estimated duration of the project.
* **Requested Start Date** (`requested_start_date`, date, optional): Select the requested start date for the project.
* **Requested End Date** (`requested_end_date`, date, optional): Select the requested end date for the project.
* **Contact Person** (`contact_person`, text, optional): Enter the name of the contact person.
* **Contact E-mail** (`contact_email`, email, optional): Enter the contact email.
* **Contact Phone** (`contact_phone`, text, optional): Enter the contact phone number.
* **Client Address** (`client_address`, text, optional): Enter the client's address.

## Tips
* Ensure that you fill out all required fields (project name and payment amount).
* Be accurate when selecting payment type, payment method, and start/end dates.
* Enter contact information for the relevant person.
* Double-check the client's address before submitting the form.
