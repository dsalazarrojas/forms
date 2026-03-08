<thinking>
Internal reasoning: This form is for clients to schedule a free consultation with a consultant. It will ask for their name, email, phone number, service they require, schedule appointment, and other relevant details. The form is meant to gather necessary information for the consultant to prepare and provide the best service. The form is not intended for internal use, so it should be easy to understand and fill out.

</thinking>

# free_client_consultation - Help Guide
## Purpose
This form is used to schedule a free consultation with a consultant. Fill out this form to provide your details and requirements, and a consultant will get in touch with you to schedule a suitable appointment.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your name in the "Name" field.
2. Enter your email address in the "Email" field. This will be used to contact you.
3. Enter your phone number in the "Phone Number" field.
4. Select the service you require from the "Service" dropdown menu.
5. Choose a date and time for the appointment in the "Schedule Appointment" field.
6. Select the duration of the consultation in the "Duration" field.
7. Choose any follow-up options from the "Follow up" dropdown menu.
8. Optionally, add any notes in the "Client Notes" field.

## Field-by-Field Explanation

* **Name (Consultant Name)** (`consultant_name`, `text`, required): Enter your name as it appears on your identification.
* **Email (Email)** (`email`, `email`, required): Enter your email address. This will be used to contact you.
* **Phone Number (Phone Number)** (`phone_number`, `text`, required): Enter your phone number.
* **Schedule Appointment (Schedule Appointment)** (`schedule_appointment`, `time`, required): Choose a date and time for the appointment.
* **Service (Service)** (`consultant_service`, `select_one`, required): Select the service you require.
* **Client Notes (Client Notes)** (`client_notes`, `note`, optional): Add any notes or details about the consultation.
* **Business Name (Business Name)** (`business_name`, `text`, optional): If you are representing a business, enter its name.
* **Business Website (Business Website)** (`business_website`, `text`, optional): Enter the website of your business.
* **Business Phone (Business Phone)** (`business_phone`, `text`, optional): Enter the phone number of your business.
* **Business Email (Business Email)** (`business_email`, `email`, optional): Enter the email of your business.
* **Social Media Links (Social Media Links)** (`social_media_links`, `text`, optional): Enter any social media links associated with your business.
* **Address (Address)** (`address`, `text`, optional): Enter the address of your business.
* **City (City)** (`city`, `text`, optional): Enter the city of your business.
* **State (State)** (`state`, `text`, optional): Enter the state of your business.
* **Zip (Zip)** (`zip`, `text`, optional): Enter the zip code of your business.
* **Country (Country)** (`country`, `text`, optional): Enter the country of your business.
* **Notes (Notes)** (`notes`, `text`, optional): Add any additional notes about the consultation.
* **Follow up (Follow up)** (`follow_up`, `select_multiple`, required): Choose any follow-up options.
* **Schedule Date (Schedule Date)** (`schedule_date`, `date`, required): Choose a date for the appointment.
* **Schedule Time (Schedule Time)** (`schedule_time`, `time`, optional): Choose a time for the appointment.
* **Duration (Duration)** (`duration`, `number`, required): Select the duration of the consultation.
* **Consultant Notes (Consultant Notes)** (`consultant_notes`, `note`, optional): Add any notes for the consultant.
* **Follow up (Follow up)** (`follow_up_goal_id`, `select_multiple`, required): Choose any follow-up options.
