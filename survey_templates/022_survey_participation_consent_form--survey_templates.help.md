<thinking>Survey templates are used to create standardized forms for collecting and storing participant information and survey data in a structured and organized way. The purpose of this form is to ensure consistency and accuracy in data collection, which is important for survey analysis and research. This form can be used for various types of surveys, including those for academic, research, or business purposes. To avoid confusion, please make sure to fill out the form with the correct information for your specific survey purpose.</thinking>

# survey_participation_consent_form - Help Guide
## Purpose
This form is used to collect participant information and survey data for the purpose of survey analysis.

## How To Complete This Form
1. Read through each field carefully and fill out the required information.
2. Enter your participant information in the "Participant Information" field.
3. Specify the purpose of the survey in the "Survey Purpose" field.
4. Describe how the data will be used in the "Data Usage" field.
5. Indicate your rights as a participant in the "Participant Rights" field.
6. Select the types of data that will be collected in the "Data Collected" field.
7. Enter your contact information in the "Contact Information" field.
8. Confirm your consent to participate in the "Participant Consent" field (this field is not actually present in the form as per the yaml, it seems like a mistake)
9. Enter your contact email in the "Contact Email" field.
10. Enter your contact phone number in the "Contact Phone" field.
11. Add any additional comments in the "Additional Comments" field.
12. Select who will conduct the survey in the "Survey Conducter" field.
13. Indicate if you have been studied by prophets in the "Prophets Studied" field.
14. Select the types of surveys you will participate in in the "Participant Survey Prophets" field.
15. Enter the date and time of the survey in the "Participant Survey Date" and "Participant Survey Time" fields.
16. Enter the start and end time of the survey in the "Participant Survey Start Time" and "Participant Survey End Time" fields.
17. Enter the duration of the survey in the "Participant Survey Duration" field.
18. Enter the frequency of the survey in the "Participant Survey Frequency" field.
19. Enter the timezone of the survey in the "Participant Survey Timezone" field.
20. Enter the label for the survey timezone in the "Participant Survey Timezone Label" field.
21. Enter the offset for the survey timezone in the "Participant Survey Timezone Offset" field.
22. Indicate if the survey timezone is in DST in the "Participant Survey Timezone DST" field.
23. Enter the name of the survey timezone in the "Participant Survey Timezone Name" field.

## Field-by-Field Explanation

* **Participant Information** (`participant_info`, text, required): Enter your participant information here.
* **Survey Purpose** (`survey_purpose`, text, required): Specify the purpose of the survey.
* **Data Usage** (`data_usage`, text, required): Describe how the data will be used.
* **Data Collected** (`data_collected`, select_multiple, required): Select the types of data that will be collected.
* **Contact Information** (`contact_info`, email, required): Enter your contact information.
* **Contact Email** (`contact_email`, email, required): Enter your contact email.
* **Contact Phone** (`contact_phone`, text, optional): Enter your contact phone number (if applicable).
* **Additional Comments** (`participant_comments`, note, optional): Add any additional comments.
* **Survey Conducter** (`survey_conducter`, select_one, required): Select who will conduct the survey.
* **Prophets Studied** (`prophets_studied`, select_multiple, required): Indicate if you have been studied by prophets.
* **Participant Survey Prophets** (`participant_survey_prophets`, select_multiple, required): Select the types of surveys you will participate in.
* **Participant Survey Date** (`participant_survey_date`, date, required): Enter the date of the survey.
* **Participant Survey Time** (`participant_survey_time`, time, required): Enter the time of the survey.
* **Participant Survey Start Time** (`participant_survey_start_time`, time, required): Enter the start time of the survey.
* **Participant Survey End Time** (`participant_survey_end_time`, time, required): Enter the end time of the survey.
* **Participant Survey Duration** (`participant_survey_duration`, number, required): Enter the duration of the survey.
* **Participant Survey Frequency** (`participant_survey_frequency`, number, required): Enter the frequency of the survey.
* **Participant Survey Timezone** (`participant_survey_timezone`, number, required): Enter the timezone of the survey.
* **Participant Survey Timezone Label** (`participant_survey_timezone_label`, text, required): Enter the label for the survey timezone.
* **Participant Survey Timezone Offset** (`participant_survey_timezone_offset`, number, required): Enter the offset for the survey timezone.
* **Participant Survey Timezone DST** (`participant_survey_timezone_dst`, number, required): Indicate if the survey timezone is in DST.
* **Participant Survey Timezone Name** (`participant_survey_timezone_name`, text, required): Enter the name of the survey timezone.
