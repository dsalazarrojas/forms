# Tattoo Request - Help Guide
## Purpose
This form is used to create a booking for a tattoo service. Please fill out the required fields to provide us with the necessary information to schedule an appointment.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields marked with an asterisk (\*). These fields are essential for us to process your booking.
2. Select the service type you are interested in: Tattoo, Piercing, or Removal.
3. Choose if you want to see a specific tattoo designer and if you want to schedule an appointment.

## Field-by-Field Explanation
* **Booking Form** (`booking_form`, text, optional): A brief description of your booking. This field is not required but provides a space to include any additional information.
* **Customer Name** (`customer_name`, text, optional): This field is used to store your name. Please fill it out with your real name.
* **Customer Phone** (`customer_phone`, text, optional): This field is for your phone number. Please make sure to include your area code.
* **Customer Email** (`customer_email`, email, optional): This field is used to store your email address. Please ensure it's a valid address.
* **Service Type** (`service_type`, select_one, required): Select one of the available options: Tattoo, Piercing, or Removal.
* **Tattoo Design** (`tattoo_design`, text, optional): This field is used to describe your desired tattoo design. Please provide as much detail as possible.
* **Tattoo Designer** (`tattoo_designer`, select_multiple, optional): Choose if you want to see a specific tattoo designer. Options are Yes or No.
* **Date** (`date`, date, optional): Select a date for your appointment. This field is not required but recommended for scheduling purposes.
* **Time** (`time`, time, optional): Choose a time for your appointment. This field is not required but recommended.
* **Appointment Date** (`appointment_date`, select_one, optional): Choose if you want to schedule an appointment on a specific date. Options are Yes or No.
* **Appointment Time** (`appointment_time`, select_one, optional): Choose if you want to schedule an appointment at a specific time. Options are Yes or No.
* **Note** (`note`, note, optional): Leave any additional comments or instructions for us. This field is not required but recommended for any special requests or instructions.

## Tips
- Please ensure the provided information is accurate and complete to avoid any issues with your appointment.
- If you're having trouble with any field, feel free to ask our staff for assistance.
- You can submit this form multiple times, but please note that your previous booking request will be treated as cancelled if you submit a new request with conflicting information.
