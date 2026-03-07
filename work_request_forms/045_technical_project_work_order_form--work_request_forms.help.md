<thinking>
This form is designed to capture essential information for technical projects and work orders. The purpose of this form is to gather details such as project description, priority, start and end dates, assignees, and other relevant information to facilitate project management and communication. 
It should not be used for non-project related work requests, such as internal meetings or non-technical tasks. Please review the form and ensure that you are submitting a technical project for work order. 
</thinking>

# Technical Project Work Order Form - Help Guide
## Purpose
The Technical Project Work Order Form is designed to collect essential information for technical projects and work orders. This form helps in capturing project details, prioritization, and resource allocation to ensure effective project management and communication.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **Work Order Form** section with a brief description of the project.
2. Select the **Priority** of the project, indicating its urgency and importance.
3. Enter the **Start Date** and **End Date** of the project.
4. Choose the **Assignee(s)** responsible for the project.
5. Add any additional **Notes** about the project.
6. Select the **Owner(s)** of the project.
7. Update the **Status** of the project as **Active** or **Inactive**.
8. Enter any **Escalation Notes** if the project requires attention.

## Field-by-Field Explanation
* **Work Order Form** (`work_order_form`, text, optional): A brief description of the project.
* **Description** (`work_item_description`, text, optional): A more detailed description of the project.
* **Priority** (`work_item_priority`, select_one, optional): The level of urgency and importance of the project.
* **Start Date** (`work_item_start_date`, date, optional): The date when the project is expected to start.
* **End Date** (`work_item_end_date`, date, optional): The date when the project is expected to end.
* **Assignee** (`work_item_assignee`, select_multiple, optional): The person(s) responsible for the project.
* **Notes** (`work_item_notes`, text, optional): Additional information about the project.
* **Owners** (`work_item_owners`, select_one, optional): The owner(s) of the project.
* **Status** (`work_item_status`, select_multiple, optional): The current status of the project, either **Active** or **Inactive**.
* **Status Text** (`work_item_status_text`, text, optional): A text description of the project status.
* **Escalation Notes** (`work_item_escalation_notes`, text, optional): Notes for when the project requires escalation or attention.
