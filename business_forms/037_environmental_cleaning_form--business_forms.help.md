# environmental_cleaning_form - Help Guide
## Purpose
The Environmental Cleaning Form is used to record information about cleaning services provided to customers. This form is intended for employees to report their work details, including the date and time worked, the type of service performed, and other relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Cleaning Details** in the text field. This is where you should describe the cleaning services you provided, including any notable events or observations.
2. Select a **Work Date** from the calendar picker. This is the date on which you performed the cleaning services.
3. Enter the **Clean Time** in minutes. This is the total time you spent performing the cleaning services.
4. Choose the type of service you provided from the list of options: **Cleaning Crew**, **Janitorial Services**, or **Disposal Services**. This will help categorize the services you provided.
5. Enter the location where the cleaning services were performed in the text field.
6. Add any additional **Notes** about the services, if needed.
7. Enter your **Contact Number** in the text field, so we can reach you if we need more information.
8. Enter your **Contact Email** in the text field, so we can email you if we need more information.

## Field-by-Field Explanation
- **Cleaning Details** (`cleaning_details`, text, required: false): Enter a brief description of the cleaning services you provided.
- **Work Date** (`work_date`, date, required: false): Select the date on which you performed the cleaning services.
- **Clean Time** (`clean_time`, number, required: false): Enter the total time, in minutes, you spent performing the cleaning services.
- **Work Type** (`work_type`, select_one, required: false): Choose the type of service you provided: **Cleaning Crew**, **Janitorial Services**, or **Disposal Services**.
- **Clean Location** (`clean_location`, text, required: false): Enter the location where the cleaning services were performed.
- **Notes** (`notes`, note, required: false): Add any additional information or observations about the services.
- **Contact Number** (`contact_number`, text, required: false): Enter your contact number so we can reach you if needed.
- **Contact Email** (`contact_email`, email, required: false): Enter your email address so we can email you if needed.
