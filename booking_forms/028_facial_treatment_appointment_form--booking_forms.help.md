# Facial Treatment Appointment Form - Help Guide
## Purpose
This form is for clients to book a facial treatment appointment. It gathers necessary information for the appointment process.

## How To Complete This Form
To complete this form, please follow these steps:
1. Fill in your name and contact information.
2. Choose a date and time for your appointment.
3. Select the type of treatment you are interested in.
4. Choose your preferred contact method (e.g. Mobile, Email, Phone).
5. If you have any special requests, please let us know.
6. If you have any additional information, please provide it in the space below.
7. Review and agree to the consent form.
8. Sign the client signature section.
9. Sign the business signature section.
10. Confirm your payment status.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, required): Please enter your full name.
* **Appointment Date** (`appointment_date`, date, required): Choose a date for your appointment.
* **Appointment Time** (`appointment_time`, time, required): Choose a time for your appointment.
* **Treatment Name** (`treatment_name`, text, optional): If you have a specific treatment in mind, please enter it here.
* **Treatment Duration** (`treatment_duration`, number, optional): If you have a specific treatment duration, please enter it here.
* **Client Email** (`client_email`, email, optional): If you have an email address, please enter it here.
* **Client Phone** (`client_phone`, text, optional): If you have a phone number, please enter it here.
* **Preferred Contact Method** (`preferred_contact_method`, select_one, optional): Choose how you would like to be contacted (Mobile, Email, Phone).
* **Preferred Contact Method Other** (`preferred_contact_method_other`, text, optional): If you have a preferred contact method not listed above, please enter it here.
* **Consent Form** (`consent_form`, select_multiple, optional): Review and agree to the consent form.
* **Special Requests** (`special_requests`, text, optional): If you have any special requests, please let us know.
* **Assigned User** (`assigned_user`, select_one, optional): Choose the user who will be assigned to your appointment.
* **Assigned User Other** (`assigned_user_other`, text, optional): If you have a different user in mind, please enter it here.
* **Client Signature** (`client_signature`, note, optional): Sign this section to confirm your booking.
* **Business Signature** (`business_signature`, note, optional): Our representative will sign this section to confirm your booking.
* **Appointment Type** (`appointment_type`, select_multiple, optional): Choose the type of appointment you are interested in (Facial, Chemical Peel, Microderm).
* **Payment Status** (`payment_status`, select_one, optional): Confirm your payment status (Paid, Unpaid, Partially Paid).
* **Notes** (`notes`, text, optional): If you have any additional comments or information, please enter them here.
* **Additional Fields** (`additional_fields`, text, optional): If you have any additional information, please enter it here.
