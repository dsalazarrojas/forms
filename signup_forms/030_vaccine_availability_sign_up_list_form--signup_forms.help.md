# vaccine_availability_sign_up_list_form - Help Guide
## Purpose
This form is designed to help patients or their representatives sign up for a vaccine appointment, providing essential details for vaccine administration.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Select a day for your appointment from the schedule options.
2. Choose the type of vaccine you need.
3. Enter your patient name, phone number, and email address.
4. Enter your date of birth.
5. Choose your preferred time slot for the vaccine administration.

## Field-by-Field Explanation
* **Schedule A Vaccine Appointment** (`schedule_vaccine_appointment`, `select_one`, required/optional: false): Select the day you would like to schedule your vaccine appointment. Please choose a day from the available options: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.
* **Select A Vaccine Type** (`vaccine_type`, `select_one`, required: true): Choose the type of vaccine you need, such as Influenza, COVID-19, Meningococcal, Tdap, or Pertussis.
* **Patient Name** (`patient_name`, `text`, required: true): Enter the patient's name.
* **Patient Phone** (`patient_phone`, `text`, required: true): Enter the patient's phone number.
* **Patient Email** (`patient_email`, `email`, required: true): Enter the patient's email address.
* **Date Of Birth** (`date_of_birth`, `date`, required: true): Enter the patient's date of birth.
* **Vaccine Availability** (`vaccine_availability`, `select_one`, required: true): Choose your preferred time slot for the vaccine administration: Morning, Afternoon, or Evening.
* **Vaccine Availability Comment** (`vaccine_availability_comment`, `text`, required: false): If you have any special requests or requirements for your appointment, please provide them in this field.
* **Note** (`note`, `note`, required: false): If you have any additional comments or questions, please enter them in this field.
