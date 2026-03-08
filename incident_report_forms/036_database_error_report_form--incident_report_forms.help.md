<thinking>
This help guide will walk the user through the "Database Error Report Form" in order to ensure that they have a clear understanding of how to complete it correctly. The purpose of this form is to allow users to report errors that occur in the database. To prevent duplication, users should only submit one form per issue, and it's recommended that users check the system for existing reports before submitting their own.
</thinking>

# Database Error Report Form - Help Guide

## Purpose
The Database Error Report Form is designed to collect information about errors that occur in the database. This form helps us understand the error's impact, location, and description, which is essential for our team to resolve the issue promptly.

## How To Complete This Form
To complete this form, please follow these steps:

1. Ensure that you are reporting a new error and not duplicating an existing report.
2. Enter the date and time of the error occurrence.
3. Specify the location where the error occurred.
4. Provide a concise summary of the error.
5. Identify the affected database.
6. Choose whether the error occurred or was affected by a database issue (Yes or No).
7. Describe the error in detail.
8. Enter the URL of the affected database (if applicable).
9. Indicate the impact of the error (Yes or No).
10. Enter your unique user ID (if required).

## Field-by-Field Explanation

* **Error Date** (`error_date`, date, required/optional): Enter the date of the error occurrence.
* **Error Time** (`error_time`, time, required/optional): Enter the time of the error occurrence.
* **Error Location** (`error_location`, text, required/optional): Specify the location where the error occurred.
* **Error Summary** (`error_summary`, text, required/optional): Provide a brief, concise summary of the error.
* **Database Name** (`database_name`, text, required/optional): Enter the name of the affected database.
* **Error Type** (`error_type`, select one, required/optional): Choose whether the error was due to a database issue (Yes or No).
* **Error Description** (`error_description`, text, required/optional): Describe the error in detail.
* **Database URL** (`database_url`, text, required/optional): Enter the URL of the affected database (if applicable).
* **Error Impact** (`error_impact`, select multiple, required/optional): Indicate the impact of the error (Yes or No).
* **User ID** (`user_id`, number, required/optional): Enter your unique user ID (if required).

Note: This form is for reporting database errors. Please be as detailed and concise as possible when filling out the form.
