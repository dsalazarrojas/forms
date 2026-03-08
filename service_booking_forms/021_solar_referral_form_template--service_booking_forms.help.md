# solar_referral_form_template - Help Guide
## Purpose
This form is used to gather information from users for referrals, allowing service teams to efficiently manage referrals and provide the best possible support.

## How To Complete This Form
To fill out this form, follow these steps:

1. Fill in the required information, marked with an asterisk (\*).
2. Enter your referral form in the "Referral Form" field.
3. Provide your name in the "Name" field.
4. Enter your phone number in the "Phone Number" field.
5. Enter your email address in the "Email" field.
6. Enter the date you would like to schedule the service in the "Date" field.
7. Enter the time you would like to schedule the service in the "Time" field.
8. Add any relevant note in the "Note" field.
9. If the service is requested, select "Yes" from the "Service Requested" dropdown menu.
10. Choose the assigned tool for the service from the "Assigned Tool" dropdown menu.
10. If the service has been booked, select "True" from the "Service Booked" dropdown menu.

## Field-by-Field Explanation
* **Referral Form (Referral Form)** (`referral_form`, `text`, required/optional: false): This is the title of the referral form, enter the name of the form to provide context.
* **Name (Name)** (`name`, `text`, required/optional: false): This is your name, enter it to associate yourself with the referral.
* **Phone Number (Phone Number)** (`phone_number`, `text`, required/optional: false): This is your phone number, enter it so the service team can contact you.
* **Email (Email)** (`email`, `email`, required/optional: false): This is your email address, enter it so the service team can contact you.
* **Date (Date)** (`date`, `date`, required/optional: false): Enter the date you would like to schedule the service.
* **Time (Time)** (`time`, `time`, required/optional: false): Enter the time you would like to schedule the service.
* **Note (Note)** (`note`, `note`, required/optional: false): Add any relevant note about the referral.
* **Service Requested (Service Requested)** (`service_requested`, `select_one`, required/optional: false): Select "Yes" if the service is requested.
* **Assigned Tool (Assigned Tool)** (`assigned_tool`, `select_one`, required/optional: false): Choose the tool to assign to the service.
* **Service Booked (Service Booked)** (`service_booked`, `select_one`, required/optional: false): Select "True" if the service has been booked.

## Tips
* Make sure to enter accurate and up-to-date information to ensure timely service scheduling.
* If you have any issues while filling out this form, contact the service team for assistance.
