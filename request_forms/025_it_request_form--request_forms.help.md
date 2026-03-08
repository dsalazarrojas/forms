# it_request_form - Help Guide
## Purpose
The IT Request Form is a tool for team members and stakeholders to submit requests for various types of support or services within the organization. It ensures that each request is properly documented and assigned to the right team member or team lead.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of request you are submitting (e.g., software, hardware, or other).
2. Choose the category of request (yes or no).
3. Provide a detailed description of the request.
4. Specify the priority and urgency of the request.
5. Choose a contact method (e.g., chat, phone, or email).
6. Enter the contact name and contact information (email and phone number).
7. Decide if the request should be assigned to a team member or team lead.
8. Add any additional comments.

## Field-by-Field Explanation

* **Request type** (`request_type`, select_one, required): Select the type of request you are submitting (e.g., software, hardware, or other).
* **Category** (`category`, select_multiple, required): Choose the category of request (yes or no).
* **Description** (`description`, text, required): Provide a detailed description of the request.
* **Priority** (`priority`, select_one, required): Specify the priority of the request (high, medium, or low).
* **Urgency** (`urgency`, select_one, required): Specify the urgency of the request (immediate, within a day, or within a week).
* **Contact method** (`contact_method`, select_one, required): Choose a contact method (e.g., chat, phone, or email).
* **Contact name** (`contact_name`, text, required): Enter the contact name.
* **Contact email** (`contact_email`, email, required): Enter the contact email.
* **Contact phone** (`contact_phone`, text, required): Enter the contact phone number.
* **Assigned to** (`assigned_to`, select_one, required): Decide if the request should be assigned to a team member or team lead.
* **Comments** (`comments`, note, required): Add any additional comments or notes about the request.
