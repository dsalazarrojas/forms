# Book In A Vehicle Service Form - Help Guide
## Purpose
This form is used to book an in-vehicle service for your vehicle. Please provide your information and select your preferred service date and time to schedule an appointment.

## How To Complete This Form
1. Enter your first name and last name in the respective fields.
2. Provide your email address to receive confirmation and updates about your appointment.
3. Enter your phone number so we can contact you for any further instructions.
4. Enter your vehicle's make and model.
5. Enter the year of manufacture of your vehicle.
6. Enter your vehicle's registration number.
7. Enter the current odometer reading.
8. Select the service type you require (e.g., oil change, tire rotation, etc.).
9. Choose a preferred service date for your vehicle.
10. Select a preferred time slot for your appointment.
11. If you have any additional concerns or issues with your vehicle, enter them in the text field.
11. If your vehicle is still under warranty, select 'True'. Otherwise, select 'False' or 'Not Sure'.

## Field-by-Field Explanation
- **First Name** (`customer_first_name`, `text`, required): Enter your first name.
- **Last Name** (`customer_last_name`, `text`, required): Enter your last name.
- **Email Address** (`customer_email`, `email`, required): Enter your email address, which will be used to send you confirmation and updates about your appointment.
- **Phone Number** (`customer_phone`, `text`, required): Enter your phone number so we can contact you for any further instructions.
- **Vehicle Make** (`vehicle_make`, `text`, required): Enter your vehicle's make (e.g., Toyota, Ford, Honda).
- **Vehicle Model** (`vehicle_model`, `text`, required): Enter your vehicle's model (e.g., Camry, F-150, Civic).
- **Vehicle Year** (`vehicle_year`, `number`, required): Enter the year of manufacture of your vehicle.
- **Registration Number** (`vehicle_registration`, `text`, required): Enter your vehicle's registration number (license plate number).
- **Current Mileage** (`mileage`, `number`, required): Enter the current odometer reading of your vehicle.
- **Service Type** (`service_type`, `select_multiple`, required): Select the service type you require (e.g., oil change, tire rotation, etc.).
- **Preferred Service Date** (`service_date`, `date`, required): Choose a preferred service date for your appointment.
- **Preferred Time** (`service_time`, `select_one`, required): Select a preferred time slot for your appointment.
- **Additional Concerns or Issues** (`additional_concerns`, `text`, optional): Enter any specific issues or concerns with your vehicle.
- **Under Warranty** (`warranty_coverage`, `select_one`, optional): If your vehicle is still under manufacturer warranty, select 'True'. Otherwise, select 'False' or 'Not Sure'. 

## Tips
* Please ensure that you have provided all necessary information for a successful appointment booking.
* Double-check your preferred service date and time to avoid any scheduling conflicts.
* If you have any questions or concerns, contact us at the email address or phone number provided on the form.
* We will send you confirmation and updates about your appointment via the email address you provided.
