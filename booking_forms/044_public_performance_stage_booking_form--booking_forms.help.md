# public_performance_stage_booking_form - Help Guide
## Purpose
This form is used to book a public performance or event with us. It gathers essential details for event organizers and technicians.

## How To Complete This Form
* Ensure you have checked our schedule before submitting this form to avoid duplicate bookings.
* Please fill in all required fields accurately and thoroughly.
* For select fields (Performance Type, Event Type, Contact Role), select one option from the provided list.
* If a field has an optional type (e.g., note), you can use it for additional information if needed.
* Click the "Submit" button after completing all fields.

## Field-by-Field Explanation

* **Event Name** (`event_name`, text, required): Enter the name of the event.
* **Event Date** (`event_date`, number, required): Enter the date of the event in a numerical format (e.g., YYYYMMDD).
* **Start Time** (`start_time`, number, optional): Enter the start time of the event in a numerical format (e.g., 12 for 12:00 PM).
* **Venue Name** (`venue_name`, text, required): Enter the name of the venue where the event will take place.
* **Technical Requirements** (`technical_requirements`, note, optional): Provide any technical requirements for the event, if applicable.
* **Preferred Date** (`preferred_date`, date, required): Enter your preferred date for the event.
* **Contact E-mail** (`contact_email`, email, required): Enter the email address of the contact person.
* **Contact Phone** (`contact_phone`, text, required): Enter the phone number of the contact person.
* **Contact Name** (`contact_name`, text, required): Enter the name of the contact person.
* **Contact Info** (`contact_info`, text, optional): Enter any additional contact information.
* **Performance Length** (`performance_length`, number, required): Enter the length of the performance in minutes.
* **Technical Support** (`technical_support`, note, optional): Provide any technical support requirements, if applicable.
* **Stage Description** (`stage_description`, note, optional): Enter a description of the stage setup.
* **Equipment List** (`equipment_list`, note, optional): Enter a list of required equipment for the event.
* **Performance Type** (`performance_type`, select_one, required): Select the type of performance (Live, Recorded, Hybrid).
* **Performance Language** (`performance_language`, select_multiple, required): Select the languages to be performed (English, French, Spanish).
* **Performance Genre** (`performance_genre`, select_multiple, required): Select the genre of the performance (Classical, Jazz, Pop).
* **Event Type** (`event_type`, select_one, required): Select the type of event (Public, Private, School).
* **Contact Role** (`contact_role`, select_one, required): Select the role of the contact person (Performer, Promoter, Technician).
* **Technical Skills** (`technical_skills`, select_multiple, required): Select the required technical skills (Sound, Stage, Lighting).
* **Technical Support E-mail** (`technical_support_email`, email, optional): Enter the email address of the technical support contact.
* **Technical Support Phone** (`technical_support_phone`, text, optional): Enter the phone number of the technical support contact.
* **Technical Support Contact** (`technical_support_contact`, text, optional): Enter the name of the technical support contact.
* **Additional Info** (`additional_info`, note, optional): Enter any additional information about the event.
* **Notes** (`notes`, note, optional): Enter any notes about the event.
* **Preferred Date** (repeated in the original list under `id 6`, `preferred_date`, date, required) is actually the same as the `event_date` and is likely a mistake in the original YAML. 

Please let me know if you need any adjustments or further clarification.
