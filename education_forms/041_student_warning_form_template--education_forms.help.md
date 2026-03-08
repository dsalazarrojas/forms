<thinking>

**Internal note:** This form template is designed to guide school administrators or educators in documenting student warnings, providing an organized structure for recording incidents, infractions, and actions taken. It helps ensure consistency and thoroughness in documenting warnings to support fair and informed decision-making processes.

</thinking>

# Student Warning Form Template - Help Guide
## Purpose

This form is designed to collect detailed information about a student's infraction, enabling fair and informed decision-making. It captures essential details, such as the student's name, ID number, and the incident's date and time. The form also explores the nature of the infraction and the reason for the warning given to the student.

## How To Complete This Form

1.  Enter the student's name and ID number on the first page.
2.  Provide the name of the infraction and the date and time it occurred.
3.  Choose the nature of the infraction from the provided options or specify if it's "Other" with a description.
4.  Select the reason for the warning from the options or specify if it's "Other" with a description.
5.  Provide any additional comments or recommendations for next steps, if applicable.
6.  Indicate if this is the student's first or repeat infraction.
7.  Confirm if the warning has been given to the student.
8.  If the warning has been given, indicate if there are any questions or concerns.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Enter the name of the student involved in the infraction.
* **Student ID Number** (`student_id`, text, required): Enter the student's ID number for identification and record-keeping purposes.
* **Name of Infraction** (`incident_name`, text, required): Provide a detailed description of the infraction, including any relevant circumstances.
* **Date of Infraction** (`date_of_incident`, date, required): Enter the date when the infraction occurred.
* **Time of Infraction** (`time_of_incident`, time, required): Enter the time when the infraction took place.
* **Nature of Infraction** (`infraction_nature`, select_one, required): Choose from:
	+ Academic dishonesty
	+ Misconduct on campus
	+ Other (please specify)
* **Reason for Warning** (`reason_for_warning`, select_multiple, required): Choose from:
	+ First-time offender
	+ Repeat offender
	+ Other (please specify)
* **Recommended Action** (`next_action`, text, optional): Provide any additional comments or recommendations for the next steps to be taken.
* **Additional Information** (`additional_information`, note, optional): Enter any relevant details or comments that aren't covered in the other fields.
* **Has this student received any prior warnings?** (`prior_warnings`, checkbox, optional): Indicate if the student has received previous warnings.
* **Do you have any questions or concerns about this warning?** (`questions_or_concerns`, checkbox, optional): Express any questions or concerns you have about the warning.
* **Are there any other relevant comments to add?** (`final_comments`, text, optional): Enter any other relevant comments or observations.
* **Is this student a repeat offender?** (`repeat_offender`, radio, required): Confirm if this is the first or repeat infraction for the student.
* **Has this warning been given to the student?** (`warning_given`, radio, required): Confirm if the warning has been handed over to the student.
