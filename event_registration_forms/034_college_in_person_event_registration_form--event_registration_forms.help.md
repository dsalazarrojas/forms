# College In Person Event Registration Form - Help Guide
## Purpose
This form is designed to collect information from attendees registering for events hosted by the college. It captures details about the attendee, their event preferences, and any special requirements they may have.

## How To Complete This Form
To complete this form, simply fill out the fields as follows:

*   First Name: Enter your first name as it appears on your official documents.
*   Last Name: Enter your last name as it appears on your official documents.
*   Email Address: Enter your email address that you check regularly.
*   Phone Number: Enter your phone number where you can be reached.
*   Affiliation Type: Select your relationship to the college (e.g. Current Student, Faculty, etc.).
*   Institution or Department: Enter the name of your college or organization.
*   Event Name: Enter the name of the event you are registering for.
*   Event Date: Enter the date of the event.
*   Event Start Time: Enter the start time of the event.
*   Event Location: Enter the building and room number where the event is held.
*   Interested in Session 1: Select "Yes" if you are interested in Session 1.
*   Session 1 Time: If you selected "Yes" for Session 1, enter the start time of Session 1.
*   Interested in Session 2: Select "Yes" if you are interested in Session 2.
*   Session 2 Time: If you selected "Yes" for Session 2, enter the start time of Session 2.
*   Will You Bring a Guest: Select "Yes" if you are bringing a guest.
*   Guest Name: If you selected "Yes" for "Will You Bring a Guest", enter the name of your guest.
*   Dietary Requirements: Select your dietary requirements (e.g. Vegetarian, Vegan, etc.).
*   Other Dietary Requirements: If you have other dietary requirements, enter them here.
*   Accessibility or Accommodation Needs: Select "Yes" if you have any accessibility needs.
*   Accessibility Details: If you selected "Yes", describe your needs here.
*   Parking Needed: Select "Yes" if you need parking.
*   Transportation Needs: Select "Yes" if you need transportation services.
*   Expected Event Experience Level: Select your expected experience level for the event.
*   How Should We Contact You: Select your preferred communication method.
*   I Agree to the Event Terms and Conditions: Select "Yes" to agree to the event terms and conditions.

## Field-by-Field Explanation

* **First Name** (`attendee_first_name`, text, required): Enter your first name as it appears on your official documents.
* **Last Name** (`attendee_last_name`, text, required): Enter your last name as it appears on your official documents.
* **Email Address** (`attendee_email`, email, required): Enter your email address that you check regularly.
* **Phone Number** (`attendee_phone`, text, required): Enter your phone number where you can be reached.
* **Affiliation Type** (`affiliation_type`, select_one, required): Select your relationship to the college (e.g. Current Student, Faculty, etc.).
* **Institution or Department** (`institution_name`, text, required): Enter the name of your college or organization.
* **Event Name** (`event_name`, text, required): Enter the name of the event you are registering for.
* **Event Date** (`event_date`, date, required): Enter the date of the event.
* **Event Start Time** (`event_time`, time, required): Enter the start time of the event.
* **Event Location** (`event_location`, text, required): Enter the building and room number where the event is held.
* **Interested in Session 1** (`session_1_interested`, select_one, required): Select "Yes" if you are interested in Session 1.
* **Session 1 Time** (`session_1_time`, time, optional): If you selected "Yes" for Session 1, enter the start time of Session 1.
* **Interested in Session 2** (`session_2_interested`, select_one, required): Select "Yes" if you are interested in Session 2.
* **Session 2 Time** (`session_2_time`, time, optional): If you selected "Yes" for Session 2, enter the start time of Session 2.
* **Will You Bring a Guest** (`additional_guest`, select_one, required): Select "Yes" if you are bringing a guest.
* **Guest Name** (`guest_name`, text, optional): If you selected "Yes" for "Will You Bring a Guest", enter the name of your guest.
* **Dietary Requirements** (`dietary_requirements`, select_multiple, required): Select your dietary requirements (e.g. Vegetarian, Vegan, etc.).
* **Other Dietary Requirements** (`dietary_other`, text, optional): If you have other dietary requirements, enter them here.
* **Accessibility or Accommodation Needs** (`accessibility_needs`, select_one, required): Select "Yes" if you have any accessibility needs.
* **Accessibility Details** (`accessibility_details`, text, optional): If you selected "Yes", describe your needs here.
* **Parking Needed** (`parking_needed`, select_one, required): Select "Yes" if you need parking.
* **Transportation Needs** (`transportation_arrangement`, select_one, required): Select "Yes" if you need transportation services.
* **Expected Event Experience Level** (`event_experience`, select_one, required): Select your expected experience level for the event.
* **How Should We Contact You** (`communication_preference`, select_one, required): Select your preferred communication method.
* **I Agree to the Event Terms and Conditions** (`event_terms_acceptance`, select_one, required): Select "Yes" to agree to the event terms and conditions.

## Tips

*   Please make sure to provide accurate and complete information to ensure a smooth event experience for everyone.
*   If you need help or have questions, contact us at [your email/phone number].
*   We will use the information you provide to tailor the event to your needs and preferences.
