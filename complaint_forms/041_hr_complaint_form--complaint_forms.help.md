# hr_complaint_form - Help Guide
## Purpose
This form is used to document and track employee complaints, providing a structured way to report incidents, issues, or grievances within the organization.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Employee Name of the person making the complaint.
2. Provide a detailed description of the complaint or issue.
3. Enter your Contact Email and Contact Phone number for communication purposes.
4. If applicable, add any Additional Comments for the complaint.
5. Select the Submitted By field to indicate who is submitting the complaint.
6. Set the Submitted Date and Time to track when the complaint was submitted.
7. Assign the complaint to a specific user for handling.
8. Choose the Priority Level of the complaint (Low, Medium, or High).
9. If necessary, specify a Due Date for resolution.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter the name of the employee making the complaint.
* **Complaint Description** (`complaint_desc`, text, required): Provide a detailed description of the complaint or issue.
* **Complaint Date** (`complaint_date`, date, optional): If known, enter the date the complaint occurred.
* **Complaint Type** (`complaint_type`, select_one, required): Select one of the provided options to categorize the complaint (e.g., "Option 1", "Option 2", etc.).
* **Contact Email** (`contact_email`, email, required): Enter your contact email address for communication purposes.
* **Contact Phone** (`contact_phone`, text, required): Enter your contact phone number for communication purposes.
* **Additional Comments** (`additional_comments`, text, optional): Add any additional information that may be helpful for the complaint.
* **Submitted By** (`submitted_by`, text, required): Select who is submitting the complaint (e.g., "John Doe", "Jane Doe", etc.).
* **Submitted Date** (`submitted_date`, time, required): Set the date and time the complaint was submitted.
* **Submitted Time** (`submitted_time`, number, required): Set the time of day the complaint was submitted (e.g., 14:30).
* **Assigned User** (`assigned_user`, text, required): Select the user assigned to handle the complaint.
* **Priority Level** (`priority_level`, select_one, required): Choose the priority level of the complaint (e.g., Low, Medium, High).
* **Due Date** (`due_date`, date, optional): If applicable, set a specific date for resolution.
