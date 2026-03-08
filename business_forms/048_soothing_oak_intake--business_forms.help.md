<thinking>As a business process, this form serves as an intake for patients, allowing them to provide personal and contact information, as well as schedule and preferential details for their massage therapy appointments. This form aims to streamline the booking process and ensure that both the patient and the business have a clear understanding of the appointment parameters. It's essential to complete this form accurately to ensure that the massage therapist is aware of any medical history, contact preferences, and scheduling constraints, thereby providing a more personalized and efficient experience. This form should only be completed once per appointment.</thinking>

# soothing_oak_intake - Help Guide
## Purpose
This form is designed to collect patient information for massage therapy appointments.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your patient name.
2. Briefly describe your medical history.
3. Choose your preferred contact method (Phone, Email, or In-person).
4. Enter your phone number (if applicable).
5. Enter your email address (if applicable).
6. Choose your preferred contact method (Phone, Email, or In-person).
7. Schedule your appointment time.
8. Specify the duration of your appointment.
9. Choose your preferred contact day.
10. Choose your preferred contact time.
11. Specify your preferred contact frequency.
12. Choose your preferred contact method (Phone, Email, or In-person).
13. Indicate if you have medical insurance.
14. List your medical provider (if applicable).
15. Select your preferred massage style.
16. Briefly describe your medical history.
17. Choose your preferred appointment location (Home, Clinic, or Mobile).
18. Select your medical specialties (Massage, Stretching, Acupuncture, or Cupping).
19. Indicate if you have an appointment (Yes or No).
20. Choose your payment method (Cash, Insurance, or Gift).
21. Enter your insurance provider (if applicable).
22. Schedule your appointment date.
23. Choose the person you want to contact (You or Someone Else).
24. Schedule your appointment end time.
25. Specify the duration of your appointment end.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, `text`, required: false): Please enter your name as you would like it to be used for your appointment.
* **Medical History** (`medical_history`, `note`, required: false): Briefly describe any significant medical issues or conditions that may impact your massage experience.
* **Preferred Contact Method** (`preferred_contact_method`, `select_one`, required: false): Choose your preferred method of contact (Phone, Email, or In-person).
* **Phone Number** (`phone_number`, `text`, required: false): If you prefer to be contacted by phone, enter your phone number here.
* **Email Address** (`email_address`, `email`, required: false): If you prefer to be contacted by email, enter your email address here.
* **Preferred Contact Method** (`preferred_contact_method`, `select_one`, required: false): Choose your preferred method of contact (Phone, Email, or In-person).
* **Schedule Time** (`schedule_time`, `date`, required: false): Select a specific time for your appointment.
* **Schedule Duration** (`schedule_duration`, `number`, required: false): Specify the duration of your appointment.
* **Preferred Contact Day** (`preferred_contact_day`, `select_multiple`, required: false): Choose the days you are available for contact.
* **Preferred Contact Time** (`preferred_contact_time`, `time`, required: false): Choose a specific time for your contact.
* **Preferred Contact Frequency** (`preferred_contact_frequency`, `number`, required: false): Specify how often you would like to be contacted.
* **Preferred Contact Method** (`preferred_contact_method`, `select_one`, required: false): Choose your preferred method of contact (Phone, Email, or In-person).
* **Medical Insurance** (`medical_insurance`, `select_multiple`, required: false): Indicate if you have medical insurance.
* **Medical Provider** (`medical_provider`, `text`, required: false): If you have medical insurance, list your insurance provider here.
* **Massage Style** (`massage_style`, `select_multiple`, required: false): Select your preferred massage style (Deep Tissue, Swedish, Sports, or Myofascial Release).
* **Medical History** (`medical_history`, `note`, required: false): Briefly describe any medical conditions that may impact your massage experience.
* **Preferred Location** (`preferred_location`, `select_one`, required: false): Choose your preferred appointment location (Home, Clinic, or Mobile).
* **Medical Specialties** (`medical_specialties`, `select_multiple`, required: false): Select your areas of medical interest (Massage, Stretching, Acupuncture, or Cupping).
* **Appointment Type** (`appointment_type`, `select_one`, required: false): Indicate if you have an appointment (Yes or No).
* **Payment Method** (`payment_method`, `select_multiple`, required: false): Choose your payment method (Cash, Insurance, or Gift).
* **Insurance Provider** (`insurance_provider`, `text`, required: false): If you use insurance, enter your insurance provider here.
* **Appointment Date** (`appointment_date`, `date`, required: false): Schedule your appointment date.
* **Preferred Contact Person** (`preferred_contact_person`, `select_one`, required: false): Choose who you want to contact (You or Someone Else).
* **Schedule Time End** (`schedule_time_end`, `time`, required: false): Choose a time for your appointment end.
* **Schedule Duration End** (`schedule_duration_end`, `number`, required: false): Specify the duration of your appointment end.
