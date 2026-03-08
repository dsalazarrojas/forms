<thinking>...</thinking>

# Theater Prop Maintenance Request Form - Help Guide
## Purpose
This form is used to submit a maintenance request for a theater prop to be repaired or maintained. A maintenance request will be assigned to a specific staff member based on their availability and expertise. The requester will receive notifications regarding the progress and completion of the request.

## How To Complete This Form
To submit a maintenance request for a theater prop, please follow these steps:

1.  Select the **User Id** of the person who will be performing the maintenance action.
2.  Choose the specific **Prop Id** of the prop requiring maintenance.
3.  Optionally, provide a brief **Description** of the problem or maintenance need.
4.  Specify the **Problem Area** of the prop that needs attention.
5.  For each submission, select the **Request Type**, which can either be **Repair** or **Maintenance**.
6.  Enter the **Requester Name**, **Requester Email**, and **Requester Phone** of the person or entity making the request.
7.  Attach any relevant **Attachments**, such as photos or diagrams.
8.  Add any additional **Submitter Notes** for the maintenance staff to reference during the request process.
9.  Assign the **Assigned To**, which can be **chatjimmy** or **Other**.
10.  Set the **Due Date** for the request, if applicable.
11.  Finally, select the **Status**, which can be **Open**, **In Progress**, or **Done**.

## Field-by-Field Explanation
- **User Id**: Enter the ID of the user who will be performing the maintenance action.
  *   Type: `<number>`
  *   Required: `true`
  *   Hint: If you're not sure who will be performing the maintenance, please leave this field blank for now.
- **Prop Id**: Enter the ID of the prop that needs maintenance or repair.
  *   Type: `<number>`
  *   Required: `true`
  *   Hint: Make sure to enter the correct ID to get accurate results.
- **Description**: Provide a brief description of the problem or maintenance need. This can help the maintenance staff understand the issue and complete the request efficiently.
  *   Type: `<text>`
  *   Required: `false`
  *   Hint: Please keep this brief and to the point.
- **Problem Area**: Specify the area of the prop that needs attention, such as a specific part or system.
  *   Type: `<text>`
  *   Required: `false`
  **Hint: This will help the maintenance staff identify the exact area to focus on.**
- **Request Type**: Choose the type of maintenance request, either **Repair** or **Maintenance**.
  *   Type: `select_multiple`
  *   Required: `true`
  *   Hint: Select only one type from the list.
- **Requester Name**: Enter the name of the person or entity making the request.
  *   Type: `<text>`
  *   Required: `false`
  *   Hint: Please ensure the name is accurate and up-to-date.
- **Requester Email**: Enter the email of the person or entity making the request.
  *   Type: `email`
  *   Required: `true`
  *   Hint: Make sure the email is correct and up-to-date.
- **Requester Phone**: Enter the phone number of the person or entity making the request.
  *   Type: `<text>`
  *   Required: `false`
  *   Hint: This is optional but helpful for communication.
- **Attachments**: Attach any relevant files or photos to support the request.
  *   Type: `note`
  *   Required: `false`
  *   Hint: Keep attachments relevant and concise.
- **Submitter Notes**: Provide any additional information for the maintenance staff to reference during the request process.
  *   Type: `<text>`
  *   Required: `false`
  *   Hint: Keep this brief and focused on the request.
- **Assigned To**: Select the staff member who will be performing the maintenance action.
  *   Type: `select_one`
  *   Required: `true`
  *   Hint: Choose someone with the necessary expertise and availability.
- **Due Date**: Set the due date for the request, if applicable.
  *   Type: `date`
  *   Required: `false`
  *   Hint: Leave blank if there is no specific due date.
- **Status**: Choose the status of the request.
  *   Type: `select_one`
  *   Required: `true`
  *   Hint: Select the correct status after the request is completed.
