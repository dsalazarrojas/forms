<thinking>
To avoid duplication and ensure relevance, let's first analyze the form's purpose and the provided fields. The "makeup_artist_conference_registration" form appears to be a registration form for a conference, specifically designed for makeup artists. The form likely aims to collect information from attendees, including their event preferences, contact details, and any special needs they may have. 

Upon examining the YAML structure, we notice that the form is divided into multiple pages, each with its own set of fields. The fields seem to be a mix of text inputs (name, email, phone, contact info, address, city, state), a select multiple input for sessions, and another for special needs.

The form's purpose is most likely to:

* Gather contact information (name, email, phone, contact info, address, city, state) 
* Collect information on event session preferences 
* Identify any special needs or requirements 
</thinking>

# makeup_artist_conference_registration - Help Guide
## Purpose
This registration form is for makeup artists to sign up for the conference. It will help us better understand your event preferences and any special requirements you may have.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your name and email address in the "name" and "email" fields respectively.
2. Choose the sessions you'd like to attend by selecting "Yes" or "No" for each option.
3. If you have any special needs, provide more information in the "special_needs" field.
4. Add your contact information and address details.

## Field-by-Field Explanation
* **Event Info** (`event_info`, text, required: false): Enter a brief description of the event you'd like to attend.
* **Name** (`name`, text, required: false): Enter your name.
* **Email** (`email`, email, required: false): Enter your email address.
* **Phone** (`phone`, text, required: false): Enter your phone number.
* **Sessions** (`event_sessions`, select_multiple, required: false): Select the sessions you'd like to attend.
* **Special Needs** (`special_needs`, text, required: false): If you have any special needs, please specify.
* **Contact Info** (`contact_info`, text, required: false): Enter your contact information.
* **Address** (`address`, text, required: false): Enter your address.
* **City** (`city`, text, required: false): Enter your city.
* **State** (`state`, text, required: false): Enter your state.
