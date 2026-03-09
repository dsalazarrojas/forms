# Drone Flight Log Survey - Help Guide
## Purpose
The Drone Flight Log Survey form is used to record and track flight information for safe and regulatory compliance purposes. It is intended for drone operators or managers to document details about a flight, including drone model, flight time, location, weather conditions, and incident details if applicable.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form fields below and ensure you have access to all required information.
2. Fill in each field as applicable, providing accurate and complete information for each question.
3. Select relevant options for fields with dropdown or checkbox selections.
4. Ensure you have checked the form for completeness and accuracy before submitting.

## Field-by-Field Explanation

* **Flight Details** (Page 1, Flight Details):
	+ **Drone Model** (`drone_model`, text): Enter the model of the drone used for this flight.
	+ **Flight Time** (`flight_time`, text): Record the total flight time in hours and minutes.
	+ **Location** (`location`, text): Enter the location where the flight took place.
* **Pilot Information** (Page 2):
	+ **Pilot Name** (`pilot_name`, text): Enter the name of the pilot who conducted the flight.
	+ **Pilot License** (`pilot_license`, text): Record the pilot's license number or certification.
* **Flight Conditions** (Page 3):
	+ **Weather** (`weather`, text): Describe the weather conditions during the flight.
	+ **Flight Conditions** (`flight_conditions`, select_one): Select the flight conditions as Good, Fair, or Poor.
* **Flight Performance** (Page 4):
	+ **Flight Purpose** (`flight_purpose`, select_one): Select the purpose of the flight as Training, Inspection, or Testing.
	+ **Flight Altitude** (`flight_altitude`, text): Record the flight altitude in meters or feet.
	+ **Flight Distance** (`flight_distance`, number): Record the total flight distance in kilometers or miles.
* **Incident Information** (Page 5):
	+ **Incident Type** (`incident_type`, select_one): Select the type of incident as Crash, Near Miss, or Other.
	+ **Incident Nature** (`incident_nature`, select_one): Select the nature of the incident as Mechanical Failure, Weather Condition, or Human Error.
	+ **Incident Description** (`incident_description`, text): Describe the incident in detail.
	+ **Recommendations** (`recommendations`, text): Provide any recommendations for improvement or prevention of similar incidents.
* **Flight Logs** (Page 6):
	+ **Flight Logs** (`flight_logs`, select_multiple): Select all applicable flight logs (e.g., Flight Log 1, 2, 3).
* **Additional Information** (Page 7):
	+ **Flight Notes** (`flight_notes`, text): Record any additional flight notes or comments.
	+ **Flight Time (UTC)** (`flight_time_utc`, date): Record the flight time in UTC (Coordinated Universal Time).
	+ **Date** (`flight_date`, date): Record the date of the flight.
	+ **Start Time** (`flight_time_start`, time): Record the start time of the flight.
	+ **End Time** (`flight_time_end`, time): Record the end time of the flight.

Note: Ensure you have filled in all required fields and provided accurate information for each question.
