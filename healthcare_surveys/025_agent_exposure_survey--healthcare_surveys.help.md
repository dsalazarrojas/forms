<thinking>
The Agent Exposure Survey is designed to gather information about incidents where a worker has been exposed to a hazardous substance or agent, such as chemicals, biological agents, or radiation. This survey helps to document the exposure event and any subsequent medical attention received. The goal is to identify potential risks and implement preventive measures to avoid future exposures.
</thinking>

# Agent Exposure Survey - Help Guide
## Purpose
This form is intended to be completed by individuals who have been exposed to a hazardous substance or agent in the workplace. It collects information about the exposed individual, the exposure event, and any medical attention received. This information will help in assessing the risk of exposure and taking measures to prevent future incidents.

## How To Complete This Form
1. Please enter the name of the person who was exposed.
2. Enter the employee ID of the exposed individual.
3. Enter the department or unit where the exposure occurred.
4. Choose the date when the exposure occurred.
5. Select the approximate time when the exposure occurred.
6. Describe the circumstances leading to the exposure.
7. Choose the type of exposure that occurred.
8. Specify the exact substance, organism, or agent involved.
9. Select how the exposure occurred (route).
10. Specify where the exposure occurred (location).
11. Describe any immediate and delayed symptoms experienced.
12. Report whether the individual sought medical attention.
13. If medical attention was sought, provide details about the treatment.
14. Describe any immediate actions taken after the exposure.
15. Describe any follow-up actions implemented.
16. Suggest preventive measures to avoid future exposures.
17. Enter the name of the person reporting this exposure.
18. Enter the digital signature of the person reporting this exposure.

## Field-by-Field Explanation
* **Exposed Individual Name** (`exposed_individual_name`, text, **required**): Enter the name of the person who was exposed.
* **Employee ID** (`employee_id`, text, **required**): Enter the employee ID of the exposed individual.
* **Department/Unit** (`department_unit`, text, **required**): Enter the department or unit where the exposure occurred.
* **Exposure Date** (`exposure_date`, date, **required**): Enter the date when the exposure occurred.
* **Exposure Time** (`exposure_time`, time, **required**): Enter the approximate time when the exposure occurred.
* **-- Exposure Details --** (`exposure_details_header`, note, **optional**): This section is for providing additional details about the exposure.
* **Type of Exposure** (`exposure_type`, select_one, **required**): Select the type of exposure that occurred from the provided options.
* **Specific Agent Exposed To** (`specific_agent_exposed_to`, text, **required**): Specify the exact substance, organism, or agent involved in the exposure.
* **Route of Exposure** (`route_of_exposure`, select_one, **required**): Select how the exposure occurred from the provided options.
* **Exposure Location** (`exposure_location`, text, **required**): Specify where the exposure occurred.
* **Circumstances of Exposure** (`exposure_circumstances`, text, **required**): Describe the circumstances that led to the exposure.
* **Protective Equipment Used** (`protective_equipment_used`, text, **optional**): If applicable, enter the protective equipment used during the exposure.
* **-- Symptoms --** (`symptoms_header`, note, **optional**): This section is for providing details about symptoms experienced by the exposed individual.
* **Immediate Symptoms** (`immediate_symptoms`, select_one, **required**): Report whether the exposed individual experienced immediate symptoms.
* **Immediate Symptoms Description** (`immediate_symptoms_description`, text, **optional**): If yes, describe the immediate symptoms experienced.
* **Delayed Symptoms** (`delayed_symptoms`, select_one, **required**): Report whether the exposed individual experienced delayed symptoms.
* **Delayed Symptoms Description** (`delayed_symptoms_description`, text, **optional**): If yes, describe the delayed symptoms experienced.
* **Medical Attention Sought** (`medical_attention_sought`, select_one, **required**): Report whether the exposed individual sought medical attention.
* **Medical Attention Details** (`medical_attention_details`, text, **optional**): If yes, provide details about the medical attention received.
* **-- Actions Taken --** (`actions_taken_header`, note, **optional**): This section is for describing any immediate actions taken after the exposure.
* **Immediate Actions Taken** (`immediate_actions_taken`, text, **required**): Describe any immediate actions taken after the exposure.
* **Follow-up Actions** (`follow_up_actions`, text, **optional**): Describe any follow-up actions implemented.
* **Preventive Measures** (`preventive_measures`, text, **optional**): Suggest preventive measures to avoid future exposures.
* **Reporter Name** (`reporter_name`, text, **required**): Enter the name of the person reporting this exposure.
* **Reporter Signature** (`reporter_signature`, text, **required**): Enter the digital signature of the person reporting this exposure.

## Tips
* Make sure to provide accurate and detailed information about the exposure event.
* If the exposed individual is not available to complete the form, have another authorized person do so.
* Ensure that all fields are filled correctly, as required.
