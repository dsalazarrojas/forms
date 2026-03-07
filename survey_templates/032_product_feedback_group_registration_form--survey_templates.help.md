<thinking>As a form designer and technical writer, I'll create a user-facing help guide for the "Product Feedback Group Registration Form" while ensuring the explanation is concise, practical, and based on the provided YAML fields. Here's the internal reasoning behind the form purpose and relevance checks:

The purpose of this form is to collect participant information and feedback from customers for products in the development stage. The form is designed to gather specific details about the product, customer, and form submission, ensuring accurate data collection and efficient feedback processing. To ensure relevance, the form will be used by product teams and customer success groups to register new product feedback groups. Non-duplication checks will be performed to prevent duplicate submissions from the same customer or product.

</thinking>

# Product Feedback Group Registration Form - Help Guide
## Purpose
This form is designed to collect participant information and feedback from customers for products in the development stage. It's used by product teams and customer success groups to register new product feedback groups.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the form details (Option 1, Option 2, Option 3, Option 4, or Option 5) that best describes your current situation.
2. Provide the customer details (Customer Name, Customer Id, Customer Status) specific to your product feedback group.
3. Enter the product details (Product Id, Product Name, Product Version, Product Type, Product Status).
4. Enter the participant details (Participant Id).
5. Select the form submission details (Form Submission On, Form Submission At, Submission Id).
6. Enter any additional participant notes.

## Field-by-Field Explanation

* **Form Details** (`form_details`, `select_one`, required): Select the best description of your current situation.
* **Participant Details** (`participant_details`, `text`, required): Enter your participant details, including your name, title, and department.
* **Participant Notes** (`participant_notes`, `note`, required): Enter any additional notes about your participant.
* **Participant Status** (`participant_status`, `select_one`, optional): Select your participant status (Active, Inactive, or Unknown).
* **Product Team** (`product_team`, `text`, optional): Enter the name of the product team.
* **Customer Success Group** (`customer_success_group`, `text`, required): Enter the name of the customer success group.
* **Form Submitted By** (`form_submitted_by`, `select_multiple`, required): Select the person who submitted the form.
* **Form Submitted On** (`form_submitted_on`, `date`, required): Enter the date you submitted the form (yyyy-mm-dd format).
* **Form Submitted At** (`form_submitted_at`, `time`, required): Enter the time you submitted the form (hh:mm AM/PM).
* **Submission Id** (`submission_id`, `text`, required): Enter the submission id.
* **Participant Id** (`participant_id`, `text`, required): Enter your participant id.
* **Product Id** (`product_id`, `text`, required): Enter the product id.
* **Customer Id** (`customer_id`, `text`, required): Enter the customer id.
* **Form Url** (`form_url`, `text`, optional): Enter the form url.
* **Product Name** (`product_name`, `text`, required): Enter the product name.
* **Customer Name** (`customer_name`, `text`, required): Enter the customer name.
* **Product Version** (`product_version`, `text`, required): Enter the product version.
* **Product Type** (`product_type`, `text`, required): Enter the product type.
* **Product Status** (`product_status`, `text`, required): Enter the product status.
* **Customer Version** (`customer_version`, `text`, required): Enter the customer version.
* **Form Version** (`form_version`, `text`, required): Enter the form version.
* **Customer Status** (`customer_status`, `text`, required): Enter the customer status.
* **Form Status** (`form_status`, `text`, required): Enter the form status.
