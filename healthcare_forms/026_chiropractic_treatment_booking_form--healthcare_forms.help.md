# Chiropractic Treatment Booking Form - Help Guide
## Purpose
This form is designed to gather information about you, the patient, and schedule a chiropractic treatment appointment with our healthcare professional. Please take a few minutes to fill out this form carefully, and don't hesitate to contact us if you have any questions or concerns.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in your personal information, such as your first and last name.
2. Enter your date of birth.
3. Provide your contact details, including phone number and email address.
4. Indicate whether you are a new or existing patient.
5. Choose your preferred appointment date and time.
6. Select the type of appointment you need.
7. Provide any necessary additional information.

## Field-by-Field Explanation

* **First Name** (`patient_first_name`, text, required): Please enter your first name.
* **Last Name** (`patient_last_name`, text, required): Please enter your last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the MM/DD/YYYY format (e.g., 02/12/1999).
* **Phone Number** (`phone`, text, required): Enter your phone number.
* **Email Address** (`email`, email, required): Enter your email address.
* **Address** (`address`, text, optional): Enter your address, including street, city, state, and zip code.
* **Are you a new or existing patient** (`new_or_existing`, select_one, required): Choose whether you are a new or existing patient.
* **Patient ID Number** (`patient_id`, text, optional): If you have a patient ID number, please enter it.
* **Appointment Details** (`appointment_details`, note, optional): Provide any additional information about your appointment.
* **Preferred Appointment Date** (`preferred_date`, date, required): Choose the date you prefer for your appointment.
* **Preferred Appointment Time** (`preferred_time`, time, required): Choose the time you prefer for your appointment.
* **Type of Appointment** (`appointment_type`, select_one, required): Select the type of appointment you need.
* **Preferred Doctor** (`preferred_doctor`, text, optional): If you have a preferred doctor, please enter their name.
* **Expected Duration** (`appointment_duration`, select_one, optional): Choose the expected duration of your appointment.
* **Reason for Visit** (`reason_for_visit`, note, optional): Provide the main reason for your visit.
* **Primary Complaint** (`primary_complaint`, text, required): Enter your primary complaint.
* **Location of Pain or Discomfort** (`pain_location`, select_multiple, optional): Select all areas that apply where you experience pain or discomfort.
* **Current Pain Level** (`pain_level`, number, optional): Enter your current pain level on a scale of 1-10.
* **Urgency** (`urgency`, select_one, required): Choose how urgent your appointment is.
* **Available Days** (`available_days`, select_multiple, optional): Select all days you are available for your appointment.
* **Available Times** (`available_times`, select_multiple, optional): Select all times you are available for your appointment.
* **Is your schedule flexible** (`flexible_schedule`, select_one, optional): Choose how flexible your schedule is.
* **Do you have health insurance** (`has_insurance`, select_one, required): Indicate whether you have health insurance.
* **Insurance Company** (`insurance_company`, text, optional): If you have health insurance, enter the name of your insurance company.
* **Policy Number** (`policy_number`, text, optional): If you have health insurance, enter your policy number.
* **Preferred Payment Method** (`payment_method`, select_one, optional): Choose your preferred payment method.
* **Additional Information** (`additional_information`, note, optional): Provide any additional information you think is relevant.
* **Do you have any special needs or accommodations** (`special_needs`, text, optional): If you have any special needs or accommodations, please let us know.
* **How did you hear about us** (`how_did_you_hear`, select_one, optional): Let us know how you found out about our practice.
* **Additional Comments** (`additional_comments`, text, optional): If you have any other comments or questions, please add them here.
* **I consent to being contacted about my appointment** (`consent_contact`, select_one, required): Confirm that you consent to being contacted about your appointment.
* **Patient Signature** (`patient_signature`, text, required): Enter your digital signature as a confirmation of your consent.
* **Date of Booking** (`booking_date`, date, required): The date and time of your appointment will be listed here once confirmed.
