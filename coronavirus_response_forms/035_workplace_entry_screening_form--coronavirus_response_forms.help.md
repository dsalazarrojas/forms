<thinking> 
This form is designed to screen employees for potential exposure to COVID-19. It is a tool for employers to identify employees who may have been exposed to the virus and take necessary precautions to prevent further transmission. The form is divided into several sections to gather information about the employee's travel history, symptoms, and potential exposure risks. 

To ensure accuracy, please complete this form truthfully, and if you have any doubts or concerns, you may refer to the provided explanations for each field. 

This form is not a substitute for medical advice or diagnosis. If you suspect you or someone you have been in contact with may have COVID-19, contact your healthcare provider or local health authority immediately. 
</thinking>

# Workplace Entry Screening Form - Help Guide
## Purpose
This form is designed to screen employees for potential exposure to COVID-19 and gather information to help prevent the spread of the virus in the workplace.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your Employee Information, including your name and contact information.
2. Provide your travel history for the past 14 days, including dates and destinations.
3. Answer questions about any symptoms you have experienced recently, such as fever, cough, etc.
4. Indicate if you have had close contact with anyone who has COVID-19 or if you have been in contact with someone with a similar illness.
5. Report your exposure risk level based on your travel history and symptoms.
6. If you have received a health certificate or test results, report them here.
7. If there are any travel restrictions or contact tracing requirements, report them here.
8. Finally, confirm whether you are self-isolating and if you have visited any health clinics.

## Field-by-Field Explanation

* **Employee Information** (`employee_info`, text, required): Enter your name and contact information to help the workplace contact you if needed.
* **Travel History** (`travel_history`, text, required): Provide your travel history for the past 14 days, including dates and destinations. This will help the workplace assess your risk of exposure to COVID-19.
* **Symptoms** (`symptoms`, select_one, required): Answer "Yes" or "No" to any of the symptoms listed:
	+ Fever
	+ Cough
	+ Shortness of breath or difficulty breathing
	+ Chest pain or discomfort
	+ Sore Throat
	+ Muscle aches or pains
	+ Diarrhea
	+ Vomiting
	+ Runny nose or congestion
	+ Headache
	+ Fatigue
	+ New or unexplained loss of taste or smell
	+ Nausea or vomiting
	+ Dizziness
	+ Confusion or disorientation
	+ Difficulty staying or falling asleep
* **Close Contact** (`close_contact`, select_multiple, required): Indicate if you have had close contact with:
	+ Someone who has COVID-19
	+ A family member
	+ Close friend
	+ Neighbor
	+ Coworker
	+ Classmate
	+ Team member
	+ Someone in the same household
* **Exposure Risk** (`exposure_risk`, select_one, required): Report your exposure risk level as:
	+ Low
	+ Moderate
	+ High
* **Health Certificate** (`health_certificate`, select_one, required): Confirm if you have received a health certificate or test results:
	+ True
	+ False
	+ Not Sure
* **Test Results** (`test_results`, select_one, required): Report if you have received test results:
	+ True
	+ False
	+ Not Done
* **Travel Restrictions** (`travel_restrictions`, select_one, required): Report if there are any travel restrictions:
	+ True
	+ False
* **Contact Tracing** (`contact_tracing`, select_one, required): Confirm if contact tracing is required:
	+ True
	+ False
* **Self Isolation** (`self_isolation`, select_one, required): Confirm if you are self-isolating:
	+ True
	+ False
* **Health Clinics** (`health_clinics`, select_one, required): Report if you have visited a health clinic:
	+ True
	+ False
