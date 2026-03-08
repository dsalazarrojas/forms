# Beauty Salon Check In Form - Help Guide
## Purpose
This form is used to check in clients who have scheduled an appointment at the salon, update their contact information, and provide any necessary health updates.

## How To Complete This Form
1. Fill out the client information section, which includes the client's name, email address, and phone number.
2. Select the appointment date and time from the calendar.
3. Choose the type of service you have scheduled (e.g. Haircut, Color, etc.).
4. Enter the name of the stylist or therapist who will be providing your service.
5. Check in on time and select the correct arrival status (Early, On Time, etc.).
6. If necessary, update your contact information or health status.

## Field-by-Field Explanation
* **Client Name** (`client_name`, text, required): Enter your name.
* **Email Address** (`client_email`, email, required): Enter your current email address.
* **Phone Number** (`client_phone`, text, required): Enter your current phone number.
* **Appointment Date** (`appointment_date`, date, required): Select the date of your appointment.
* **Appointment Time** (`appointment_time`, time, required): Select the time of your appointment.
* **Service Type** (`service_type`, select_one, required): Choose the type of service you have scheduled (e.g. Haircut, Color, etc.).
* **Stylist or Therapist Name** (`styalst_name`, text, required): Enter the name of the stylist or therapist who will be providing your service.
* **Check In Time** (`check_in_time`, time, required): Select the time you arrived at the salon.
* **Arrival Status** (`on_time`, select_one, required): Check if you arrived early, on time, or late.
* **Wait Time Before Appointment** (`waiting_time`, select_one, optional): If you had to wait, select the amount of time you waited.
* **Is Your Phone Number Current** (`phone_current`, select_one, required): Check if your phone number is current.
* **Updated Phone Number** (`new_phone`, text, optional): If your phone number has changed, enter the new number.
* **Is Your Email Current** (`email_current`, select_one, required): Check if your email address is current.
* **Updated Email** (`new_email`, email, optional): If your email address has changed, enter the new address.
* **Any New Allergies or Sensitivities** (`allergies_changed`, select_one, required): Check if you have any new allergies or sensitivities.
* **Describe New Allergies** (`new_allergies`, text, optional): If you have new allergies or sensitivities, describe them here.
* **Any New Medications** (`medications_changed`, select_one, required): Check if you have any new medications.
* **Describe New Medications** (`new_medications`, text, optional): If you have new medications, describe them here.
* **Currently Feeling Sick or Symptomatic** (`symptomatic`, select_one, required): Check if you are feeling sick or symptomatic.
* **Special Requests for Today** (`special_requests`, text, optional): If you have any special requests for your appointment, enter them here.
* **Quick Feedback About Previous Visit** (`feedback`, text, optional): Provide any feedback about your previous visit.

## Tips
* Please make sure to fill out all required fields.
* If you need to update your contact information, please do so in the "Contact Information Update" section.
* If you have any health updates, please fill out the "Health Status" section.
* If you need to provide feedback about your previous visit, please use the "Quick Feedback" field.
