<thinking>

The purpose of this form is to collect information for an email migration request. This form is designed to help individuals submit their email migration requirements, preferences, and confirmations. The information collected will be used by the IT team to assess and process the email migration request.

</thinking>

# email_migration_request_form - Help Guide
## Purpose
This form is used to submit an email migration request. It captures essential details such as date, time, migration window, service provider, IT team information, notes, email migration, and confirmations.
## How To Complete This Form
To complete this form, follow these steps:
1. Enter the title of the email migration request.
2. Select the date of the migration (if applicable).
3. Enter the start and end times for the migration.
4. Choose the preferred migration window duration (e.g., 1, 2, 3, 4, or 5 hours).
5. Select the service provider for the migration.
6. Enter the name of the IT team involved (if applicable).
7. Provide any additional notes regarding the migration.
8. Enter the email address to migrate.
9. Confirm that the migration will be done (Yes/No) and that you have confirmed your email address (Yes/No) and phone number (Yes/No).

## Field-by-Field Explanation
* **Migration Request** (`migration_request`, text, optional): Enter a brief title for the email migration request.
* **Date Of Migration** (`date_of_migration`, date, optional): Select the date of the migration.
* **Start Time** (`start_time`, time, optional): Enter the start time for the migration.
* **End Time** (`end_time`, time, optional): Enter the end time for the migration.
* **Migration Window** (`migration_window`, select_multiple, optional): Choose the length of the migration window (1, 2, 3, 4, or 5 hours).
* **Service Provider** (`service_provider`, select_one, optional): Select the service provider (AT&T, Spectrum, Verizon, Century Link, T Mobile).
* **IT Team** (`it_team`, text, optional): Enter the name of the IT team involved.
* **Notes** (`notes`, note, optional): Provide any additional notes or comments regarding the migration.
* **Email Migration** (`email_migration`, email, optional): Enter the email address to be migrated.
* **Confirm Migration** (`confirm_migration`, select_one, optional): Confirm that the migration will be done (Yes/No).
* **Confirm Email** (`confirm_email`, select_one, optional): Confirm that you have access to the email address to be migrated (Yes/No).
* **Confirm Phone** (`confirm_phone`, select_one, optional): Confirm that you have access to the phone number to be migrated (Yes/No).
