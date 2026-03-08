# COVID 19 2020 Volunteer Registration Form - Help Guide
## Purpose
This form is for individuals to register as volunteers during the COVID-19 pandemic. It gathers information about the volunteer's personal details, healthcare experience, and availability to help the organization allocate volunteers effectively.

## How To Complete This Form

Before starting the form, please ensure that you are completing it for the intended purpose and not duplicating efforts. If you are unsure, please contact us to clarify.

To complete this form, follow these steps:

* Fill in your personal details, such as name, email, phone number, and date of birth.
* Choose your preferred volunteer schedule and location.
* Indicate your employment status, healthcare experience, and language proficiency.
* Select your available hours per week and preferred volunteer roles.
* Confirm that you are aware of the risks involved in volunteering and consent to a background check, if necessary.
* Finally, indicate your availability for a potential background check and your willingness to submit to a health screening.

## Field-by-Field Explanation
* **Full Name (Volunteer Name)** (`volunteer_name`, `text`, required): Enter your full name as it appears on your identification documents.
* **Email Address** (`volunteer_email`, `email`, required): Enter your email address for communication purposes.
* **Phone Number** (`volunteer_phone`, `text`, required): Enter your phone number for contact purposes.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in YYYY-MM-DD format.
* **Home Address** (`volunteer_address`, `text`, required): Enter your residential address.
* **City** (`volunteer_city`, `text`, required): Enter the city where you reside.
* **State** (`volunteer_state`, `text`, required): Enter the state where you reside.
* **Zip Code** (`volunteer_zip`, `text`, required): Enter your zip code.
* **Current Employment Status** (`employment_status`, `select_one`, required): Choose from the options:
	+ Employed Full-Time
	+ Employed Part-Time
	+ Self-Employed
	+ Unemployed
	+ Retired
	+ Student
* **Do you have healthcare experience?** (`healthcare_experience`, `select_one`, required): Choose from the options:
	+ Yes
	+ No
* **If yes, what is your healthcare specialty?** (`healthcare_specialty`, `text`, optional): Enter your healthcare specialty if you have one.
* **Hours available per week** (`available_hours`, `number`, required): Enter the number of hours you can commit to volunteering per week.
* **Preferred Volunteer Schedule** (`availability_schedule`, `select_multiple`, required): Choose from the options:
	+ Weekday mornings
	+ Weekday afternoons
	+ Weekday evenings
	+ Weekend days
	+ Flexible
* **Preferred Location to Volunteer** (`volunteer_location`, `text`, required): Enter the location where you would prefer to volunteer.
* **What motivates you to volunteer during COVID-19?** (`motivation`, `text`, required): Enter your reasons for wanting to volunteer.
* **What volunteer roles interest you?** (`volunteer_roles`, `select_multiple`, required): Choose from the options:
	+ Patient support
	+ Administrative tasks
	+ Cleaning and sanitation
	+ Food service
	+ Supply management
	+ Emotional support hotline
	+ Other
* **Relevant Certifications or Licenses** (`certifications`, `text`, optional): Enter any relevant certifications or licenses you hold.
* **Languages Spoken** (`language_proficiency`, `text`, optional): Enter languages you are proficient in speaking.
* **Do you have any symptoms of illness?** (`health_screening`, `select_one`, required): Choose from the options:
	+ Yes
	+ No
* **Have you been exposed to COVID-19?** (`covid_exposure`, `select_one`, required): Choose from the options:
	+ Yes
	+ No
	+ Unsure
* **I understand the risks involved in volunteering** (`agreement_understood`, `select_one`, required): Choose from the options:
	+ Yes
	+ No
* **I consent to a background check** (`background_check_consent`, `select_one`, required): Choose from the options:
	+ Yes
	+ No
* **Registration Date** (`submission_date`, `date`, required): This will be automatically populated upon submission.
