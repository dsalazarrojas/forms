<thinking>
This form is designed to collect information about musicians who wish to access the music studio. The purpose of this form is to gather relevant details about the musician, such as their name, instrument, student status, contact information, and scheduling preferences. This information will be used to coordinate studio access and ensure that the musician has a smooth and efficient experience.

To avoid duplication, please note that this form should only be filled out once per musician. If you need to make changes or updates, please contact the studio administrator.
</thinking>

# music_studio_access_form - Help Guide
## Purpose
The music_studio_access_form is a user-facing form designed to collect information about musicians who wish to access the music studio.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your name as requested.
2. Select your instrument from the provided options.
3. Indicate your student status.
4. Enter your contact email address.
5. Enter your contact phone number.
6. Select the date you wish to access the studio.
7. Select the time you wish to access the studio.
8. Enter any additional notes about this booking.
9. Indicate if you have access to the studio.
10. Enter any notes about this musician.
11. Enter any additional notes about the studio.

## Field-by-Field Explanation

* **Musicians Name** (`musicians_name`, text, required: false): Enter your name as requested. This field is not required.
* **Instrument** (`instrument`, select_one, required: false): Select your instrument from the options provided. Options include: Piano, Violin, Cello.
* **Student Status** (`student_status`, select_one, required: false): Indicate your student status. Options include: Student, Non-Student.
* **Contact E-mail** (`contact_email`, email, required: false): Enter your contact email address.
* **Contact Phone** (`contact_phone`, text, required: false): Enter your contact phone number. This field is not required.
* **Date** (`date`, date, required: false): Select the date you wish to access the studio in the format YYYY-MM-DD.
* **Time** (`time`, time, required: false): Select the time you wish to access the studio in the format HH:MM AM/PM.
* **Note** (`note`, text, required: false): Enter any additional notes about this booking.
* **Studio Access** (`studio_access`, select_one, required: false): Indicate if you have access to the studio. Options include: Yes, No.
* **Musicians Notes** (`musician_notes`, text, required: false): Enter any notes about this musician.
* **Studio Notes** (`studio_notes`, text, required: false): Enter any additional notes about the studio.
