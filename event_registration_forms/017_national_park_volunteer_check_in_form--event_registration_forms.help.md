<thinking>Since this form is used for checking in and out National Park volunteers, it's crucial to ensure that all necessary information is accurate and up-to-date. To prevent any errors, please verify that each field is filled in correctly. If you are not sure about any field, please refer to your volunteer manual or contact your supervisor for guidance.</thinking>

# National Park Volunteer Check In Form - Help Guide
## Purpose
This form is used to track the check-in and check-out of National Park volunteers. It captures essential information about the volunteer, their shift, and their activities during their shift.

## How To Complete This Form
1. Fill in your **First Name** in the designated text field.
2. Enter your **Last Name** in the corresponding text field.
3. Provide your **Email** address to facilitate communication.
4. Select your **Shift** from the drop-down list: **Morning**, **Afternoon**, or **Evening**.
5. Choose the **Volunteer Group** you belong to from the multi-select options.
6. Select your **Volunteer Type** from the multi-select options: **Park Ranger**, **Park Ambassador**, or **Support Staff**.
7. Enter your **Check In Time** and **Check Out Time** using the time format **HH:MM**.
8. Leave any additional **Comments** or notes about your activities during the shift in the text area.
9. Enter your **Volunteer ID** for identification purposes.
10. Enter the **Event ID** to associate with the event you're volunteering for.
11. Select the **Created By** person who created this record from the drop-down list: **John Doe** or **Jane Doe**.
12. Select the **Updated By** person who last updated this record from the drop-down list: **John Doe** or **Jane Doe**.
13. Enter the date and time you **Checked Out** using the date format **YYYY-MM-DD**.
14. Select the person who **Checked Out** you from the drop-down list: **John Smith** or **Jane Brown**.
15. Enter the **Checked Out Time** using the time format **HH:MM**.
16. Select the **Checked Out Location** from the drop-down list: **Location A** or **Location B**.
17. Select any **Check Out Location** from the multi-select options.
18. Enter the **Check Out Location Name** for reference.
19. Leave any additional **Comments** or notes about your activities during the shift in the text area.
20. Select the person you were **Assigned To** from the drop-down list: **John Doe** or **Jane Doe**.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, optional): Your first name is required for identification purposes.
* **Last Name** (`last_name`, text, optional): Your last name is required for identification purposes.
* **Email** (`email`, email, optional): Your email address will be used for communication with the National Park team.
* **Phone** (`phone`, text, optional): Your phone number is optional but helps with emergency contact.
* **Shift** (`shift`, select_one, optional): Select your shift: **Morning**, **Afternoon**, or **Evening**.
* **Volunteer Group** (`volunteer_group`, select_multiple, optional): Choose the volunteer group you belong to.
* **Volunteer Type** (`volunteer_type`, select_multiple, optional): Select your volunteer type from the options: **Park Ranger**, **Park Ambassador**, or **Support Staff**.
* **Check In Time** (`check_in_time`, time, optional): Enter your check-in time using the format **HH:MM**.
* **Check Out Time** (`check_out_time`, time, optional): Enter your check-out time using the format **HH:MM**.
* **Note** (`note`, note, optional): Leave any additional comments or notes about your activities during the shift.
* **Volunteer ID** (`volunteer_id`, number, optional): Enter your volunteer ID for identification purposes.
* **Event ID** (`event_id`, number, optional): Enter the event ID you are volunteering for.
* **Created At** (`created_at`, date, optional): The date and time this record was created.
* **Updated At** (`updated_at`, date, optional): The date and time this record was last updated.
* **Created By** (`created_by`, select_one, optional): The person who created this record.
* **Updated By** (`updated_by`, select_one, optional): The person who last updated this record.
* **Checked Out** (`checked_out`, date, optional): Enter the date and time you checked out using the date format **YYYY-MM-DD**.
* **Checked Out By** (`checked_out_by`, select_one, optional): The person who checked you out.
* **Checked Out Time** (`checked_out_time`, time, optional): Enter the time you checked out using the format **HH:MM**.
* **Checked Out Location** (`checked_out_location`, select_one, optional): Select the location you were checked out at.
* **Check Out Location** (`check_out_location`, select_multiple, optional): Select any locations you visited during the shift.
* **Check Out Location Name** (`check_out_location_name`, text, optional): Enter the name of the location for reference.
* **Comments** (`comments`, note, optional): Leave any additional comments or notes about your activities during the shift.
* **Assigned To** (`assigned_to`, select_one, optional): Select the person you were assigned to.
