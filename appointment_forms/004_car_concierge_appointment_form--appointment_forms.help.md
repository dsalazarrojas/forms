# Car Concierge Appointment Form - Help Guide
## Purpose
This form is designed to help customers schedule an appointment for vehicle services such as detailing, oil changes, tire services, vehicle inspections, general maintenance, repair estimates, customizations, and other services. The form requests information to understand the customer's needs and preferences.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your full name, email address, and phone number.
2. Provide the make and model of your vehicle, including the color.
3. Choose the type of service needed from the provided options.
4. Describe in detail what services you require.
5. Select a preferred appointment date and time.
6. Indicate your flexibility with appointment dates.
7. Choose a preferred location for the appointment.
8. (Optional) Enter your service address, city, and state with zip code.
9. Select your service priority level (Routine, Standard, Urgent, or Emergency).
10. If you have any special requests or instructions, enter them in the text field.
11. Indicate if you are an existing customer.
12. Choose your preferred contact method (Phone, Email, Text Message, or Either).
13. Finally, confirm that you authorize the concierge to proceed with the service.

## Field-by-Field Explanation

* **Full name** (`customer_name`, `text`, required): Enter your full name as it appears on your ID or driver's license.
* **Email address** (`customer_email`, `email`, required): Enter your valid email address where you can be reached.
* **Phone number** (`customer_phone`, `text`, required): Enter your phone number where you can be reached.
* **Vehicle make and model** (`vehicle_make_model`, `text`, required): Enter the make and model of your vehicle, e.g., 2022 Honda Accord.
* **Vehicle color** (`vehicle_color`, `text`, optional): Enter the color of your vehicle, if applicable.
* **License plate number** (`vehicle_license_plate`, `text`, optional): Enter the license plate number of your vehicle, if applicable.
* **Type of service needed** (`service_type`, `select_one`, required): Choose the type of service needed from the provided options.
* **Detailed description of service needed** (`service_description`, `text`, required): Describe in detail what services you require.
* **Preferred appointment date** (`appointment_date`, `date`, required): Select a date for the appointment.
* **Preferred appointment time** (`appointment_time`, `time`, required): Select a time for the appointment.
* **How flexible are you with the appointment date?** (`preferred_day_flexibility`, `select_one`, optional): Indicate your flexibility with appointment dates.
* **Appointment location preference** (`appointment_location`, `select_one`, required): Choose a preferred location for the appointment.
* **Service address** (`service_address`, `text`, optional): Enter the service address if different from the appointment location.
* **City** (`city`, `text`, optional): Enter the city where the service will be performed.
* **State and zip code** (`state_zip`, `text`, optional): Enter the state and zip code where the service will be performed.
* **Service priority level** (`service_priority`, `select_one`, optional): Choose the service priority level (Routine, Standard, Urgent, or Emergency).
* **Special requests or instructions** (`special_requests`, `text`, optional): Enter any special requests or instructions for the service.
* **Are you an existing customer?** (`existing_customer`, `select_one`, optional): Indicate if you are an existing customer.
* **Preferred contact method** (`preferred_contact_method`, `select_one`, optional): Choose your preferred contact method (Phone, Email, Text Message, or Either).
* **I authorize the concierge to proceed with the service** (`authorization_agree`, `select_one`, required): Confirm that you authorize the concierge to proceed with the service.
