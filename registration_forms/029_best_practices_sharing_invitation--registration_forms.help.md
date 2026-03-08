# Best Practices Sharing Invitation - Help Guide
## Purpose
The purpose of this form is to gather information from participants for a best practices sharing session, ensuring a smooth and organized event.

## How To Complete This Form
1. Fill out all required fields marked with an asterisk (\*).
2. Select one option for each select\_one field.
3. Select all applicable options for the select\_multiple field (material\_types\_selection).
4. Enter your personal details in the text fields (participant\_full\_name, job\_title\_text, company\_org\_name, proposed\_topic\_text, learning\_objective\_desc, co\_presenter\_name\_text, and organizer\_questions\_text).
5. Choose a session date that suits your schedule.

## Field-by-Field Explanation
* **-- Participant Invitation Details --** (`title`, `note`, required: false)
	+ This section serves as a header for the form.
* **Full Name** (`participant_full_name`, type: text, required: true)
	+ Enter your full name as it appears on your business card or ID.
* **Job Title** (`job_title_text`, type: text, required: true)
	+ Provide your professional title or role.
* **Company or Organization** (`company_org_name`, type: text, required: true)
	+ Enter your company or organization name.
* **Work Email** (`work_email_addr`, type: email, required: true)
	+ Enter your work email address.
* **-- Participation and Attendance --** (`note`, type: note, required: false)
	+ This section serves as a header for the next part of the form.
* **Will you be attending the sharing session** (`attendance_status`, type: select\_one, required: true)
	+ Select one option:
		+ Yes - I will be there
		+ No - Cannot attend
		+ Tentative - Awaiting confirmation
* **Your Participation Mode** (`participation_role`, type: select\_one, required: true)
	+ Select one option:
		+ Presenter - Sharing a practice
		+ Attendee - Listener and contributor
		+ Discussion Leader - Facilitating a breakout
* **Preferred Session Date** (`session_date_choice`, type: select\_one, required: true)
	+ Select one option:
		+ October 15 - 10 AM
		+ October 16 - 2 PM
		+ October 17 - 9 AM
* **-- Topics and Contributions --** (`note`, type: note, required: false)
	+ This section serves as a header for the next part of the form.
* **Proposed Topic for Sharing** (`proposed_topic_text`, type: text, required: false)
	+ If you are presenting, enter the title or main subject of your best practice.
* **Key Learning Objective** (`learning_objective_desc`, type: text, required: false)
	+ What should attendees take away from your session.
* **Estimated Duration for Your Share** (`sharing_duration_estimate`, type: select\_one, required: false)
	+ Select one option:
		+ 5-10 minutes - Lightning talk
		+ 15-20 minutes - Standard share
		+ 30 minutes - Deep dive
* **Material Types Provided** (`material_types_selection`, type: select\_multiple, required: false)
	+ Select all applicable options:
		+ Presentation Slides
		+ Recorded Video
		+ Case Study Document
		+ Live Software Demo
		+ No formal materials
* **-- Collaboration --** (`note`, type: note, required: false)
	+ This section serves as a header for the next part of the form.
* **Would you like to co-present with another participant** (`co_presenter_interest`, type: select\_one, required: true)
	+ Select one option:
		+ Yes - I have a partner
		+ Yes - I am looking for a partner
		+ No - I prefer presenting alone
* **Name of Co-presenter** (`co_presenter_name_text`, type: text, required: false)
	+ If you already identified a co-presenter, enter their name.
* **Any specific questions for the organizers** (`organizer_questions_text`, type: text, required: false)
	+ If you have any questions for the organizers, enter them here.
* **-- Final Confirmation --** (`note`, type: note, required: false)
	+ This section serves as a header for the last part of the form.
* **Consent to share your materials with other attendees** (`material_sharing_consent`, type: select\_one, required: true)
	+ Select one option:
		+ Yes - Share freely
		+ No - For viewing during session only
		+ Only after my explicit review
* **Date of Registration** (`registration_date_stamp`, type: date, required: true)
	+ Enter the date you are submitting this form.
