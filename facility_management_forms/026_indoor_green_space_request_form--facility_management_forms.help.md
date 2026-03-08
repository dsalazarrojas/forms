<thinking>
This form is designed to collect information from users who wish to request indoor green space for meetings, events, or other purposes. The form aims to gather details about the request, including the facility name, date and time of visit, capacity of the space, special needs, and contact information. This form is not intended for general inquiries or routine matters, but rather for formal requests that require specific arrangements. Please ensure that you have a legitimate reason for requesting indoor green space before submitting this form.
</thinking>

# Indoor Green Space Request Form - Help Guide
## Purpose
This form is used to request indoor green space for specific purposes. Please fill out the form with accurate and complete information to ensure that your request is processed efficiently.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Provide a valid facility name where the event will take place.
3. Choose the date and start/end times of the visit.
4. Specify the expected capacity of the indoor space.
5. If applicable, list any special needs (e.g., wheelchairs, service animals).
6. Fill out your contact name and email address.
7. Enter your contact phone number (optional).

## Field-by-Field Explanation

### 1. **request_form**
* (`request_form`, text, required: false): Briefly describe the purpose and nature of your request.
### 2. **facility_name**
* (`facility_name`, text, required: false): Type the name of the facility where you wish to request the indoor green space.
### 3. **date_of_visit**
* (`date_of_visit`, date, required: false): Select the date when you plan to visit the facility.
### 4. **start_time**
* (`start_time`, time, required: false): Choose the start time of your visit.
### 5. **end_time**
* (`end_time`, time, required: false): Select the end time of your visit.
### 6. **purpose**
* (`purpose`, text, required: false): Briefly explain the purpose and nature of your request.
### 7. **facility_capacity**
* (`facility_capacity`, select_one, required: false): Choose the expected capacity of the indoor green space. Options are:
	+ Less than 25
	+ 25-50
	+ More than 50
### 8. **special_needs**
* (`special_needs`, select_multiple, required: false): If applicable, choose any special needs you may have (e.g., wheelchairs, service animals).
### 9. **contact_name**
* (`contact_name`, text, required: false): Fill out your name.
### 10. **contact_email**
* (`contact_email`, email, required: false): Enter your email address.
### 11. **contact_phone**
* (`contact_phone`, text, required: false): Provide your phone number.
