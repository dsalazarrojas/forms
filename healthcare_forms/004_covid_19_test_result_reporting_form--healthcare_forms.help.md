<thinking>

This form is used for reporting COVID-19 test results and related information. It's essential to fill out this form accurately and completely to ensure proper reporting and handling of test results. 

The form is divided into several sections, each with specific fields that need to be filled out. This guide will walk you through each section and field, explaining what to expect and how to complete each one.

Before filling out the form, please note that some fields are optional, but all required fields must be filled out as they are marked with an asterisk (*) or indicated as "required" in the instructions.

To complete this form, please read each section carefully and follow the instructions for each field.

</thinking>

# COVID 19 Test Result Reporting Form - Help Guide
## Purpose
The purpose of this form is to report COVID-19 test results and related information. This includes reporting positive, negative, or inconclusive test results, and providing information about symptoms and exposure to COVID-19.

## How To Complete This Form
1. Please fill out the required fields accurately and completely.
2. Review each section carefully before submitting the form.
3. Make sure to check the correct options for each field, as indicated in the instructions.

## Field-by-Field Explanation

* **Full Name** (`person_name`, `text`, `required`): Please enter the full name of the person being tested.
* **Employee or Student ID** (`person_id`, `text`, `required`): Enter the employee or student ID number associated with the person being tested.
* **Date of Birth** (`date_of_birth`, `date`, `required`): Enter the date of birth of the person being tested.
* **Email Address** (`email_address`, `email`, `required`): Enter the email address of the person being tested or their contact person.
* **Phone Number** (`phone_number`, `text`, `required`): Enter the phone number of the person being tested or their contact person.
* **-- Test Information --** (`test_section`, `note`, `required`): This section is for additional information about the test, such as test type and location.
* **Test Date** (`test_date`, `date`, `required`): Enter the date the test was performed.
* **Type of Test** (`test_type`, `select_one`, `required`): Select the type of test performed from the options provided.
* **Testing Location or Facility** (`testing_location`, `text`, `optional`): Enter the location where the test was performed, if applicable.
* **-- Test Results --** (`result_section`, `note`, `required`): This section is for reporting the test results.
* **Test Result** (`test_result`, `select_one`, `required`): Select the test result from the options provided.
* **Has Result Been Confirmed by a Second Test** (`test_confirmation`, `select_one`, `optional`): Select "True" if the result has been confirmed by a second test, or select "False" otherwise.
* **-- Symptoms and Exposure --** (`symptoms_section`, `note`, `required`): This section is for reporting symptoms and exposure information.
* **Were You Experiencing Symptoms at Time of Test** (`symptoms_present`, `select_one`, `required`): Select "True" if the person was experiencing symptoms at the time of the test, or select "False" otherwise.
* **Symptoms Experienced** (`symptoms_list`, `select_multiple`, `optional`): Select all symptoms that were experienced by the person at the time of the test.
* **Known Exposure to COVID-19** (`exposure_known`, `select_one`, `required`): Select "True" if the person had known exposure to COVID-19, "False" otherwise, or "Unknown" if unsure.
* **Vaccination Status** (`vaccination_status`, `select_one`, `required`): Select the person's vaccination status from the options provided.
* **-- Actions and Reporting --** (`action_section`, `note`, `required`): This section is for reporting actions taken following the test.
* **Action Taken Following Test** (`action_taken`, `select_one`, `required`): Select the action taken following the test from the options provided.
* **Isolation or Quarantine Start Date** (`isolation_start_date`, `date`, `optional`): Enter the start date of isolation or quarantine, if applicable.
* **Isolation or Quarantine End Date** (`isolation_end_date`, `date`, `optional`): Enter the end date of isolation or quarantine, if applicable.
* **Workplace Has Been Notified** (`workplace_notification`, `select_one`, `required`): Select "True" if the workplace has been notified, or "False" otherwise.
* **Result Reported to Public Health** (`public_health_reported`, `select_one`, `optional`): Select "True" if the result has been reported to public health, "False" otherwise, or "Not required" if not applicable.
