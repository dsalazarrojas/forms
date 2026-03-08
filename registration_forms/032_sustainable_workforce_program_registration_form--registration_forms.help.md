# Sustainable Workforce Program Registration Form - Help Guide
## Purpose
The Sustainable Workforce Program Registration Form is designed to collect information from users who want to register for the program. The purpose of this form is to gather necessary contact and program information to facilitate effective communication and program management.

## How To Complete This Form
1. Fill out the User Information section with your basic contact details.
2. Enter your contact email in the Contact Email field.
3. If you have a contact phone number, enter it in the Contact Phone field.
4. Indicate if you have completed or will be completing a training program in the Training Program field.
5. Choose whether you work a shift in the Work Shift field.
6. Enter the number of hours you will spend on the training in the Training Hours field.
7. Enter the number of days you will be training in the Training Days field.
8. If applicable, enter the start and end dates of your training in the Training Start Date and Training End Date fields.
9. Choose whether your program will be located at a specific location in the Program Location field.
10. If you have an emergency contact, enter their name, relationship, phone number, and email in the Emergency Contact Info, Emergency Name, Relationship, Emergency Phone, and Emergency Email fields, respectively.
11. If you have additional emergency contact notes, enter them in the Emergency Notes field.
12. Sign and date your registration in the Signature and Date fields.
13. If a program manager is assigned to your program, have them sign and provide their comments in the Program Manager Signature and Program Manager Comments fields.
14. Enter the program manager's contact information in the Program Manager Email and Program Manager Phone fields.
14. Enter any additional comments from the program manager in the Program Manager Comments field.
</thinking>

## Field-by-Field Explanation

* **User Information** (`user_info`, text, required): Enter your name and any other identifying information that will be used to contact you about your registration.
* **Contact Email** (`contact_email`, email, required): Enter your email address that we can use to contact you about your program.
* **Contact Phone** (`contact_phone`, text, required): Enter your phone number that we can use to contact you about your program.
* **Training Program** (`training_program`, select_one, required): Indicate if you have completed or will be completing a training program.
* **Work Shift** (`work_shift`, select_one, required): Indicate whether you work a shift.
* **Training Hours** (`training_hours`, number, required): Enter the number of hours you will spend on your training.
* **Training Days** (`training_days`, number, required): Enter the number of days you will be training.
* **Training Start Date** (`training_start`, date, required): Enter the start date of your training, if applicable.
* **Training End Date** (`training_end`, date, required): Enter the end date of your training, if applicable.
* **Program Location** (`program_location`, select_one, required): Indicate if your program will be located at a specific location.
* **Emergency Contact Info** (`emergency_contact_info`, text, required): If you have an emergency contact, enter their name.
* **Emergency Name** (`emergency_name`, text, required): Enter the name of your emergency contact.
* **Relationship** (`emergency_relationship`, select_one, required): Indicate your relationship with the emergency contact.
* **Phone** (`emergency_phone`, text, required): Enter the phone number of your emergency contact.
* **Email** (`emergency_email`, email, required): Enter the email of your emergency contact.
* **Notes** (`emergency_notes`, text, required): Enter any additional notes about your emergency contact.
* **Signature** (`user_signature`, text, required): Sign your registration to confirm that you have filled out the form accurately.
* **Program Manager Signature** (`program_manager_signature`, text, required): Sign to confirm that you have filled out the form accurately.
* **Date** (`date`, date, required): Enter the date you are submitting your form.
* **Notes** (`user_notes`, text, required): Enter any additional notes about your registration.
* **Program Manager** (`program_manager`, select_one, required): Indicate if a program manager is assigned to your program.
* **Program Manager Email** (`program_manager_email`, email, required): Enter the email of the program manager.
* **Program Manager Phone** (`program_manager_phone`, text, required): Enter the phone number of the program manager.
* **Program Manager Comments** (`program_manager_comments`, text, required): Enter any additional comments from the program manager.
