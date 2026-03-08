<thinking> 

To create a help guide for the COVID-19 Customer Screening form, I'll follow the provided YAML structure and provide a detailed explanation of each field. 

</thinking>

# COVID 19 Customer Screening - Help Guide

## Purpose
This form is designed to screen customers for COVID-19 symptoms, exposure, and other relevant factors to ensure a safe and healthy environment for staff and other customers. 

## How To Complete This Form
1. Fill in the required fields marked as "true" under `required` in the YAML configuration. This includes:
	* Customer Name
	* Email Address
	* Phone Number
	* Visit Date
	* Visit Time
	* Purpose of Visit
	* Party Size
	* Current Temperature
	* Feeling Well
	* Symptoms Check
	* Known COVID-19 Exposure
	* Recent Positive Test
	* Vaccination Status (if applicable)
	* Mask Worn
	* Hand Sanitized
	* Entry Approved
2. For fields not marked as "true" (optional), you may fill in any relevant information, but it's not required. This includes:
	* Alternative Service Offered
	* Screener Name (for staff members)
	* Screener Signature
	* Customer Signature
	* Additional Notes

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, **required**): Please enter your full name as it appears on your identification.
* **Email Address** (`email_address`, email, **required**): Provide a valid email address for contact tracing purposes.
* **Phone Number** (`phone_number`, text, **required**): Enter your best phone number for staff to contact you.
* **Visit Date** (`visit_date`, date, **required**): Enter the date of your visit.
* **Visit Time** (`visit_time`, time, **required**): Enter the time of your arrival.
* **Purpose of Visit** (`purpose_of_visit`, select_one, **required**): Choose the reason for your visit from the provided options.
* **Party Size** (`party_size`, number, **required**): Enter the number of people in your group.
* **Current Temperature** (`current_temperature`, number, **required**): Enter your current body temperature in Fahrenheit.
* **Feeling Well** (`feeling_well`, select_one, **required**): Choose how you're feeling from the provided options.
* **Current Symptoms** (`symptoms_check`, select_multiple, **required**): Select any symptoms you're currently experiencing.
* **Known COVID-19 Exposure** (`known_exposure`, select_one, **required**): Choose if you've had known COVID-19 exposure in the past 14 days.
* **Recent Positive Test** (`recent_positive_test`, select_one, **required**): Choose if you've had a recent positive COVID-19 test in the past 10 days.
* **Vaccination Status** (`vaccination_status`, select_one, optional): If applicable, choose your COVID-19 vaccination status.
* **Mask Worn** (`mask_worn`, select_one, **required**): Choose if you have a mask and are wearing it.
* **Hand Sanitized** (`hand_sanitized`, select_one, **required**): Choose if you've sanitized your hands upon entry.
* **Entry Approved** (`entry_approved`, select_one, **required**): Choose if your entry is approved.
* **Denial Reason** (`denial_reason`, text, optional): If your entry is denied, enter a brief reason.
* **Alternative Service Offered** (`alternative_service`, select_one, optional): Choose alternative services offered if applicable.
* **Screener Name** (`screener_name`, text, optional): Enter your staff member's name.
* **Screener Signature** (`screener_signature`, text, optional): Sign with your full name.
* **Customer Signature** (`customer_signature`, text, **required**): Sign with your full name.
* **Additional Notes** (`additional_notes`, text, optional): Enter any relevant observations.

Note: This help guide is based on the provided YAML structure and aims to provide a clear and concise explanation of each field.
