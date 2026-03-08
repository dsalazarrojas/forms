# Event Planner Appointment Form - Help Guide
## Purpose
The Event Planner Appointment Form is a tool for collecting information about client appointments. Fill out this form to schedule or update an appointment with a client, ensuring that all necessary details are captured.

## How To Complete This Form
To complete this form, follow these steps:

1. **Fill in the appointment details**: Provide the date and time of the appointment.
2. Choose the **Event Type** of the appointment.
3. Enter the **Client Name** and any additional **Event Details**.
4. Select the **Location** of the appointment (if applicable).
5. Set the **Event Start** and **End Dates** and **Times**.

## Field-by-Field Explanation

* **Appointment Date** (`appointment_date`, date, required: false): Enter the date of the appointment.
* **Appointment Time** (`appointment_time`, time, required: false): Enter the time of the appointment.
* **Client Name** (`client_name`, text, required: false): Enter the name of the client associated with this appointment.
* **Event Type** (`event_type`, select_one, options: [Yes, No], required: false): Choose the type of event this appointment is for.
* **Event Details** (`event_details`, text, required: false): Enter any additional details about the event.
* **Location** (`location`, select_multiple, options: [Yes, No], required: false): Choose the locations where the event will take place (if applicable).
* **Event Start Date** (`event_start_date`, date, required: false): Enter the start date of the event.
* **Event Start Time** (`event_start_time`, time, required: false): Enter the start time of the event.
* **Event End Date** (`event_end_date`, date, required: false): Enter the end date of the event.
* **Event End Time** (`event_end_time`, time, required: false): Enter the end time of the event.

## Tips
- Make sure to fill in all required fields, or the form submission may be rejected.
- If unsure about a field, refer to the Event Type options for guidance.
- Double-check your entries for accuracy and completeness before submitting.
