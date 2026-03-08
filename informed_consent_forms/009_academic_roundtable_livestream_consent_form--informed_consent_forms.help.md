<thinking>

I am thinking about creating a user-facing help guide for the "Academic Roundtable Livestream Consent Form". The form's purpose is to gather information from speakers and participants about their consent to be recorded and livestreamed during an academic roundtable event. This is important to ensure that all individuals involved understand their participation rights and responsibilities. The form's design is modular, with sections for participant details, event information, consent, and rights and permissions. I will now focus on creating the help guide, following the required structure and using the provided YAML fields as a reference.

# Academic Roundtable Livestream Consent Form - Help Guide
## Purpose
The Academic Roundtable Livestream Consent Form is a module that gathers information from speakers and participants about their consent to be recorded and livestreamed during an academic roundtable event. This form is necessary to ensure that all parties involved understand their participation rights and responsibilities.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your full name and professional affiliation in the "Full Name of Speaker or Participant" and "Professional Affiliation or Title" fields, respectively.
2. Provide your email address in the "Speaker Email Address" field.
3. Enter the event name and date in the "Name of the Roundtable Event" and "Date of the Livestream" fields, respectively.
4. Select your availability for the "Date of the Livestream" field.
5. Choose your preferred streaming platforms in the "Approved streaming platforms" field.
6. Confirm your consent to be recorded and livestreamed, as well as the archiving of the recording for future viewing.
7. Choose whether you consent to having your responses in the Q and A session recorded.
8. Decide on the copyright release for institutional use.
9. Type your name to confirm agreement.

## Field-by-Field Explanation

* **Full Name of Speaker or Participant** (`speaker_name`, text, required): Enter your full name, as you wish to be credited.
* **Professional Affiliation or Title** (`professional_affiliation`, text, required): Provide your professional affiliation or title, e.g., Professor of History, University of London.
* **Speaker Email Address** (`speaker_email`, email, required): Enter your primary email address for event coordination.
* **Name of the Roundtable Event** (`event_name`, text, required): Enter the official event title.
* **Date of the Livestream** (`event_date`, date, required): Enter the scheduled date of the livestream.
* **Scheduled Start Time** (`start_time`, time, required): Enter your local time zone for the scheduled start time.
* **I consent to being recorded and livestreamed during this event** (`livestream_permission`, select_one, required): Select "I Consent" to confirm your consent.
* **Approved streaming platforms** (`platforms_approved`, select_multiple, required): Choose all applicable streaming platforms, such as University Portal, YouTube Live, LinkedIn Live, or Zoom Webinar.
* **May the recording be archived for future viewing?** (`archived_video_permission`, select_one, required): Select "Yes - Indefinitely" or "Yes - For 1 Year" for archiving the recording.
* **Do you consent to having your responses in the Q and A session recorded?** (`q_and_a_recording`, select_one, required): Select "True" for recording Q&A sessions.
* **I release any copyright claims to the recording for institutional use** (`copyright_release`, select_one, required): Select "Yes - Released" to release copyright claims.
* **Type name to confirm agreement** (`signature_confirmation`, text, required): Type your name to confirm your agreement.
* **Date** (`confirmation_date`, date, required): The date is automatically populated.

Note: The date field will be automatically populated with the current date, so there is no need to fill it out.
