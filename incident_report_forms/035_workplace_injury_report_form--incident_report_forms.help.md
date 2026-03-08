# Workplace Injury Report Form - Help Guide
## Purpose
The Workplace Injury Report Form is designed to capture detailed information about workplace injuries, ensuring that employees receive prompt attention and support.

## How To Complete This Form

To complete this form, follow these steps:

1. Date and time of the incident.
2. Provide a clear and concise description of what happened.
3. Specify which part of your body was injured and select the corresponding option from the dropdown menu.
4. Choose the type of incident from the provided options.
5. If available, provide witness information if applicable.
6. Provide details about any first aid or medical attention received.
7. Specify if medical attendance was required.
8. Indicate if hospitalization was required.
9. If relevant, provide details about workers' compensation or Workcover claims.
10. Provide a description of the incident's cause if known.

## Field-by-Field Explanation

* **Incident Date** (`incident_date`, `date`, required: false): Date of the incident, in the format of YYYY-MM-DD.
* **Incident Time** (`incident_time`, `time`, required: false): Time of the incident, in the format of HH:MM AM/PM.
* **Incident Description** (`incident_description`, `text`, required: false): Provide a clear and concise description of what happened.
* **Injured Part** (`injured_part`, `select_one`, required: false): Specify which part of your body was injured. Options: Head, Neck, Back, Other.
* **Incident Type** (`incident_type`, `select_one`, required: false): Choose the type of incident. Options: Slip/Trip, Strain, Burn, Other.
* **Witness** (`witness`, `text`, required: false): If available, provide witness information, including their name and contact details.
* **First Aid Administered** (`first_aid_administered`, `text`, required: false): Provide details about any first aid or medical attention received.
* **Medical Attendance** (`medical_attendance`, `text`, required: false): Specify if medical attendance was required.
* **Hospitalisation** (`hospitalisation`, `text`, required: false): Indicate if hospitalization was required.
* **Workcover** (`workcover`, `text`, required: false): If relevant, provide details about workers' compensation or Workcover claims.
* **Incident Cause** (`incident_cause`, `text`, required: false): Provide a description of the incident's cause if known.
* **Incident Location** (`incident_location`, `text`, required: false): Specify the location where the incident occurred.
