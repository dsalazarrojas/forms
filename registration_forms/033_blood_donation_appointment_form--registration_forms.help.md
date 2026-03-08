# Blood Donation Appointment Form - Help Guide
## Purpose
This form is designed to help individuals schedule a blood donation appointment at their preferred location and time. It collects demographic information, medical history, and preferences for the donation process to ensure a smooth and efficient experience.

## How To Complete This Form

1.  Please provide your full name, email address, and phone number to facilitate communication and confirmation of your appointment.
2.  Enter your date of birth to verify your age and eligibility for donation.
3.  Select your preferred gender to aid in medical records and screening.
4.  Provide your street address, city, and state to enable efficient delivery of appointment reminders and medical services if needed.
5.  Enter your zip code for geographic location verification.
6.  Choose your preferred location for the donation appointment.
7.  Select your preferred date and time for the appointment.
8.  Specify the type of donation you are willing to make (e.g., whole blood, platelets, plasma, or power red).
9.  Confirm if this is your first time donating blood.
10. If applicable, provide your last donation date to aid in medical screening.
11. Enter your weight in pounds for medical evaluation.
12. Answer "yes" or "no" to indicate your current health status to ensure a safe donation process.
13. If necessary, provide any additional comments or questions you have about the donation process.
14. Indicate your preferred method of appointment reminder (email, SMS, phone call, or no reminder).

## Field-by-Field Explanation

*   **Full Name** (`donor_name`, `text`, required): Enter your full name as it appears on your ID or official documents.
*   **Email Address** (`email`, `email`, required): For confirmation and communication purposes, please enter your email address where you can be reached.
*   **Phone Number** (`phone`, `text`, required): Please enter your contact number where you can be reached during the appointment and after.
*   **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth to verify your age and eligibility for blood donation.
*   **Gender** (`gender`, `select_one`, required): Select your preferred gender to aid in medical records and screening.
*   **Street Address** (`address`, `text`, required): Provide your home address to enable efficient delivery of appointment reminders and medical services if required.
*   **City** (`city`, `text`, required): Enter the city where you reside for verification purposes.
*   **State** (`state`, `text`, required): Provide the state where you live for geographic location verification.
*   **Zip Code** (`zip_code`, `text`, required): Enter your zip code for location verification.
*   **Preferred Donation Center** (`preferred_location`, `select_one`, required): Select the preferred location for your blood donation appointment.
*   **Preferred Date** (`preferred_date`, `date`, required): Choose your preferred date for the blood donation appointment.
*   **Preferred Time** (`preferred_time`, `time`, required): Select your preferred time for the appointment.
*   **Alternate Date** (`alternate_date`, `date`, optional): Provide an alternate date in case your preferred date is not available.
*   **Type of Donation** (`donation_type`, `select_one`, required): Specify the type of blood donation you are willing to make (e.g., whole blood, platelets, plasma, or power red).
*   **First Time Donor** (`first_time_donor`, `select_one`, required): Confirm if this is your first time donating blood.
*   **Last Donation Date** (`last_donation_date`, `date`, optional): If applicable, provide your last blood donation date for medical screening.
*   **Weight** (`weight`, `number`, required): Enter your weight in pounds for medical evaluation.
*   **Health Screening** (`health_screening`, `select_one`, required): Answer "yes" or "no" to indicate your current health status.
*   **Eligibility Questions** (`eligibility_questions`, `note`, optional): Provide any additional comments or questions you have about the eligibility screening.
*   **Accessibility Needs** (`special_needs`, `text`, optional): If applicable, describe any special needs or accommodations you require.
*   **Appointment Reminder** (`reminder_preference`, `select_one`, required): Indicate your preferred method of appointment reminder (email, SMS, phone call, or no reminder).
*   **Additional Comments** (`additional_comments`, `text`, optional): Enter any additional comments or questions you have about the donation process.

## Tips

*   Please answer all required fields to ensure a smooth and efficient blood donation process.
*   If you need assistance or clarification on any field, you can refer to the link provided for the eligibility screening questionnaire.
*   Be honest and accurate when providing your contact information, medical history, and preferences to ensure the best possible experience.
