# sports_organization_legal_complaint_intake_form - Help Guide
## Purpose
This form is designed to collect and manage complaints related to sports organizations. It helps the organization to identify and address potential issues in a structured and organized way.

## How To Complete This Form
1. Please fill out the form accurately and completely, using your best judgment and available information.
2. Ensure that you are completing the form for the correct purpose - to report a new complaint.
3. If you have already submitted a complaint, do not re-submit it.

## Field-by-Field Explanation

* **Contact Details**: Please provide your name, contact information, and any other relevant contact details.
	+ **Contact Details** (`contact_details`, text, required: false): Enter your name, email address, phone number, or any other relevant contact information.
* **Complainant Description**: Please describe the issue or problem you are reporting.
	+ **Complainant Description** (`complaint_description`, text, required: false): Describe the incident, issue, or problem you are reporting.
* **Complaint Type**: Select the type of complaint you are reporting.
	+ **Complaint Type** (`complaint_type`, select_one, required: false): Choose 'Yes' if the complaint is related to an incident, issue, or problem that occurred during a sports activity.
* **Complaint Date**: Select the date when the complaint occurred.
	+ **Complaint Date** (`complaint_date`, date, required: false): Enter the date when the incident, issue, or problem occurred.
* **Incident Location**: Provide the location where the incident occurred.
	+ **Incident Location** (`incident_location`, text, required: false): Enter the location where the incident, issue, or problem occurred.
* **Incident Time**: Select the time when the incident occurred.
	+ **Incident Time** (`incident_time`, time, required: false): Choose 'Yes' if the incident occurred at the specified time.
* **Witness Details**: If there were witnesses, provide their contact information and any other relevant details.
	+ **Witness Details** (`witness_details`, text, required: false): Enter the name, contact information, and any other relevant contact details for the witness.
* **Sport Type**: Select the type of sport related to the complaint.
	+ **Sport Type** (`sport_type`, select_multiple, required: false): Choose the types of sports that are related to the complaint.
* **Sport Level**: Select the level of the sport related to the complaint.
	+ **Sport Level** (`sport_level`, select_one, required: false): Choose the level of the sport (High, Low).
* **Sport Gender**: Select the gender of the sport related to the complaint.
	+ **Sport Gender** (`sport_gender`, select_one, required: false): Choose 'Yes' if the sport is related to males or females.
* **Sport Age Group**: Select the age group of the sport related to the complaint.
	+ **Sport Age Group** (`sport_age_group`, select_one, required: false): Choose 'Yes' if the sport is related to a specific age group.
* **Sport Equipment**: If equipment is related to the complaint, provide details.
	+ **Sport Equipment** (`sport_equipment`, text, required: false): Enter the type and details of the equipment related to the complaint.
* **Sport Injury**: If an injury is related to the complaint, provide details.
	+ **Sport Injury** (`sport_injury`, text, required: false): Enter the details of the injury.
* **Sport Injury Severity**: Select the severity of the injury related to the complaint.
	+ **Sport Injury Severity** (`sport_injury_severity`, select_one, required: false): Choose 'Yes' if the injury is severe.
* **Sport Injury Location**: Provide the location of the injury.
	+ **Sport Injury Location** (`sport_injury_location`, text, required: false): Enter the location of the injury.
* **Sport Injury Details**: Provide any other relevant details about the injury.
	+ **Sport Injury Details** (`sport_injury_details`, text, required: false): Enter any other relevant details about the injury.
* **Legal Action**: Select the type of legal action related to the complaint.
	+ **Legal Action** (`legal_action`, select_one, required: false): Choose 'Yes' if you want to take legal action.
* **Sport License**: Select whether the sport requires a license.
	+ **Sport License** (`sport_license`, select_one, required: false): Choose 'Yes' if the sport requires a license.
* **Staff Responsible**: If there is staff responsible for the complaint, provide their contact information.
	+ **Staff Responsible** (`staff_responsible`, select_multiple, required: false): Enter the name, contact information, and any other relevant contact details for the staff responsible.
* **Team Details**: If there is a team related to the complaint, provide their details.
	+ **Team Details** (`team_details`, text, required: false): Enter the name, contact information, and any other relevant details for the team.
* **Sport Fees**: Select whether there were fees related to the complaint.
	+ **Sport Fees** (`sport_fees`, select_one, required: false): Choose 'Yes' if there were fees involved.
* **Sport Clubs**: Select whether there were clubs related to the complaint.
	+ **Sport Clubs** (`sport_clubs`, select_multiple, required: false): Choose 'Yes' if there were clubs involved.
* **Sports League**: Select whether there is a sports league related to the complaint.
	+ **Sports League** (`sports_league`, select_one, required: false): Choose 'Yes' if there is a sports league involved.
* **Sport Commission**: Select whether there is a sport commission related to the complaint.
	+ **Sport Commission** (`sport_commission`, select_one, required: false): Choose 'Yes' if there is a sport commission involved.
* **Submit**: Confirm that you have completed the form correctly.
	+ **Submit** (`submit`, select_one, required: false): Choose 'Yes' to submit the form.
