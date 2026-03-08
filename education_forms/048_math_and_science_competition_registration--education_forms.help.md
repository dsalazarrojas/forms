<thinking>
We are designing a user-facing help guide for the "math_and_science_competition_registration" form. This form is for registering participants in a math and science competition. It is intended for students and teachers to provide information about the competition.

To ensure clarity and consistency, we will use the provided YAML schema to guide our design. We will use the labels and types to inform our explanations.

Before proceeding, we check for relevance and non-duplication of fields to avoid unnecessary complexity.
</thinking>

# math_and_science_competition_registration - Help Guide
## Purpose
This form is for registering participants in a math and science competition. It requires information from both the student and teacher sides.

## How To Complete This Form

1. **Please fill out the form completely, including all required fields.**
2. **For each field, ensure the information provided is accurate and complete.**

## Field-by-Field Explanation

* **Participant Name** (`participant_name`, `text`, required):
	+ This is the name of the participant. Please enter the full name as it appears on official documents.
* **School Name** (`school_name`, `text`, required):
	+ This is the name of the school the participant attends. Please enter the full name as it appears on official documents.
* **Participant Email** (`participant_email`, `email`, required):
	+ This is the email address of the participant. Please enter a valid email address.
* **Participant Phone** (`participant_phone`, `text`, required):
	+ This is the phone number of the participant's contact person.
* **Teacher Name** (`teacher_name`, `text`, optional):
	+ This is the name of the teacher responsible for the participant. If there is no teacher, leave this field empty.
* **Teacher Phone** (`teacher_phone`, `text`, optional):
	+ This is the phone number of the teacher's contact person.
* **Teacher Email** (`teacher_email`, `email`, optional):
	+ This is the email address of the teacher's contact person.
* **Participant Address** (`participant_address`, `text`, required):
	+ This is the address of the participant's school or residential address.
* **Grade Level** (`participant_grade`, `select_one`, required):
	+ Please select the grade level of the participant from the list.
* **Teacher School** (`teacher_school`, `select_multiple`, required):
	+ Please select the type of school the teacher works at from the list.
* **School Type** (`school_type`, `select_multiple`, required):
	+ Please select the type of school from the list.
* **Participant Subjects** (`participant_subjects`, `select_multiple`, required):
	+ Please select the subjects the participant is registered for from the list.
* **School Address** (`school_address`, `text`, required):
	+ This is the address of the school.
* **School City** (`school_city`, `text`, required):
	+ This is the city of the school.
* **School State** (`school_state`, `text`, required):
	+ This is the state of the school.
* **School Zip** (`school_zip`, `number`, required):
	+ This is the zip code of the school.
* **Teacher Notes** (`teacher_notes`, `note`, optional):
	+ Please provide any additional notes from the teacher.
* **Participant Notes** (`participant_notes`, `note`, optional):
	+ Please provide any additional notes from the participant.
* **Teacher Signature** (`teacher_signature`, `text`, optional):
	+ Please sign and date this form as the teacher.
* **Participant Signature** (`participant_signature`, `text`, optional):
	+ Please sign and date this form as the participant.
* **I understand the rules** (`participant_agreement`, `select_one`, required):
	+ Please confirm that the participant has read and agreed to the rules.
* **I understand the rules** (`teacher_agreement`, `select_one`, required):
	+ Please confirm that the teacher has read and agreed to the rules.
* **Terms and Conditions** (`terms_and_conditions`, `text`, required):
	+ Please read and confirm the terms and conditions.
* **Teacher Additional** (`teacher_additional`, `note`, optional):
	+ Please provide any additional information from the teacher.
* **Participant Additional** (`participant_additional`, `note`, optional):
	+ Please provide any additional information from the participant.
* **Parent Signature** (`parent_signature`, `text`, optional):
	+ Please sign and date this form as the parent.
* **School Name 2** (`school_name_2`, `text`, required):
	+ This is the name of the school the participant attends. Please enter the full name as it appears on official documents.
* **School Phone** (`school_phone`, `text`, required):
	+ This is the phone number of the school's contact person.
* **School Email** (`school_email`, `email`, required):
	+ This is the email address of the school's contact person.

## Tips
* Ensure all fields are complete and accurate before submission.
* Please review the rules and terms and conditions before signing.
* If you have any questions or concerns, please contact the competition organizers.
* Ensure the participant and teacher have both signed and agreed to the rules.
