<thinking>
We need to create a user-facing help guide for a form designed to collect information for ultramarathon events. The form will be used to gather details about participants, such as their name, age, and nationality, as well as event information like the date, time, and distance of the race. However, some fields seem to be redundant or unnecessary (e.g., "Participant Name" and "Participant Name Alt", "Video File" and "Video File Link", etc.), and others are unclear or unexplained (e.g., "Event Status"). We will aim to provide clear and concise explanations for each field, and remove any unnecessary ones.
</thinking>

# ultramarathon_video_submission_form - Help Guide
## Purpose
The ultramarathon video submission form is designed to collect information about ultramarathon events. This includes details about the participants, such as their name, age, and nationality, as well as information about the event, such as the date, time, and distance.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in the participant information:
	* Provide your name as the participant.
	* Enter your age.
	* Select your nationality.
	* Select your race type (ultramarathon or not).
	* Select your race distance (e.g., marathon, ultra-marathon).
2. Add event information:
	* Enter the date of the event.
	* Select the time of the event.
	* Enter the distance of the event.
	* Select the event status (Active or Inactive).
3. Upload any relevant media:
	* Upload a photo of yourself as the participant.
	* Upload an alt photo (not sure what this is for).
	* Enter a link to a video of yourself.
	* Enter a link to an alt video (not sure what this is for).
4. Add event notes:
	* Enter any additional information about the event.

## Field-by-Field Explanation
* **Participant Info** (`Participant Info`, `text`, required): Enter your name as the participant.
* **Event Info** (`Event Info`, `text`, required): Enter the details about the event.
* **Video File** (`Video File`, `text`, optional): Upload a video file about the event.
* **Start Date** (`Start Date`, `date`, required): Enter the date of the start of the event.
* **Start Time** (`Start Time`, `time`, required): Select the time of the start of the event.
* **Finish Date** (`Finish Date`, `date`, optional): Enter the date of the finish of the event.
* **Finish Time** (`Finish Time`, `time`, optional): Select the time of the finish of the event.
* **Distance** (`Distance`, `number`, required): Enter the distance of the event.
* **Event Details** (`Event Details`, `text`, optional): Enter any additional information about the event.
* **Video Link** (`Video Link`, `text`, optional): Enter a link to a video about the event.
* **Video File Link** (`Video File Link`, `text`, optional): Enter a link to a video file about the event.
* **Participant Name** (`Participant Name`, `text`, optional): Enter your name as the participant.
* **Participant Gender** (`Participant Gender`, `select_one`, optional): Select your gender.
* **Participant Age** (`Participant Age`, `number`, optional): Enter your age.
* **Participant Country** (`Participant Country`, `select_multiple`, optional): Select your country.
* **Race Type** (`Race Type`, `select_one`, optional): Select the type of race.
* **Race Distance** (`Race Distance`, `select_one`, optional): Select the distance of the race.
* **Team Name** (`Team Name`, `text`, optional): Enter the name of your team.
* **Team Name Alt** (`Team Name Alt`, `text`, optional): Enter the alternative team name.
* **Race Category** (`Race Category`, `select_one`, optional): Select the category of the race.
* **Participant Photo** (`Participant Photo`, `text`, optional): Upload a photo of yourself.
* **Participant Photo Alt** (`Participant Photo Alt`, `text`, optional): Upload an alt photo (not sure what this is for).
* **Participant Video** (`Participant Video`, `text`, optional): Enter a link to a video of yourself.
* **Participant Video Alt** (`Participant Video Alt`, `text`, optional): Enter a link to an alt video (not sure what this is for).
* **Event Notes** (`Event Notes`, `note`, optional): Enter any additional information about the event.
* **Event Status** (`Event Status`, `select_one`, optional): Select the status of the event.

Tips:
* Please ensure that all required fields are filled in before submitting the form.
* Be careful when selecting the event status as it will affect how the event is displayed.
* If you are unsure about any field, please ask for help.
