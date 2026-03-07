<thinking>...</thinking>

# spring_event_sign_up_form - Help Guide
## Purpose
This form is designed for users to sign up for a spring event. It collects information such as first name, last name, email, phone number, event date, event time, event time zone, sign up type, and notes. Please note that this form is not meant for actual event registration, and its primary purpose is for internal use. Ensure that you are filling this out for a valid reason and that you have the necessary permissions.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name in the "First Name" field.
2. Fill in your Last Name in the "Last Name" field.
3. Enter your email address in the "Email" field.
4. Enter your phone number in the "Phone" field.
5. Choose a date for the event in the "Event Date" field.
6. Select the correct time zone for the event in the "Event Time Zone" field.
7. Choose how you want to sign up for the event: "In Person", "Virtual", or "Phone".
8. Optionally, provide any additional notes in the "Notes" field.
9. Confirm the event date in the "Confirm Event Date" field.

## Field-by-Field Explanation
* **First Name** (`First Name`, text, required: false): Enter your first name.
* **Last Name** (`Last Name`, text, required: false): Enter your last name.
* **Email** (`Email`, email, required: false): Enter your email address.
* **Phone** (`Phone`, text, required: false): Enter your phone number.
* **Event Date** (`Event Date`, date, required: false): Choose a date for the event.
* **Event Time** (`Event Time`, time, required: false): This field is not actually used in the form, please do not fill it in.
* **Event Time Zone** (`Event Time Zone`, select_one, required: false): Select the time zone for the event. Options are EST, EDT, PDT, MDT, CST, and CDT.
* **Sign Up Type** (`Sign Up Type`, select_one, required: false): Choose how you want to sign up for the event: In Person, Virtual, or Phone.
* **Notes** (`Notes`, note, required: false): Provide any additional information you'd like to share about your sign up.
* **Confirm Event Date** (`Confirm Event Date`, date, required: false): Confirm the event date you previously selected. This is to double-check the date selected.
