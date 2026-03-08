# Emergency Prepd Drill Absence Form - Help Guide
## Purpose
This form is used to report the absence of participants from emergency preparedness drills. It captures details such as date of absence, reason for absence, and other relevant information related to participant's status and involvement.

## How To Complete This Form
1. Enter the date of absence in the format YYYY-MM-DD.
2. Provide a brief description of the reason for the participant's absence.
3. Select the participant's attendance status and whether they participated in the drill.
4. Enter the participant's name, organization, location, position, and department.
5. Enter the participant's phone number and email address for contact information.
6. If applicable, provide an alternate contact person's name, phone number, and email address.
7. Confirm whether the participant attended the drill, participated in it, and the date and time they participated.
8. Enter the participant's drill attended location, participation date, and time.

## Field-by-Field Explanation
* **Emergency Prepd Drill Absence Form** (`emergency_prepd_drill_absence_form`, text, required): This is a general heading that indicates the form's purpose and scope.
* **Date Absence** (`date_absence`, date, required): Enter the date when the participant was absent from the drill.
* **Absences Reason** (`absences_reason`, text, required): Describe the reason for the participant's absence.
* **Participant Attendance Status** (`participant_attendance_status`, select_one, required): Select whether the participant attended or was absent from the drill.
* **Participant Name** (`participant_name`, text, required): Enter the participant's name for identification purposes.
* **Participant Organization** (`participant_organization`, text, required): Enter the participant's organization for reference.
* **Participant Location** (`participant_location`, text, required): Enter the participant's location for tracking purposes.
* **Participant Position** (`participant_position`, text, required): Enter the participant's position or role for better understanding.
* **Participant Organization Unit** (`participant_organization_unit`, text, required): Enter the participant's organization unit for further details.
* **Participant Department** (`participant_department`, text, required): Enter the participant's department for administrative purposes.
* **Participant Phone Number** (`participant_phone_number`, text, required): Enter the participant's phone number for quick contact.
* **Participant Email** (`participant_email`, email, required): Enter the participant's email address for formal communication.
* **Participant Alternate Contact** (`participant_alternate_contact`, text, required): Provide the name of an alternate contact person if applicable.
* **Participant Alternate Contact Phone Number** (`participant_alternate_phone_number`, text, required): Enter the alternate contact person's phone number for emergency.
* **Participant Alternate Email** (`participant_alternate_email`, email, required): Enter the alternate contact person's email address for further communication.
* **Participant Drill Attended** (`participant_drill_attended`, select_one, required): Confirm whether the participant attended the drill or not.
* **Participant Drill Participated** (`participant_drill_participated`, select_one, required): Confirm whether the participant participated in the drill or not.
* **Participant Drill Attended Location** (`participant_drill_attended_location`, text, required): Enter the location where the participant attended the drill.
* **Participant Drill Participated At** (`participant_drill_participated_at`, date, required): Enter the date when the participant participated in the drill.
* **Participant Drill Participated Time** (`participant_drill_participated_time`, time, required): Enter the time when the participant participated in the drill.
* **Participant Drill Attended Date** (`participant_drill_attended_date`, date, required): Confirm the date the participant attended the drill.
* **Participant Drill Participated Time End** (`participant_drill_participated_time_end`, time, required): Confirm the end time of the participant's participation in the drill.
* **Participant Organization ID** (`participant_organization_id`, text, required): Enter the participant's organization ID for reference.
* **Participant Organization Unit ID** (`participant_organization_unit_id`, text, required): Enter the participant's organization unit ID for further details.
* **Participant Drill Absence Reason** (`participant_drill_absence_reason`, text, required): Enter the reason for the participant's drill absence.
* **Participant Alternate Organization ID** (`participant_alternate_organization_id`, text, required): This field is not explicitly defined in the form schema but may be implied to be a duplicate of "Participant Organization ID".
