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
