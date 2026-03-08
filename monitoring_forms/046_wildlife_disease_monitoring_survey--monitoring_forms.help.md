# wildlife_disease_monitoring_survey - Help Guide
## Purpose
This form is designed to collect information on wildlife disease monitoring from observers.

## How To Complete This Form
To complete this form, follow these steps:
- Fill out the observer's details: "observer_name", "observer_email", and "observer_organization" fields with your information.
- If relevant, enter the "animal_id" number if available.
- Select the species of the observed animal.
- Indicate who made the observation, choosing from "researcher", "agency", or "citizen scientist".
- If applicable, select additional people who made the observation, choosing from "researcher", "agency", or "citizen scientist".
- Select any photos that were taken during the observation.
- Describe the disease or injury observed, selecting from "disease", "injury", "other", or "none".
- Add any additional case details in the "case_details" field.
- If available, enter the coordinates of the location.
- Select the type of location where the observation took place.
- Enter the date of the observation.
- Fill out any additional "disease_info" options that apply.
- Add any other relevant notes in the "case_details" field.

## Field-by-Field Explanation

* **survey_form** (id: 1, text, optional): Enter a brief description of the observation, if necessary.
* **observer_name** (id: 2, text, optional): Enter your name as the observer.
* **observer_email** (id: 3, email, optional): Enter your email address as the observer.
* **observer_organization** (id: 4, text, optional): Enter the organization or institution you are affiliated with.
* **animal_id** (id: 5, number, optional): Enter the ID number of the observed animal, if available.
* **species** (id: 6, text, optional): Select the species of the observed animal.
* **health_observers** (id: 7, select_one, optional): Indicate who made the observation, choosing from "researcher", "agency", or "citizen scientist".
* **health_observers_additional** (id: 8, select_multiple, optional): If applicable, select additional people who made the observation.
* **photos** (id: 9, select_multiple, optional): Select any photos taken during the observation.
* **disease_info** (id: 10, select_multiple, optional): Describe the disease or injury observed, choosing from "disease", "injury", "other", or "none".
* **case_details** (id: 11, note, optional): Add any additional case details.
* **latitude** (id: 12, number, optional): Enter the latitude of the observation location, if available.
* **longitude** (id: 13, number, optional): Enter the longitude of the observation location, if available.
* **location_type** (id: 14, text, optional): Select the type of location where the observation took place.
* **date_observed** (id: 15, date, optional): Enter the date of the observation.
