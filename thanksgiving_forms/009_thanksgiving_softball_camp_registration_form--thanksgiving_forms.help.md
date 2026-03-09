# thanksgiving_softball_camp_registration_form - Help Guide
## Purpose
This form is used for registering to the Thanksgiving Softball Camp event. Please fill out the form accurately to ensure a successful registration process.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your First Name in the "First Name" field.
2. Enter your Last Name in the "Last Name" field.
3. Enter your Email in the "Email" field.
4. Enter your Phone Number in the "Phone Number" field.
5. Select a date for the event in the "Event Date" field.
6. Choose a time for the event in the "Time" field.
7. Enter the number of team members attending in the "Team Size" field.
8. Choose the type of registration you'd like to make in the "Registration Type" field (Adult or Youth).
9. Select the method of payment you'd like to use in the "Payment Method" field (Online Payment or Offline Payment).
10. Enter any additional notes about your registration in the "Notes" field.
11. Select the tool you'd like to be assigned in the "Assigned Tool" field (Chatjimmy or Other).
12. Choose the category for the event in the "Category" field (Thanksgiving or Holiday).

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required: false): Enter your first name in this field.
* **Last Name** (`last_name`, text, required: false): Enter your last name in this field.
* **Email** (`email`, email, required: false): Enter your email address.
* **Phone Number** (`phone_number`, text, required: false): Enter your phone number.
* **Event Date** (`event_date`, date, required: false): Select a date for the event.
* **Time** (`time`, time, required: false): Select a time for the event.
* **Team Size** (`team_size`, number, required: false): Enter the number of team members attending.
* **Registration Type** (`registration_type`, select_one, required: true): Choose whether you are an Adult or Youth registering.
* **Payment Method** (`payment_method`, select_multiple, required: true): Select Online Payment or Offline Payment for payment.
* **Notes** (`notes`, note, required: false): Enter any additional notes or comments regarding your registration.
* **Assigned Tool** (`assigned_tool`, select_one, required: true): Choose between Chatjimmy or Other as the tool to be assigned.
* **Category** (`category`, select_one, required: true): Select whether the event is for Thanksgiving or Holiday.
* **Output File** (`output_file`, text, required: false): This field is not currently in use.
