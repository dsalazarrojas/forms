# historical_site_tour_appointment_form - Help Guide
## Purpose
This form is used to register and schedule a historical site tour. It gathers necessary details from the tour operator and visitor for the tour management process.

## How To Complete This Form
To complete this form, follow the steps below:
1. Fill out the required fields with accurate information.
2. Select the correct options for the tour type and availability.
3. Enter any additional comments or notes about the tour.

## Field-by-Field Explanation
* **Tour Operator** (`tour_operator`, text, optional): Enter the name or details of the tour operator.
* **Tour Date** (`tour_date`, date, required): Select the date of the tour. 
* **Visitor Name** (`visitor_name`, text, required): Enter the name of the visitor(s) who will be joining the tour.
* **Email** (`email`, email, required): Enter a valid email address of the visitor(s).
* **Phone** (`phone`, text, optional): Enter the contact phone number of the visitor(s) for emergencies.
* **Tour Time** (`tour_time`, time, required): Select the time of the tour.
* **Notes** (`notes`, text, optional): Enter any notes or comments about the tour.
* **Comments** (`comments`, text, optional): Enter any additional comments or notes about the tour.
* **Availability** (`availability`, select_one, optional): Select the availability of the tour (Morning, Afternoon, or Evening).
* **Tour Type** (`tour_type`, select_multiple, required): Select one or more of the following tour types: General Tour, Private Tour, Group Tour.
* **Tour Notes** (`tour_notes`, text, optional): Enter any additional notes or comments about the tour.
