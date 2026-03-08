# New Shift Request Form - Help Guide

## Purpose
The "New Shift Request Form" is designed to provide a structured way to request new shifts for employees, ensuring that essential details are captured accurately and efficiently.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter your start date and end date to specify the duration of your shift.
2. Select the start and end times for your shift.
3. Enter your employee name and ID for identification purposes.
4. Select the manager's ID for approval routing.
5. Provide a request message for any specific requirements or requests.
6. Choose the shift status (Available, Rejected, Approved).
7. Select the shift type (Full, Half, Quarter).
8. Select the assigned tool (chatjimmy, chatjimmy1, chatjimmy2).
9. Provide the assigned tool description.
10. Select the requester and request status (Pending, Rejected, Approved).

## Field-by-Field Explanation
- **New Shift Request** (`new_shift_request_form`, text, required/optional): Enter a brief description of your shift request.
  - This field should not be confused with the "Requester" field, which asks for the person requesting the shift.
- **Start Date** (`start_date`, date, required/optional): Enter the date you are requesting to start your shift.
- **Shift Duration** (`shift_duration`, number, required/optional): Enter the duration of your shift, in hours.
- **Start Time** (`start_time`, time, required/optional): Enter the start time of your shift.
- **End Time** (`end_time`, time, required/optional): Enter the end time of your shift.
- **Employee Name** (`employee_name`, text, required/optional): Enter your name for identification purposes.
- **Employee ID** (`employee_id`, number, required/optional): Enter your employee ID for identification purposes.
- **Manager ID** (`manager_id`, number, required/optional): Enter the ID of the manager who should review and approve your shift.
- **Request Message** (`request_message`, text, required/optional): Enter any additional information or requirements for your shift.
- **Shift Status** (`shift_status`, select_multiple, required/optional): Select the status of your shift request (Available, Rejected, Approved).
- **Shift Type** (`shift_type`, select_one, required/optional): Select the type of shift you are requesting (Full, Half, Quarter).
- **Assigned Tool** (`assigned_tool`, select_one, required/optional): Select the tool assigned to you for this shift (chatjimmy, chatjimmy1, chatjimmy2).
- **Assigned Tool Description** (`assigned_tool_description`, text, required/optional): Enter a description for the assigned tool.
- **Requester** (`requester`, text, required/optional): Enter the person requesting the shift.
- **Request Status** (`request_status`, select_one, required/optional): Select the status of your shift request (Pending, Rejected, Approved).
- **Created At** (`created_at`, date, required/optional): This field is automatically populated and not to be edited.
- **Updated At** (`updated_at`, date, required/optional): This field is automatically populated and not to be edited.
- **Deleted At** (`deleted_at`, date, required/optional): This field is automatically populated and not to be edited.
- **Created By** (`created_by`, text, required/optional): This field is automatically populated and not to be edited.
- **Updated By** (`updated_by`, text, required/optional): This field is automatically populated and not to be edited.
- **Deleted By** (`deleted_by`, text, required/optional): This field is automatically populated and not to be edited.
