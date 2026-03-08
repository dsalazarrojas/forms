<thinking>...
The purpose of this form is to collect information from jurors who are required to perform jury duty. Jurors can use this form to check in with the relevant authorities, indicating how they plan to fulfill their duty. This form appears to be designed to handle various scenarios, including both in-person and virtual check-ins. Given the provided YAML, there is no explicit indication that the form is for any specific event or location, so this form will likely be used as a general-purpose juror check-in form. However, to ensure relevance and non-duplication, it would be beneficial to add a unique identifier for each juror or event to the form, allowing for more tailored information collection. This form requires juror information, including name, email, phone number, date, and time. Additionally, it includes options for check-in method and event details, including date, time, and location. The form concludes with a field for the juror's signature.
</thinking>

# Jury Duty Check In Form - Help Guide
## Purpose
This form is used to collect information from jurors who are required to perform jury duty.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out your juror name in the "Juror Name" field.
2. Enter your email address in the "Juror Email" field.
3. Provide your phone number in the "Juror Phone" field.
4. Specify the date you plan to perform your jury duty in the "Date" field.
5. Choose your check-in method by selecting either "In person" or "Virtual" from the "Check In Method" dropdown menu.
6. If you select "Virtual", you can provide a description of your check-in method in the "Check In Method Other" field.
7. Enter the date of the event you will be attending in the "Event Date" field.
8. Specify the time you plan to be at the event in the "Event Time" field.
9. Provide the location of the event in the "Event Location" field.
10. Sign the "Juror Signature" field to confirm your information.

## Field-by-Field Explanation

* **Juror Name** (`juror_name`, `text`, required): Enter your name as it appears on your identification.
* **Juror Email** (`juror_email`, `email`, required): Enter your email address where you can be reached.
* **Juror Phone** (`juror_phone`, `text`, required): Enter your phone number where you can be reached.
* **Date** (`juror_date`, `date`, required): Enter the date you plan to perform your jury duty.
* **Time** (`juror_time`, `time`, required): Enter the time you plan to be at the event.
* **Check In Method** (`check_in_method`, `select_one`, required): Choose how you will be checking in for your jury duty.
* **Check In Method Other** (`check_in_method_other`, `text`, optional): If you selected "Virtual" in the "Check In Method" field, provide a description of your check-in method.
* **Event Date** (`event_date`, `date`, required): Enter the date of the event you will be attending.
* **Event Time** (`event_time`, `time`, required): Enter the time you plan to be at the event.
* **Event Location** (`event_location`, `text`, required): Provide the location of the event you will be attending.
* **Juror Signature** (`juror_signature`, `note`, required): Sign your name to confirm your information.
