<thinking>
The purpose of this form is to collect information about the user's preferences regarding sharing their health-related data. This form is likely to be used in a healthcare context, where patients or their authorized representatives are asked to provide their consent and specify which organizations or entities they want to share their data with, and for what purposes. This form is likely to be used for administrative or compliance purposes, such as patient data management or research project setup.

Please note that this form is not a medical questionnaire, but a survey to collect consent and preferences for data sharing, hence the name "health_information_sharing_preferences_survey". 

It is likely that this form will be used in conjunction with existing patient data management systems.

It is also possible that some of the questions asked are similar to others used in other contexts, so some form questions might already have answers or information available from other sources.
</thinking>

# health_information_sharing_preferences_survey - Help Guide
## Purpose
This form is used to collect information about your health data sharing preferences. Please fill it out carefully to specify which organizations or entities you want to share your data with, and for what purposes.

## How To Complete This Form
Please fill out this form carefully, one page at a time. Each page represents a section of questions related to a specific topic. You can navigate between pages using the navigation buttons.

## Field-by-Field Explanation

### Page 1: Patient Preferences

* **Patient Preferences**: (`patient_preferences`, text, required)
	+ This field is for general patient preferences that are not specific to data sharing. Please provide your answers in a free text format. 
* 

### Page 2: Health Care Provider

* **Health Care Provider**: (`healthcare_provider`, select_one, required)
	+ Choose who you want to have access to your data:
		- Family Member
		- Authorized Representative
		- Other

### Page 3: Data Sharing Preferences

* **Data Sharing Preferences**: (`data_sharing_preferences`, select_multiple, required)
	+ Choose which organizations you want to share your data with:
		- Share with health care providers
		- Share with insurance companies
		- Share with government agencies
		- Share with research institutions
		- Share with family members
		- Share with friends and family
		- Share with other
		- Do not share

### Page 4: Data Sharing Purposes

* **Data Sharing Purposes**: (`data_sharing_purposes`, select_multiple, required)
	+ Choose which purposes you want to share your data for:
		- Treatment and Care
		- Research and Study
		- Billing and Insurance
		- Government and Administrative
		- Other
		- Do not share

### Page 5: Data Sharing Restrictions

* **Data Sharing Restrictions**: (`data_sharing_restrictions`, select_multiple, required)
	+ Choose what types of data you do not want to share:
		- Time-sensitive data
		- Sensitive data
		- Location data
		- Other
		- Do not share
