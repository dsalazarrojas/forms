# Microchanneling Service Waitlist - Help Guide

## Purpose
The Microchanneling Service Waitlist form is used to record client information and schedule appointments for microchanneling services. This form is used to gather essential details from clients, including their contact information, availability, and service preferences. It helps us assign the best possible appointment schedule for their chosen services.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your first name in the "Client First Name" field.
2. Enter your last name in the "Client Last Name" field.
3. Provide your email address in the "Email" field.
4. Enter your phone number in the "Phone" field.
5. Select your preferred contact method in the "Preferred Contact Method" field.
6. Choose the date you are available for the appointment in the "Available Date" field.
7. Select the time you are available for the appointment in the "Available Time" field.
8. Choose the appointment time frame in the "Appointment Timeframe" field.
9. Select the type of appointment you require in the "Appointment Type" field.
10. If you require a custom appointment time, enter it in the "Custom Appointment Time" field.
11. Choose the services you require in the "Service" field.
12. Select the provider you would like to have assigned to you in the "Assigned Provider" field.
13. Choose your current status as a client in the "Client Status" field.
14. Select the date for the follow-up appointment in the "Follow-up Date" field.
15. Enter the time for the follow-up appointment in the "Follow-up Time" field.
16. If you require a follow-up provider, select one from the "Follow-up Provider" field.

## Field-by-Field Explanation

* **Client First Name** (`client_first_name`, text, optional): Enter your first name.
* **Client Last Name** (`client_last_name`, text, optional): Enter your last name.
* **Email** (`email`, email, optional): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Preferred Contact Method** (`preferred_contact_method`, select_one, required): Choose how you would like to be contacted (Microchanneling, Phone, Email, SMS).
* **Available Date** (`available_date`, date, optional): Choose the date you are available for the appointment.
* **Available Time** (`available_time`, time, optional): Choose the time you are available for the appointment.
* **Appointment Timeframe** (`appointment_timeframe`, select_one, required): Choose the time frame for your appointment (30 minutes, 60 minutes, 90 minutes).
* **Appointment Type** (`appointment_type`, select_one, required): Choose the type of appointment you require (60 Minute, 90 Minute, Custom).
* **Custom Appointment Time** (`custom_appointment_time`, time, optional): If you selected a custom appointment type, enter the time required.
* **Service** (`service`, select_multiple, required): Choose the services you require (Microchanneling, Chemical Peel, Microneedling).
* **Notes** (`notes`, note, optional): Enter any additional notes about your appointment.
* **Assigned Provider** (`assigned_provider`, select_multiple, optional): Choose the provider you would like to be assigned to you (Jimmy, Other).
* **Client Status** (`client_status`, select_one, required): Choose your current status as a client (New, Active, Completed).
* **Follow-up Date** (`follow_up_date`, date, required): Choose the date for the follow-up appointment.
* **Follow-up Time** (`follow_up_time`, time, required): Enter the time for the follow-up appointment.
* **Follow-up Provider** (`follow_up_provider`, select_multiple, optional): Choose the provider for the follow-up appointment (Jimmy, Other).
