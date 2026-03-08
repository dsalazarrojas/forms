# Warehouse Fire Incident Form - Help Guide
## Purpose
This form is used to report and track warehouse fire incident information, ensuring that the correct details are captured accurately and efficiently.

## How To Complete This Form

1.  Ensure you have permission to report the incident before filling out this form.
2.  Review the incident and fill out the form in a quiet and distraction-free area.
3.  Answer each field accurately and honestly to the best of your ability.

## Field-by-Field Explanation

*   **Incident Type** (`incident_type`, text, required: false): This field is used to describe the type of incident that occurred. You can describe the type of fire, such as electrical, gas leak, or other.
*   **Location** (`location`, text, required: false): This field is used to specify the location of the incident. Provide the exact address or area within the warehouse where the incident occurred.
*   **Fire Size** (`fire_size`, text, required: false): This field is used to describe the size of the fire. You can estimate the size of the fire based on your observation.
*   **Extinguishing Method** (`extinguishing_method`, text, required: false): This field is used to describe the method used to extinguish the fire. If the fire was extinguished, you can describe the method used.
*   **Cause** (`cause`, text, required: false): This field is used to describe the cause of the fire. You can provide any relevant information about what might have caused the fire.
*   **Time of Incident** (`time_of_incident`, time, required: false): This field is used to specify the time when the incident occurred. Be as accurate as possible.
*   **Number of People Affected** (`number_of_people_affected`, number, required: false): This field is used to specify the number of people affected by the incident. If no people were affected, you can enter 0.
*   **Property Damage** (`property_damage`, select_multiple, required: true): This field is used to report if there was any property damage caused by the incident. Select all that apply.
*   **Fire Department Involved** (`fire_department_involved`, select_multiple, required: true): This field is used to report if the fire department was involved in the incident response. Select all that apply.
*   **Insurance Claim Status** (`insurance_claim_status`, select_multiple, required: true): This field is used to report the status of any insurance claims related to the incident. Select all that apply.
*   **Investigation Status** (`investigation_status`, select_multiple, required: true): This field is used to report the status of any ongoing investigation related to the incident. Select all that apply.
*   **Witness Statements** (`witness_statments`, select_multiple, required: true): This field is used to report if witness statements were gathered during the incident response. Select all that apply.
