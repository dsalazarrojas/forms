<thinking>

To create the user-facing help guide for the "production_script_reading_booking_form" form, I will follow the provided YAML structure and create a concise and practical guide to help end-users understand the form's purpose, how to complete it, and what each field means.

**production_script_reading_booking_form - Help Guide**
=====================================================

## Purpose
This form is designed to facilitate the booking of production scripts for reading sessions. It allows users to provide essential information about the project, including the project status, script status, contact details, and more. The form helps ensure that all necessary details are captured accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Project** name in the designated field.
2. Select the **Project Status** from the provided options (Active, In Progress, or Completed).
3. Enter the **Script** name or description in the designated field.
4. Select the **Script Status** from the provided options (Available, In Progress, or Completed).
5. Enter the **Contact Person** name in the designated field.
6. Enter the **Contact E-mail** and **Contact Phone** details in their respective fields.
7. Select the **Start Date** and **End Date** for the reading session, if applicable.
8. Enter the **Reading Time** for the session.
9. Select the **Booking Status** from the provided options (Pending, Confirmed, or Cancelled).
10. Add any additional **Notes** about the project or booking.
11. (Optional) Select the **Script Files** available for the script.
12. (Optional) Enter the **Booking Person** name and **Booking Email** and **Booking Phone** details, if applicable.
13. (Optional) Enter the **Project Notes** and **Project Category** details, if applicable.
14. (Optional) Enter the **Booking Notes** for the session.
15. (Optional) Enter the **Script Version** and **Production Company** details, if applicable.

## Field-by-Field Explanation
* **Project** (`project`, text, required): Enter the project name.
* **Project Status** (`project_status`, select_multiple, required): Select the project status (Active, In Progress, or Completed).
* **Script** (`script`, text, required): Enter the script name or description.
* **Script Status** (`script_status`, select_multiple, required): Select the script status (Available, In Progress, or Completed).
* **Contact Person** (`contact_person`, text, required): Enter the contact person's name.
* **Contact E-mail** (`contact_email`, email, required): Enter the contact person's email address.
* **Contact Phone** (`contact_phone`, text, required): Enter the contact person's phone number.
* **Start Date** (`start_date`, date, required): Select the start date of the reading session.
* **End Date** (`end_date`, date): Select the end date of the reading session, if applicable.
* **Reading Time** (`reading_time`, time, required): Enter the reading time for the session.
* **Booking Status** (`booking_status`, select_multiple, required): Select the booking status (Pending, Confirmed, or Cancelled).
* **Notes** (`notes`, note): Add any additional notes about the project or booking.
* **Script Files** (`script_files`, select_multiple): Select the script files available for the script.
* **Booking Person** (`booking_person`, text): Enter the booking person's name.
* **Booking E-mail** (`booking_email`, email): Enter the booking person's email address.
* **Booking Phone** (`booking_phone`, text): Enter the booking person's phone number.
* **Booking Time** (`booking_time`, time): Enter the booking time for the session.
* **Project Notes** (`project_notes`, note): Enter the project notes.
* **Project Category** (`project_category`, text): Enter the project category.
* **Booking Notes** (`booking_notes`, note): Enter the booking notes.
* **Script Version** (`script_version`, text): Enter the script version.
* **Production Company** (`production_company`, text): Enter the production company name.
* **Production Contact** (`production_contact`, text): Enter the production contact person's name.
* **Production Notes** (`production_notes`, note): Enter the production notes.

Note: All optional fields can be left blank unless specifically required for your production script reading booking process.
