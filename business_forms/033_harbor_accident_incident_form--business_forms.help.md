# harbor_accident_incident_form - Help Guide
## Purpose
The Harbor Accident/Incident Form is designed to collect information about accidents or incidents that occur in a harbor or water-based environment. This form helps in gathering details about the incident, such as its type, date, time, location, and description. The form aims to standardize the reporting process and ensure that all essential information is captured for incident analysis and response.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of incident (Accident, Incident, or Near Miss) that occurred.
2. Enter the date and time of the incident.
3. Provide a detailed description of the incident, including its location and any injuries or damage that occurred.
4. Specify the type of vessel or facility involved (if applicable).
5. Describe the cause of the incident (if known).
6. Report any injuries that occurred, including their description.

## Field-by-Field Explanation

* **Incident Description (Page 1)** (`incident_description`, `text`, required/optional): Provide a detailed description of the incident, including what happened, how it happened, and any notable circumstances surrounding the incident.
* **Incident Type (Page 1)** (`incident_type`, `select_one`, required/optional): Select the type of incident that occurred (Accident, Incident, or Near Miss).
* **Incident Date (Page 1)** (`incident_date`, `date`, required/optional): Enter the date the incident occurred.
* **Incident Time (Page 1)** (`incident_time`, `time`, required/optional): Enter the time the incident occurred.
* **Incident Location (Page 1)** (`incident_location`, `text`, required/optional): Provide the location where the incident occurred.
* **Incident Vessel Type (Page 1)** (`incident_vessel_type`, `select_one`, required/optional): Select the type of vessel or facility involved in the incident (Vessel, Facility, or Equipment).
* **Incident Cause (Page 1)** (`incident_cause`, `text`, required/optional): Describe the cause of the incident, if known.
* **Incident Injuries (Page 1)** (`incident_injuries`, `text`, required/optional): Report any injuries that occurred during the incident, including their description.
* **Incident Description of Injuries (Page 1)** (`incident_description_of_injuries`, `text`, required/optional): Describe the injuries that occurred in detail.
* **Incident Description (Page 2)** (`incident_description`, `text`, required/optional): (This is a duplicate field from Page 1; provide a detailed description of the incident, including its location and any injuries or damage that occurred.)

## Tips
* Ensure that you complete the form truthfully and accurately.
* Be as detailed as possible when providing descriptions and explanations.
* If an incident type is not selected, select "Unknown" or "Other" if applicable.
* If an incident cause is not known, mark it as "Unknown" and provide an explanation.
