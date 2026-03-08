# IT Service Ticket Form - Help Guide
## Purpose
The IT Service Ticket Form is a tool for submitting service requests to the IT department. It helps us understand the issue, assign the ticket to the correct team member, and provide accurate and timely support.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in your First Name and Last Name to help us identify you.
2. Enter your email address so we can contact you about your issue.
3. Provide a detailed description of the problem you are experiencing.
4. Select the priority of the issue (Low, Medium, High).
5. Choose the category of the issue (General, IT, Network).
6. Select the current status of the ticket (Open, Closed, In Progress).
7. Assign the ticket to a team member (chatjimmy, Other).
8. Optional fields are:
	* Phone number: Enter your contact phone number.
	* Date and Time: Record the date and time of submission.
	* Note: Provide any additional comments or details about the issue.

## Field-by-Field Explanation
- **First Name** (`it_service_ticket_form_1`, text, required): Enter your first name.
- **Last Name** (`last_name`, text, required): Enter your last name.
- **Email** (`email`, email, required): Enter your email address.
- **Phone** (`phone`, text, optional): Enter your phone number for contact.
- **Description** (`description`, text, required): Provide a detailed description of the issue.
- **Issue** (`issue`, text, required): Enter the issue you are experiencing.
- **Priority** (`priority`, select_one, optional): Select the level of urgency of the issue (Low, Medium, High).
- **Category** (`category`, select_multiple, optional): Choose the category of the issue (General, IT, Network).
- **Status** (`status`, select_one, optional): Choose the current status of the issue (Open, Closed, In Progress).
- **Assigned User** (`assigned_user`, select_one, optional): Select the team member assigned to the ticket (chatjimmy, Other).
- **Date** (`date`, date, optional): Record the date of submission.
- **Time** (`time`, time, optional): Record the time of submission.
- **Note** (`note`, note, optional): Provide any additional comments or details about the issue.
- **Created By** (`created_by`, text, optional): This field is automatically filled by the system and is not editable.
