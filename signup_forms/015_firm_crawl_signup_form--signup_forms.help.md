<thinking>...</thinking>

# firm_crawl_signup_form - Help Guide

## Purpose
This form is designed to collect information about a firm crawl event. A firm crawl event is a type of event where a firm visits another firm to learn about their practices and gather information. This form will help you create a new firm crawl event.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the required fields, such as:
	* Event Name: The name of the event
	* Start Date: The date the event will take place
	* End Date: The end date of the event
	* Event Type: Select "firm crawl" as the type of event
2. Optionally, you can fill in any of the other fields with relevant information:
	* Event Location: The location where the event will take place
	* Contact Number: The phone number of the firm that will be hosting or participating in the event
	* Firm Members: A list of firm members who will be attending the event, choose "Yes" or "No" depending on whether they will be present
	* Firm Crawl Participants: A text field for any additional information about the participants

## Field-by-Field Explanation
* **Event Name** (`event_name`, `text`, required): Enter the name of the event, such as "Firm Crawl Event 2024".
* **Start Date** (`start_date`, `date`, required): Enter the date of the event in the format mm/dd/yyyy.
* **End Date** (`end_date`, `date`, required): Enter the end date of the event in the format mm/dd/yyyy.
* **Event Location** (`event_location`, `text`, required): Enter the location where the event will take place, such as "123 Main St".
* **Contact Number** (`contact_number`, `text`, required): Enter the phone number of the firm that will be hosting or participating in the event.
* **Firm Members** (`firm_members`, `select_multiple`, required): Choose "Yes" if firm members will be attending the event, "No" otherwise.
* **Event Type** (`event_type`, `select_one`, required): Select "firm crawl" as the type of event.
* **Firm Crawl Participants** (`firm_crawl_participants`, `text`, required): Enter any additional information about the participants.

## Tips
- Make sure to fill in all required fields before submitting the form.
- You can add any additional notes or information in the Firm Crawl Participants field.
- If you are unsure about any of the fields, contact the event organizer for clarification.
