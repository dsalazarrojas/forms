# Arrival And Health Review Form - Help Guide

## Purpose

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your personal information, including your name, email address, and phone number.
2. Enter your date of birth, if applicable.
3. Provide the expected arrival date for your visit or appointment.
4. Answer questions about your current health status, including any COVID-19 symptoms, fever, and exposure to others.
5. Report any recent travel history, including locations visited in the last 14 days.
6. Confirm your COVID-19 vaccination status and provide the date of your last vaccination.
7. If applicable, report any chronic health conditions, such as diabetes or heart disease.
8. Confirm your medical history and acknowledge that you will follow all health and safety protocols.

## Field-by-Field Explanation

* **Full Name** (`full_name`, `text`, required): Please enter your full name as it appears on your identification documents.
* **Email Address** (`email_address`, `email`, required): Enter your valid email address for communication purposes.
* **Phone Number** (`phone_number`, `text`, required): Enter your phone number for emergency contact purposes.
* **Date of Birth** (`date_of_birth`, `date`, optional): Enter your date of birth, if applicable.
* **Expected Arrival Date** (`arrival_date`, `date`, required): Enter the date of your expected arrival or visit.
* **How are you feeling today** (`current_health`, `select_one`, required): Select how you are feeling today, from the options provided.
* **Do you have a fever or elevated temperature?** (`fever_check`, `select_one`, required): Select whether you have a fever or elevated temperature.
* **Temperature Reading - if available** (`temperature_reading`, `number`, optional): If you have a temperature reading, enter it here.
* **Do you have any COVID-19 related symptoms?** (`covid_symptoms`, `select_multiple`, required): Select any COVID-19 symptoms you are experiencing.
* **Duration of Symptoms** (`symptoms_duration`, `select_one`, required): Select the duration of your symptoms.
* **Have you been exposed to someone with COVID-19?** (`covid_exposure`, `select_one`, required): Select whether you have been exposed to someone with COVID-19.
* **When was the exposure?** (`exposure_timing`, `date`, optional): If you were exposed, enter the date of the exposure.
* **Have you traveled in the last 14 days?** (`recent_travel`, `select_one`, required): Select whether you have traveled in the last 14 days.
* **Locations Visited** (`travel_locations`, `text`, optional): If you have traveled, enter the locations you visited.
* **COVID-19 Vaccination Status** (`vaccination_status`, `select_one`, required): Select your COVID-19 vaccination status.
* **Date of Last Vaccination** (`last_vaccination_date`, `date`, optional): If you are vaccinated, enter the date of your last vaccination.
* **Do you have any chronic health conditions?** (`chronic_conditions`, `select_one`, required): Select whether you have any chronic health conditions.
* **Details of Conditions** (`condition_details`, `text`, optional): If you have chronic conditions, enter a brief description.
* **Are you immunocompromised?** (`immunocompromised`, `select_one`, required): Select whether you are immunocompromised.
* **I confirm the above health information is accurate** (`health_agreement`, `select_one`, required): Select to confirm that the provided health information is accurate.
* **I agree to follow all health and safety protocols** (`safety_compliance`, `select_one`, required): Select to agree to follow all health and safety protocols.
* **Additional Health Information or Concerns** (`additional_notes`, `text`, optional): If you have any additional health information or concerns, enter them here.
