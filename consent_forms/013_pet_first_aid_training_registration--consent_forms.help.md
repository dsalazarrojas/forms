# Pet First Aid Training Registration - Help Guide
## Purpose
The Pet First Aid Training Registration form is designed to gather information for pet owners and animal care professionals to register for first aid training sessions. This form collects essential details to ensure a smooth registration process.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name as the contact person in the "contact_person" field.
2. Enter your email address in the "email" field, ensuring it's a valid email format.
3. If you have a phone number, enter it in the "phone_number" field. However, this is optional.
4. Select the preferred training session from the options provided in the "training_session" dropdown.
5. Choose a registration date and time that suits you in the "registration_date" and "registration_time" fields.
6. Provide any additional notes or information in the "additional_notes" field, if necessary.
7. Confirm your consent for the use of your data in the "privacy_consent" field. You can choose between 'True' and 'False'.
8. If you have a preferred tool assigned to you, select it from the options in the "assigned_tool" field.
9. The "output_file" field is for output file information. You can leave this blank if not applicable.
10. Ensure the "form_title" field is filled, and it should be unique.
11. The "form_description" field should provide a brief description of your form.
12. Select the category of your form from the options provided in the "form_category" field.
13. Fill in the form ID as per your requirement in the "form_form_ids" field.
14. Select your assigned tool from the options provided in the "form_assigned_tool" field.
15. Fill in the output file information as required in the "form_output_file", "form_output_file_name", and "form_output_file_id" fields.
16. Fill in the form output file 2 information as required in the "form_output_file_2" field.
17. Fill in the form output file 2 ID as required in the "form_output_file_2_id" field.
18. Fill in the form output file 3 information as required in the "form_output_file_3" field.
19. Fill in the form output file 3 ID as required in the "form_output_file_3_id" field.
20. Fill in the form output file 4 information as required in the "form_output_file_4" field.

## Field-by-Field Explanation

* **pet_name** (`name`, `text`, required: false): This is a field where you can provide the name of your pet.
* **contact_person** (`contact`, `text`, required: true): Enter your name as the contact person.
* **email** (`email`, `email`, required: true): Enter a valid email address for contact purposes.
* **phone_number** (`phone`, `text`, required: false): This is an optional field for your phone number.
* **training_session** (`training`, `select_one`, required: true): Choose the training session you wish to register for.
* **registration_date** (`date`, `date`, required: true): Select the date you wish to register for the training.
* **registration_time** (`time`, `time`, required: true): Choose the time slot for your training registration.
* **additional_notes** (`note`, `note`, required: false): Provide any additional notes or information about your registration.
* **privacy_consent** (`privacy_consent`, `select_one`, required: true): Confirm your consent for the use of your data.
* **assigned_tool** (`assigned_tool`, `select_one`, required: false): Select your assigned tool from the options provided.
* **output_file** (`output_file`, `text`, required: false): This is an output file information field. You can leave it blank if not applicable.
* **form_id** (`form_id`, `number`, required: false): This field is for form ID information.
* **form_title** (`form_title`, `text`, required: false): Fill in a unique form title.
* **form_description** (`form_description`, `text`, required: false): This is a field for form description.
* **form_category** (`form_category`, `select_one`, required: true): Select the category of your form from the options provided.
* **form_form_ids** (`form_form_ids`, `text`, required: false): Fill in the form IDs as required.
* **form_assigned_tool** (`form_assigned_tool`, `select_one`, required: false): Select your assigned tool from the options provided.
* **form_output_file** (`form_output_file`, `text`, required: false): Fill in the output file information as required.
* **form_output_file_name** (`form_output_file_name`, `text`, required: false): Fill in the output file name information.
* **form_output_file_id** (`form_output_file_id`, `text`, required: false): Fill in the output file ID information.
* **form_output_file_2** (`form_output_file_2`, `text`, required: false): Fill in the output file 2 information as required.
* **form_output_file_2_id** (`form_output_file_2_id`, `text`, required: false): Fill in the output file 2 ID information.
* **form_output_file_3** (`form_output_file_3`, `text`, required: false): Fill in the output file 3 information as required.
* **form_output_file_3_id** (`form_output_file_3_id`, `text`, required: false): Fill in the output file 3 ID information.
* **form_output_file_4** (`form_output_file_4`, `text`, required: false): Fill in the output file 4 information as required.
