<thinking>...</thinking>

# internship_completion_check_out_form - Help Guide
## Purpose
This form is designed to track and verify the completion of internships. It captures essential information regarding the submission and completion dates, feedback, and certification status. The form helps in maintaining an accurate record of internship submissions and their current status in the review process.

## How To Complete This Form
To complete this form, follow these steps:

1.  Ensure you are authorized to access this form.
2.  Verify the form's current submission status by checking the "Submission Status" field.
3.  Select the correct submission status from the provided options (In Review, Approved, or Denied).
4.  Enter the submission date in the "Submission Date" field.
5.  Enter the completion date in the "Completion Date" field.
6.  Provide feedback from the intern in the "Intern Feedback" field.
7.  Enter feedback from the supervisor in the "Supervisor Feedback" field.
8.  Confirm the completion certification status in the "Completion Certification" field by selecting True or False.
9.  Enter the name of the person who submitted the internship in the "Submitted By" field.
10.  Enter the submission ID in the "Submission ID" field.
11.  Enter the supervisor's name in the "Supervisor Name" field.
12.  Enter the supervisor's email in the "Supervisor Email" field.
13.  Enter the supervisor's phone number in the "Supervisor Phone" field.

## Field-by-Field Explanation

*   **Submission Date** (`submission_date`, `date`, required: false): Enter the date when the internship was submitted for review. This date should be in the format "YYYY-MM-DD".
*   **Completion Date** (`completion_date`, `text`, required: false): Enter the date when the internship was completed or finished.
*   **Intern Feedback** (`intern_feedback`, `text`, required: false): A field for the intern to provide feedback on their experience.
*   **Supervisor Feedback** (`supervisor_feedback`, `text`, required: false): A field for the supervisor to provide feedback on the intern's performance.
*   **Completion Certification** (`completion_certification`, `select_one`, required: false): Confirm the completion certification status by selecting True or False.
*   **Submission Status** (`submission_status`, `select_one`, required: false): Select the submission status from the options: In Review, Approved, or Denied.
*   **Submitted By** (`submitted_by`, `text`, required: true): Enter the name of the person who submitted the internship.
*   **Submission ID** (`submission_id`, `number`, required: false): Enter the unique ID of the submitted internship.
*   **Supervisor Name** (`supervisor_name`, `text`, required: false): Enter the name of the supervisor.
*   **Supervisor Email** (`supervisor_email`, `email`, required: false): Enter the email address of the supervisor.
*   **Supervisor Phone** (`supervisor_phone`, `text`, required: false): Enter the phone number of the supervisor.

Note to the reader: This help guide will be reviewed and updated as the form evolves. Ensure you refer to the latest documentation for the most accurate information.
