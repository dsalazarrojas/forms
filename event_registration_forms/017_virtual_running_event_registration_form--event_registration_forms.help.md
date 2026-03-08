<thinking>
We need to determine the form purpose and required fields before creating the user-facing help guide. Let's analyze the form YAML.
The form is a "Virtual Running Event Registration Form" and appears to be used for registering participants for a virtual running event. Based on the fields, it seems that the form is used to collect participant information and event preferences. The required fields are not explicitly stated, so we'll need to determine which ones are actually required for the event registration to be successful.

After analyzing the form YAML, it appears that all fields except for "event_date" and "payment_method" are not required. The "event_date" field seems to be related to the event scheduling, and "payment_method" might be related to the payment processing. However, these fields are not explicitly marked as required, so we'll leave them as optional for now.

The form seems to have the following fields:
* First Name: a text field for the participant's first name
* Last Name: a text field for the participant's last name
* Email: an email field for the participant's contact information
* Phone: a text field for the participant's phone number
* Address: a text field for the participant's address
* City: a text field for the participant's city
* State: a text field for the participant's state
* Zip Code: a number field for the participant's zip code
* Registration Count: a number field for the event registration count
* Participant Type: a select_multiple field for the participant type (yes/no)
* Payment Method: a select_one field for the payment method (with options: Option 1, Option 2, Option 3)
The participant_type field has a hint that states participants must be at least 5 years old and not more than 10 years old, which will be reflected in the help guide.

</thinking>

# Virtual Running Event Registration Form - Help Guide
## Purpose
The Virtual Running Event Registration Form is used to register participants for a virtual running event. Fill out this form to provide your contact information and event preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name and Last Name in the corresponding text fields.
2. Enter your Email address for contact purposes.
3. Provide your Phone number for easy communication.
4. Enter your Address, City, and State for event logistics.
5. Enter your Zip Code for event location verification.
6. Choose your Registration Count for the event (1-5 participants).
7. Select your preferred Payment Method (Option 1, Option 2, Option 3).
8. Indicate your Participant Type by selecting "Yes" or "No" (please note that participants must be at least 5 years old and not more than 10 years old).

## Field-by-Field Explanation

* **First Name** (`First Name`, `text`, required: false): Enter your first name.
* **Last Name** (`Last Name`, `text`, required: false): Enter your last name.
* **Email** (`Email`, `email`, required: false): Enter your email address for event communication.
* **Phone** (`Phone`, `text`, required: false): Enter your phone number for easy communication.
* **Address** (`Address`, `text`, required: false): Enter your address for event logistics.
* **City** (`City`, `text`, required: false): Enter your city for event location verification.
* **State** (`State`, `text`, required: false): Enter your state for event location verification.
* **Zip Code** (`Zip Code`, `number`, required: false): Enter your zip code for event location verification.
* **Event Date** (`Event Date`, `date`, required: false): Optional event date field, not required for event registration.
* **Registration Count** (`Registration Count`, `number`, required: false): Choose the number of participants registering for the event (1-5).
* **Payment Method** (`Payment Method`, `select_one`, required: false): Choose your preferred payment method (Option 1, Option 2, Option 3).
* **Participant Type** (`Participant Type`, `select_multiple`, required: false): Select "Yes" if you are at least 5 years old and not more than 10 years old, otherwise select "No".
