# Counseling Registration Form - Help Guide

## Purpose
This form is designed to collect client information for counseling sessions. It is likely used for registration purposes.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in your **Client Name**, **Phone Number**, **Email Address**, and **Date of Birth** fields with the required information.
2. Select a **Session Date** and **Session Time** for your appointment.
3. Choose a **Counselor Name** if you wish to specify a particular counselor.
4. Add any additional **Notes** about your session.
5. Select the **Category** for your session (yes/no).
6. Choose any additional **Category Values** that apply to your session (yes/no).

## Field-by-Field Explanation
* **Client Name** (`client_name`, text, required): Enter your name as it appears on your ID or government records.
* **Phone Number** (`phone_number`, number, required): Enter your phone number in international format (e.g., +1-123-456-7890).
* **Email Address** (`email_address`, email, required): Enter your email address.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in YYYY-MM-DD format.
* **Session Date** (`session_date`, date, optional): Select a date for your session.
* **Session Time** (`session_time`, time, optional): Select a time for your session.
* **Counselor Name** (`counselor_name`, text, optional): Choose a counselor if you prefer to see a specific one.
* **Notes** (`notes`, note, optional): Add any additional comments or notes about your session.
* **Category** (`category`, select_one, optional): Choose 'Yes' or 'No' for the category.
* **Category Value** (`category_value`, select_multiple, optional): Choose any additional 'Yes' or 'No' values for the category.
* **Phone Extension** (`phone_extension`, text, optional): Enter any phone extension (if applicable).
