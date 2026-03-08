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
