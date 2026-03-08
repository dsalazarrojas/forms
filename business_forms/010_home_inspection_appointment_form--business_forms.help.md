# Home Inspection Appointment Form - Help Guide
## Purpose
The Home Inspection Appointment Form is used to schedule and document home inspection appointments. This form captures essential information from both the client and the inspector to ensure a smooth and successful inspection process.

## How To Complete This Form
1. Fill out the form with your information, including your name and contact details.
2. Choose a suitable appointment time and date that works for you.
3. Select the start and end times for the inspection.
4. Add any relevant notes or comments for the inspector.
5. Provide your signature to confirm the appointment details.

## Field-by-Field Explanation

* **Client Info** (`client_info`, text, optional):
	* Enter your name and contact information for communication with our team.
* **Appointment Info** (`appointment_info`, text, optional):
	* Describe the purpose and details of the appointment.
* **Inspection Info** (`inspection_info`, text, optional):
	* Provide any additional information about the inspection, such as the type of inspection or any specific areas of concern.
* **Contact Info** (`contact_info`, text, optional):
	* Enter your contact information so we can reach you about the appointment.
* **Signature** (`signature`, note, optional):
	* Add your signature to confirm that you have read and understood the appointment details.
* **Client Phone** (`client_phone`, text, optional):
	* Enter your phone number for us to contact you.
* **Client Email** (`client_email`, email, optional):
	* Enter your email address for us to communicate with you about the appointment.
* **Appointment Date** (`appointment_date`, date, optional):
	* Choose a date for the inspection appointment.
* **Start Time** (`start_time`, time, optional):
	* Select the start time for the inspection.
* **End Time** (`end_time`, time, optional):
	* Select the end time for the inspection.
* **Appointment Time** (`appointment_time`, select_multiple, required):
	* Choose a day of the week for the inspection.
* **Start Hour** (`start_hour`, select_one, optional):
	* Select the start hour for the inspection.
* **End Hour** (`end_hour`, select_one, optional):
	* Select the end hour for the inspection.
* **Client Name** (`client_name`, text, optional):
	* Enter your name.
* **Address** (`address`, text, optional):
	* Enter the address of the property to be inspected.
* **City** (`city`, text, optional):
	* Enter the city of the property's location.
* **State** (`state`, text, optional):
	* Enter the state of the property's location.
* **Zip** (`zip`, text, optional):
	* Enter the zip code of the property's location.
* **Notes** (`notes`, text, optional):
	* Add any additional notes or comments for the inspector.
* **Client Note** (`client_note`, note, optional):
	* Add any personal notes or comments for the inspector.
* **Inspector Note** (`inspector_note`, note, optional):
	* Add any notes or comments for the inspector.
* **Client Signature** (`client_signature`, note, optional):
	* Add your signature to confirm that you have read and understood the appointment details.
* **Inspector Signature** (`inspector_signature`, note, optional):
	* Add the inspector's signature to confirm that they have received the appointment details.
* **Next Appointment** (`next_appointment`, date, optional):
	* Choose a date for the next appointment.
* **Notes 2** (`notes2`, note, optional):
	* Add any additional notes or comments for the inspector.
