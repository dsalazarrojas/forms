<thinking>
This form is intended for customers to submit support tickets to the customer service team. The form should only be used by customers who have not yet submitted a support ticket for the same issue, and the customer's request should be a new and unique issue. This form is not meant to be used for general inquiries or requests that are not related to support.
</thinking>

# support_ticket_intake_form - Help Guide
## Purpose
This form is used to submit a support ticket to the customer service team. It should be used to report a new issue that requires support. If you have already submitted a support ticket for the same issue, please do not use this form.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the required fields with your information.
2. Select the type of support you are requesting (Technical Support or Non-Tech Support).
3. Provide a detailed description of the issue you are experiencing.
4. Choose the tool you would like to be assigned to your support request.
5. Add any additional comments or notes about your issue.

## Field-by-Field Explanation
* **Customer Inquiry** (`customer_inquiry`, text, optional): A brief statement about your issue or question. 
* **Issue Description** (`issue_description`, text, optional): A detailed description of the issue you are experiencing.
* **Contact Details** (`contact_details`, text, optional): Please provide your name, email, and phone number so we can get in touch with you.
* **Customer Service Request** (`customer_service_request`, select_one, required): Select the type of support you are requesting, either Technical Support or Non-Tech Support.
* **Support Request Date** (`support_request_date`, date, optional): The date you are requesting support for.
* **Support Request Time** (`support_request_time`, time, optional): The time you are requesting support for.
* **Note** (`note`, note, optional): Any additional comments or notes about your issue.
* **Email** (`email`, email, optional): Your email address.
* **Phone** (`phone`, text, optional): Your phone number.
* **Assigned Tool** (`assigned_tool`, select_one, required): Choose the tool you would like to be assigned to your support request, either ChatJIMMY or Other.
* **Description** (`description`, text, optional): A more detailed description of your issue.
* **Customer Request** (`customer_request`, text, optional): Any additional customer request or comment.

Note: The form has two required fields: Customer Service Request and Assigned Tool. Please fill these fields in before submitting the form.
