<thinking>Given the provided YAML file, it seems we are creating a help guide for a form used for Safety Assessment Surveys. This form is likely used to collect information about equipment, its condition, and related assessment details. The purpose of this form is to provide a structured way to gather data for safety assessments, possibly for maintenance, inspection, or certification purposes. Before proceeding, let's ensure there's no duplication or redundancy in the fields. After reviewing the fields, it appears that there are multiple fields related to equipment condition, certification, and assessment details. This form might be used in a maintenance or inspection process where assessors need to provide information about the equipment's status, location, and other relevant details.</thinking>

# scba_safety_assessment_survey - Help Guide
## Purpose
This form is used to collect information for safety assessments, which are essential for maintaining equipment in good condition, ensuring compliance with regulations, and preventing accidents.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the fields as accurately and thoroughly as possible.
2. Review the available options for select fields to ensure you're choosing the correct values.
3. Make sure to enter dates in the correct format (MM/DD/YYYY).

## Field-by-Field Explanation

* **scba_survey_form** (`scba_survey_form`, text, optional): This field is for free-text entry and can be used to record any additional comments or notes about the safety assessment.
* **scba_equipment_readiness** (`scba_equipment_readiness`, number, optional): This field is for entering a numerical value representing the equipment's current condition or readiness for use.
* **scba_unit** (`scba_unit`, select one, optional): Select the unit or category of equipment being assessed.
* **assessor_details** (`assessor_details`, text, optional): This field is for entering any personal details or comments from the assessor.
* **assessor_name** (`assessor_name`, text, optional): Enter your name as the assessor.
* **assessor_email** (`assessor_email`, email, optional): Enter your email address for contact purposes.
* **assessor_phone** (`assessor_phone`, text, optional): Enter your phone number for communication.
* **scba_serial_number** (`scba_serial_number`, text, optional): Record the equipment's serial number for identification.
* **scba_model** (`scba_model`, text, optional): Enter the equipment's model number or name.
* **scba_make** (`scba_make`, text, optional): Enter the equipment's manufacturer or make.
* **scba_year** (`scba_year`, date, optional): Enter the year the equipment was made or purchased.
* **scba_year_made** (`scba_year_made`, date, optional): Record the year the equipment was last inspected or certified.
* **scba_status** (`scba_status`, text, optional): Provide the current status of the equipment (e.g., certified, not certified, etc.).
* **scba_last_inspection** (`scba_last_inspection`, date, optional): Record the date of the last inspection or assessment.
* **scba_next_inspection_due** (`scba_next_inspection_due`, date, optional): Enter the date when the next inspection is due.
* **scba_last_certified** (`scba_last_certified`, date, optional): Record the date of the last certification.
* **scba_certified** (`scba_certified`, select one, optional): Select whether the equipment is certified or not.
* **scba_certified_date** (`scba_certified_date`, date, optional): Enter the date of the last certification.
* **scba_last_location** (`scba_last_location`, text, optional): Record the last location where the equipment was used or stored.
* **scba_last_location_address** (`scba_last_location_address`, text, optional): Enter the address of the last location.
* **scba_last_location_city** (`scba_last_location_city`, text, optional): Enter the city of the last location.
* **scba_last_location_state** (`scba_last_location_state`, text, optional): Enter the state of the last location.
* **scba_last_location_zip** (`scba_last_location_zip`, text, optional): Enter the zip code of the last location.
* **scba_last_location_country** (`scba_last_location_country`, text, optional): Enter the country of the last location.
* **scba_last_location_geographic** (`scba_last_location_geographic`, text, optional): This field is likely for entering specific geographic coordinates or information about the last location.
