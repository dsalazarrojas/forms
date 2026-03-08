# sport_class_registration_form_template - Help Guide
## Purpose
The purpose of this form is to register for a sport class. Fill out the form with your information to create a new class instance in the system.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name and email.
2. Select your preferred class type (e.g., A, B, or C).
3. Choose a class date and time.
4. Enter the class duration and maximum capacity.
5. Add a class description and organizer.
6. Select the number of participants allowed in the class.
7. Add any additional notes about the class.
8. Choose the class status (Pending, Active, or Inactive).
9. Select the submit option (Submit or Cancel).

## Field-by-Field Explanation

* **sport_class** (`sport_class`, text, optional): Enter a name for your sport class.
* **student_name** (`student_name`, text, optional): Enter your name as a student.
* **student_email** (`student_email`, email, optional): Enter your email address as a student.
* **class_name** (`class_name`, text, optional): Enter a name for your class.
* **class_type** (`class_type`, select_one, optional): Select your preferred class type (A, B, or C).
* **class_date** (`class_date`, date, optional): Choose a date for your class.
* **class_time** (`class_time`, time, optional): Choose a time for your class.
* **class_duration** (`class_duration`, number, optional): Enter the duration of your class.
* **student_age** (`student_age`, number, optional): Enter your age.
* **guardian_name** (`guardian_name`, text, optional): Enter the name of your guardian.
* **guardian_email** (`guardian_email`, email, optional): Enter the email address of your guardian.
* **guardian_phone** (`guardian_phone`, text, optional): Enter the phone number of your guardian.
* **student_address** (`student_address`, text, optional): Enter your address.
* **guardian_address** (`guardian_address`, text, optional): Enter your guardian's address.
* **student_note** (`student_note`, note, optional): Add any additional notes about your class.
* **guardian_note** (`guardian_note`, note, optional): Add any additional notes about your class.
* **class_status** (`class_status`, select_multiple, optional): Choose the class status (Pending, Active, or Inactive).
* **submit** (`submit`, select_one, optional): Select the submit option (Submit or Cancel).
* **class_type_other** (`class_type_other`, text, optional): Enter an alternative class type.
* **class_type_other_option** (`class_type_other_option`, text, optional): Enter an option for your alternative class type.
* **class_description** (`class_description`, text, optional): Enter a description for your class.
* **class_organizer** (`class_organizer`, text, optional): Enter the name of the class organizer.
* **class_capacity** (`class_capacity`, number, optional): Enter the maximum capacity of your class.
* **class_max_capacity** (`class_max_capacity`, number, optional): Enter the maximum capacity of your class.
* **class_max_participants** (`class_max_participants`, number, optional): Enter the maximum number of participants allowed in your class.

Note: Required fields are marked as `required: false` in the YAML, meaning they are not required to be filled out. If you're unsure about any field, please ask a system administrator for clarification.
