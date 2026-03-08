# Data Export Request Form - Help Guide
## Purpose
The Data Export Request Form is designed to collect information from users to facilitate data export for them. It is essential to fill out the form accurately and completely to ensure that the data export request is processed correctly and efficiently.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Fill out your first name and last name in the corresponding fields.
2. Enter a valid email address in the "Email address" field.
3. Enter your date of birth in the "Date of birth" field.
4. Select how you would like to receive your data by choosing from the options provided in the "How do you want to receive your data?" field.
5. Select the data sources you would like to export by choosing from the available options in the "What data do you want to export?" field.
6. If you have any additional information to provide, fill out the "Additional information" field (optional).

## Field-by-Field Explanation

* **First name** (`first_name`, text, **required**): Enter your first name, as you would like to be known.
* **Last name** (`last_name`, text, optional): Enter your last name, as you would like to be known.
* **Email address** (`email`, email, **required**): Enter your email address in a format that is valid for contact (e.g., `name@domain.com`).
* **Phone number** (`phone`, text, **required**): Enter your phone number in the format (123) 456-7890.
* **Date of birth** (`date_of_birth`, date, **required**): Enter your date of birth in the format `MM/DD/YYYY` (e.g., 01/01/1990).
* **How do you want to receive your data?** (`select_one`, select_one, **required**): Choose one of the provided export methods:
	+ Export via CSV
	+ Export via Excel
	+ Export via Google Sheets
* **What data do you want to export?** (`select_multiple`, select_multiple, **required**): Choose one or more data sources:
	+ Data from database
	+ Data from API
	+ Data from another source
* **Additional information** (`note`, note, optional): Provide any additional context or information to help us process your data export request.
