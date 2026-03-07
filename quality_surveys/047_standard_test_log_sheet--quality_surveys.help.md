<thinking>What is the purpose of the "Standard Test Log Sheet" form? It appears to be a form used for recording the results of a test, gathering information about the test process, and possibly tracking test-related metrics. This form seems to be part of a larger process, possibly in a scientific or educational context, and is likely used to collect data from users about the outcome of a test. To validate this, let's review the form's fields:

* A select multiple field with options "Yes" and "No" suggests that the test results could be a binary outcome.
* A date field is often used to track when a test took place or was completed.
* A time field implies that the test had a duration or was timed.
* A description field allows for a brief summary or explanation of the test.
* A select one field with options "Yes" and "No" could be used to categorize the test as either successful or unsuccessful.
* A text field for "notes" suggests that additional comments or observations about the test could be recorded.
* An email field could be used to contact the test administrators or for further communication.
* A text field for "phone_number" could be used to record a phone number for follow-up or additional information.
* A select one field with options "Yes" and "No" for "category" suggests that the test could be categorized in some way.

This form seems to be used for recording test results, collecting additional information, and possibly tracking test metrics. To ensure that users understand the form's purpose and complete it correctly, let's create a help guide that explains each field clearly and concisely.</thinking>

# Standard Test Log Sheet - Help Guide
## Purpose
This form is used to record the results of a test, gather information about the test process, and track test-related metrics. It is likely used in a scientific or educational context.

## How To Complete This Form
1. Select all the relevant outcomes from the "test_log_sheet" field. This field is used to categorize the test as either successful or not completed.
2. Provide a brief description of the test, including any relevant details about the test process.
3. Enter the date when the test took place or was completed.
4. Record the time the test was completed or timed.
5. For each test, select "Yes" or "No" in the "test_result" field to indicate the outcome.
6. Add any additional comments or observations about the test in the "notes" field.
7. Enter a contact email address for further communication or follow-up.
8. If relevant, record the phone number for the test administrator or participant.
9. In the "category" field, select "Yes" or "No" to categorize the test further.

## Field-by-Field Explanation

* **test_log_sheet** (`test_log_sheet`, select_multiple, required: false): Select all the relevant outcomes from the test to categorize it as either successful or not completed.
* **description** (`description`, text, required: false): Provide a brief description of the test, including any relevant details about the test process.
* **date** (`date`, date, required: false): Enter the date when the test took place or was completed.
* **time** (`time`, time, required: false): Record the time the test was completed or timed.
* **test_result** (`test_result`, select_one, required: false): Select "Yes" or "No" to indicate the test outcome.
* **notes** (`notes`, note, required: false): Add any additional comments or observations about the test.
* **email** (`email`, email, required: false): Enter a contact email address for further communication or follow-up.
* **phone_number** (`phone_number`, text, required: false): Record the phone number for the test administrator or participant.
* **category** (`category`, select_one, required: false): Select "Yes" or "No" to categorize the test further.
