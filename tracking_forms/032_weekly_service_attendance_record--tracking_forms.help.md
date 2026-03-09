# weekly_service_attendance_record - Help Guide
## Purpose
The weekly_service_attendance_record form is used to track user attendance at a service over a specific week. It helps record and monitor user participation.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in your user name.
2. Select the date of the service you attended.
3. Enter the count of how many times you attended the service.
4. Indicate if it was your first time attending the service.
5. Check the box if you are a regular attendant of the service.
6. Select your current attendance status.
7. Enter any comments about your attendance, if necessary.
8. Enter your email address.
9. Enter your phone number.

## Field-by-Field Explanation
* **User Name**: Enter your name as it appears in our system (`user_name`, text, required: false)
	+ This is the field to enter your name.
* **Date**: (`date`, date, required: false)
	+ This is where you select the date you attended the service.
* **Service Attendance Count**: (`service_attendance_count`, number, required: false)
	+ Enter the number of times you attended the service.
* **First Time Attendant**: (`first_time_attendant`, select_one, required: false)
	+ Check this box if it was your first time attending the service.
* **Regular Attendant**: (`regular_attendant`, select_one, required: false)
	+ Check this box if you are a regular attendant of the service.
* **Attendance Status**: (`attendance_status`, select_multiple, required: false)
	+ Select your current attendance status:
		+ Active
		+ Inactive
* **Attendance Comment**: (`attendance_comment`, note, required: false)
	+ Enter any comments you have about your attendance, if necessary.
* **Email**: (`email`, email, required: false)
	+ Enter your email address.
* **Phone**: (`phone`, text, required: false)
	+ Enter your phone number.
