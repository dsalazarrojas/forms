<thinking>
This form is designed to collect information from event volunteers to be trained. The form should only be completed by event volunteers. It is not intended to be used for other purposes such as registering attendees or creating event schedules. Please ensure that you are using the correct form for your intended use.
</thinking>

# event_volunteer_training_form - Help Guide
## Purpose
This form is used to collect information from event volunteers to be trained. It is used to gather details about the volunteer's identity, training preferences, and emergency contact information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your volunteer information, including your name and email address.
2. Provide your phone number for contact purposes.
3. Choose a training date and time that suits you.
4. Select the type of training you wish to receive.
5. Enter any emergency contact information.

## Field-by-Field Explanation

* **Volunteer Information** (`volunteer_info`, text, **required**): This is the first page of the form where you will enter your basic information.
  * **Name** (`name`, text, **required**): Enter your name as it appears on your identification.
  * **Email** (`email`, email, **required**): Enter your email address.
  * **Phone** (`phone`, text, **required**): Enter your phone number for contact purposes.
* **Training Date** (`training_date`, date, **required**): Choose a date for your training session.
* **Training Time** (`training_time`, time, **required**): Choose a time for your training session.
* **Training Type** (`training_type`, select_one, **required**): Select the type of training you wish to receive. Available options are:
  + Emergency Medical Technician
  + Fire Safety and Rescue
  + CPR Certification
* **Emergency Contact Information** (`emergency_contact_info`, text, **required**): Enter the name and contact information of an emergency contact person.
