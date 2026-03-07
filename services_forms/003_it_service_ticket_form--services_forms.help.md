<thinking>
This form is used to submit a new service ticket for IT support. The purpose of this form is to provide essential information about the issue, including the title, priority, status, ticket type, issue description, reporter's name, assignee, and any attachments. It is recommended that users should submit tickets only if their issue is not already being managed by IT and not if they are trying to escalate an existing ticket. This will help ensure accurate prioritization of tickets by the IT team. It also ensures that users can easily track and manage their issues.
</thinking>

# it_service_ticket_form - Help Guide
## Purpose
The it_service_ticket_form is used to submit new service tickets for IT support. This form collects necessary information to help IT staff quickly identify and resolve the issue.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a brief title of the issue in the **Submit Ticket** field.
2. Select the **Priority** level of the issue (Low, Medium, High).
3. Choose the **Status** of the issue (New, In Progress, Closed).
4. Select the **Ticket Type** (Hardware, Software, General).
5. Add a detailed **Issue Description** of the issue.
6. Enter your **Reporter** name.
7. Select the **Assignee** who will work on the issue.
8. Add any **Attachments** related to the issue.

## Field-by-Field Explanation
* **Submit Ticket** (`submit_ticket`, text, required): Enter a brief title of the issue.
* **Priority** (`priority`, select_one, optional): Select the priority level of the issue (Low, Medium, High).
* **Status** (`status`, select_one, optional): Choose the status of the issue (New, In Progress, Closed).
* **Ticket Type** (`ticket_type`, select_one, optional): Select the type of ticket (Hardware, Software, General).
* **Issue Description** (`issue_description`, note, optional): Add a detailed description of the issue.
* **Reporter** (`reporter`, text, optional): Enter your name as the reporter.
* **Assignee** (`assignee`, text, optional): Select the person who will work on the issue.
* **Attachments** (`attachments`, text, optional): Add any attachments related to the issue.
