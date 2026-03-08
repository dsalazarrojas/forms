# Race Kit Pickup Authorization Letter - Help Guide
## Purpose
This form is used to gather information about a participant's ability to pick up their race kit, which is a document or package containing information and items related to the race.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and contact information in the `participant_name`, `participant_email`, `participant_phone`, and `participant_address` fields.
2. Select your pickup location from the `pickup_location` field.
3. Enter the date of the event you are participating in from the `event_date` field.
4. Enter your participant number from the `race_number` field.
5. Fill in your zip code from the `participant_zip` field.
6. Choose your status as active or inactive from the `participant_status` field.

## Field-by-Field Explanation
* **race_kit_pickup_authorization_letter** (`1`, `text`, optional): This field is a free-text field for any additional comments or information.
* **event_details** (`2`, `text`, optional): This field is for providing any additional information about the event.
* **race_details** (`3`, `text`, optional): This field is for providing any additional information about the race.
* **pickup_location** (`4`, `select_one`, optional): This field allows you to select the location where you will be picking up your race kit.
	+ Option 1
	+ Option 2
	+ Option 3
* **pickup_time** (`5`, `time`, optional): This field is for entering the time you plan to pick up your race kit.
* **event_date** (`6`, `select_multiple`, optional): This field allows you to select multiple dates for the event.
	+ 2024-01-01
	+ 2024-01-02
	+ 2024-01-03
* **race_number** (`7`, `number`, required): This field requires you to enter your participant number.
* **participant_name** (`8`, `text`, optional): This field is for your name.
* **participant_dob** (`9`, `date`, optional): This field is for your date of birth.
* **participant_email** (`10`, `email`, optional): This field is for your email address.
* **participant_phone** (`11`, `text`, optional): This field is for your phone number.
* **participant_address** (`12`, `text`, optional): This field is for your address.
* **participant_zip** (`13`, `number`, required): This field requires you to enter your zip code.
* **participant_city** (`14`, `text`, optional): This field is for your city.
* **participant_state** (`15`, `text`, required): This field requires you to enter your state.
* **participant_country** (`16`, `text`, optional): This field is for your country.
* **participant_notes** (`17`, `note`, optional): This field is for any additional comments.
* **participant_race_number** (`18`, `number`, optional): This field is for your participant number.
* **participant_status** (`19`, `select_one`, optional): This field allows you to select your status as active or inactive.
	+ Active
	+ Inactive
* **participant_status_notes** (`20`, `text`, optional): This field is for any additional comments about your status.
* **participant_signature_date** (`21`, `date`, optional): This field is for the date of your signature.
* **participant_signature_note** (`22`, `note`, optional): This field is for any additional comments about your signature.
* **participant_signature_signature** (`23`, `text`, optional): This field is for your signature.
* **participant_signature_signature_2** (`24`, `text`, optional): This field is for a second signature.
* **participant_signature_signature_3** (`25`, `text`, optional): This field is for a third signature.
