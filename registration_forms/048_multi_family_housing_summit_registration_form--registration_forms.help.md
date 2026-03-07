<thinking>
This form design involves creating a user-facing help guide for the "Multi Family Housing Summit Registration Form". 
This form will be used for registering attendees, speakers, and organizers for the summit. 
The form is composed of several fields that require different types of input from users. 
Each field is assigned a unique id and name, and some fields have labels, hints, and options. 
The fields are organized into several pages, but since this form is quite simple, we will treat it as a single page form. 
The form fields are: First Name, Last Name, Email, Phone, Company Name, Job Title, Job Description, Role, Attending with, Company Size, Registration Type, Comments, Registration Date, Registration Time, Submitted By, and Submitted By E-Mail. 
The form requires input for First Name, Last Name, Email, Role, Attending with, Company Size, and Registration Type. 
The form's fields are mostly text or select input types, with a few date and time fields. 
The form is intended for user registration, so the user needs to be informed about the purpose and how to fill the form correctly. 
</thinking>

# Multi Family Housing Summit Registration Form - Help Guide
## Purpose
The Multi Family Housing Summit Registration Form is a form designed for registering attendees, speakers, and organizers for the summit. It helps us collect necessary information from you to plan and organize the event.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your First Name in the First Name field.
2. Enter your Last Name in the Last Name field.
3. Provide your Email address in the Email field.
4. Enter your Phone number in the Phone field.
5. Enter your Company Name in the Company Name field.
6. Type your Job Title in the Job Title field.
7. Briefly describe your job in the Job Description field.
8. Choose your role in the event from the Role dropdown menu (Attendee, Speaker, or Organizer).
9. Select with whom you are attending in the Attending with field (Spouse, Team, or Client).
10. Choose your company size from the Company Size dropdown menu (Small, Medium, Large, or Unknown).
11. Select how you plan to attend the summit (Online, On-site, or Both).
12. Add any additional comments in the Comments field.
13. Choose the date you plan to register for the summit in the Registration Date field (in YYYY-MM-DD format).
14. If required, select the time you plan to attend the summit in the Registration Time field.
15. Provide your name in the Submitted By field.
16. Enter your email address in the Submitted By E-Mail field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, required): Provide your email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Company Name** (`company_name`, text, required): Enter your company name.
* **Job Title** (`job_title`, text, required): Type your job title.
* **Job Description** (`job_description`, text, required): Briefly describe your job.
* **Role** (`role`, select_one, required): Choose your role in the event (Attendee, Speaker, or Organizer).
* **Attending with** (`attending_with`, select_multiple, required): Select with whom you are attending (Spouse, Team, or Client).
* **Company Size** (`company_size`, select_one, required): Choose your company size (Small, Medium, Large, or Unknown).
* **Registration Type** (`registration_type`, select_one, required): Select how you plan to attend the summit (Online, On-site, or Both).
* **Comments** (`comments`, text, optional): Add any additional comments.
* **Registration Date** (`registration_date`, date, required): Choose the date you plan to register for the summit (in YYYY-MM-DD format).
* **Registration Time** (`registration_time`, time, required): Select the time you plan to attend the summit (if required).
* **Submitted By** (`submitter`, text, required): Provide your name.
* **Submitted By E-Mail** (`submitter_email`, email, required): Enter your email address.
