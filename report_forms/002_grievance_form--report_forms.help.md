<thinking>
This form is designed for users to report grievances, which are complaints or issues that need to be addressed within the organization. The form is intended for employees to provide information about a problem they experienced, including the type of complaint, a detailed description, and any relevant contact information. This form will help the management to track and follow up on these complaints, ensuring that they are addressed in a timely and effective manner.
</thinking>

# grievance form - Help Guide
## Purpose
The grievance form is used to report issues or complaints that require attention from the management. It is intended to provide a structured and organized way for employees to submit their concerns, ensuring that they are addressed efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Choose the type of complaint you are reporting (e.g., "Yes" or "No").
2. Provide a detailed description of the issue you experienced.
3. Enter your name, contact information, and email address (if applicable).
4. Select the department responsible for addressing the complaint (e.g., Department of Human Resources, Department of Management, etc.).
5. Report the date and time of the incident.
6. Enter the location where the incident occurred.
7. If this is a follow-up on a previously reported grievance, mark the follow-up status (e.g., "Active" or "Inactive").
8. Select the person to whom the grievance is assigned (e.g., "ChatJimmy", "John Doe", "Jane Doe").

## Field-by-Field Explanation
### Complaint Type
* **Complaint Type** (`complaint_type`, select_multiple, **required**: no): This field allows you to identify the type of complaint you are reporting. Choose between "Yes" and "No" to indicate the nature of your complaint.

### Description
* **Description** (`description`, text, **required**: no): Provide a detailed description of the issue you experienced.

### Name
* **Name** (`name`, text, **required**: no): Enter your name so that we can contact you for further information or to update you on the status of your complaint.

### Contact Info
* **Contact Info** (`contact_info`, text, **required**: no): Enter your contact information (e.g., phone number, address) so that we can reach out to you.

### Email
* **Email** (`email`, email, **required**: no): If you have an email address, enter it so that we can contact you more efficiently.

### Department
* **Department** (`department`, select_one, **required**: no): Select the department responsible for addressing your complaint (e.g., Department of Human Resources, Department of Management, etc.).

### Report Date
* **Report Date** (`report_date`, date, **required**: no): Enter the date when the issue occurred.

### Report Time
* **Report Time** (`report_time`, time, **required**: no): Enter the time when the issue occurred.

### Location
* **Location** (`location`, text, **required**: no): Enter the location where the issue occurred.

### Grievance Date
* **Grievance Date** (`grievance_date`, date, **required**: no): Enter the date when the grievance was first reported.

### Follow-up Status
* **Follow up Status** (`follow_up_status`, select_one, **required**: no): If this is a follow-up on a previously reported grievance, mark the follow-up status as "Active" or "Inactive".

### Follow-up Date
* **Follow-up Date** (`follow_up_date`, date, **required**: no): Enter the date when the follow-up was last made.

### Assigned to
* **Assigned to** (`assigned_to`, select_one, **required**: no): Select the person to whom the grievance is assigned (e.g., "ChatJimmy", "John Doe", "Jane Doe").
