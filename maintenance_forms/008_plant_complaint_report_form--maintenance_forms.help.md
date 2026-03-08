<thinking>
This form is designed to collect information for plant complaints. It will be used to report and track complaints related to a plant's performance or issues. 
The form is not meant to be filled out multiple times by the same person, so each submission should be unique.
</thinking>

# Plant Complaint Report Form - Help Guide
## Purpose
The Plant Complaint Report Form is designed to collect and track complaints related to a plant's performance or issues. This form should only be filled out once for each complaint.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the resident's information, including their name.
2. Input the contact number of the resident.
3. Identify if the plant location is relevant to the complaint.
4. Describe the issue in detail in the "Issue Description" field.
5. If applicable, upload photo evidence to support the complaint.
6. Confirm if the complaint was submitted by the original person experiencing the issue or if it was submitted by staff.
7. Choose which staff member(s) was responsible for submitting the complaint.
8. Input the date and time the complaint was reported.
9. Input the date and time the complaint was received.
10. Update the status of the complaint, such as if it is active or inactive.
11. Identify if the complaint was assigned to a specific staff member.
12. Confirm if the complaint was closed by a staff member.
13. Add any additional comments or notes about the complaint.

## Field-by-Field Explanation

* **Resident Information** (`resident_input`, text, required: false): Enter the resident's information, including their name.
* **Name** (`name`, text, required: false): Enter the name of the person submitting the complaint.
* **Contact Number** (`contact_number`, text, required: false): Enter the contact number of the person submitting the complaint.
* **Plant Location** (`plant_location`, select_one, required: false): Identify if the plant location is relevant to the complaint.
	+ Choose "Yes" if the complaint is related to the plant location.
* **Issue Description** (`issue_description`, text, required: false): Describe the issue or problem with the plant in as much detail as possible.
* **Photo Evidence** (`photos`, note, required: false): If applicable, upload photos to support the complaint.
* **Submitted By** (`submitted_by`, select_one, required: false): Confirm if the complaint was submitted by the original person experiencing the issue or if it was submitted by staff.
	+ Choose "Yes" if the complaint was submitted by the original person experiencing the issue.
* **Staff/Submitter** (`submitter`, select_multiple, required: false): Choose which staff member(s) was responsible for submitting the complaint.
* **Date/Time Reported** (`date_time_reported`, date, required: false): Input the date and time the complaint was reported.
* **Date/Time Received** (`date_time_received`, date, required: false): Input the date and time the complaint was received.
* **Status** (`status`, select_one, required: false): Update the status of the complaint, such as if it is active or inactive.
	+ Choose "Active" if the complaint is currently being worked on.
	+ Choose "Inactive" if the complaint has been resolved.
* **Assigned To** (`assigned_to`, select_one, required: false): Identify if the complaint was assigned to a specific staff member.
	+ Choose "Yes" if the complaint was assigned to a staff member.
* **Closed By** (`closed_by`, select_one, required: false): Confirm if the complaint was closed by a staff member.
	+ Choose "Yes" if the complaint was closed by a staff member.
* **Comments** (`comments`, text, required: false): Add any additional comments or notes about the complaint.

Note: The fields marked as "required: false" are not mandatory and can be completed or left blank as needed.
