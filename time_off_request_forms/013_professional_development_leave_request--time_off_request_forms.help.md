# Professional Development Leave Request - Help Guide
## Purpose
This form is used to request time off for professional development activities, such as training, workshops, or conferences. It is intended for users who need to take time off for learning and development opportunities that will benefit their work.

## How To Complete This Form
1. Ensure that you have discussed and received approval for your time off request with your manager and team lead before submitting this form.
2. Fill in the `Training Request` field with a brief description of the training or activity you plan to attend.
3. Enter the start and end dates of your time off in the `Start Date` and `End Date` fields, respectively.
4. Select the type of leave you are requesting (`Yes` or `No`) in the `Leave Type` field.
5. In the `Department` field, enter your department or team name (optional).
6. In the `Manager Approvals` field, select whether your manager has approved your request (`Yes` or `No`).
7. In the `Team Lead Approvals` field, select whether your team lead has approved your request (`Yes` or `No`).
8. If you are working with a training facilitator, select `Yes` in the `Training Facilitator` field and enter their email address in the `Training Facilitator Email` field.
9. In the `Manager Approval Comments` and `Team Lead Approval Comments` fields, enter any comments or feedback from your manager and team lead, respectively.
10. In the `Training Request Comments` field, enter any additional comments or details about your training request.
11. Select the status of your request in the `Status` field (`Active` or `Inactive`).
12. In the `Comments` field, enter any additional comments or feedback about your request.
13. In the `Submitter` field, select whether you are the person submitting the request (`Yes` or `No`).
14. In the `Submitted` field, enter the date you submitted the request.

## Field-by-Field Explanation

* **Training Request** (`training_request`, text, optional): Enter a brief description of the training or activity you plan to attend.
* **Start Date** (`start_date`, date, required): Enter the start date of your time off in the format MM/DD/YYYY.
* **End Date** (`end_date`, date, required): Enter the end date of your time off in the format MM/DD/YYYY.
* **Leave Type** (`leave_type`, select_one, required): Select whether you are requesting a `Yes` or `No` leave type.
* **Department** (`department`, text, optional): Enter your department or team name (optional).
* **Manager Approvals** (`manager_approvals`, select_multiple, required): Select whether your manager has approved your request (`Yes` or `No`).
* **Team Lead Approvals** (`team_lead_approvals`, select_multiple, optional): Select whether your team lead has approved your request (`Yes` or `No`).
* **Training Facilitator** (`training_facilitator`, select_one, optional): Select whether you are working with a training facilitator (`Yes` or `No`).
* **Training Facilitator Email** (`training_facilitator_email`, email, optional): Enter the email address of your training facilitator (if selected).
* **Manager Approval Comments** (`manager_approval_comments`, text, optional): Enter any comments or feedback from your manager.
* **Team Lead Approval Comments** (`team_lead_approval_comments`, text, optional): Enter any comments or feedback from your team lead.
* **Training Request Comments** (`training_request_comments`, text, optional): Enter any additional comments or details about your training request.
* **Status** (`status`, select_one, optional): Select the status of your request (`Active` or `Inactive`).
* **Comments** (`comments`, text, optional): Enter any additional comments or feedback about your request.
* **Submitter** (`submitter`, select_one, optional): Select whether you are the person submitting the request (`Yes` or `No`).
* **Submitted** (`submitted_on`, date, optional): Enter the date you submitted the request in the format MM/DD/YYYY.
