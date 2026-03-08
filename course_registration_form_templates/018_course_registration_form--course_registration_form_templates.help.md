<thinking>
To confirm that the form purpose and fields are correctly understood and to ensure that this help guide will meet the user's needs, let's break down the provided YAML into its core elements:

- The form is designed to collect user information for course registration.
- The form has multiple pages with the following fields:
  - Page 1: name (text), email (email), phone (text), program (select_multiple), date (date), time (time), note (note)
  - Page 2: course (select_one), semester (select_one)
  - Page 3: additional note (note)
- The form requires the following information:
  - Name
  - Email
  - Phone
  - Program (select at least one option)
  - Course (select one option)
  - Semester (select one option)
  - Confirm Email
  - Confirm Phone
  - Program Note
- The form does not require the following information: date, time, and cancel

This information should be reflected in the help guide to ensure users understand the form's purpose and what information is required or optional.
</thinking>

# Course Registration Form - Help Guide
## Purpose
This form is used to collect user information for course registration. Please ensure that all required fields are filled out accurately to complete the registration process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields on each page:
   - Page 1: Enter your name, email, phone number, select at least one program option, and provide any additional notes if needed.
   - Page 2: Select the course and semester you are registering for.
   - Page 3: Provide any additional notes for the program.

2. Double-check your information on each page and submit the form when complete.

## Field-by-Field Explanation
- **Name** (`name`, `text`, required): Enter your name.
- **Email** (`email`, `text`, required): Enter your email address.
- **Phone** (`phone`, `text`, required): Enter your phone number.
- **Program** (`program`, `select_multiple`, required): Select one or more programs you are registering for.
- **Date** (`date`, `date`, not required): Enter a date (optional).
- **Time** (`time`, `time`, not required): Enter a time (optional).
- **Note** (`note`, `note`, not required): Add any additional notes (optional).
- **Course** (`course`, `select_one`, required): Select the course you are registering for.
- **Semester** (`semester`, `select_one`, required): Select the semester you are registering for.
- **Submit** (`submit`, `text`, required): Submit the form to complete the registration.
- **Confirm** (`confirm`, `select_one`, required): Confirm your registration (select one option).
- **Confirm Email** (`confirm_email`, `email`, required): Confirm your email address.
- **Confirm Phone** (`confirm_phone`, `text`, required): Confirm your phone number.
- **Program Note** (`program_note`, `note`, not required): Add any additional program note (optional).

## Tips
- Make sure to double-check all required fields before submitting the form.
- Ensure that you select only valid program and course options.
- If you have any questions or need help, contact the course administration for assistance.
