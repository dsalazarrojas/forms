<thinking>...</thinking>

# Home Purchase Leave Form - Help Guide
## Purpose

The Home Purchase Leave Form is used to request and track home purchase leaves for employees. This form is intended for employees to submit a leave request, and for managers to approve or deny it. The form provides a structured way to collect necessary information for processing home purchase leave requests.

## How To Complete This Form

To complete this form, please follow these steps:

1.  Fill in the required fields:
    *   Employee Name
    *   Purchase Date
    *   Return Date
    *   Reason
    *   Form Submitted
    *   Last Updated
2.  Select the department where the employee works:
    *   Department (Choose one or more departments)
3.  Select whether the manager has confirmed the leave request:
    *   Manager Confirmation (Yes/No)
4.  Enter any comments from the manager:
    *   Manager Comment
5.  Select whether the employee has confirmed the leave request:
    *   Employee Confirmation (Yes/No)
6.  Select the approval status of the leave request:
    *   Approval Status (Pending/Approved/Rejected)
7.  Enter any comments for the approval status:
    *   Approved By
    *   Denied By
    *   Last Denied Reason
    *   Last Denied Date

## Field-by-Field Explanation

*   **Employee Name** (`employee_name`, text, required)
    *   A text field for the employee's name.
*   **Employee ID** (`employee_id`, number, optional)
    *   A numerical field for the employee's ID number.
*   **Purchase Date** (`purchase_date`, date, required)
    *   A date field for the date the employee plans to start their home purchase leave.
*   **Return Date** (`return_date`, date, required)
    *   A date field for the date the employee plans to return to work after the home purchase leave.
*   **Reason** (`reason`, text, required)
    *   A text field for the reason for the home purchase leave.
*   **Department** (`department`, select_multiple, optional)
    *   A multiple-select field for the department where the employee works.
*   **Location** (`location`, text, optional)
    *   A text field for any location-specific information.
*   **Manager Confirmation** (`manager_confirmation`, select_one, optional)
    *   A single-select field for whether the manager has confirmed the leave request (Yes/No).
*   **Manager Comment** (`manager_comment`, text, optional)
    *   A text field for any comments from the manager.
*   **Employee Confirmation** (`employee_confirmation`, select_one, optional)
    *   A single-select field for whether the employee has confirmed the leave request (Yes/No).
*   **Approval Status** (`approval_status`, select_one, optional)
    *   A single-select field for the status of the leave request (Pending/Approved/Rejected).
*   **Approved By** (`approved_by`, text, optional)
    *   A text field for the person who approved the leave request.
*   **Denied By** (`denied_by`, text, optional)
    *   A text field for the person who denied the leave request.
*   **Reason for Denial** (`reason_for_denial`, text, optional)
    *   A text field for the reason why the leave request was denied.
*   **Form Submitted** (`form_submitted`, date, optional)
    *   A date field for when the form was submitted.
*   **Form Approved** (`form_approved`, date, optional)
    *   A date field for when the form was approved.
*   **Form Denied** (`form_denied`, date, optional)
    *   A date field for when the form was denied.
*   **Last Updated** (`last_updated`, date, optional)
    *   A date field for when the form was last updated.
*   **Last Updated by** (`last_updated_by`, text, optional)
    *   A text field for who last updated the form.
*   **Last Updated Comment** (`last_updated_comment`, text, optional)
    *   A text field for the last updated comment.
*   **Last Denied Reason** (`last_denied_reason`, text, optional)
    *   A text field for the reason why the form was last denied.
*   **Last Denied By** (`last_denied_by`, text, optional)
    *   A text field for who last denied the form.
*   **Last Denied Date** (`last_denied_date`, date, optional)
    *   A date field for when the form was last denied.
*   **Leave Duration** (`leave_duration`, number, optional)
    *   A numerical field for the length of the home purchase leave.
*   **Manager ID** (`manager_id`, text, optional)
    *   A text field for the manager's ID number.

**Tips**

*   Make sure to fill in all required fields.
*   Be clear and concise in your comments and explanations.
*   Use the correct department and location information.
*   Check the approval status regularly to see if your leave request has been approved or denied.
