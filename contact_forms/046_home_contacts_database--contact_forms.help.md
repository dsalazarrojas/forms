<thinking>As an expert form designer and technical writer, I'll create a user-facing help guide for the "home_contacts_database" form that explains its purpose, how to complete it, and what each field means.</thinking>

# home_contacts_database - Help Guide
## Purpose
The "home_contacts_database" form is a contact information collection form used to gather details about individuals or events from a user. This form is designed to capture relevant contact information, such as name, email, and phone number, as well as event-related details like event name, date, and location. The form's primary purpose is to collect and store contact information for future reference.

## How To Complete This Form
To complete this form, follow these steps:

1. Click on the "Contact Form" page.
2. Fill out the required fields:
	* Enter your contact name in the "Contact Name" field.
	* Enter your email address in the "E-mail" field.
	* Enter your phone number in the "Phone" field.
3. Optionally, you can provide additional details for an event:
	* Enter the event name in the "Event Name" field.
	* Choose the event type by selecting from the "Event Type" dropdown menu.
	* Enter the date and time of the event in the "Event Date" and "Event Time" fields respectively.
	* Provide a brief description of the event in the "Event Description" field.
4. If relevant, you can select the event type and location using the "Contact or Event" dropdown menu.
5. Click on the "Submit" button to save your information.

## Field-by-Field Explanation
* **Contact Name** (`contact_name`, text, optional): Enter your contact name.
* **E-mail** (`email`, email, optional): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Event Name** (`event_name`, text, optional): Enter the name of the event you're inquiring about.
* **Event Date** (`event_date`, date, optional): Enter the date of the event.
* **Event Time** (`event_time`, time, optional): Enter the time of the event.
* **Event Type** (`event_type`, select_multiple, optional): Select from the dropdown menu to indicate if the form is for a contact or an event.
* **Contact or Event** (`event_type_options`, select_multiple, optional): Select from the dropdown menu to specify the type of form you're filling out.
* **Event Description** (`event_description`, text, optional): Enter a brief description of the event.
* **Event Location** (`event_location`, text, optional): Enter the location of the event.
* **Contact Address** (`contact_address`, text, optional): Enter your contact address.
* **Contact or Event** (`event_type_options`, select_multiple, optional): Select from the dropdown menu to specify the type of form you're filling out.
