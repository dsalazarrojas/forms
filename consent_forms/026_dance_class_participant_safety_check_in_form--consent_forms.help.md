<figure>

Thinking block:
This form, "dance_class_participant_safety_check_in_form", is meant to be filled out by dance class participants who want to provide some basic information and consent for their safety checks during class. The form asks for participant and instructor information, including phone numbers, email addresses, and specific details such as medical conditions or pregnancy status. The participant and instructor name and instructor's license number are all required fields. The rest of the information is optional. 

</thinking>

# dance_class_participant_safety_check_in_form - Help Guide

## Purpose
This form is used to collect essential information about dance class participants and instructors to ensure their safety and well-being during class.

## How To Complete This Form

1. Enter your name into the field `participant_name`.
2. Enter your phone number into the field `participant_phone_number`.
3. (Optional) Enter your email address into the field `participant_email_address`.
4. Enter your instructor's name into the field `instructor_name`.
5. Enter your instructor's license number into the field `instructor_license_number`.
6. (Optional) Enter your instructor's phone number into the field `instructor_phone_number`.
7. Select one of the options in the field `participant_has_medical_condition`, indicating whether or not you have a medical condition.
8. Select one of the options in the field `participant_has_medical_device`, indicating whether or not you have a medical device.
9. Select one of the options in the field `participant_is_pregnant`, indicating whether or not you are pregnant.

## Field-by-Field Explanation

* **participant_name** (`participant_name`, `text`, required): Enter the name of the participant.
* **participant_phone_number** (`participant_phone_number`, `text`, required): Enter the phone number of the participant.
* **participant_email_address** (`participant_email_address`, `email`, optional): (Optional) Enter the email address of the participant.
* **instructor_name** (`instructor_name`, `text`, optional): Enter the name of the instructor.
* **instructor_license_number** (`instructor_license_number`, `number`, required): Enter the license number of the instructor.
* **instructor_phone_number** (`instructor_phone_number`, `text`, optional): (Optional) Enter the phone number of the instructor.
* **participant_has_medical_condition** (`participant_has_medical_condition`, `select_one`, required): Select whether you have a medical condition.
	+ Select 'True' if you have a medical condition.
	+ Select 'False' if you do not have a medical condition.
* **participant_has_medical_device** (`participant_has_medical_device`, `select_one`, required): Select whether you have a medical device.
	+ Select 'True' if you have a medical device.
	+ Select 'False' if you do not have a medical device.
* **participant_is_pregnant** (`participant_is_pregnant`, `select_one`, required): Select whether you are pregnant.
	+ Select 'True' if you are pregnant.
	+ Select 'False' if you are not pregnant.
