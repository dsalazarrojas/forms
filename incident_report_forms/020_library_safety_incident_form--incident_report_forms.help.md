<thinking>
To create a comprehensive user-facing help guide for the Library Safety Incident Form, I'll analyze the form structure and content based on the provided YAML fields. Since the form is intended for reporting incidents in a library setting, it's likely used to gather information on potential safety concerns or incidents that occurred within the library. This form will help identify areas of concern and guide follow-up actions.

The form consists of various fields that cover the incident date, type, location, description, reported by, safety measures, investigation result, outcome, recommendations, and follow-up. Each field is designed to collect specific information that will aid in understanding and addressing the incident.

</thinking>

# Library Safety Incident Form - Help Guide
## Purpose
The Library Safety Incident Form is designed to collect information about incidents that occurred within the library. This form helps identify potential safety concerns and guides follow-up actions to prevent similar incidents in the future.

## How To Complete This Form
To fill out the Library Safety Incident Form, follow these steps:

1. Enter the date the incident occurred.
2. Select the type of incident that happened (e.g., "Yes," "No," or Other).
3. Provide the location where the incident took place.
4. Describe the incident in detail.
5. Indicate if you reported the incident (Yes, No, or Other).
6. If you reported the incident as "Other," provide a description.
7. Identify any safety measures taken or needed (e.g., "Yes," "No," or Other).
8. If you selected "Other," describe the safety measure.
9. Determine if an investigation was conducted (Yes, No, or Other).
10. If you selected "Other," describe the investigation result.
11. Indicate the outcome of the incident (e.g., "Yes," "No," or Other).
12. If you selected "Other," describe the outcome.
13. Provide any recommendations for future prevention.
14. Indicate if follow-up actions are needed (Yes, No, or Other).
15. If you selected "Other," describe the follow-up actions.

## Field-by-Field Explanation
### Incident Date
* **Incident Date** (`incident_date`, date, required): Enter the date the incident occurred.

### Incident Type
* **Incident Type** (`incident_type`, select_one, required): Select the type of incident that happened (e.g., "Yes," "No," or Other).

### Incident Location
* **Incident Location** (`incident_location`, text, required): Provide the location where the incident took place.

### Incident Description
* **Incident Description** (`incident_description`, text, required): Describe the incident in detail.

### Reported By
* **Incident Reported By** (`incident_reported_by`, select_multiple, required): Indicate if you reported the incident (Yes, No, or Other). If Other, provide a description.

### Other (if applicable)
* **Other** (`incident_reported_by_other`, text, required if "Other" is selected): If you reported the incident as "Other," provide a description.

### Safety Measures
* **Incident Safety Measure** (`incident_safety_measure`, select_multiple, required): Identify any safety measures taken or needed (e.g., "Yes," "No," or Other). If Other, describe the safety measure.

### Other (if applicable)
* **Incident Safety Measure Other** (`incident_safety_measure_other`, text, required if "Other" is selected): If you selected "Other," describe the safety measure.

### Other (if applicable)
* **Incident Safety Measure Other 2** (`incident_safety_measure_other_2`, text, optional): This field is optional and should only be filled out if the previous safety measure field is not applicable.

### Investigation Result
* **Incident Investigation Result** (`incident_investigation_result`, select_one, required): Determine if an investigation was conducted (Yes, No, or Other). If Other, describe the investigation result.

### Other (if applicable)
* **Incident Investigation Result Other** (`incident_investigation_result_other`, text, required if "Other" is selected): If you selected "Other," describe the investigation result.

### Other (if applicable)
* **Incident Investigation Result Other 2** (`incident_investigation_result_other_2`, text, optional): This field is optional and should only be filled out if the previous investigation result field is not applicable.

### Outcome
* **Incident Outcome** (`incident_outcome`, select_one, required): Indicate the outcome of the incident (e.g., "Yes," "No," or Other). If Other, describe the outcome.

### Other (if applicable)
* **Incident Outcome Other** (`incident_outcome_other`, text, required if "Other" is selected): If you selected "Other," describe the outcome.

### Other (if applicable)
* **Incident Outcome Other 2** (`incident_outcome_other_2`, text, optional): This field is optional and should only be filled out if the previous outcome field is not applicable.

### Outcome Description
* **Incident Outcome Other Description** (`incident_outcome_other_description`, text, optional): This field is optional and should only be filled out if the previous outcome field is not applicable.

### Recommendations
* **Incident Recommendations** (`incident_recommendations`, text, required): Provide any recommendations for future prevention.

### Follow-up
* **Follow-up** (`incident_follow_up`, select_one, required): Indicate if follow-up actions are needed (Yes, No, or Other).

### Other (if applicable)
* **Incident Follow Up Other** (`incident_follow_up_other`, text, required if "Other" is selected): If you selected "Other," describe the follow-up actions.

### Other (if applicable)
* **Incident Follow Up Other 2** (`incident_follow_up_other_2`, text, optional): This field is optional and should only be filled out if the previous follow-up field is not applicable.

### Follow-up Description
* **Incident Follow Up Other Description** (`incident_follow_up_other_description`, text, optional): This field is optional and should only be filled out if the previous follow-up field is not applicable.

## Tips
* Make sure to fill out each field accurately and completely.
* If a field requires a description, provide a clear and detailed description.
* Review the form carefully before submitting.
* If you have any questions or need help, contact the library staff.
