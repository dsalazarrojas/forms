<thinking>

This form is for customer service representatives to report on issues with e-commerce transactions. It's designed to collect relevant information about the customer, the order in question, and the resolution or progress made to resolve the issue. This form should only be used when a customer has an issue with a purchase or order placed on the e-commerce platform. If a customer has a general inquiry or question, they should use the "Contact Us" form instead.

Internal checks will be performed to ensure that this form is only accessed by authorized personnel and that duplicate reports are not submitted.

</thinking>

# E Commerce Customer Service Report Form - Help Guide
## Purpose
This form is for customer service representatives to report on issues with e-commerce transactions. It helps us understand the customer's concern and track progress made to resolve the issue.

## How To Complete This Form
To fill out this form, follow these steps:

1. Select "Product Type" that best describes the issue.
2. Enter the customer's name and any relevant contact information.
3. Provide a brief description of the issue in the "Description" field.
4. Choose "Follow Up" options according to the status of the issue.
5. If necessary, include any additional details about the issue in the "Issue Details" field.
6. Finally, submit the form.

## Field-by-Field Explanation
* **E Commerce Customer Service Report Form** (`report_form`, text, required): This is the title of the form.
* **Customer Information** (`customer_info`, text, optional): Enter the customer's name and any relevant contact information.
* **Order Number** (`order_number`, number, optional): If relevant, enter the order number associated with the issue.
* **Description** (`description`, text, optional): Provide a brief description of the issue.
* **Product Type** (`product_type`, select_one, required): Choose the type of product or service related to the issue.
* **Customer Name** (`customer_name`, text, optional): Enter the customer's name.
* **Email** (`email`, email, optional): Enter the customer's email address. Format should be "john.doe@example.com".
* **Phone Number** (`phone_number`, text, optional): Enter the customer's phone number in the format "123-123-1234".
* **Issue Date** (`issue_date`, date, optional): If relevant, enter the date the issue occurred.
* **Issue Details** (`issue_details`, text, optional): Provide any additional details about the issue.
* **Follow Up** (`follow_up`, select_multiple, required): Choose "Yes" if follow-up is needed, "No" otherwise.
* **Customer Message** (`customer_message`, text, optional): If the customer has made any comments or suggestions.
* **Agent Message** (`agent_message`, text, optional): Enter any comments or suggestions made by the agent handling the case.
* **Follow Up** (`follow_up`, text, optional): This field is part of the "Follow Up" section but is only used for agent communication and is optional.
