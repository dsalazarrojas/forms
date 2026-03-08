<thinking>
This form is for scheduling a device pickup appointment. It is used for internal purposes, so ensure you're accessing this form as an authorized user. Please do not create duplicate records for the same device, as it may cause confusion in our inventory system.
</thinking>

# Device Pick Up Appointment Form - Help Guide
## Purpose
This form is designed to schedule a device pickup appointment for a user.

## How To Complete This Form

1. Ensure you're accessing this form as an authorized user.
2. Select 'Yes' or 'No' to indicate whether a device is being picked up.
3. Enter the user's ID number.
4. Choose the type of device being picked up (Laptop, Tablet, or Chromebook).
5. Select the start date and end date for the appointment.
6. Add any comments related to the pickup.
7. Optionally, provide the assigned tool name (if applicable).
8. Enter a unique form ID (if required for internal purposes).
9. Enter the user's email address.

## Field-by-Field Explanation

* **Device Pick Up**: (`device_pick_up_appointment_form`, select_multiple, required: false):
	+ Select 'Yes' if a device is being picked up. This will indicate that the user has selected a device to be picked up.
* **User**: (`user`, number, required: false):
	+ Enter the ID number of the user who is picking up the device.
* **Device Type**: (`device_type`, select_one, required: false):
	+ Choose the type of device being picked up (Laptop, Tablet, or Chromebook).
* **Start Date**: (`start_date`, date, required: false):
	+ Select the start date of the appointment. This is the date the device is expected to be picked up.
* **End Date**: (`end_date`, date, required: false):
	+ Select the end date of the appointment. This is the date the device is expected to be returned.
* **Comments**: (`comments`, text, required: false):
	+ Add any additional comments or notes related to the device pickup.
* **Assigned Tool**: (`assigned_tool`, text, required: false):
	+ If applicable, provide the name of the tool assigned to the user for the device pickup.
* **Form ID**: (`form_id`, number, required: false):
	+ Enter a unique ID for the form (if required for internal purposes).
* **User Email**: (`user_email`, email, required: false):
	+ Enter the email address of the user who is picking up the device.

## Tips

* Ensure the form is filled out accurately to avoid any confusion or miscommunication.
* If a device is being picked up, select 'Yes' for the 'Device Pick Up' field.
* If you're unsure about any field, refer to the form's purpose and instructions above.
* If you need help, contact the relevant department or team for assistance.
