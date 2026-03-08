To create a comprehensive help guide for the "Customer Incident Form", I will follow the provided structure and guidelines. Here is the output:

# Customer Incident Form - Help Guide
## Purpose

The Customer Incident Form is used to record and track customer incidents, which are events or issues that require attention from the company or its employees. This form helps to gather essential information about the customer, such as their details, incident description, and attachment if needed. The form is designed to streamline the reporting process, ensuring that all relevant information is captured and addressed efficiently.

## How To Complete This Form

1. Select the customer incident details from the list provided.
2. Choose the relevant customer details, such as name, contact person, phone number, or email.
3. Provide a detailed description of the incident.
4. Attach any relevant files or documents, if needed.
5. Indicate whether the customer signature is signed or unsigned.
6. Sign off as the employee responsible for handling the incident.
7. Enter the employee's name.
8. Enter the employee's email address.
9. Enter the employee's phone number.

## Field-by-Field Explanation

* **Customer Incident Details** (`customer_incident_details`, select_multiple, required/optional): Choose the relevant customer incident details from the list provided.
* **Customer Details** (`customer_details`, select_one, true): Select the relevant customer details, such as name, contact person, phone number, or email.
* **Incident Description** (`incident_description`, text, true): Provide a detailed description of the incident.
* **Attachment** (`attachment`, note, optional): Attach any relevant files or documents, if needed.
* **Customer Signature** (`customer_signature`, select_one, true): Indicate whether the customer signature is signed or unsigned.
* **Employee Signature** (`employee_signature`, select_one, false): Sign off as the employee responsible for handling the incident.
* **Employee Name** (`employee_name`, text, true): Enter the employee's name.
* **Employee Email** (`employee_email`, text, true): Enter the employee's email address.
* **Employee Phone** (`employee_phone`, text, true): Enter the employee's phone number.
* **Attachment Description** (`attachment_description`, text, optional): Provide a short description of the attachment, if attached.
* **Attachment Data** (`attachment_data`, note, optional): Attach any relevant files or documents, if needed.
