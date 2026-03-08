# Create A Ticket - Help Guide
## Purpose
This form is designed to create a new ticket for your request or issue. It's a straightforward process that helps you get your problem or question addressed quickly and efficiently.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Enter a clear and concise title for your ticket in the "Ticket Title" field.
2. Briefly describe the issue or problem you are facing in the "Ticket Subject" field.
3. Provide a more detailed description of the issue or problem in the "Ticket Description" field.
4. Select the correct assignee from the "Assignee" dropdown list to determine who will handle your request.
5. Choose the status of your ticket as "Active" or "Inactive" to indicate its current state.
6. Set the priority of your ticket as "High" or "Low" to determine how quickly it needs to be addressed.
7. Fill in the "Ticket ID" field if you are aware of it.
8. If you are unsure who created the ticket, you can leave the "Created By" field blank.
9. The "Created At" field will automatically be populated with the current date and time.
10. The "Updated At" field will automatically be updated whenever the ticket is modified.
11. If you want to mark the ticket as deleted, select "Deleted" from the "Deleted" dropdown list.
12. You can fill in the "Updated By" field if you want to attribute the last update to someone.
12. Leave the "Assignee ID" field blank if you don't know the ID of the assignee.
13. The "Assigned At" field will automatically be updated when the ticket is assigned to someone.
14. Fill in the "Assigned By" field with the name of the person who assigned the ticket.
15. The "Updated At 2" field will automatically be updated when the ticket is modified.

## Field-by-Field Explanation

* **Ticket Title** (`ticket_title`, text, required): Enter a clear and concise title for your ticket that summarizes the issue or problem you are facing.
* **Ticket Subject** (`ticket_subject`, text, required): Briefly describe the issue or problem you are facing.
* **Ticket Description** (`ticket_description`, text, required): Provide a more detailed description of the issue or problem you are facing.
* **Assignee** (`assignee`, select_one, not required): Select the correct person to handle your request from the dropdown list.
* **Status** (`status`, select_one, not required): Choose "Active" if the ticket is currently being worked on or "Inactive" if it's not.
* **Priority** (`priority`, select_one, not required): Set the priority of your ticket as "High" or "Low" to determine how quickly it needs to be addressed.
* **Ticket ID** (`ticket_id`, number, not required): Fill in the ticket ID if you are aware of it.
* **Created By** (`created_by`, text, not required): If you are unsure who created the ticket, you can leave this field blank.
* **Created At** (`created_at`, date, not required): This field will automatically be populated with the current date and time.
* **Updated At** (`updated_at`, time, not required): This field will automatically be updated whenever the ticket is modified.
* **Deleted At** (`deleted_at`, date, not required): This field will automatically be populated with the date and time when the ticket is deleted.
* **Deleted** (`deleted`, checkbox, not required): Select "Deleted" to mark the ticket as deleted.
* **Updated By** (`updated_by`, text, not required): Fill in the "Updated By" field if you want to attribute the last update to someone.
* **Assignee ID** (`ticket_assignee`, number, not required): Leave this field blank if you don't know the ID of the assignee.
* **Assigned At** (`assigned_at`, time, not required): This field will automatically be updated when the ticket is assigned to someone.
* **Assigned By** (`assigned_by`, text, not required): Fill in the "Assigned By" field with the name of the person who assigned the ticket.
* **Updated At 2** (`updated_at_2`, time, not required): This field will automatically be updated when the ticket is modified.
