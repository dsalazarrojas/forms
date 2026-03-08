# visitor_declaration_form_covid_19 - Help Guide
## Purpose
This form is designed to collect information from visitors for contact tracing and potential contact management purposes during the COVID-19 pandemic.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name and last name as they appear on your official ID or documentation.
2. Provide your email address and phone number for contact purposes.
3. Enter the date and time you visited the location, as accurately as possible.
4. If applicable, select whether you have any COVID-19 related symptoms.
5. If you have had contact with an infected individual, select the relevant answer from the options provided.
6. If you are unsure about any of the questions, please ask for assistance from the staff member interacting with you.
7. Sign and date this form, indicating that you have read and understood its contents.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, Required): Enter your first name as it appears on your official ID or documentation.
* **Last Name** (`last_name`, `text`, Required): Enter your last name as it appears on your official ID or documentation.
* **Email Address** (`email`, `text`, Required): Enter your valid email address for contact purposes.
* **Phone Number** (`phone_number`, `text`, Required): Enter a working phone number where you can be reached.
* **Date Visited** (`date_visited`, `date`, Required): Enter the date you visited the location in the format mm/dd/yyyy.
* **Time Visited** (`time_visited`, `time`, Required): Enter the time you visited the location in the format 12:00 PM.
* **Purpose of Visit** (`reason_for_visit`, `text`, Required): Briefly describe the reason for your visit.
* **Have Symptoms** (`have_symptoms`, `select_one`, Optional): Select 'Yes' if you have experienced any COVID-19 symptoms since your visit.
* **Have Contacted** (`have_contacted`, `select_multiple`, Optional): Select 'Yes' if you have had contact with an infected individual since your visit.
* **Has Vaccine** (`has_vaccine`, `select_multiple`, Optional): Select 'Yes' if you have been vaccinated against COVID-19.
* **Signature** (`signature`, `note`, Required): Sign and date this form to confirm you have read and understood its contents.
* **Employee Signature** (`employee_signature`, `note`, Required): If you are an employee, sign and date this section to confirm you have read and understood its contents.
* **Employee Name** (`employee_name`, `text`, Optional): Enter your name for reference purposes.
* **Employee Title** (`employee_title`, `text`, Optional): Enter your title or position for reference purposes.
* **Employee Department** (`employee_department`, `text`, Optional): Enter your department or work area for reference purposes.
* **Employee Email** (`employee_email`, `text`, Optional): Enter your contact email for reference purposes.
* **Employee Phone** (`employee_phone`, `text`, Optional): Enter your contact phone number for reference purposes.
* **Employee Note** (`employee_note`, `text`, Optional): If applicable, provide any notes relevant to your interaction with the visitor.
* **Visitor Note** (`visitor_note`, `text`, Optional): If applicable, provide any notes relevant to your interaction with the visitor.

Note: The employee section of the form is intended for staff members who interact with visitors and is meant to record their information for contact purposes.
