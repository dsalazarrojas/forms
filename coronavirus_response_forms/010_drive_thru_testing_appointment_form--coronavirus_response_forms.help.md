# Drive Thru Testing Appointment Form - Help Guide
## Purpose
This form is designed to collect information for drive-thru testing appointments. Please fill out this form to schedule a test and provide any necessary details.

## How To Complete This Form
To complete this form, simply follow the instructions below:

1. Choose a test type from the "What kind of test?" field. Select all options that apply to your appointment.
2. Enter the time of your appointment in the "Choose an Appointment Time" field. You can choose from the available times listed.
3. If necessary, enter your test result in the "Test Result" field.
4. Fill out the "Patient Name", "Phone Number", and "Email Address" fields with your information.
5. If your appointment involves a specific date, enter it in the "Appointment Date" field.

## Field-by-Field Explanation
* **Choose an Appointment Time** (`appointment_time`, select_one, required):
	+ Select one of the available appointment times: 8:00 AM, 9:00 AM, 10:00 AM, 11:00 AM, 12:00 PM, or 1:00 PM.
* **What kind of test?** (`test_type`, select_multiple, required):
	+ Select all test types that apply to your appointment. Options include:
		- Rapid Test
		- PCR Test
		- Antibody Test
* **Test Result** (`test_result`, text, required):
	+ Enter the result of your test, if necessary.
* **Patient Name** (`patient_name`, text, required):
	+ Enter your name.
* **Phone Number** (`phone_number`, text, required):
	+ Enter your phone number.
* **Email Address** (`email_address`, text, required):
	+ Enter your email address.
* **Appointment Date** (`appointment_date`, date, optional):
	+ Enter the date of your appointment, if necessary.
* **Appointment Time** (`appointment_time`, time, required):
	+ Enter the time of your appointment.
 
## Tips
* Make sure to double-check your appointment time and date, as these will be used to schedule your test.
* If you need to reschedule your appointment, please contact us directly.
