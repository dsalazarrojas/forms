# Dryer Queue Registration - Help Guide
## Purpose
This form is designed to register users to a dry cleaner's dryer queue, allowing them to reserve a time slot and select their preferred dryer type.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Enter your email address in the "Email" field.
2. Select your resident status and preferred dryer type from the respective dropdown menus.
3. Choose a time slot for dry cleaning between 8:00 AM and 9:00 PM.
4. Select a dryer queue from the dropdown menu.
5. Add any additional notes if needed.
6. Enter your phone number and resident ID, if applicable.
7. Click submit to complete the form.

## Field-by-Field Explanation
* **Email** (`user_email`, email, required): Enter your email address to be contacted for updates on your dry cleaning status.
* **Are you a Resident** (`resident_status`, select_one, false): Select 'Yes' if you are a resident of the building, 'No' otherwise.
* **What type of dryer** (`dryer_type`, select_one, false): Choose the type of dryer you prefer (Option 1, front loader, or other).
* **Select a time** (`start_time`, select_multiple, false): Choose a time slot for dry cleaning between 8:00 AM and 9:00 PM.
* **Select an end time** (`end_time`, select_multiple, false): Choose an end time for dry cleaning.
* **Select a dryer queue** (`dryer_queue`, select_one, false): Choose a dryer queue from the available options.
* **Additional notes** (`note`, note, false): Add any additional notes or comments about your dry cleaning requirements.
* **Phone Number** (`phone`, number, false): Enter your phone number, if you want to be contacted for updates.
* **Resident ID** (`resident_id`, number, false): Enter your resident ID, if you are a resident.
* **Form Submission ID** (`form_submission_id`, number, false): Enter your form submission ID, if applicable.

Note that some fields are optional and only required for specific situations.
