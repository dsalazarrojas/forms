<thinking>
This form is for testing purposes, ensuring that users can provide accurate and consistent data for internal evaluation and analysis. The form should only be filled out if the user is participating in a testing session, as indicated by the testing_date and testing_time fields. If a user is not participating in a testing session, they should not fill out this form.

Each field in this form is designed to capture specific information necessary for testing, and users are required to fill out fields 1-6 and 8-9. Fields 7 and 10 are optional and only required if the user is participating in a testing session or if the category field is populated, respectively.

The form's purpose is to collect accurate and complete data for internal evaluation and analysis.
</thinking>

# dss_testing_form - Help Guide
## Purpose
This form is designed for testing purposes, ensuring that users can provide accurate and consistent data for internal evaluation and analysis.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out fields 1-6 with your personal information.
2. If you are participating in a testing session, fill out fields 7 and 8 with the relevant dates and times.
3. Select the assigned tool and category (if applicable) in fields 9 and 10.
4. Leave fields 11 and 12 blank unless required.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter your first name as it is known to you.
* **Last Name** (`last_name`, text, required): Enter your last name as it is known to you.
* **Date** (`date`, date, required): If you are participating in a testing session, enter the date of the session.
* **Time** (`time`, time, required): If you are participating in a testing session, enter the time of the session.
* **Email** (`email`, email, required): Enter your email address for contact purposes.
* **Phone** (`phone`, text, required): Enter your phone number for contact purposes.
* **Testing Date** (`testing_date`, date, optional): If you are participating in a testing session, enter the date of the session.
* **Testing Time** (`testing_time`, time, optional): If you are participating in a testing session, enter the time of the session.
* **Assigned Tool** (`assigned_tool`, select_one, required): Select the tool that has been assigned to you for testing purposes.
* **Category** (`category`, select_one, optional): Select the category that best describes the testing session (e.g., "Education Forms").
* **Description** (`description`, text, optional): Provide any additional information about the testing session.
* **Form ID** (`form_id`, text, optional): Enter a unique identifier for the form, if required.
