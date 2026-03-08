# Attendance Monitoring Form - Help Guide
## Purpose
The Attendance Monitoring Form is a tool used to track attendance and record important information about program sessions. It allows facilitators to accurately report attendance status, note important events, and record participant details.

## How To Complete This Form
1. Select the relevant fields to fill in according to the program session details.
2. Enter the program name, date, and time in the corresponding fields.
3. Provide the participant's name, ID, and email address (if applicable).
4. Mark the attendance status and record the reason for absence (if applicable).
5. Rate the engagement level and attention/focus of the participant.
6. Check if any follow-up action is required.
7. Add any special notes or comments.

## Field-by-Field Explanation

* **Program Name** (`program_name`, text, required): Enter the name of the program or course.
* **Program Date** (`program_date`, date, required): Enter the date of the program session.
* **Program Time** (`program_time`, time, required): Enter the start time of the program session.
* **Program Location** (`program_location`, text, required): Specify where the program is held.
* **Instructor/Facilitator Name** (`instructor_facilitator`, text, required): Name of the person leading the program.
* **Participant Name** (`participant_name`, text, required): Enter the full name of the participant.
* **Participant ID** (`participant_id`, text, optional): Enter the participant's ID number or reference (if applicable).
* **Email Address** (`email`, email, optional): Enter the participant's email address (if applicable).
* **Phone Number** (`phone`, text, optional): Enter the participant's phone number (if applicable).
* **Organization/Group** (`organization_affiliation`, text, optional): Specify which group the participant is with.
* **Attendance Status** (`attendance_status`, select_one, required): Mark the participant's attendance status:
	+ Present
	+ Absent
	+ Late
	+ Excused
	+ Left Early
* **Arrival Time** (`arrival_time`, time, optional): Enter the time the participant arrived.
* **Departure Time** (`departure_time`, time, optional): Enter the time the participant left.
* **Session Participation** (`session_participation`, select_one, required): Rate the participant's session participation:
	+ Full Participation
	+ Active Participation
	+ Minimal Participation
	+ Observed
	+ No Participation
* **Reason for Absence (if applicable)** (`absense_reason`, text, optional): Enter the reason for the participant's absence.
* **Engagement Level** (`engagement_rating`, select_one, required): Rate the engagement level:
	+ Highly Engaged
	+ Engaged
	+ Neutral
	+ Disengaged
	+ Not Applicable
* **Attention and Focus** (`attention_focus`, select_one, optional): Rate the attention and focus:
	+ Excellent
	+ Good
	+ Fair
	+ Poor
	+ Not Observed
* **Program Completion** (`completion_status`, select_one, optional): Mark the program completion status:
	+ Completed
	+ In Progress
	+ Incomplete
	+ Not Started
* **Additional Information** (`special_notes`, text, optional): Record any special notes or comments.
* **Follow-up Action Required?** (`follow_up_required`, select_one, optional): Check if any follow-up action is required:
	+ Yes
	+ No
