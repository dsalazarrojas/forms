# Appointment Form Zy - Help Guide
## Purpose
This form is used to book an appointment at a salon. It collects client information, schedules an appointment, and provides details about the service required.

## How To Complete This Form
1. Fill in the client information: 
   - Enter your full name, phone number, and email address in the fields provided.
   - If you are a first-time client, select 'True', otherwise select 'False' or 'Not sure'.
2. Select the service required: 
   - Choose the type of service needed from the options provided.
3. Schedule the appointment: 
   - Select a preferred date and time for your appointment.
   - Choose the estimated duration of the appointment.
4. Additional information: 
   - Provide any special requests or additional notes about your appointment.

## Field-by-Field Explanation
* **Full Name** (`client_name`, `text`, required): Enter your full name as you would like it to be displayed in your appointment schedule.
* **Phone Number** (`phone_number`, `text`, required): Enter your phone number so we can contact you about your appointment.
* **Email Address** (`email_address`, `email`, required): Enter your email address so we can contact you about your appointment.
* **Are you a first-time client?** (`first_time_client`, `select_one`, required): If you are a new client, please select 'True', otherwise select 'False' or 'Not sure'.
* **Service Type** (`service_type`, `select_one`, required): Select the type of service you would like to book.
* **Current Hair Length** (`hair_length`, `select_one`, required): Select the length of your hair.
* **Hair Type** (`hair_type`, `select_one`, required): Select the type of hair you have.
* **Current Hair Color** (`hair_color_current`, `text`, required): Enter the current color of your hair.
* **Desired look or style** (`desired_look`, `text`, required): Describe the desired look or style you would like to achieve.
* **Preferred Stylist (if any)** (`preferred_stylist`, `text`, required): Enter the name of your preferred stylist if you have a specific preference.
* **Preferred Date** (`preferred_date`, `date`, required): Select a preferred date for your appointment.
* **Preferred Time** (`preferred_time`, `select_one`, required): Select a preferred time for your appointment.
* **Estimated Service Duration** (`appointment_duration`, `select_one`, required): Select the estimated duration of your appointment.
* **Any product preferences or allergies?** (`product_preferences`, `text`, required): Enter any product preferences or allergies you have.
* **Additional notes or concerns** (`additional_notes`, `text`, required): Enter any additional notes or concerns about your appointment.
* **How should we contact you about your appointment?** (`contact_preference`, `select_one`, required): Select how you would like to be contacted about your appointment.
