# Pet Grooming Appointment Form - Help Guide

## Purpose
This form is designed to collect information for a pet grooming appointment.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Select the services you want for your pet during the appointment.
3. Choose a date and time for the appointment.
4. Enter your contact information so that we can reach out to you with any updates or changes.
5. If you have any additional notes or information about your pet, please enter it in the "Pet Notes" field.

## Field-by-Field Explanation

* **Pet Details** (`pet_details`, text, required: false): This field is not required, but it is a good idea to enter some information about your pet, such as its name, age, breed, etc.
* **Grooming Services** (`grooming_services`, select_multiple, required: false): Select all the services you want for your pet during the appointment. You can select multiple services.
	+ Bathing: A bath will be given to your pet to clean them and remove dirt and debris.
	+ Nail Trimming: The groomer will trim your pet's nails.
	+ Haircut: A haircut will be given to your pet.
* **Appointment Date** (`appointment_date`, date, required: true): Select a date for the appointment. Please enter the date in the correct format (MM/DD/YYYY).
* **Appointment Time** (`appointment_time`, time, required: true): Select a time for the appointment. Please enter the time in the format 12:00 AM or 12:00 PM.
* **Phone Number** (`phone_number`, text, required: true): Enter your phone number so that we can reach out to you with any updates or changes.
* **Pet Notes** (`pet_notes`, note, required: false): Enter any additional notes or information about your pet that would help the groomer prepare for the appointment.
* **Owner Name** (`owner_name`, text, required: true): Enter your name as the owner of the pet.
* **Owner Email** (`owner_email`, email, required: true): Enter your email address so that we can reach out to you with any updates or changes.
* **Owner Phone** (`owner_phone`, text, required: false): This field is not required, but it's a good idea to enter your phone number so that we can reach out to you with any updates or changes.
* **Assistant Name** (`assistant_name`, text, required: false): Enter the name of any assistant who will be accompanying your pet during the appointment.
* **Assistant Email** (`assistant_email`, email, required: false): Enter the email address of any assistant who will be accompanying your pet during the appointment.
* **Assistant Phone** (`assistant_phone`, text, required: false): This field is not required, but it's a good idea to enter the phone number of any assistant who will be accompanying your pet during the appointment.
* **Assistant Notes** (`assistant_notes`, note, required: false): Enter any additional notes or information about the assistant who will be accompanying your pet during the appointment.
