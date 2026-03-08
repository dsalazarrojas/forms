<thinking>

This form is used for requesting a police report from the relevant authorities. The purpose of this form is to provide essential information to the police department to aid them in creating an accurate and detailed report. To avoid duplication, please ensure that you have not already submitted a similar report or have not been informed that a report has already been filed.

</thinking>

# Police Report Request Form - Help Guide
## Purpose
The Police Report Request Form is used to provide information to the police department to aid them in creating an accurate and detailed report.

## How To Complete This Form
1. Ensure that you have not already submitted a similar report or have not been informed that a report has already been filed.
2. Select the category and police station involved, if applicable.
3. Enter a brief description of the incident.
4. Enter a detailed description of the incident in the "Description" field.
5. Indicate whether a police officer was present at the time of the incident.
6. Select the date and time of the incident.
7. Review and submit the form.

## Field-by-Field Explanation
- **Police Report Request Form** (`form_title`, text, required/optional): Enter the title of the incident or report.
  - This field is used to provide a brief name for the report.
  - Please enter a clear and concise title that summarizes the incident.
  
- **Category** (`category`, select_one, required/optional): Choose the relevant category for the incident.
  - This field helps the police department categorize the report for efficient processing.
  - Select 'Yes' if the incident is related to a specific category (e.g. theft, accident, etc.) and 'No' if it's not.

- **Description** (`description`, text, required/optional): Enter a brief description of the incident.
  - This field provides a brief overview of what happened.
  - Please keep it concise while ensuring it's still informative.
  
- **Description** (`form_description`, text, required/optional): Enter a detailed description of the incident.
  - This field provides a more detailed account of what happened.
  - Please be as thorough as possible to aid the police department.
  
- **Police Station** (`police_station`, select_one, required/optional): Choose the relevant police station involved.
  - This field helps the police department know which station to contact for further assistance.
  - Select 'Yes' if the police station is involved and 'No' otherwise.
  
- **Officer** (`officer`, select_one, required/optional): Indicate whether a police officer was present at the time of the incident.
  - This field helps the police department know whether an officer was involved.
  - Select 'Yes' if an officer was present and 'No' otherwise.
  
- **Date of Incident** (`date_incident`, date, required/optional): Enter the date of the incident.
  - This field provides the date of the incident.
  - Please enter in the correct date format (YYYY-MM-DD).
  
- **Time of Incident** (`time_incident`, time, required/optional): Enter the time of the incident.
  - This field provides the time of the incident.
  - Please enter in the 12-hour clock format (HH:MM).
