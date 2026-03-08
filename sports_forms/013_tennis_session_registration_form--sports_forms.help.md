# Tennis Session Registration Form - Help Guide
## Purpose
The Tennis Session Registration Form is designed to collect information from users to register for a tennis session.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your name and contact information in the "Attendees Information" section.
2.  Select your availability for the tennis session, choosing one or more activities you are interested in.
3.  Specify the dates and times you are available in the "Availability Details" field.
4.  Indicate how many attendants will be coming with you.
5.  Check the "Tool" box if you require any special equipment or support.
6.  Add any additional comments or notes in the "Notes" field.
7.  Click submit to complete your registration.

## Field-by-Field Explanation

* **Attendees Information** (`attendees_info`, `text`, required: false): Enter your name and contact information, such as your first and last name, and your email address.
* **First Name** (`first_name`, `text`, required: false): Enter your first name.
* **Last Name** (`last_name`, `text`, required: false): Enter your last name.
* **Email** (`email`, `email`, required: false): Enter your email address.
* **Phone** (`phone`, `text`, required: false): Enter your phone number.
* **Availability** (`availability`, `select_multiple`, required: false): Select one or more activities you are interested in, such as Tennis, Squash, or Golf.
* **Availability Details** (`availability_details`, `text`, required: false): Specify the dates and times you are available in the tennis session.
* **Attendants** (`attendants`, `select_one`, required: false): Indicate how many attendants will be coming with you, from 1 to 5.
* **Notes** (`notes`, `note`, required: false): Add any additional comments or notes about your registration.
* **Tool** (`tool`, `select_one`, required: false): Check this box if you require any special equipment or support.
* **Tool** (`tool`, `select_one`, required: false): This field is not actually used in the form but is left in the YAML schema.
