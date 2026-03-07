<thinking>...</thinking>

# Cemetery Service Registration - Help Guide

## Purpose
The Cemetery Service Registration form is used to collect information and preferences for a cemetery service. This form helps us understand the specific needs of the family or individual requesting the service, including requester information, deceased details, service preferences, and logistical requirements.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the requester's full name, email address, and phone number to ensure we can contact you with updates and confirmations.
2.  Fill in the deceased's full name and date of passing.
3.  Select a preferred date and time for the service.
4.  Choose the type of service (e.g., Committal, Memorial, Graveside, Celebration of Life).
5.  Select the service location (e.g., Cemetery Chapel, Graveside, Off-site Location).
6.  If necessary, indicate if there will be a procession and select the equipment needed (e.g., chairs, PA system, canopy, etc.).
7.  If applicable, provide the name of the person leading the service (officiant) and their preference for a secular or religious service.
8.  Confirm if the plot has been pre-purchased.
9.  Share any special requests or instructions for the service.

## Field-by-Field Explanation
* **Requester Information** (`requester_name`, `text`, `required`): Enter the full name and contact details of the person or organization making the service request.
* **Requester Full Name** (`requester_name`, `text`, `required`): Enter the full name of the person or individual making the request.
* **Requester Email Address** (`requester_email`, `email`, `required`): Enter the email address of the person making the request for confirmation and updates.
* **Requester Phone Number** (`requester_phone`, `text`, `required`): Enter the phone number of the person making the request.
* **Deceased Information** (`deceased_name`, `text`, `required`): Enter the full name of the deceased person.
* **Date of Passing** (`date_of_passing`, `date`, `optional`): Enter the date of the deceased person's passing.
* **Service Details** (`preferred_service_date`, `date`, `required`): Select a preferred date and time for the service.
* **Preferred Service Time** (`preferred_service_time`, `time`, `required`): Select a preferred time for the service.
* **Type of Service** (`type_of_service`, `select_one`, `required`): Choose the type of service (e.g., Committal, Memorial, Graveside, Celebration of Life).
* **Service Location** (`service_location`, `select_one`, `required`): Select the location where the service will be held (e.g., Cemetery Chapel, Graveside, Off-site Location).
* **Logistics and Preferences** (`equipment_needed`, `select_multiple`, `optional`): Select any additional equipment needed for the service (e.g., chairs, PA system, canopy, etc.).
* **Procession** (`procession_status`, `select_one`, `required`): Indicate if there will be a procession.
* **Officiant Details** (`officiant_name`, `text`, `optional`): Enter the name of the person leading the service.
* **Service Preference** (`religious_secular_pref`, `select_one`, `required`): Select the preference for a secular or religious service.
* **Final Arrangements** (`plot_prepurchased_status`, `select_one`, `required`): Confirm if the plot has been pre-purchased.
* **Any Special Requests or Instructions** (`special_requests_instructions`, `text`, `optional`): Share any specific needs or requests for the service.
