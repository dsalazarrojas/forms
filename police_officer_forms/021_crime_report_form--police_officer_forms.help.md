# crime_report_form - Help Guide

## Purpose
The "crime_report_form" is a form designed to gather information about reported crimes. This form helps police officers document and track crime incidents, providing essential details for investigation and analysis.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill out the "Incident Details" section, providing a brief description of the crime.
2. Enter the suspect's information, including their age and gender (if known).
3. If applicable, provide additional witness statements, evidence collected, and suspect statements.
4. Select the crime type and category from the provided options.
5. Enter the witness's information, including their age and gender (if known).
6. Fill out the "Crime Details" section, providing a detailed description of the crime.
7. Sign the form with your police ID number and your signature.
8. Enter your police agency.

## Field-by-Field Explanation
### Incident Details
* **Incident Details** (`incident_details`, `text`, required): Briefly describe the crime incident.
### Suspect Info
* **Suspect Info** (`suspect_info`, `text`, required): Provide the suspect's name and any other relevant information available.
### Witness Info
* **Witness Info** (`witness_info`, `text`, optional): Provide the witness's name and any other relevant information available.
### Evidence Collected
* **Evidence Collected** (`evidence_collected`, `text`, optional): List any evidence collected during the investigation.
### Witness Statement
* **Witness Statement** (`witness_statement`, `text`, optional): Provide a description of what the witness saw.
### Crime Type
* **Crime Type** (`crime_type`, `select_one`, required): Select the type of crime committed (e.g., Burglary, Theft, Assault, etc.).
### Crime Category
* **Crime Category** (`crime_category`, `select_one`, required): Select the category of crime (e.g., Burglary, Theft, Assault, etc.).
### Suspect Age
* **Suspect Age** (`suspect_age`, `number`, required): Enter the suspect's age.
### Suspect Gender
* **Suspect Gender** (`suspect_gender`, `select_one`, required): Select the suspect's gender (Male, Female, etc.).
### Witness Age
* **Witness Age** (`witness_age`, `number`, optional): Enter the witness's age.
### Witness Gender
* **Witness Gender** (`witness_gender`, `select_one`, optional): Select the witness's gender (Male, Female, etc.).
### Relevant Info
* **Relevant Info** (`suspect_relevant_info`, `text`, optional): Enter any other relevant information.
### Witness Statement 2
* **Witness Statement 2** (`witness_statement_2`, `text`, optional): Provide another description of what the witness saw.
### Suspect Statement
* **Suspect Statement** (`suspect_statement`, `text`, optional): Provide a description of what the suspect said.
### Investigation Status
* **Investigation Status** (`investigation_status`, `select_one`, optional): Select the current status of the investigation (In Progress, Suspense, Closed, etc.).
### Police ID
* **Police ID** (`police_id`, `number`, optional): Enter your police ID number.
### Officer Name
* **Officer Name** (`officer_name`, `text`, optional): Enter your name.
### Officer ID
* **Officer ID** (`officer_id`, `number`, optional): Enter your police ID number.
### Date Reported
* **Date Reported** (`date_reported`, `date`, required): Enter the date the crime was reported.
### Time Reported
* **Time Reported** (`time_reported`, `time`, required): Enter the time the crime was reported.
### Location
* **Location** (`location`, `text`, required): Enter the location of the crime.
### Crime Details
* **Crime Details** (`crime_details`, `text`, required): Provide a detailed description of the crime.
### Officer Signature
* **Officer Signature** (`officer_signature`, `note`, required): Sign the form with your police ID number and signature.
### Witness Signature
* **Witness Signature** (`witness_signature`, `note`, optional): Sign the form with your witness's signature (if applicable).
### Police Agency
* **Police Agency** (`police_agency`, `select_one`, required): Select your police agency.
