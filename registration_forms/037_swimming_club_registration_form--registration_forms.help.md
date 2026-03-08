# Swimming Club Registration Form - Help Guide
## Purpose
The Swimming Club Registration Form is designed to collect information from swimmers to ensure a smooth and safe experience for all participants.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out your participant details, including your name and email address.
2. Provide your swimmer's name and contact number.
3. Enter the swimmer's date of birth (if applicable).
4. Choose the swimmer's level of experience (if applicable).
5. Select any relevant medical information (if applicable).
6. Provide the swimmer's emergency contact details.

## Field-by-Field Explanation
### Participant Details
* **Participant Name** (`participant_details`, text, required): This field is for you to enter your name.
* **Swimmer Name** (`swimmer_name`, text, required): This field is for you to enter your swimmer's name.
* **Participant Email** (`participant_email`, email, required): This field is for you to enter your email address.
* **Swimmer Phone** (`swimmer_phone`, text, optional): This field is for you to enter your swimmer's phone number.
* **Swimmer DOB** (`swimmer_dob`, date, optional): This field is for you to enter your swimmer's date of birth (if applicable).
* **Swimmer Level** (`swimmer_level`, select_one, optional): This field is for you to select your swimmer's level of experience (if applicable).
* **Swimmer Level Options** (`swimmer_level_options`, select_one, optional): This is a list of experience levels to choose from (if applicable).
* **Swimmer Gender** (`swimmer_gender`, select_multiple, optional): This field is for you to select your swimmer's gender (if applicable).
* **Swimmer Gender Options** (`swimmer_gender_options`, select_multiple, optional): This is a list of genders to choose from (if applicable).

### Registration Information
* **Registration Date** (`registration_date`, date, required): This field is for you to enter the registration date.
* **Registration Time** (`registration_time`, time, required): This field is for you to enter the registration time.
* **Swimmer Address** (`swimmer_address`, text, optional): This field is for you to enter your swimmer's address (if applicable).
* **Swimmer Notes** (`swimmer_notes`, note, optional): This field is for you to enter any additional information about your swimmer (if applicable).

### Emergency Contact
* **Swimmer Emergency Contact** (`swimmer_emergency_contact`, text, required): This field is for you to enter your swimmer's emergency contact name.
* **Swimmer Emergency Relationship** (`swimmer_emergency_relationship`, text, required): This field is for you to enter your swimmer's relationship to the emergency contact.
* **Swimmer Emergency Phone** (`swimmer_emergency_phone`, text, optional): This field is for you to enter your swimmer's emergency contact phone number (if applicable).
* **Swimmer Emergency Address** (`swimmer_emergency_address`, text, optional): This field is for you to enter your swimmer's emergency contact address (if applicable).

### Medical Information
* **Swimmer Allergies** (`swimmer_allergies`, text, optional): This field is for you to enter any allergies or medical conditions of your swimmer (if applicable).
* **Swimmer Medical** (`swimmer_medical`, text, optional): This field is for you to enter any medical information about your swimmer (if applicable).
* **Swimmer Medical Notes** (`swimmer_medical_notes`, note, optional): This field is for you to enter any additional medical information about your swimmer (if applicable).

### Employment Information
* **Swimmer Organisation** (`swimmer_organisation`, select_multiple, optional): This field is for you to select whether your swimmer is an employee of a particular organisation (if applicable).
* **Swimmer Organisation Options** (`swimmer_organisation_options`, select_multiple, optional): This is a list of organisations to choose from (if applicable).
* **Swimmer Employed** (`swimmer_employed`, select_multiple, optional): This field is for you to select whether your swimmer is employed (if applicable).
* **Swimmer Employed Options** (`swimmer_employed_options`, select_multiple, optional): This is a list of employment statuses to choose from (if applicable).
* **Swemermer Details** (`swimmer_employed_details`, text, optional): This field is for you to enter any additional employment details of your swimmer (if applicable).
