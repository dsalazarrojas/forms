# COVID 19 Vaccine Notification Sign Up Form - Help Guide
## Purpose
This form is designed to gather information from individuals who are interested in receiving the COVID-19 vaccine. It will help us to understand their preferences and eligibility for vaccination, and enable us to provide personalized notifications and scheduling.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal information, including your first and last name, email address, and phone number.
2. Provide your date of birth in MM-DD-YYYY format.
3. Enter your residential ZIP code.
4. Choose your preferred notification methods (email, text message, phone call, or mail).
5. Select your preferred vaccine type and vaccination location type.
6. Indicate your willingness to travel for vaccination.
7. Choose your availability for weekday and weekend appointments.
8. Answer questions about any health conditions that may affect vaccination, including allergies and previous COVID-19 infections.
9. Confirm your contact information is accurate and up-to-date.
10. Provide any additional details about your health conditions.

## Field-by-Field Explanation
* **First Name** (`notification_first_name`, text, required): Enter your first name.
* **Last Name** (`notification_last_name`, text, required): Enter your last name.
* **Email Address** (`notification_email`, email, required): Enter your primary email address for notifications.
* **Phone Number** (`notification_phone`, phone, optional): Enter your phone number for SMS notifications.
* **Date of Birth** (`notification_dob`, date, required): Enter your date of birth in MM-DD-YYYY format.
* **ZIP Code** (`notification_zip_code`, text, required): Enter your residential ZIP code.
* **Select Your Preferred Notification Methods** (`notification_methods`, select_multiple, required): Check all methods you prefer to receive notifications (email, text message, phone call, or mail).
* **Vaccine Type Preference** (`vaccine_type_notification`, select_one, optional): Select your preferred vaccine type (Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Novavax, or No Preference).
* **Are You Willing to Travel for Vaccination** (`willing_to_travel`, select_one, required): Indicate your willingness to travel for vaccination (Yes, within 5 miles, Yes, within 10 miles, Yes, any distance, or No, must be local).
* **Preferred Vaccination Location Type** (`preferred_facility_type`, select_one, optional): Select your preferred vaccination location type (Medical clinic, Hospital, Pharmacy, Community center, Mobile clinic, or No preference).
* **Are You Available on Weekdays** (`available_weekdays`, select_one, required): Indicate your availability for weekday appointments (Monday through Friday availability).
* **Are You Available on Weekends** (`available_weekends`, select_one, required): Indicate your availability for weekend appointments (Saturday and Sunday availability).
* **Do You Have Any Health Conditions That May Affect Vaccination** (`health_conditions`, select_one, optional): Check if you have any health conditions that may affect vaccination (True, False, or Prefer not to say).
* **If Yes, Please Describe Your Conditions** (`conditions_details`, text, optional): Provide details about your health conditions.
* **Do You Have Allergies to Vaccine Components** (`allergies_notification`, select_one, required): Indicate if you have allergies to vaccine components (No allergies, Have allergies, or Unsure).
* **Have You Had COVID-19 Previously** (`previous_covid_notification`, select_one, optional): Check if you have had COVID-19 previously (True, False, or Unsure).
* **Do You Have Vulnerable Household Members** (`household_members_at_risk`, select_one, optional): Check if you have vulnerable household members (True or False).
* **I Agree to Receive Notifications** (`privacy_consent`, select_one, required): Check if you agree to receive notifications (I agree or I do not agree).
* **I Confirm My Contact Information is Accurate** (`contact_verification`, select_one, required): Confirm that your contact information is accurate (Confirmed accurate or Needs updating).
