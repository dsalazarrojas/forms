# Claimant Driver Statement - Help Guide
## Purpose
This form is a driver statement form used to collect information about a car accident. It is essential to fill out the form accurately and completely to ensure that the insurance company has a clear understanding of the incident.

## How To Complete This Form
1. Begin by filling out your personal details in the first section, including your full name, driver's license number, phone number, and email address.
2. Move on to the second section to provide details about the accident, including the date, time, location, and weather conditions at the time of the accident.
3. In the third section, describe the accident in detail, including any injuries sustained.
4. Indicate if the police attended the scene and if there is a police report number.
5. Finally, provide a detailed description of any injuries sustained and damage to your vehicle.

## Field-by-Field Explanation

* **Full Name** (`full_name`, `text`, required): Enter your legal name as it appears on your identification documents.
* **Driver's License Number** (`driver_license_number`, `text`, required): Enter your driver's license number as issued by your state or country.
* **Phone Number** (`phone_number`, `text`, required): Enter your phone number where you can be reached.
* **Email Address** (`email_address`, `email`, required): Enter your email address where you can be reached.
* **Date of Accident** (`date_of_accident`, `date`, required): Enter the date of the accident in the correct format (MM/DD/YYYY).
* **Time of Accident** (`time_of_accident`, `time`, required): Enter the time of the accident in the 12-hour clock format (HH:MM).
* **Location of Accident** (`location_of_accident`, `text`, required): Enter the street address or intersection where the accident occurred.
* **Estimated Speed at Time of Impact (MPH)** (`vehicle_speed`, `number`, optional): Enter the estimated speed of your vehicle at the time of the accident.
* **Weather Conditions** (`weather_conditions`, `select_one`, required): Choose the weather conditions at the time of the accident. Options are Clear, Raining, Snowing, Foggy, or Other.
* **Road Conditions** (`road_conditions`, `select_one`, required): Choose the road conditions at the time of the accident. Options are Dry, Wet, Icy, Under Construction, or Other.
* **Accident Description** (`accident_description`, `text`, required): Provide a detailed description of the accident, including the events leading up to and during the incident.
* **Were there any injuries?** (`injuries_sustained`, `select_one`, required): Indicate if there were any injuries sustained during the accident. Options are True or False.
* **Describe Injuries (if any)** (`injury_description`, `text`, optional): Provide a detailed description of any injuries sustained during the accident.
* **Describe Damage to Your Vehicle** (`damage_description`, `text`, required): Provide a detailed description of any damage to your vehicle.
* **Did police attend the scene?** (`police_at_scene`, `select_one`, required): Indicate if the police attended the scene. Options are True or False.
* **Police Report Number** (`police_report_number`, `text`, optional): Enter the police report number if applicable.
* **Police Report Number** (`police_report_number`, `text`, optional): Enter the police report number if applicable.
