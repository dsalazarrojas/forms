# Appeal Request Form - Help Guide
## Purpose
The Appeal Request Form is designed to allow employees to submit appeals related to incidents of unfair treatment or discrimination. This form is used to provide detailed information about the incident, the action or resolution being sought, and any supporting evidence.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Ensure you have read and understood the form's purpose and guidelines.
2.  Fill out all required fields accurately and truthfully.
3.  Provide detailed and complete information about the incident, including dates, locations, and descriptions.
4.  Choose the correct type of treatment or discrimination that you experienced.
5.  Indicate if you have previously reported the issue and the date of the previous report.
6.  Specify the resolution or action you are seeking.
7.  Indicate if you have supporting documentation or evidence.
8.  Provide details about any witnesses who can support your claim.

## Field-by-Field Explanation

* **Full Name** (`employee_name`, text, required): Enter your full name as it appears on your official ID or documentation.
* **Employee ID** (`employee_id`, text, required): Enter your employee ID number as provided by the company.
* **Email Address** (`employee_email`, email, required): Enter your official email address as provided by the company.
* **Department** (`department`, text, required): Enter the name of your department or team as provided by the company.
* **Direct Manager Name** (`manager_name`, text, required): Enter the name of your direct manager as provided by the company.
* **Date of Incident** (`incident_date`, date, required): Enter the date on which the incident occurred.
* **Location of Incident** (`incident_location`, text, optional): Enter the location where the incident occurred.
* **Type of Unfair Treatment** (`treatment_type`, select_one, required): Choose the type of treatment or discrimination you experienced.
	+ Discrimination
	+ Harassment
	+ Retaliation
	+ Unequal pay
	+ Unfair discipline
	+ Breach of contract
	+ Other
* **Detailed Description of the Incident** (`incident_description`, text, required): Provide a detailed description of what happened.
* **Names of other individuals involved** (`individuals_involved`, text, optional): Enter the names of any other individuals involved in the incident.
* **Have you reported this issue previously?** (`reported_before`, select_one, required): Indicate if you have previously reported this issue.
	+ Yes, to my manager
	+ Yes, to HR
	+ Yes, to both
	+ False
* **Date of previous report** (`previous_report_date`, date, optional): Enter the date of the previous report, if applicable.
* **What resolution or action do you seek?** (`desired_outcome`, text, required): Specify the resolution or action you are seeking.
* **Do you have supporting documentation or evidence?** (`supporting_evidence`, select_one, optional): Indicate if you have supporting documentation or evidence.
	+ Yes, emails
	+ Yes, messages
	+ Yes, other documents
	+ False
* **Are there witnesses who can support your claim?** (`witnesses_available`, select_one, optional): Indicate if there are witnesses who can support your claim.
	+ True
	+ False
	+ Unsure
* **Witness names and contact details** (`witness_information`, text, optional): Enter the names and contact details of any witnesses.
