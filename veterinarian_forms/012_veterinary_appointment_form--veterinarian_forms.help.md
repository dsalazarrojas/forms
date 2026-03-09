# Veterinary Appointment Form - Help Guide
## Purpose
This form is designed to collect information from pet owners before an appointment with a veterinarian. It will help the veterinarian to prepare for the appointment and provide better service.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of pet that will be visiting.
2. Enter the date and time of the appointment.
3. Enter the pet's name.
4. Enter the client's (owner's) name and contact information.
5. Enter any additional notes about the appointment.

## Field-by-Field Explanation
* **Pet Type** (`pet_type`, select_one, required): Choose the type of pet that will be visiting, such as "Yes" for a yes/no question indicating if it's a pet or not, or other options could be dog, cat, etc.
* **Date** (`date`, date, required): Enter the date of the appointment in the format YYYY-MM-DD.
* **Time** (`time`, time, required): Enter the time of the appointment in 12HR-24HR format.
* **Client Name** (`client_name`, text, required): Enter the name of the pet owner.
* **Pet Name** (`pet_name`, text, required): Enter the name of the pet.
* **Contact Number** (`contact_number`, text, optional): Enter the contact number of the pet owner.
* **Email** (`email`, email, optional): Enter the email of the pet owner.
* **Schedule Time** (`schedule_time`, number, optional): Enter the time slot allocated for the appointment.
* **Appointment Duration** (`appointment_duration`, number, optional): Enter the duration of the appointment.
* **Appointment Date** (`appointment_date`, date, optional): Enter the date of the appointment.
* **Appointment Time** (`appointment_time`, time, optional): Enter the time of the appointment.
* **Notes** (`notes`, note, optional): Add any additional notes about the appointment.

## Tips
* Make sure to enter all required fields (marked as required).
* Double check the date and time fields for correct formats.
* Enter the pet owner's contact information to ensure we can reach them.
* Use the notes field to add any special instructions or reminders for the appointment.
