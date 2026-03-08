<thinking>...</thinking>

# Architectural Workshop Leave Of Absence Form - Help Guide

## Purpose
This form is used to report a leave of absence for an Architectural Workshop. It helps to document the reasons, dates, and supporting documentation for the absence, and allows the participant to provide a make-up plan to catch up on any missed work.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in the required information:
	* Full Name: Enter the participant's full name as per the records.
	* Email Address: Enter the participant's email address as per the records.
	* Phone Number: Enter the participant's phone number as per the records.
	* Workshop Name: Enter the name of the workshop the participant is attending.
	* Workshop Dates: Enter the start and end dates of the workshop.
	* Instructor/Coordinator Name: Enter the name of the instructor or coordinator leading the workshop.
	* Absence Start Date: Enter the first day of absence.
	* Absence End Date: Enter the last day of absence.
	* Reason for Absence: Provide a detailed explanation for the absence.
	* Type of Absence: Select the reason for absence from the given options.
	* Date of Request: Enter the date when this absence was requested.
2. Provide supporting documentation (if applicable):
	* If you have a doctor's note, proof of emergency, or any other supporting documentation, select "True" for the "Documentation available" field.
	* If you have a supporting document, describe its type in the "Type of Documentation" field.
3. Provide make-up plan (if applicable):
	* If you have a plan to catch up on any missed work, describe it in the "Plan to Make Up Work" field.
	* Indicate if you can attend scheduled make-up sessions by selecting "True" or "False" from the "Can attend scheduled make-up" field.

## Field-by-Field Explanation

* **Full Name** (`participant_name`, text, required): Enter the participant's full name as per the records.
* **Email Address** (`participant_email`, email, required): Enter the participant's email address as per the records.
* **Phone Number** (`participant_phone`, text, required): Enter the participant's phone number as per the records.
* **Participant or Student ID** (`participant_id`, text, optional): If applicable, enter the participant or student ID.
* **Workshop Name** (`workshop_name`, text, required): Enter the name of the workshop the participant is attending.
* **Workshop Dates** (`workshop_dates`, text, required): Enter the start and end dates of the workshop.
* **Instructor/Coordinator Name** (`instructor_name`, text, required): Enter the name of the instructor or coordinator leading the workshop.
* **Absence Start Date** (`absence_start_date`, date, required): Enter the first day of absence.
* **Absence End Date** (`absence_end_date`, date, required): Enter the last day of absence.
* **Total Days of Absence** (`total_absence_days`, number, optional): Enter the number of workshop days missed.
* **Type of Absence** (`absence_type`, select_one, required): Select the reason for absence from the given options.
* **Reason for Absence** (`reason_description`, text, required): Provide a detailed explanation for the absence.
* **Documentation available** (`documentation_available`, select_one, optional): If you have a doctor's note, proof of emergency, or any other supporting documentation, select "True".
* **Type of Documentation** (`documentation_type`, text, optional): If you have a supporting document, describe its type.
* **Plan to Make Up Work** (`makeup_work_plan`, text, optional): If you have a plan to catch up on any missed work, describe it.
* **Can attend scheduled make-up** (`can_attend_makeup`, select_one, optional): Indicate if you can attend scheduled make-up sessions.
* **Date of Request** (`request_date`, date, required): Enter the date when this absence was requested.
* **Documentation** (`documentation_type`, text, optional): If you have a supporting document, describe its type.
* **Make-Up Plan** (`makeup_work_plan`, text, optional): If you have a plan to catch up on any missed work, describe it.

## Tips

* Make sure to fill in all required fields accurately and thoroughly.
* If you have any supporting documentation, provide it along with the type of document.
* If you have a make-up plan, describe it in detail.
