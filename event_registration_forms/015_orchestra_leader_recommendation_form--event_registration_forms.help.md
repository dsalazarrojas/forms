<thinking>
This form is likely used to gather information from an individual to recommend an event for an orchestra leader. The form is probably meant to collect data about the event such as the date and time, musician involved, music director, and other relevant details. There might be a need to verify if the user filling out the form is the actual orchestra leader, but this is not explicitly stated in the YAML. It would be helpful to add a field to confirm the user's status as the orchestra leader.
</thinking>

# orchestra_leader_recommendation_form - Help Guide

## Purpose
This form is designed to collect information from an orchestra leader to recommend an event. Fill out this form to provide details about an upcoming event, including date and time, the musician involved, and other relevant details.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the following fields with the required information:
	* `music_director` (if applicable)
	* `event_name`
	* `event_description`
	* `event_date`
	* `event_time`
2. If you are not the actual orchestra leader, please contact the leader or do not proceed with the form.
3. Double-check your answers for accuracy before submitting the form.

## Field-by-Field Explanation

* **orchestra_leader** (`orchestra_leader_recommendation_form_1`, text, optional): Provide your name as the orchestra leader (if applicable).
* **musician** (`musician`, text, optional): Enter the name of the musician involved in the event.
* **event_date** (`event_date`, date, optional): Enter the date of the event (in MM/DD/YYYY format).
* **event_time** (`event_time`, time, optional): Enter the time of the event (in HH:MM AM/PM format).
* **email** (`email`, email, optional): Enter your email address (if you want to be contacted by the system).
* **phone** (`phone`, text, optional): Enter your phone number (if you want to be contacted by the system).
* **music_director** (`music_director`, text, optional): Enter the name of the music director (if applicable).
* **teacher** (`teacher`, text, optional): Enter the name of the teacher (if applicable).
* **school** (`school`, text, optional): Enter the name of the school (if applicable).
* **event_name** (`event_name`, text, optional): Enter the name of the event.
* **instrument** (`instrument`, text, optional): Enter the instrument involved in the event (if applicable).
* **recommendation** (`recommendation`, text, optional): Provide any additional information or recommendation about the event.
* **music_department** (`music_department`, text, optional): Enter the name of the music department (if applicable).
* **event_description** (`event_description`, text, optional): Enter a brief description of the event.
* **orchestra** (`orchestra`, text, optional): Enter the name of the orchestra (if applicable).

Note: Please be aware that some fields are not required, but it's still essential to fill out all the relevant information to provide a complete picture of the event.
