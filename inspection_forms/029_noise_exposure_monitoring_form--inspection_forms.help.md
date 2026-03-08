<thinking>
This form is likely used for monitoring and recording the noise exposure levels of employees in a workplace. It may be used by safety officers or human resources personnel to track and report on potential noise hazards and ensure employees are taking necessary precautions.
The form should not be used for other purposes or filled out by anyone who doesn't have access to the necessary information or authorization to complete it.
</thinking>

# Noise Exposure Monitoring Form - Help Guide
## Purpose
The Noise Exposure Monitoring Form is a tool used by safety officers or human resources personnel to monitor and record the noise exposure levels of employees in a workplace. This form helps to identify potential noise hazards and ensure employees are taking necessary precautions to protect their hearing.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the ID number of the workplace where the monitoring took place.
2. Enter the ID number of the employee being monitored.
3. Record the date the monitoring was conducted.
4. Report the current noise level of the employee's work environment (e.g., High, Low).
5. Indicate if a hearing protector was used during the monitoring (Yes/No).
6. Indicate if the employee was in a danger zone (e.g., High, Low, Both).
7. Select all applicable danger zones the employee was exposed to.

## Field-by-Field Explanation
- **workplace_id** (`workplace_id`, Number, Required): Enter the ID number of the workplace where the monitoring took place.
- **employee_id** (`employee_id`, Number, Required): Enter the ID number of the employee being monitored.
- **date_completed** (`date_completed`, Date, Required): Record the date the monitoring was conducted.
- **noise_level** (`noise_level`, Number, Required): Report the current noise level of the employee's work environment (e.g., High, Low).
- **hearing_protector_used** (`hearing_protector_used`, Select One, Optional): Indicate if a hearing protector was used during the monitoring (Yes/No).
- **hearing_protector_used_type** (`hearing_protector_used_type`, Select Multiple, Optional): This field is currently not clearly defined in the input schema. However, it may be intended to provide additional information about the hearing protector used. If so, please select all applicable options.
- **noise_level_danger_zones** (`noise_level_danger_zones`, Select Multiple, Optional): Select all applicable danger zones the employee was exposed to (e.g., High, Low, Both).

## Tips
* Make sure to fill out the form accurately and truthfully to ensure accurate monitoring and reporting.
* If a field is not applicable, leave it blank or select "Not Applicable" (if available).
* If you are unsure about any field, consult with your supervisor or safety officer before completing the form.
