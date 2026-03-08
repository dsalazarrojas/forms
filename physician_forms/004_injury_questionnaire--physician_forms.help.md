# injury_questionnaire - Help Guide
## Purpose
This form is designed to collect detailed information about an incident that led to an injury, allowing medical professionals to assess and document the severity of the injury.

## How To Complete This Form
To complete this form, please follow these steps:

1. Begin by carefully reading the introduction page, which serves as a brief explanation of the form's purpose and instructions.
2. Answer each question accurately and thoroughly, providing as much detail as possible.
3. For fields where you can select multiple options, choose all relevant options that apply.
4. For fields with date options, select the date of the incident that caused the injury.
5. For fields with select_one or select_multiple options, choose the option that best describes your experience.

## Field-by-Field Explanation
- **injury_questionnaire_intro** (`note`, `injury_questionnaire_intro`, required: false): This is a brief introduction to the form, providing context and instructions on how to complete it.
- **incident_details** (`text`, `incident_details`, required: false): Describe the incident that caused the injury in as much detail as possible.
- **incident_type** (`select_one`, `incident_type`, required: false):
	* **Bicycle**: The incident occurred while riding a bicycle.
	* **Motorcycle**: The incident occurred while riding a motorcycle.
	* **Car**: The incident occurred while driving or riding a car.
	* **Other**: The incident occurred in a different way, please specify in the `injury_location` field.
- **injury_date** (`date`, `injury_date`, required: false): Select the date of the incident that caused the injury.
- **injury_location** (`text`, `injury_location`, required: false): Describe the location where the incident occurred.
- **injury_description** (`text`, `injury_description`, required: false): Describe the injury in as much detail as possible, including any pain or discomfort you experienced.
- **injury_severity** (`text`, `injury_severity`, required: false): Describe the severity of your injury, e.g., minor, moderate, or severe.
- **medical_history** (`text`, `medical_history`, required: false): Share any relevant medical history that may be related to your injury.
- **symptoms** (`select_multiple`, `symptoms`, required: false):
	* **Headache**: You experienced a headache related to the injury.
	* **Fatigue**: You experienced fatigue related to the injury.
	* **Nausea**: You experienced nausea related to the injury.
	* **Pain**: You experienced pain related to the injury.
	* **Dizziness**: You experienced dizziness related to the injury.
- **activity_impact** (`select_one`, `activity_impact`, required: false):
	* **No Impact**: The activity had no impact on your injury.
	* **Some Impact**: The activity had some impact on your injury.
	* **Total Impact**: The activity had a total impact on your injury.
- **medical_treatment** (`select_one`, `medical_treatment`, required: false):
	* **Emergency Room**: You received medical treatment in an emergency room.
	* **Doctor**: You received medical treatment from a doctor.
	* **Clinic**: You received medical treatment in a clinic.
	* **Home Care**: You received medical treatment at home.
	* **Hospitalization**: You were hospitalized due to your injury.

## Tips
- Please answer questions accurately and thoroughly, providing as much detail as possible.
- If you are unsure about any question, try your best to provide an answer that best describes your experience.
- If you have any additional information that may be relevant to your injury, please include it in the `injury_description` field.
- If you experience any symptoms or pain after the incident, please select all relevant options in the `symptoms` field.
