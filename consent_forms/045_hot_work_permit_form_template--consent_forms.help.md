<thinking>
The hot work permit form is used to obtain permission for performing hot work activities on site, such as welding, cutting, or grinding, which may pose a risk of fire and explosion. This form is required to be completed when performing work that involves hot work and is typically reviewed and approved by a supervisor. This form is not intended to be a substitute for regular safety protocols and procedures, but rather a supplement to ensure that all necessary precautions are taken when performing high-risk activities.

This form should only be used on site, and the information collected here will be used to track and record hot work activities. If you are unsure about whether a task requires a hot work permit, please consult with a supervisor or refer to relevant safety protocols and procedures.

Please note that fields with 'Yes' and 'No' options are not necessarily boolean fields, but rather multiple-choice questions that ask whether something is happening or not. For example, 'Location of hot work' asks if the work is being performed in an office, warehouse, or workshop.

</thinking>

# Hot Work Permit Form Template - Help Guide
## Purpose
This guide will explain how to complete the Hot Work Permit Form Template and what each field means.

## How To Complete This Form
1.  Determine if the task requires a hot work permit. If it does, proceed to complete the form. If not, do not complete this form.
2.  Answer the following questions on each page, making sure to answer "Yes" or "No" to questions that ask for a simple "Yes" or "No" response. Select the relevant options for questions that ask for more specific information.
3.  Once you have completed the form, review it for accuracy and completeness before submitting it for approval.

## Field-by-Field Explanation
### Page 1: What type of hot work is being performed?
*   **What type of hot work is being performed?** (`work_activities`, `select_multiple`, required: false)
    +  Select "Yes" if the task involves welding, cutting, or grinding.
    +  Select "No" if the task does not involve welding, cutting, or grinding.

### Page 2: Location of hot work
*   **Location of hot work** (`location_of_work`, `select_multiple`, required: false)
    +  Select "Yes" if the work is being performed in an office.
    +  Select "Yes" if the work is being performed in a warehouse.
    +  Select "Yes" if the work is being performed in a workshop.
    +  Select "No" if the work is not being performed in any of these locations.

### Page 3: Work Zone
*   **Work Zone** (`work_zone`, `select_one`, required: false)
    +  Select "Office" if the work is being performed in an office.
    +  Select "Warehouse" if the work is being performed in a warehouse.
    +  Select "Workshop" if the work is being performed in a workshop.

### Page 4: Supervisor Approval
*   **Supervisor approval received** (`supervisor_approval`, `text`, required: false)
    +  Enter the name and title of the supervisor who has approved the hot work permit.
    +  This field is optional, but it is recommended to include the supervisor's name and title.

### Page 5: Time and Date
*   **Start time** (`start_time`, `time`, required: false)
    +  Enter the start time of the hot work activity.
    +  Use the 24-hour clock format: hours:minutes.
*   **End time** (`end_time`, `time`, required: false)
    +  Enter the end time of the hot work activity.
    +  Use the 24-hour clock format: hours:minutes.
*   **Date** (`date`, `date`, required: false)
    +  Enter the date of the hot work activity.

### Page 6: Hot Work Permit Information
*   **Permit number** (`permit_number`, `number`, required: false)
    +  Enter the hot work permit number.
    +  This field is optional, but it is recommended to include the permit number.
*   **Permit date** (`permit_date`, `date`, required: false)
    +  Enter the date the hot work permit was issued.
    +  Use the date format: month/day/year.
*   **Supervisor name** (`supervisor_name`, `text`, required: false)
    +  Enter the name of the supervisor who approved the hot work permit.
    +  This field is optional, but it is recommended to include the supervisor's name.

### Page 7: Signatures
*   **Employee signature** (`employee_signature`, `text`, required: false)
    +  Enter your signature as the employee performing the hot work activity.
    +  This field is optional, but it is recommended to include your signature.
*   **Supervisor signature** (`supervisor_signature`, `text`, required: false)
    +  Enter the signature of the supervisor who approved the hot work permit.
    +  This field is optional, but it is recommended to include the supervisor's signature.
