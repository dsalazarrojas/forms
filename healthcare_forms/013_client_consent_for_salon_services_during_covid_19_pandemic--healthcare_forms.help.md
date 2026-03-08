# Client Consent For Salon Services During COVID 19 Pandemic - Help Guide
## Purpose

This form is designed to collect necessary information from clients for COVID-19 safety protocols and client data collection during their visit to the salon. It includes details about their contact information, COVID-19 symptoms and exposure history, and consent for health and safety guidelines.

## How To Complete This Form

1. Fill in your First Name and Last Name in the designated fields.
2. Enter your Primary contact email and phone number for communication.
3. Provide your complete street address for contact and record keeping.
4. Enter your city, state, and ZIP code for location information.
5. Enter your Date of Birth for age verification.
6. Choose the service type you are receiving from the options provided.
7. Identify your assigned stylist.
8. Answer questions about your COVID-19 symptoms, exposure history, and test status.
9. Confirm your travel history in the past 14 days.
10. Indicate your agreement to wear a mask during your visit.
11. Consent to temperature screening upon arrival.
12. Agree to sanitize your hands upon entry.
13. Confirm your agreement to follow social distancing guidelines.
14. Acknowledge the guest policy of having only one guest per appointment.
15. Acknowledge all risks associated with COVID-19 exposure.
16. (Optional) Provide your health insurance provider for record keeping.
17. Enter the name and phone number of your emergency contact.
18. Confirm the date of your consent.
19. Sign your full name electronically to complete the form.

## Field-by-Field Explanation

* **First Name** (`client_first_name`, `text`, required): Enter your legal first name.
* **Last Name** (`client_last_name`, `text`, required): Enter your legal last name.
* **Email Address** (`client_email`, `email`, required): Enter your primary contact email.
* **Phone Number** (`client_phone`, `text`, required): Enter your best contact number.
* **Street Address** (`client_address`, `text`, required): Enter your complete address.
* **City** (`client_city`, `text`, required): Enter your city name.
* **State** (`client_state`, `text`, required): Enter your state name.
* **ZIP Code** (`client_zip`, `text`, required): Enter your ZIP code.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth for age verification.
* **Appointment Date** (`appointment_date`, `date`, required): Enter the scheduled service date.
* **Service Type** (`service_type`, `select_one`, required): Choose the service type from the options provided.
* **Stylist Name** (`stylist_name`, `text`, required): Enter your assigned stylist's name.
* **COVID-19 Symptoms Check** (`covid_symptoms_check`, `select_one`, required): Answer if you have any COVID-19 symptoms.
* **COVID-19 Exposure Check** (`covid_exposure_check`, `select_one`, required): Answer if you have been exposed to COVID-19 in the past 14 days.
* **COVID-19 Test Status** (`covid_test_status`, `select_one`, required): Answer if you have tested positive for COVID-19 in the past 14 days.
* **Travel History** (`travel_history`, `select_one`, required): Answer if you have traveled outside the country in the past 14 days.
* **Mask Agreement** (`mask_agreement`, `select_one`, required): Confirm your agreement to wear a mask during your visit.
* **Temperature Screening** (`temperature_screening`, `select_one`, required): Confirm your consent to temperature screening upon arrival.
* **Hand Sanitizing** (`hand_sanitizing`, `select_one`, required): Confirm your agreement to sanitize your hands upon entry.
* **Social Distancing** (`social_distancing`, `select_one`, required): Confirm your agreement to follow social distancing guidelines.
* **Guest Policy** (`guest_policy`, `select_one`, required): Acknowledge the guest policy of having only one guest per appointment.
* **Liability Waiver** (`liability_waiver`, `select_one`, required): Acknowledge all risks associated with COVID-19 exposure.
* **Health Insurance** (`health_insurance`, `text`, optional): (Optional) Enter your health insurance provider for record keeping.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, required): Enter the name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, required): Enter your emergency contact's phone number.
* **Consent Date** (`consent_date`, `date`, required): Enter the date of your consent.
* **Electronic Signature** (`electronic_signature`, `text`, required): Sign your full name electronically to complete the form.
