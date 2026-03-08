<thinking>
This help guide is intended for end-users who need to submit an Assignment Transfer Request Form. The form is used to request the transfer of assignments, projects, or tasks from one employee to another. It is essential that the form is completed accurately and thoroughly to ensure that the transfer process proceeds smoothly. Before submitting the form, please ensure that you have reviewed the assignment details carefully and have the necessary information required for the transfer.

Please note that this form is intended for employees who are requesting a transfer of assignments and are familiar with the company's internal processes and requirements.

Before proceeding, please ensure that you have not previously submitted a transfer request for the same assignment. Duplicate requests may cause confusion and delay the transfer process.

This form is divided into sections that guide you through the process. Please read each section carefully and complete the form accurately.

</thinking>

# Assignment Transfer Request Form - Help Guide
## Purpose
The Assignment Transfer Request Form is used to request the transfer of assignments, projects, or tasks from one employee to another.

## How To Complete This Form
To complete this form, follow these steps:

1.  Review the assignment details carefully and ensure that you have the necessary information required for the transfer.
2.  Fill out the form accurately and thoroughly, making sure to include all required fields.
3.  If you are unsure about any field, please contact your manager or HR representative for assistance.

## Field-by-Field Explanation
*   **Request Date**: Date the request is made (`request_date`, `date`, `required: true`)
    The date the transfer request is made.
*   **Requester Name**: Name of the requester (`requester_name`, `text`, `required: true`)
    The name of the employee requesting the transfer.
*   **Requester ID**: Employee number of the requester (`requester_id`, `text`, `required: true`)
    The employee number of the requester.
*   **Department**: Department of the requester (`department`, `text`, `required: true`)
    The department of the requester.
*   **Email Address**: Email address of the requester (`email`, `email`, `required: true`)
    The email address of the requester for communication purposes.
*   **Phone Number**: Phone number of the requester (`phone`, `text`, `required: false`)
    The phone number of the requester for contact purposes.
*   **Assignment Title**: Title of the assignment being transferred (`assignment_title`, `text`, `required: true`)
    The title of the assignment being transferred.
*   **Assignment ID**: ID of the assignment being transferred (`assignment_id`, `text`, `required: false`)
    The ID of the assignment being transferred.
*   **Assignment Description**: Description of the assignment being transferred (`assignment_description`, `text`, `required: true`)
    A brief description of the assignment being transferred.
*   **Current Assignee**: Current assignee of the assignment (`current_assignee`, `text`, `required: true`)
    The current assignee of the assignment being transferred.
*   **Proposed New Assignee**: New assignee for the assignment (`proposed_new_assignee`, `text`, `required: true`)
    The proposed new assignee for the assignment.
*   **New Assignee Department**: Department of the proposed new assignee (`new_assignee_department`, `text`, `required: true`)
    The department of the proposed new assignee.
*   **New Assignee Email**: Email address of the proposed new assignee (`new_assignee_email`, `email`, `required: true`)
    The email address of the proposed new assignee for communication purposes.
*   **Reason for Transfer**: Reason for the assignment transfer (`transfer_reason`, `select_one`, `required: true`)
    The reason for transferring the assignment. Choose from the following options:
    *   Workload Redistribution
    *   Employee Leaving
    *   Skill Set Match
    *   Priority Change
    *   Department Reorganization
    *   Employee Request
    *   Management Decision
    *   Other
*   **Detailed Explanation**: Brief explanation of the reason for transfer (`transfer_details`, `text`, `required: true`)
    A brief explanation of the reason for transfer.
*   **Transfer Type**: Type of transfer (`transfer_type`, `select_one`, `required: true`)
    The type of transfer. Choose from the following options:
    *   Permanent Transfer
    *   Temporary - Coverage
    *   Temporary - Training
    *   Shared Responsibility
*   **Transfer Duration**: Duration of the transfer (`transfer_duration`, `select_one`, `required: true`)
    The duration of the transfer. Choose from the following options:
    *   Permanent
    *   Less than 1 week
    *   1 to 2 weeks
    *   2 to 4 weeks
    *   1 to 3 months
    *   Over 3 months
*   **Expected Return Date**: Date the original assignee will return (`expected_return_date`, `date`, `required: false`)
    The date the original assignee will return to the assignment.
*   **Assignment Priority**: Priority of the assignment (`assignment_priority`, `select_one`, `required: true`)
    The priority of the assignment. Choose from the following options:
    *   High - Urgent
    *   Medium - Standard
    *   Low - Can Wait
*   **Assignment Deadline**: Deadline of the assignment (`assignment_deadline`, `date`, `required: true`)
    The deadline of the assignment.
*   **Current Assignment Status**: Status of the assignment (`current_status`, `select_one`, `required: true`)
    The status of the assignment. Choose from the following options:
    *   Not Started
    *   In Progress - 0-25%
    *   In Progress - 26-50%
    *   In Progress - 51-75%
    *   In Progress - 76-99%
    *   Pending Review
*   **Summary of Work Completed**: Summary of work completed (`work_completed_summary`, `text`, `required: true`)
    A brief summary of the work completed on the assignment.
*   **Description of Remaining Work**: Description of remaining work (`remaining_work`, `text`, `required: true`)
    A brief description of the remaining work on the assignment.
*   **Documents to Transfer**: Documents to transfer (`documents_to_transfer`, `select_multiple`, `required: true`)
    The documents and resources required for the assignment transfer. Choose from the following options:
    *   Project Files
    *   Documentation
    *   Client Communications
    *   Research Data
    *   Code Repository Access
    *   Login Credentials
    *   None
*   **Is Knowledge Transfer Needed**: Whether knowledge transfer is needed (`knowledge_transfer_needed`, `select_one`, `required: true`)
    Whether knowledge transfer is needed for the new assignee.
*   **Proposed Handover Meeting Date**: Date of the handover meeting (`handover_meeting_date`, `date`, `required: false`)
    The proposed date of the handover meeting.
*   **Requester Manager Approval**: Status of requester manager approval (`requester_manager_approval`, `select_one`, `required: true`)
    The status of the requester manager approval. Choose from the following options:
    *   Approved
    *   Rejected
    *   Pending
*   **New Assignee Manager Approval**: Status of new assignee manager approval (`new_assignee_manager_approval`, `select_one`, `required: true`)
    The status of the new assignee manager approval. Choose from the following options:
    *   Approved
    *   Rejected
    *   Pending
*   **Does New Assignee Accept**: Does the new assignee accept the assignment (`new_assignee_acceptance`, `select_one`, `required: true`)
    Whether the new assignee accepts the assignment.
*   **Transfer Effective Date**: Date of the transfer (`transfer_effective_date`, `date`, `required: true`)
    The date of the transfer.
*   **Requester Signature**: Requester signature (`requester_signature`, `text`, `required: true`)
    The requester signature.

## Tips
*   Please review the form carefully before submission.
*   Ensure that all required fields are filled out accurately.
*   If you are unsure about any field, please contact your manager or HR representative for assistance.
*   Please note that incomplete or inaccurate submissions may delay the transfer process.
