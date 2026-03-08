# police_department_incident_form - Help Guide

## Purpose
The police_department_incident_form is used for comprehensive incident reporting and documentation. It collects information on suspects, officers involved, and incident details, which may include crimes, accidents, or other events.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the Incident Date in the format mm/dd/yyyy.
2.  Enter the incident time in 12-hour clock format (e.g., 08:00 for 8 am).
3.  Enter the location where the incident occurred.
4.  Select the type of incident from the list of options provided.
5.  Enter any additional information about the suspect, including demographics and contact details.
6.  Enter the suspect's name, address, date of birth, and phone number.
7.  Enter the name, badge number, and unit number of the officers involved.
8.  Select the suspect's race and gender.
9.  Enter the suspect's age.
10.  Select the unit for the officers involved.
11.  Enter a brief description of the incident.
12.  Enter the case number (if available).
13.  Enter the officer's name and badge number for the responding officer.
14.  Enter the name and badge number of the case officer.
15.  Enter the name and badge number of the incident supervisor.

## Field-by-Field Explanation

* **Incident Date** (`incident_date`, date, required): Enter the date of the incident in the format mm/dd/yyyy.
* **Incident Time** (`incident_time`, time, required): Enter the time of the incident in 12-hour clock format (e.g., 08:00 for 8 am).
* **Incident Location** (`incident_location`, text, required): Enter the location where the incident occurred.
* **Incident Type** (`incident_type`, select_one, required): Select the type of incident from the list of options provided.
* **Suspect Info** (`suspect_info`, text, optional): Enter any additional information about the suspect.
* **Suspect Name** (`suspect_name`, text, optional): Enter the suspect's name.
* **Suspect Address** (`suspect_address`, text, optional): Enter the suspect's address.
* **Suspect DOB** (`suspect_dob`, text, optional): Enter the suspect's date of birth.
* **Suspect Phone** (`suspect_phone`, text, optional): Enter the suspect's phone number.
* **Officer 1 Name** (`officer_1_name`, text, required): Enter the name of the first officer involved.
* **Officer 1 Badge Number** (`officer_1badge_number`, text, required): Enter the badge number of the first officer involved.
* **Officer 1 Badge Suffix** (`officer_1badge_number_suffix`, text, optional): Enter the badge suffix of the first officer involved.
* **Officer 2 Name** (`officer_2_name`, text, optional): Enter the name of the second officer involved.
* **Officer 2 Badge Number** (`officer_2badge_number`, text, optional): Enter the badge number of the second officer involved.
* **Officer 2 Badge Suffix** (`officer_2badge_number_suffix`, text, optional): Enter the badge suffix of the second officer involved.
* **Suspect Race** (`suspect_race`, text, optional): Select the suspect's race.
* **Suspect Gender** (`suspect_gender`, text, optional): Select the suspect's gender.
* **Suspect Age** (`suspect_age`, text, optional): Enter the suspect's age.
* **Officer 1 Unit** (`officer_1_unit`, text, optional): Select the unit for the first officer involved.
* **Officer 2 Unit** (`officer_2_unit`, text, optional): Select the unit for the second officer involved.
* **Incident Description** (`incident_description`, text, optional): Enter a brief description of the incident.
* **Case Number** (`case_number`, text, optional): Enter the case number (if available).
* **Incident Officer** (`incident_officer`, text, optional): Enter the name of the incident officer.
* **Incident Case Officer** (`incident_case_officer`, text, optional): Enter the name and badge number of the case officer.
* **Incident Supervisor** (`incident_supervisor`, text, optional): Enter the name and badge number of the incident supervisor.

## Tips

*   Make sure to enter accurate and complete information for all fields.
*   Double-check for any duplicate entries or missing information.
*   Refer to your department's policies and procedures for additional guidelines on incident reporting.
*   If you're unsure about any field or information, consult with your supervisor or peers.
