# Master Class Tour Email Signup - Help Guide
## Purpose
This form is for users to register for the Master Class Tour. Please fill out the form accurately and completely to ensure a smooth registration process.

## How To Complete This Form
1. Fill out the form in a step-by-step manner, ensuring that all required fields are completed before moving on to the next section.
2. Start by providing your contact information:
	* First Name: Enter your first name in this field.
	* Last Name: Enter your last name in this field.
	* Email: Enter a valid email address in this format: `example@email.com`.
3. Select your tour preferences:
	* Tour Preferences: Choose your preferred tour time: Morning, Afternoon, or Evening.
4. Provide event-specific information:
	* Event Date: Select the date for the tour you are registering for.
	* Event Time: Select the time for the tour you are registering for.
	* Location: Enter the location for the tour you are registering for (optional).
5. Add any additional notes or comments about your tour registration:
	* Notes: Enter any additional information about your tour registration in this field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Enter a valid email address in the format `example@email.com`.
* **Tour Preferences** (`tour_preferences`, select_one, false): Choose your preferred tour time. Options: Morning, Afternoon, Evening.
* **Artist/Instructor Name** (`artist_name`, text, false): Enter the name of the artist or instructor leading the tour (optional).
* **Event Date** (`event_date`, date, required): Select the date for the tour you are registering for.
* **Event Time** (`event_time`, time, required): Select the time for the tour you are registering for.
* **Location** (`location`, text, false): Enter the location for the tour you are registering for (optional).
* **Notes** (`notes`, note, false): Enter any additional information about your tour registration.
