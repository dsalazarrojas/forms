<thinking>

The purpose of the form, "flood_incident_report", is to capture and document information related to a flood incident, such as the incident location, date, time, and type, as well as the impact and areas affected by the incident. This form likely serves as a tool for emergency responders, disaster relief workers, or other personnel to collect and analyze data on flood incidents, helping them to respond effectively and provide necessary aid. 

Checking for non-duplication and relevance is crucial as it prevents redundant data entry and ensures the form fields are correctly filled out with the correct information.

</thinking>

# flood_incident_report - Help Guide
## Purpose
The flood_incident_report form is used to document and report on flood incidents, including locations, dates, times, types, and areas affected.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **Incident Location** field with the exact location where the flood incident occurred.
2. Enter the **Incident Date** and **Incident Time** of the flood incident.
3. Select the **Incident Type** and **Flood Type** to describe the type of incident.
4. Indicate whether the incident had any **Flood Impact**, **Affected Areas**, or **Affected Structures**.
5. Check if emergency services were called and which ones were called.
6. Provide details about the **Incident Reporter**, including their contact information.
7. Add a brief description of the incident in the **Incident Description** field.
8. Attach any relevant images, videos, or audio recordings related to the incident.

## Field-by-Field Explanation

* **Incident Location** (`incident_location`, text, required: false): Enter the exact location where the flood incident occurred.
* **Incident Date** (`incident_date`, date, required: false): Enter the date of the flood incident.
* **Incident Time** (`incident_time`, time, required: false): Enter the time of the flood incident.
* **Incident Type** (`incident_type`, select_one, required: false): Select the type of incident (e.g., flood, storm).
* **Flood Type** (`flood_type`, select_one, required: false): Select the type of flood (e.g., river, coastal, etc.).
* **Flood Impact** (`flood_impact`, select_one, required: false): Indicate if the flood had any impact (yes/no).
* **Affected Areas** (`affected_areas`, select_multiple, required: false): Select areas affected by the flood (e.g., buildings, roads, parks).
* **Affected Structures** (`affected_structures`, select_multiple, required: false): Select structures affected by the flood (e.g., bridges, homes, businesses).
* **Emergency Services Called** (`emergency_services_called`, select_multiple, required: false): Check if emergency services were called and select the services used.
* **Incident Reporter Details** (`incident_reporter_details`, text, required: false): Provide details about the person who reported the incident.
* **Incident Description** (`incident_description`, text, required: false): Enter a brief description of the incident.
* **Incident Image** (`incident_image`, note, required: false): Attach an image related to the incident.
* **Incident Video** (`incident_video`, note, required: false): Attach a video related to the incident.
* **Incident Audio** (`incident_audio`, note, required: false): Attach an audio recording related to the incident.
* **Incident Other Media** (`incident_other_media`, note, required: false): Attach other media related to the incident.
