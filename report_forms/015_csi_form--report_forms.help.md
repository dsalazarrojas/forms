<thinking>CSI Form - Purpose and Relevance Check
This form is designed to collect information from crime scene investigators (CSI) to document the details of a reported incident. This form should only be filled out by authorized personnel who have been assigned to investigate the incident. The form is used to provide a comprehensive report of the incident, including the summary, case details, and evidence collected. To ensure that the form is filled out correctly and accurately, please make sure you are using the most recent version of the form and that you have been properly trained on its use.</thinking>

# CSI Form - Help Guide
## Purpose
The CSI Form is used to document the details of a reported incident, including the summary, case details, and evidence collected. It is an essential tool for crime scene investigators to provide a comprehensive report of their findings.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the case number, investigating officer's name, and date of report. These fields are required and must be filled out accurately.
2. Provide a brief summary of the incident, including the location and type of offense.
3. Describe the condition of the scene upon arrival and the weather and lighting conditions.
4. List the total number of evidence items collected and provide a brief evidence log summary.
5. Indicate if forensic tests were requested and if the scene was securely locked and taped.
6. Finally, fill out the date and time of transfer and the person receiving the evidence.

## Field-by-Field Explanation

* **Case Number** (`case_number`, text, required): Enter the unique case number assigned to the incident.
* **Primary Investigating Officer** (`investigating_officer`, text, required): Enter the name of the officer investigating the incident.
* **Date of Report** (`report_date`, date, required): Enter the date of the report in YYYY-MM-DD format.
* **Time of Report** (`report_time`, time, required): Enter the time of the report in 12-hour format.
* **Location of Scene** (`incident_location`, text, required): Enter a description of the location of the scene, including the street address or specific description.
* **Type of Offense** (`offense_type`, select_one, required): Select the type of offense from the list provided, such as Homicide, Burglary, Assault, Vandalism, Arson, or Other.
* **Condition of Scene upon Arrival** (`scene_condition`, text, required): Describe the condition of the scene upon arrival, such as secure, disturbed, or contaminated.
* **Weather and Lighting Conditions** (`weather_conditions`, text, optional): Describe the weather and lighting conditions at the scene.
* **Total Number of Evidence Items Collected** (`evidence_item_count`, number, required): Enter the total number of evidence items collected.
* **Forensic Tests Requested** (`forensic_tests_requested`, select_multiple, optional): Select all the forensic tests that were requested, such as DNA Analysis, Fingerprinting, Ballistics, Toxicology, Digital Forensics, or Trace Evidence.
* **Brief Evidence Log Summary** (`evidence_log_summary`, text, required): Provide a brief summary of the evidence collected.
* **Person Receiving Evidence** (`chain_of_custody_transfer`, text, required): Enter the name of the person receiving the evidence.
* **Date and Time of Transfer** (`transfer_date_time`, date, required): Enter the date and time of transfer in YYYY-MM-DD and 12-hour format, respectively.
* **Scene Securely Locked and Tape Applied** (`security_check`, select_one, required): Select if the scene was securely locked and tape applied, True or False.
