<thinking>
This form is designed to collect information about customer complaints, which is a standard process for businesses to address and resolve issues related to customer dissatisfaction. The form aims to gather essential details about the complaint, including the contact information of the customer, the category and subcategory of the complaint, and any relevant notes or follow-up actions. 
The form is likely to be used by customer service representatives or management to identify and resolve customer complaints efficiently. 
</thinking>

# customer_complaint_report_form - Help Guide
## Purpose
The purpose of this form is to collect and document customer complaints in a structured manner, allowing businesses to identify and address issues promptly.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the customer's complaint in the first field.
2. Provide the customer's contact information, including their name and email address.
3. If applicable, add the customer's phone number for further communication.
4. Choose a category and subcategory that best describes the complaint.
5. Select the person or team member assigned to handle the complaint.
6. Add any relevant notes or comments.

## Field-by-Field Explanation

* **Customer Complaint** (`customer_complaint`, text, required): Enter a brief description of the customer's complaint.
* **Contact Name** (`contact_name`, text, optional): Enter the customer's name, if provided.
* **Email** (`email`, email, optional): Enter the customer's email address, if provided.
* **Phone** (`phone`, text, optional): Enter the customer's phone number, if provided.
* **Description** (`description`, text, optional): Provide a detailed description of the complaint.
* **Category** (`category`, select_one, optional): Select a category that best describes the complaint (e.g., Product, Service, Billing, etc.).
* **Subcategory** (`subcategory`, select_multiple, optional): Select one or more subcategories related to the complaint.
* **Date** (`date`, date, optional): Enter the date when the complaint was received.
* **Time** (`time`, time, optional): Enter the time when the complaint was received.
* **Assigned To** (`assigned_to`, select_one, optional): Select the person or team member assigned to handle the complaint.
* **Notes** (`notes`, note, optional): Add any relevant notes or comments for follow-up actions.

## Tips
* Make sure to keep the complaint description concise and clear.
* Use the category and subcategory fields to ensure that the complaint is properly documented.
* Use the select_one fields (Category and Assigned To) to choose the most relevant options.
* Use the select_multiple field for Subcategory to select multiple relevant options if necessary.
* Use the note field for Notes for any additional information or follow-up actions.
