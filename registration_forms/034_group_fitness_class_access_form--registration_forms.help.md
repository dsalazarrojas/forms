# <string> - Help Guide

## Purpose
This form is designed to collect registration details for fitness classes. It's a crucial part of the process to ensure that all participants and staff are registered correctly.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the "Title" field with the name of the fitness class.
2. Select the "Category" for the fitness class.
3. Provide a brief "Description" of the class.
4. Enter the "Form IDs" of the registered participants.
5. Select the "Assigned Tool" for the class.
6. Enter the "Output File" location.
7. If required, enter the "Notes" for any additional information.
8. Fill out the participant's details:
	* "Participant Email"
	* "Participant Phone"
	* "Participant Date"
	* "Participant Time"
	* Select the "Participant Type" (Student, Instructor, or Staff)
	* Enter any additional "Participant Notes"
9. Fill out the staff member's details:
	* "Staff Email"
	* "Staff Phone"
	* "Staff Date"
	* "Staff Time"
	* Select the "Staff Type" (Admin, Manager, or Instructor)
	* Enter any additional "Staff Notes"
10. Select the "Class Type" (Class, Event, or Workshop)
10. If required, enter any additional "Class Notes"

## Field-by-Field Explanation

* **Title** (`title`, `text`, required): Enter the name of the fitness class.
* **Category** (`category`, `text`, required): Select the category for the fitness class.
* **Description** (`description`, `text`, required): Provide a brief description of the class.
* **Form IDs** (`form_ids`, `number`, required): Enter the IDs of the registered participants.
* **Assigned Tool** (`assigned_tool`, `text`, required): Select the tool assigned to the class.
* **Output File** (`output_file`, `text`, required): Enter the location of the output file.
* **Notes** (`notes`, `note`, optional): Enter any additional notes for the class.
* **Participant Email** (`participant_email`, `email`, required): Enter the participant's email address.
* **Participant Phone** (`participant_phone`, `text`, required): Enter the participant's phone number.
* **Participant Date** (`participant_date`, `date`, required): Enter the participant's date of registration.
* **Participant Time** (`participant_time`, `time`, required): Enter the participant's time of registration.
* **Participant Type** (`participant_type`, `select_one`, required): Select the participant's type (Student, Instructor, or Staff).
* **Participant Notes** (`participant_notes`, `note`, optional): Enter any additional notes for the participant.
* **Staff Email** (`staff_email`, `email`, required): Enter the staff member's email address.
* **Staff Phone** (`staff_phone`, `text`, required): Enter the staff member's phone number.
* **Staff Date** (`staff_date`, `date`, required): Enter the staff member's date of registration.
* **Staff Time** (`staff_time`, `time`, required): Enter the staff member's time of registration.
* **Staff Type** (`staff_type`, `select_one`, required): Select the staff member's type (Admin, Manager, or Instructor).
* **Staff Notes** (`staff_notes`, `note`, optional): Enter any additional notes for the staff member.
* **Class Date** (`class_date`, `date`, required): Enter the class date.
* **Class Time** (`class_time`, `time`, required): Enter the class time.
* **Class Type** (`class_type`, `select_one`, required): Select the class type (Class, Event, or Workshop).
* **Class Notes** (`class_notes`, `note`, optional): Enter any additional notes for the class.
* **Assigned Tool** (`assigned_tool`, `text`, required): Select the tool assigned to the class.
* **Participant Type Other** (`participant_type_other`, `select_multiple`, optional): Select additional participant types.
* **Staff Type Other** (`staff_type_other`, `select_multiple`, optional): Select additional staff types.
* **Participant Phone** (`participant_phone`, `text`, required): Enter the participant's phone number.
* **Staff Phone** (`staff_phone`, `text`, required): Enter the staff member's phone number.
* **Participant Email** (`participant_email`, `email`, required): Enter the participant's email address.
* **Staff Email** (`staff_email`, `email`, required): Enter the staff member's email address.
